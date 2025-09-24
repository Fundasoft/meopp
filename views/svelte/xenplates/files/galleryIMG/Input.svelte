<script>
	export let accept = "image/*"; // valor por defecto: imágenes
	export let multiple = true;

	export function GET() {
		actualizarInputDesdeFiles();
		return [...fileInput.files];
	}

	let files = [], isDragOver = false, fileInput;

	function handleDragOver(event) {
		event.preventDefault();
		isDragOver = true;
	}

	function actualizarInputDesdeFiles() {
		const dt = new DataTransfer();
		for (const item of files) {
			dt.items.add(item.file);
		}
		fileInput.files = dt.files;
	}

	function handleDragLeave() {
		isDragOver = false;
	}

	function handleDrop(event) {
		event.preventDefault();
		isDragOver = false;
		const droppedFiles = Array.from(event.dataTransfer.files);
		addFiles(droppedFiles);
	}

	function handleFileSelect(event) {
		const selectedFiles = Array.from(event.target.files);
		addFiles(selectedFiles);
	}

	async function addFiles(newFiles) {
		const imageFiles = newFiles.filter(file => file.type.startsWith('image/'));

		const existingFileSignatures = new Set(files.map(f => `${f.name}-${f.size}`));

		for (const file of imageFiles) {
			const signature = `${file.name}-${file.size}`;
			if (!existingFileSignatures.has(signature)) {
				const preview = await getImageUrl(file);
				files = [...files, { file, preview }];
			}
		}
	}

	function removeFile(index) {
		log.files_before(files)
		files = files.filter((_, i) => i !== index);
		log.files_after(files)
		log.fileInput_files(fileInput.files)
	}

	function getImageUrl(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(file); // genera una URL tipo base64
		});
	}

</script>

<div>

	<!-- Zona de subida -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div 
		class="upload-zone {isDragOver ? 'drag-over' : ''}"
		on:dragover={handleDragOver}
		on:dragleave={handleDragLeave}
		on:drop={handleDrop}
		on:click={e=>fileInput.click()}
		role="button"
		aria-label="Upload zone"
		tabindex="0" 
	>
		<div class="upload-content">
			<div class="upload-icon{isDragOver?"-isDragOver":""}">
				<i class="bi bi-folder-plus"></i>
			</div>
			{#if isDragOver}
				<p class="isDragOver"><span>Suelta aquí</span></p>
			{:else}
				<p>
					<span>
						Haga click
					</span> 
					ó 
					<span>
						Arrastre archivos aquí
					</span>
				</p>
			{/if}
		</div>
	</div>

	<!-- Input oculto -->
	<input
		bind:this={fileInput}
		type="file"
		accept={accept}
		multiple={multiple}
		style="display: none"
		on:change={handleFileSelect}
	/>

	<!-- Thumbnails -->
	{#if files.length > 0}
		<div class="thumbnails">
			<p>Archivos cargados ({files.length})</p>
			<div class="grid">
				{#each files as file, index}
					<div class="thumbnail">
						
						{#if accept = "image/*"}
							<img src={file.preview} alt={file.file.name} />
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file" viewBox="0 0 16 16">
								<path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
							</svg>
						{/if}
						
						<button on:click={() => removeFile(index)} class="remove-btn">
							×
						</button>
						<p>{file.file.name}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}

</div>

<style>
	.upload-zone {
		border: 2px dashed #ccc;
		border-radius: 1rem;
		padding: 1.5rem;
		text-align: center;
		background: #fafafa;
		transition: all 0.3s ease;
		cursor: pointer;
	}

	.upload-zone:hover {
		border-color: #999;
		background: #f0f0f0;
	}

	.upload-zone.drag-over {
		border-color: #007bff;
		background: #e3f2fd;
	}

	.upload-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.upload-icon, .upload-icon-isDragOver{
		font-size: 2rem;
	}
	
	.upload-icon-isDragOver, .isDragOver{
		color: #072e57;
	}

	.isDragOver{
		font-weight: 600;
	}
	
	.thumbnails {
		margin-top: 2rem;
	}

	p{
		margin: 0;;
	}

	.thumbnails p {
		margin-bottom: 0.8rem;
		color: #333;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
		gap: 15px;
	}

	.thumbnail {
		position: relative;
		border: 1px solid #ddd;
		border-radius: 8px;
		overflow: hidden;
		background: white;
	}

	.thumbnail img {
		width: 100%;
		height: 120px;
		object-fit: cover;
	}

	.thumbnail p {
		padding: 8px;
		margin: 0;
		font-size: 12px;
		color: #666;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.remove-btn {
		position: absolute;
		top: 5px;
		right: 5px;
		background: rgba(255, 0, 0, 0.8);
		color: white;
		border: none;
		border-radius: 50%;
		width: 24px;
		height: 24px;
		cursor: pointer;
		font-size: 16px;
		line-height: 1;
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.thumbnail:hover .remove-btn {
		opacity: 1;
	}

	.remove-btn:hover {
		background: rgba(255, 0, 0, 1);
	}
</style>
