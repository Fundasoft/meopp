<script>

    import { onMount } from "svelte";

    onMount(()=>{
        var myCarousel = document.querySelector('#carouselExampleAutoplaying');
        var carousel = new bootstrap.Carousel(myCarousel,{
            interval: 6000,
        });
        carousel.cycle();
    })

    let path = "./images/meopp/"

    let heroContent =[
        {
            img: "meopp",
            titulo: "En MEOPP MUTUAL cuidamos a la familia petrolera.",
            subtitulo: "Somos la Mutual de empleados y obreros petroleros privados, brindamos beneficios a todos nuestros asociados en salud, recreación, subsidios, ópticas y farmacias.",
            resaltar:["MEOPP MUTUAL", "Mutual de empleados", "beneficios"],
            texto:"Afiliate ahora",
            url:"./index.html"
        },
        {
            img: "family",
            titulo: "Meopp",
            subtitulo: "Cada día más cerca",
            resaltar:["cerca"]
        }
        // {
        //     img: "./images/meopp/1.webp",
        //     titulo: "Titulo 2",
        //     subtitulo: "Subtitulo 2, otros y algo para ver",
        //     resaltar:["otros", "1"]
        // },
        
    ];

    function resaltarTexto(texto, palabras) {
        // Escapa palabras para usar en regex
        const escaped = palabras.map(p =>
        p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        );

        const regex = new RegExp(`\\b(${escaped.join('|')})\\b`, 'gi');

        // Reemplaza las coincidencias con span resaltado
        return texto.replace(regex, '<span style="font-weight:bold !important" class="resaltado">$1</span>');
    }
</script>  

<div class="carousel_container">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" >
        <div id="carousel-container" class="carousel">
            <div class="carousel-indicators">
                {#each heroContent as image,i }
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="{i}" class="{i=== 0 ? "active" :""}" aria-current="true" aria-label="Slide {i}"></button>
                {/each}
            </div>
            
            <div class="carousel-inner" >
                {#each heroContent as contenido,i}
                    <div class="carousel-item {i===0 ? "active" :""}">
                        <img 
                            srcset="{path}{contenido.img}.mobile.webp 570w, {path}{contenido.img}.webp 1200w"
                            class="d-block w-100 imagesC zoom-in" 
                            sizes="(max-width: 570px) 100vw, 1200px"
                            alt="img_{i}"
                            loading="lazy"
                            /> 

                        <div class="overlay"></div>

                        <div class="phrase-container">
                            <div class="phrase">
                                <h2 class="phrase-title">
                                    {contenido.titulo}
                                </h2>
                                <p class="phrase-text">{@html resaltarTexto(contenido.subtitulo, contenido.resaltar)}</p>
                                <br>

                                <!-- <a class="button-hero" href="./index.html">
                                    Afiliate ahora
                                </a> -->
                                
                            </div>
                        </div>
                    </div>
                    {/each}
            </div> 

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
</div>


<style>
    .carousel_container{
        position: relative;
    }
    .carousel-item{
        overflow: hidden;
    }

    /* .button-hero {
        text-decoration-line: none;
        align-self: flex-start;
        padding: 0.8rem 1.5rem;
        background-color: white;
        color: var(--green-02);
        border: none;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        letter-spacing: 1px;
        font-size: 1rem;
        z-index: 10 !important;
        position: absolute;
        bottom: 20%;
        left: 20%;
    }

    .button-hero:hover {
        background-color: rgba(255, 255, 255, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    } */

    .carousel{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        min-height: 100vh;
    }

    .imagesC {
        min-height: 100vh;
        max-height: 100vh;
        object-fit: cover;
        z-index: 1 !important;
    }

    .carousel-control-next, .carousel-control-prev {
        width: 8%;
    }

    .zoom-in{
        animation: zoomIn 6s ease-out forwards;
    }

    @keyframes zoomIn {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2); /* o el valor que prefieras */
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5); /* sombreado/oscurecido */
        pointer-events: none; /* para no bloquear clics */
    }

    .phrase-container {
        position: absolute;
        font-size: 2rem;
        z-index: 2;
    }

    .phrase-container{
        display: flex;
        justify-content: center;
        align-items: center; 
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
    
    /* .carousel-inner{
        justify-content: center;
        align-items: center; 
        position: absolute;
        pointer-events: none;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        
    } */

    .phrase{
        position: absolute;
        top: 30%;
        left: 10%;
        border-radius: 10px;
        z-index: 1;
        padding: 1rem;
        font-size: 1.3rem;
        color: white;
        max-width: 60ch;
    }


    .phrase-title{
        margin-bottom: 1.5rem;
    }

    .phrase-text{
        line-height: 1.3;
    }

    .carousel-control-next:active,
    .carousel-control-prev:active {
        background-color: transparent;
    }
    
    .carousel-indicators [data-bs-target] {
        box-sizing: content-box;
        flex: 0 1 auto;
        width: 15px;
        height: 15px;
        padding: 0;
        margin-right: 3px;
        margin-left: 3px;
        text-indent: -999px;
        cursor: pointer;
        background-color: var(--green-neon-normal) !important;
        background-clip: padding-box;
        border: 0;
        opacity: .4;
        transition: opacity .6s ease;
        border-radius: 50%;
    }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        scale: 0.6;
    }

    .carousel-indicators .active {
        opacity: 1;
    }
</style>