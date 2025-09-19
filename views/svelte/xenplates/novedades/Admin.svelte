<script>
	// Administra el componente mediante el panel
	// import para el menu; menu();

	import FileGallery from "../files/galleryIMG/GalleryIMG.svelte";

	const PATH_IMG_NOVEDADES = "img/novedades";
	const MAX_ETIQUETAS = 5;
	
	let contenedor, etiquetas_names = {}, etiquetas =[];

	function actualizarEtiquetas(){
		etiquetas_names = NOVEDADES_ETIQUETAS.values.reduce((acc, { Y, nombre }) => {
			if (nombre.trim()) {
				acc[Y] = nombre;
			}
			return acc;
		}, {});
	}

    function editar(tag) {
        input("Editar etiqueta",{...STRING, value:tag.nombre, length:25}, {required:false}).accept(value=>{
			NOVEDADES_ETIQUETAS.update(tag.Y,{nombre:value}).then(v=>{
				etiquetas = NOVEDADES_ETIQUETAS.values;
				actualizarEtiquetas();
				if(!value){
					let novedadesLimpias = eliminarEtiqueta(tag.Y)
					if(novedadesLimpias.length){
						NOVEDADES.custom(NOVEDADES_UPDATES,novedadesLimpias).then(v=>{
							NOVEDADES.read();
						})
					}
				}
			})
        })
    }

	function eliminarEtiqueta(numero){
		return NOVEDADES.values
			// Paso 1: quedarme solo con las que tienen la etiqueta a borrar
			.filter(n => n.etiquetas.includes(numero))
			// Paso 2: devolver cada una modificada
			.map(n => ({
				Y:n.Y,
				etiquetas: n.etiquetas.filter(e => e !== numero)
			}));
	};

	function addNovedad(){
		let novedad = {
			titulo:'',
			subtitulo:''
		};
		modal("Nueva novedad", form(novedad)).accept(novedad=>{
			novedad.habilitada = false;
			novedad.fecha = new Date()*1;
			NOVEDADES.create(novedad);
		})
	}

	NOVEDADES_ETIQUETAS.read().then(v=>{
		const nuevasEtiquetas = [];
		if(v.length<MAX_ETIQUETAS){
			for (let i = v.length; i < 5; i++) {
				nuevasEtiquetas.push({ nombre: "" });
			}
			NOVEDADES_ETIQUETAS.custom(NOVEDADES_ETIQUETAS_CREATES,nuevasEtiquetas).then(v=>{
				NOVEDADES_ETIQUETAS.read().then(v=>etiquetas=v);
			})
		}else{
			etiquetas = NOVEDADES_ETIQUETAS.values;
		}
		actualizarEtiquetas()
	});

	export function onmount() {
		contenedor.append(
			table(_NOVEDADES, {
				buttons: [
					{'-plus': addNovedad},
					// {'-tags': tags},
					"-" 
				],
				filter:true,
				columns: [
					{
						key:"titulo",
						value:"", 
					},
					{
						key:"subtitulo",
						value:"", 
					},
					{
						...BOOLEAN,
						key:"habilitada", 
						value:false
					},
					{
						...DATE,
						key:"fecha", 
						// value:v=>new Date*1,
						readOnly
					},
					{
						...BUTTONS,
						title:"Acciones", 
						value: [
							{
								'-images': novedad => {
									modal('Galeria de Imagenes', html(FileGallery,{
										path:PATH_IMG_NOVEDADES,
										sync:{
											model:NOVEDADES, 
											key:'imagenes', 
											Y:novedad.Y
										}
									}), {
										size:'xl',
										header:false
									});
								}
							},
							{
								'-youtube': novedad =>{
									input("Copiar link de video de Youtube",novedad.video, {required:false}).accept(value=>{
										value = value ? (/^\w+$/.test(value) ? value : (/=([^&]+)/.exec(value)?.[1]||'')) : '';
										NOVEDADES.update(novedad,{video:value});
									})
								}
							},
							{
								'-tags': novedad =>{
									select(etiquetas_names, novedad.etiquetas).accept(etiquetasSeleccionadas=>{
										if(etiquetasSeleccionadas){
											NOVEDADES.update(novedad.Y,{etiquetas: etiquetasSeleccionadas})
										}
									})
								}
							},
							{
								'-body-text': novedad =>{
									NOVEDADES_CONTENIDOS.id(novedad.contenido).then(v=>{
										if(v){
											let contenido = v.contenido; 
											log.v(v)
											input("Contenido",{...TEXTAREA, value:contenido, length:1024}, {required:false}).accept(value=>{
												NOVEDADES_CONTENIDOS.update(novedad.contenido,{contenido:value})
											})
										
										}else{
											input("Contenido",{...TEXTAREA, value:"", length:1024}, {required:false}).accept(value=>{
												NOVEDADES_CONTENIDOS.create({contenido:value}).then(v=>{
													log.contenido_nuevo(v);
													NOVEDADES.update(novedad.Y,{contenido:v});
												})
											})
										}
									})
								}
							}
						]
					},
				],
			})
		);
	}
</script>

