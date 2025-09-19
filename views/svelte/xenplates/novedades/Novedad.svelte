<script>
	import Spinner from "../recursos/Spinner.svelte";
	import FileNotFoundSvg from "../recursos/FileNotFoundSvg.svelte";
	import GaleriaNews from './GaleriaNews.svelte';

    const PATH_IMG_NOVEDADES = "img/novedades";

    let novedad, contenido, recientes;

    let promesa = NOVEDADES.id(QUERY.y).then(v=> {
        novedad = v;
        NOVEDADES_CONTENIDOS.id(novedad.contenido).then(v=>{
            contenido = v;
        })
    });

    let promesaAside = NOVEDADES.read(20, [AND,[_Y,DISTINTO, QUERY.y],[_habilitada,IGUAL,1]]).then(v=> {
        recientes=v;
    })

    function copyToClipboard() {
        navigator.clipboard.writeText(`${window.location.host}/novedades.html?render=novedad&y=${QUERY.y}`)
            .then(() => success('Link copiado al portapapeles', 4))
            .catch(e=>error("Error al copiar al portapapeles " + e));
    }

    let ETIQUETAS_NAMES = NOVEDADES_ETIQUETAS.values.reduce((acc, { Y, nombre }) => {
        if (nombre.trim()) {
            acc[Y] = nombre;
        }
        return acc;
    }, {});
</script>

