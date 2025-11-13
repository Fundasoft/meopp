<script>

	import Spinner from "../../recursos/Spinner.svelte";

	export let value, GRID;
	[];

	export function ondrop(valor) {
		console.log(valor,value);
	} 
	
	function showImageFunction(){
			modal(html(`<div class="w-100 text-center"><img src="${value.src}" style=" max-height: 70vh; height: auto; max-width: 100%; min-width:auto" class="img-show" alt="inmueble"></div>`), {
					// props:{img},
					size:"xl",
					center:true,
					accept:false,
					cancel:false
			});
	}

	function imgonerror(){
		GRID.loader = true, setTimeout(e=>GRID.loader = false, 3000);
	}

</script>


<div class="thumbnail">
    {#if Object.keys(value).length}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
				{#if GRID.loader}
					<Spinner/>
				{:else}
					<img src={value.src} alt={value.name} on:click={showImageFunction} on:error={imgonerror} loading="lazy"/>
				{/if}        
        <button on:click={GRID.trash} class="remove-btn">
            ×
        </button>
        <p>{value.name}</p>
    {/if}
</div>

<style>
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
		background: var(--color-primario);
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
		background: var(--color-primario);
	}
</style>