<script>
	import Spinner from "../recursos/Spinner.svelte";
	import FileNotFoundSvg from "../recursos/FileNotFoundSvg.svelte";
	import GaleriaNews from './GaleriaNews.svelte';

    const PATH_IMG_NOVEDADES = "img/novedades";

    let novedad, recientes;

    let promesa = NOVEDADES.id(QUERY.y).then(v=> {
        novedad = v;
    });

    let promesaAside = NOVEDADES.read([AND,[_Y,DISTINTO, QUERY.y],[_habilitada,IGUAL,1]]).then(v=> {
        recientes=v;
    });

    async function copyToClipboard() {

        const shareData = {
            title: novedad.titulo,
            text: novedad.parrafo1?.slice(0, 120) || "Mirá esta novedad",
            url: `${window.location.origin}/novedades.html?render=novedad&y=${QUERY.y}`
        };

        try {

            if (navigator.share) {
                await navigator.share(shareData);
                success("Compartido correctamente", 3);
                return;
            }

            await navigator.clipboard.writeText(shareData.url);
            success("Link copiado al portapapeles", 4);

        } catch (err) {

            // usuario canceló → no mostrar error
            if (err.name !== "AbortError") {
                error("No se pudo compartir");
            }
        }
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

    {#await promesa}
        <Spinner/>
    {:then}

        {#if novedad}

            <!-- HERO FULLSCREEN -->
            <div class="hero-header { !novedad?.image ? 'hero-header--noimage' : '' }">
                {#if novedad?.image}
                    <img
                        class="hero-image"
                        src="{PATH_IMG_NOVEDADES}/{novedad.image}.webp"
                        alt={novedad.titulo}
                        loading="eager"
                    />
                {/if}
            
                <!-- overlay color marca -->
                {#if novedad?.image}
                    <div class="hero-overlay"></div>
                {/if}
            
                <button
                    class="hero-share"
                    on:click={copyToClipboard}
                    aria-label="Compartir noticia"
                >
                    <span class="share-icon">
                        <i class="bi bi-share"></i>
                    </span>
                
                    <span class="share-text">Compartir</span>
                </button>
            
                <div class="hero-content centered { !novedad?.image ? 'hero-content--noimage' : '' }">
                    <h1>{novedad.titulo}</h1>
            
                    {#if novedad.subtitulo}
                        <p class="hero-subtitle">{novedad.subtitulo}</p>
                    {/if}
                </div>
            
            </div>
            

            <!-- CONTENIDO CENTRADO -->
            <div class="article-container container">

                <!-- ETIQUETAS -->
                {#if novedad.etiquetas && novedad.etiquetas.length > 0 && ETIQUETAS_NAMES}
                    <div class="card-etiquetas">
                        {#each novedad.etiquetas as etiqueta}
                            {#if ETIQUETAS_NAMES[etiqueta]}
                                <a class="tag-button" href="novedades.html?tag={etiqueta}">
                                    <span class="etiqueta etiqueta-{etiqueta}">
                                        <i class="bi bi-tag"></i> {ETIQUETAS_NAMES[etiqueta]}
                                    </span>
                                </a>
                            {/if}
                        {/each}
                    </div>
                {/if}

                <!-- Parrafos -->
                {#if novedad.parrafo1}
                    <p class="novedad-div-content">
                        {novedad.parrafo1}
                    </p>
                {/if}

                {#if novedad.imagenes && novedad.imagenes.length > 1}
                    <section class="gallery-wrapper">
                        <GaleriaNews novedad={novedad} path={PATH_IMG_NOVEDADES}/>
                    </section>
                {/if}

                {#if novedad.parrafo2}
                    <p class="novedad-div-content">
                        {novedad.parrafo2}
                    </p>
                {/if}

                <!-- POSTS SIMILARES -->
                {#await promesaAside}
                    <Spinner/>
                {:then}
                    {#if recientes?.length}
                        <!-- <Similares {recientes} /> -->
                        <section class="related-posts">
                            <h4>Posts similares</h4>

                            <div class="related-grid">
                                {#each recientes as post}
                                <a
                                    href="novedades.html?render=novedad&y={post.Y}"
                                    class="related-card"
                                >
                                    <div class="card-image">
                                    {#if post.imagenes?.length}
                                        <img
                                            src="{PATH_IMG_NOVEDADES}/{post.Y}/{post.imagenes[0]}.webp"
                                            alt={post.titulo}
                                            loading="lazy"
                                            />
                                    {:else}
                                        <div class="card-placeholder">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                                <polyline points="21 15 16 10 5 21"/>
                                            </svg>
                                        </div>
                                    {/if}
                                    </div>
                                    <div class="card-content">
                                    <h5 class="card-title">{post.titulo}</h5>
                                    </div>
                                </a>
                                {/each}
                            </div>
                        </section>
                    {/if}
                {/await}

            </div>

        {:else}

            <div class="no-novedades">
                <FileNotFoundSvg />
                <h2>No se encontraron resultados</h2>
                <a href="/novedades" class="btn-link">Ir a novedades</a>
            </div>

        {/if}

    {/await}

</section>


