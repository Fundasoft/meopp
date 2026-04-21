<script>
    export let value, GRID;
    [GRID];

    log.VALUE(value);

    let ETIQUETAS_NAMES = NOVEDADES_ETIQUETAS.values.reduce((acc, { Y, nombre }) => {
        if (nombre.trim()) {
            acc[Y] = nombre;
        }
        return acc;
    }, {});

    const PATH_IMG_NOVEDADES = "img/novedades";

</script>

<div class="card-novedad">
    <a class="" href="novedades.html?render=novedad&y={value.Y}">
    <div class="card-img">
        {#if value.image}
            <img 
                src="{PATH_IMG_NOVEDADES}/{value.image}.webp"
                class="img-novedad" 
                alt="Img novedad {value.Y}" 
                loading="lazy"
            >
        {:else}
            <div class="img-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
                </svg>
            </div>
        {/if}
        
    </div>
    
    <div class="card-body">
        
        <!-- Etiquetas antes del título -->
        <!-- svelte-ignore missing-declaration -->
        {#if value.etiquetas && value.etiquetas.length > 0 && ETIQUETAS_NAMES}
            <div class="card-etiquetas">
                {#each value.etiquetas.slice(0, 3) as etiqueta}
                    {#if ETIQUETAS_NAMES[etiqueta]}
                        <a class="tag-button" href="novedades.html?tag={etiqueta}">
                            <span class="etiqueta etiqueta-{etiqueta}"><i class="bi bi-tag"></i> {ETIQUETAS_NAMES[etiqueta]}</span>
                        </a>
                    {/if}
                {/each}
                {#if value.etiquetas.length > 3}
                    <span class="etiqueta etiqueta-mas">+{value.etiquetas.length - 3}</span>
                {/if}
            </div>
        {/if}

        <div class="card-header-info">
            {#if value.titulo}
                <h3 class="card-novedad-titulo">{value.titulo}</h3>
            {/if}
                {#if value.fecha}
                    <time class="card-novedad-fecha" datetime="{new Date(value.fecha).toISOString()}">{new Date(value.fecha).toLocaleDateString('es-AR')}</time>
                    <!-- <time class="card-novedad-fecha">{new Date(value.fecha).toLocaleDateString('es-AR')}</time> -->
                {/if}
        </div>
        {#if value.subtitulo}
            <p class="card-novedad-subtitulo">{value.subtitulo}</p>
        {/if}
        
    </div>
</a>
</div>

<style>
    img {
        max-width: 100%;
        height: auto;
    }

    a{
        text-decoration: none !important;
    }

</style>