<section class="xen-admin-novedades">
	<!-- svelte-ignore missing-declaration -->
	{#key etiquetas}
		<div class="container">
			<div class="header-section">
				<div class="title-row">
					<h3 class="section-title">🏷️ Gestión de Etiquetas</h3>
					<span class="counter">{etiquetas.filter(tag => tag.nombre).length}/{MAX_ETIQUETAS}</span>
				</div>
				<p class="description">
					Organiza tus novedades con etiquetas personalizadas. Haz clic en ➕ para crear nuevas etiquetas o ✏️ para editarlas.
				</p>
				<p class="description">
					Si quedan vacias simplemente no se mostraran en la novedad.
				</p>

				<!-- <p>Máximo {MAX_ETIQUETAS} etiquetas</p> -->
				<div class="grid">
					{#each etiquetas as tag}
						{#if tag.nombre}
							<div class="chip etiqueta-{tag.Y}">
								<span class="text"><i class="bi bi-tag"></i> {tag.nombre}</span>
								<button class="edit-btn" on:click={() => editar(tag)}>✏️</button>
							</div>
						{:else}
							<div class="chip etiqueta-0">
								<span class="text">🏷️ Vacío</span>
								<button class="edit-btn" on:click={() => editar(tag)}>➕</button>
							</div>
						{/if}
					{/each}
				</div>
			</div>

		</div>
	{/key}

	<h3 class="section-title"> Gestión de Novedades</h3>
	<div bind:this={contenedor}></div>
</section>


<style>


	/* Estilos para el header */
	.header-section {
		margin-bottom: 20px;
		padding: 16px;
		background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
		border: 1px solid #e2e8f0;
		border-radius: 12px;
	}

	.title-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 8px;
	}

	.section-title {
		margin: 0;
		font-size: 18px;
		font-weight: 600;
		color: #1e293b;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.counter {
		background: #3b82f6;
		color: white;
		padding: 4px 8px;
		border-radius: 12px;
		font-size: 12px;
		font-weight: 600;
		min-width: 35px;
		text-align: center;
	}

	.description {
		margin: 0;
		font-size: 14px;
		color: #64748b;
		line-height: 1.4;
	}

    .grid {
		margin-top: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

	.chip {
		display: inline-flex;
		align-items: center;
		padding: 6px 12px;
		border-radius: 16px;
		font-size: 13px;
		font-weight: 500;
		border: 1px solid;
		min-width: 100px;
	}
    /* .chip {
        display: inline-flex;
        align-items: center;
        background: #f1f5f9;
        border: 1px solid #e2e8f0;
        border-radius: 20px;
        padding: 6px 12px;
        font-size: 14px;
        min-width: 80px;
        max-width: 250px;
    } */

    /* .text {
        color: #1e293b;
        font-weight: 500;
        margin-right: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        flex: 1; 
    } */

    .edit-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        font-size: 14px;
        opacity: 0.7;
        flex-shrink: 0; 
    }

    .edit-btn:hover { opacity: 1; } 


/* Estilos base */
.etiqueta-gris, .etiqueta-0 { 
    background: #f8fafc; 
    border-color: #cbd5e1; 
    color: #475569; 
}

.etiqueta-azul, .etiqueta-1 { 
    background: #eff6ff; 
    border-color: #bfdbfe; 
    color: #1e40af; 
}

.etiqueta-verde, .etiqueta-2 { 
    background: #f0fdf4; 
    border-color: #bbf7d0; 
    color: #166534; 
}

.etiqueta-rosa, .etiqueta-3 { 
    background: #fdf2f8; 
    border-color: #fbcfe8; 
    color: #be185d; 
}

.etiqueta-naranja, .etiqueta-4 { 
    background: #fff7ed; 
    border-color: #fed7aa; 
    color: #c2410c; 
}

.etiqueta-indigo, .etiqueta-5 { 
    background: #eef2ff; 
    border-color: #c7d2fe; 
    color: #4338ca; 
}

/* Efectos hover */
.etiqueta-gris:hover, .etiqueta-0:hover {
    background: #e2e8f0;
    border-color: #94a3b8;
    color: #334155;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
}

.etiqueta-azul:hover, .etiqueta-1:hover {
    background: #dbeafe;
    border-color: #93c5fd;
    color: #1d4ed8;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
    transform: translateY(-1px);
}

.etiqueta-verde:hover, .etiqueta-2:hover {
    background: #dcfce7;
    border-color: #86efac;
    color: #15803d;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.15);
    transform: translateY(-1px);
}

.etiqueta-rosa:hover, .etiqueta-3:hover {
    background: #fce7f3;
    border-color: #f9a8d4;
    color: #a21caf;
    box-shadow: 0 2px 8px rgba(236, 72, 153, 0.15);
    transform: translateY(-1px);
}

.etiqueta-naranja:hover, .etiqueta-4:hover {
    background: #fed7aa;
    border-color: #fb923c;
    color: #9a3412;
    box-shadow: 0 2px 8px rgba(249, 115, 22, 0.15);
    transform: translateY(-1px);
}

.etiqueta-indigo:hover, .etiqueta-5:hover {
    background: #e0e7ff;
    border-color: #a5b4fc;
    color: #3730a3;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
    transform: translateY(-1px);
}

/* Transición suave para todos */
.etiqueta-gris, .etiqueta-0,
.etiqueta-azul, .etiqueta-1,
.etiqueta-verde, .etiqueta-2,
.etiqueta-rosa, .etiqueta-3,
.etiqueta-naranja, .etiqueta-4,
.etiqueta-indigo, .etiqueta-5 {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
    
</style>