<!-- Content -->
<section>
    <div class="content content-noticia">
        {#await promesa} <Spinner/> {:then skip}
            {#if novedad}      
                <div class="div-content">
                    <article class="novedad-article-container">
                        <div class="article-header">
                            <time>{new Date(novedad.fecha).toLocaleDateString('es-AR')}</time>
                            <h1 class="novedad-title">{novedad.titulo}</h1>
                        </div>

                        <!-- {#if novedad.imagenes} -->
                        {#if novedad.imagenes && novedad.imagenes.length > 0}
                            <GaleriaNews novedad={novedad} path={PATH_IMG_NOVEDADES}/>
                        {/if}

                        {#if novedad.video}
                            <div class="video-container">
                                <iframe 
                                    src="https://www.youtube.com/embed/{novedad.video}" 
                                    frameborder="0" 
                                    allowfullscreen
                                    title="YouTube video player"
                                    class="video-iframe"
                                    >
                                </iframe>
                            </div>
                        {/if}

                        {#if novedad.etiquetas && novedad.etiquetas.length > 0 && ETIQUETAS_NAMES}
                            <div class="card-etiquetas">
                                {#each novedad.etiquetas as etiqueta}
                                    {#if ETIQUETAS_NAMES[etiqueta]}
                                        <a class="tag-button" href="novedades.html?tag={etiqueta}">
                                            <span class="etiqueta etiqueta-{etiqueta}"><i class="bi bi-tag"></i> {ETIQUETAS_NAMES[etiqueta]}</span>
                                        </a>
                                        <!-- <span class="etiqueta">{ETIQUETAS_NAMES[etiqueta]}</span> -->
                                    {/if}
                                {/each}
                            </div>
                        {/if}

                        <!-- Share Button - Improved Design -->
                        <div class="share-container">
                            <button 
                                on:click={copyToClipboard}
                                class="share-button"
                                title="Compartir enlace"
                                aria-label="Copiar enlace para compartir"
                            >
                                <i class="bi bi-share" aria-hidden="true"></i>
                            </button>
                        </div>

                        <p class="novedad-subtitle">{novedad.subtitulo}</p>
                        {#if contenido}
                            <div class="novedad-div-content">{contenido.contenido}</div>
                        {/if}
                    </article>
                </div>
            {:else}
                <div class="div-content no-novedades">
                    <FileNotFoundSvg />
                    <h2>No se encontraron resultados</h2>
                    <p>Tal vez no esté disponible en este momento.</p>
                    <a href="/novedades" class="btn-link">Ir a novedades</a>
                </div>
            {/if}
                <aside class="sidebar">
                    <div class="widget">
                        <h4>Posts similares</h4>
                        {#await promesaAside} 
                            <div class="loading-placeholder">
                                <Spinner/>
                            </div>
                        {:then skip}
                            <div class="recent-posts-list">
                                {#if recientes}
                                    {#each recientes as post}
                                    
                                        <a href="novedades.html?render=novedad&y={post.Y}" class="recent-post" aria-label="Leer {post.titulo}">
                                            <div class="thumb">
                                                {#if post.imagenes && post.imagenes.length > 0}
                                                    <img 
                                                        src="{PATH_IMG_NOVEDADES}/{post.Y}/{post.imagenes[0]}.webp" 
                                                        class="img-novedad" 
                                                        alt="Imagen de {post.titulo}" 
                                                        loading="lazy"
                                                    >
                                                {:else}
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-newspaper img-novedad" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
                                                        <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
                                                    </svg>
                                                {/if}
                                            </div>
                                            <div class="post-content">
                                                <h6>{post.titulo}</h6>
                                                <time datetime="{new Date(post.fecha).toISOString()}">{new Date(post.fecha).toLocaleDateString('es-AR')}</time>
                                            </div>
                                        </a>
                                    {/each}
                                {/if}

                            </div>
                        {/await}
                    </div>
                </aside>
        {/await}
    </div>
</section>

<style>
    /* =================================
        Etiquetas
    ================================= */
    .card-etiquetas {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin-bottom: 4px;
    }

    .etiqueta {
        background: #f1f5f9;
        color: #475569;
        font-size: 0.75rem;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid #e2e8f0;
        white-space: nowrap;
        transition: all 0.2s ease;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .etiqueta:hover {
        background: #e2e8f0;
        color: #334155;
    }

    /* =================================
        LAYOUT PRINCIPAL - FLEXBOX RESPONSIVO
    ================================= */
    .content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 1rem;
        min-height: 90vh;
        width: 100%;
        box-sizing: border-box;
    }

    @media (min-width: 992px) {
        .content {
            flex-direction: row;
            gap: 3rem;
            padding: 2rem;
        }
        
        .div-content {
            flex: 2;
        }
        
        .sidebar {
            flex: 1;
        }
    }

    /* =================================
        CONTENIDO PRINCIPAL
    ================================= */
    .div-content {
        width: 100%;
        max-width: 100%;
        overflow-wrap: break-word;
        box-sizing: border-box;
    }

    .novedad-article-container {
        max-width: 100%;
        margin: 0;
        font-family: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
        line-height: 1.8;
        box-sizing: border-box;
    }

    .article-header {
        text-align: center;
        margin-bottom: 2rem;
    }

    .novedad-title {
        color: #1d4ed8;
        font-size: clamp(1.2rem, 3vw, 2rem);
        font-weight: 700;
        margin: 1rem 0;
        word-wrap: break-word;
        hyphens: auto;
        line-height: 1.2;
    }

    .novedad-subtitle {
        background: #f3f4f6;
        font-size: clamp(0.9rem, 2.5vw, 0.95rem);
        color: #374151;
        padding: 1rem;
        margin-bottom: 1.5rem;
        border-radius: 8px;
        text-align: center;
        word-wrap: break-word;
    }

    .novedad-div-content {
        font-size: clamp(1rem, 2.5vw, 1.05rem);
        color: #111827;
        margin: 1rem 0;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
    }

    /* =================================
        MEDIA CONTAINERS
    ================================= */
    .video-container {
        width: 100%;
        margin: 1.5rem 0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        position: relative;
        padding-bottom: 56.25%; /* 16:9 aspect ratio */
        height: 0;
    }

    .video-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
    }

    .img-novedad {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        display: block;
    }

    /* =================================
        SHARE BUTTON
    ================================= */
    .share-container {
        display: flex;
        justify-content: center;
        margin: 1.5rem 0;
    }

    .share-button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);
    }

    .share-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(59, 130, 246, 0.4);
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    }

    .share-button:active {
        transform: translateY(0);
    }

    /* =================================
        NO RESULTS STATE
    ================================= */
    .no-novedades {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 3rem 1rem;
        color: #0F3A48;
        min-height: 50vh;
    }

    .no-novedades h2 {
        margin: 1rem 0 0.5rem 0;
        font-size: clamp(1.25rem, 4vw, 1.5rem);
    }

    .no-novedades p {
        margin-bottom: 1.5rem;
        font-size: 1rem;
        color: #555;
    }

    .btn-link {
        background-color: #FF6633;
        color: #fff;
        text-decoration: none;
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        font-weight: 500;
    }

    .btn-link:hover {
        background-color: #e95522;
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 102, 51, 0.3);
    }

    /* =================================
        SIDEBAR
    ================================= */
    .sidebar {
        background: white;
        border-radius: 12px;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
        height: fit-content;
        width: 100%;
    }

    @media (min-width: 992px) {
        .sidebar {
            position: sticky;
            top: 20px;
        }
    }

    .widget {
        padding: 1.5rem;
        border-bottom: 1px solid #f1f5f9;
        transition: all 0.3s ease;
    }

    .widget:last-child {
        border-bottom: none;
    }

    .widget:hover {
        background: #fafbfc;
    }

    .widget h4 {
        color: #1e293b;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 1rem 0;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #e2e8f0;
        position: relative;
    }

    .widget h4::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 30px;
        height: 2px;
        background: linear-gradient(90deg, #1d4ed8 0%, #3b82f6 100%);
        border-radius: 1px;
        transition: width 0.3s ease;
    }

    .widget:hover h4 {
        color: #1d4ed8;
    }

    .widget:hover h4::after {
        width: 50px;
    }

    .recent-posts-list {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .recent-post {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        text-decoration: none;
        color: inherit;
        border: 1px solid transparent;
    }

    .recent-post:hover {
        background: #f8fafc;
        transform: translateX(4px);
        border-color: #e2e8f0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .thumb {
        flex-shrink: 0;
        width: 60px;
        height: 60px;
        border-radius: 8px;
        overflow: hidden;
        background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .thumb .img-novedad {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .recent-post:hover .thumb .img-novedad {
        transform: scale(1.1);
    }

    .thumb svg.img-novedad {
        width: 24px;
        height: 24px;
        color: #64748b;
    }

    .post-content {
        flex: 1;
        min-width: 0;
    }

    .post-content h6 {
        font-size: 0.9rem;
        font-weight: 600;
        color: #1e293b;
        line-height: 1.3;
        margin: 0 0 0.25rem 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: color 0.3s ease;
    }

    .recent-post:hover .post-content h6 {
        color: #1d4ed8;
    }

    .post-content time {
        font-size: 0.75rem;
        color: #64748b;
        font-weight: 500;
    }

    .loading-placeholder {
        display: flex;
        justify-content: center;
        padding: 2rem;
    }

    /* =================================
        MOBILE SPECIFIC ADJUSTMENTS
    ================================= */
    @media (max-width: 991px) {
        .content {
            padding: 1rem;
        }
        
        .sidebar {
            margin-top: 0;
        }
        
        .widget {
            padding: 1.25rem;
        }
        
        .widget h4 {
            font-size: 1rem;
        }
        
        .recent-post {
            padding: 0.625rem;
        }
        
        .thumb {
            width: 50px;
            height: 50px;
        }
        
        .post-content h6 {
            font-size: 0.85rem;
        }
    }

    /* =================================
        UTILITIES
    ================================= */

    img {
        max-width: 100%;
        height: auto;
    }


    .tag-button{
        text-decoration: none;
    }


    
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