<script>
    export let novedad, path="";
    let ID = newID()
</script>

<div id="{ID}" class="carousel slide">

    <div class="carousel-inner">
        {#each novedad.imagenes as src,i}  
            <div class="carousel-item {i ? "" : "active"}">
                <div class="img-container">
                    <img src="{path}/{novedad.Y}/{src}.webp" class="img-carousel" alt="Imagen novedad {i}" loading="lazy">
                </div>
            </div>
        {/each}
    </div>

    {#if novedad.imagenes.length > 1}
        <button class="carousel-control-prev" type="button" data-bs-target="#{ID}" data-bs-slide="prev">
            <span class="carousel-control-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#{ID}" data-bs-slide="next">
            <span class="carousel-control-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </span>
            <span class="visually-hidden">Next</span>
        </button>        
    {/if}

    {#if novedad.imagenes.length > 1}
        <div class="thumbnail-slider-container">
            <div class="carousel-indicators carousel__indicators__container">
                <div class="thumbnail-slider">
                    <div class="thumbnails">
                        {#each novedad.imagenes as image,i}
                            <div class="thumbnail-wrapper">
                                <picture>
                                    <!-- Imagen para pantallas de hasta 768px (mobile) -->
                                    <source srcset="{path}/{novedad.Y}/{image}.mobile.webp" media="(max-width: 768px)">
                                    
                                    <!-- Imagen para pantallas más grandes (desktop) -->
                                    <source srcset="{path}/{novedad.Y}/{image}.mobile.webp" media="(min-width: 769px)">
                                    
                                    <!-- Imagen por defecto (fallback) -->
                                    <img  
                                        class="img-thumbnail {i === 0 ? "active" : ""}"  
                                        src="{path}/{novedad.Y}/{image}.thumbnail.webp" 
                                        alt="Thumbnail {i}"
                                        loading="lazy"
                                        data-bs-target="#{ID}" 
                                        data-bs-slide-to="{i}" 
                                        aria-current="true" 
                                        aria-label="Slide {i}"
                                        >
                                </picture>
                            </div>
                        {/each}
                    </div>
                </div>  
            </div>  
        </div> 
    {/if}

</div>


<style>
    /* ================================
        CAROUSEL
    ================================= */
    .carousel {
        width: 100%;
        margin: 1.5rem 0;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,.1);
        background: #f8f9fa;
    }

    /* Altura fija del visor (sin saltos) */
    .carousel-inner {
        position: relative;
        width: 100%;
        height: 400px;  
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
    }
    @media (max-width: 768px) {
        .carousel-inner { height: 250px; }
    }
    @media (min-width: 1200px) {
        .carousel-inner { height: 500px; }
    }

    /* MUY IMPORTANTE: que cada slide herede la altura del visor */
    .carousel-item {
        height: 100%;
    }

    /* Contenedor centrado, ocupando toda la altura del slide */
    .img-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
    }

    /* Imagen: SIEMPRE completa, sin recortes ni deformación */
    .img-carousel {
        display: block;
        max-width: 100%;
        max-height: 100%;
        width: auto !important;     /* pisa posibles width:100% */
        height: auto !important;    /* mantiene proporción */
        object-fit: contain;        /* nunca recorta */
        /* opcional:
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,.1);
        */
    }

    /* ================================
        CONTROLES
    ================================= */
    .carousel-control-prev,
    .carousel-control-next {
        position: absolute;
        top: 0; bottom: 0;
        width: 60px;
        background: none;
        border: none;
        color: #fff;
        opacity: 0;
        transition: all .3s ease;
        z-index: 5;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .carousel:hover .carousel-control-prev,
    .carousel:hover .carousel-control-next { opacity: 1; }
    .carousel-control-prev {
        left: 0;
        background: linear-gradient(to right, rgba(0,0,0,.1), rgba(0,0,0,0));
    }
    .carousel-control-next {
        right: 0;
        background: linear-gradient(to left, rgba(0,0,0,.1), rgba(0,0,0,0));
    }
    .carousel-control-prev:hover,
    .carousel-control-next:hover {
        background: rgba(0,0,0,.1);
        opacity: 1;
    }
    .carousel-control-icon {
        width: 24px; height: 24px;
        display: flex; align-items: center; justify-content: center;
        background: rgba(255,255,255,.2);
        border-radius: 50%;
        backdrop-filter: blur(4px);
        transition: all .3s ease;
    }
    .carousel-control-prev:hover .carousel-control-icon,
    .carousel-control-next:hover .carousel-control-icon {
        background: rgba(255,255,255,.2);
        transform: scale(1.1);
    }

    /* ================================
        THUMBNAILS
    ================================= */
    .thumbnail-slider-container {
        display: flex; align-items: center; justify-content: center;
        padding: 1rem 0;
        background: #f8f9fa;
        border-top: 1px solid #e9ecef;
    }
    .carousel__indicators__container {
        margin: 0; width: 100%;
        position: relative; z-index: 1;
    }
    .thumbnail-slider {
        overflow-x: auto; max-width: 100%;
        scrollbar-width: thin; scrollbar-color: #dee2e6 transparent;
    }
    .thumbnail-slider::-webkit-scrollbar { height: 6px; }
    .thumbnail-slider::-webkit-scrollbar-track { background: transparent; }
    .thumbnail-slider::-webkit-scrollbar-thumb { background: #dee2e6; border-radius: 3px; }
    .thumbnail-slider::-webkit-scrollbar-thumb:hover { background: #adb5bd; }

    .thumbnails {
        display: flex; gap: .75rem; padding: .75rem; min-width: min-content;
    }
    .thumbnail-wrapper { flex-shrink: 0; }

    .img-thumbnail {
        width: 80px; height: 60px;
        object-fit: cover;
        border-radius: 6px; border: 2px solid transparent;
        cursor: pointer; transition: all .3s ease;
        user-select: none; box-shadow: 0 2px 4px rgba(0,0,0,.1);
    }
    .img-thumbnail:hover {
        border-color: #1d4ed8;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(29,78,216,.2);
    }
    .img-thumbnail.active {
        border-color: #1d4ed8;
        box-shadow: 0 0 0 1px #1d4ed8, 0 4px 8px rgba(29,78,216,.3);
    }

    @media (max-width: 768px) {
        .img-thumbnail { width: 60px; height: 45px; }
        .thumbnails { gap: .5rem; padding: .5rem; }
        .carousel-control-prev, .carousel-control-next { width: 40px; }
    }
</style>