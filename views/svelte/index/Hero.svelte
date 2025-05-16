<script>

    import { onMount } from "svelte";

    onMount(()=>{
    var myCarousel = document.querySelector('#carouselExampleAutoplaying');
    var carousel = new bootstrap.Carousel(myCarousel,{
        interval: 6000,
    });
    carousel.cycle();
    })

    let heroContent =[
        {
            img: "./images/meopp/2.webp",
            titulo: "En MEOPP cuidamos tu salud y la de tu familia.",
            subtitulo: "Somos la obra social privada de los trabajadores del petróleo, con cobertura médica de calidad, prestadores en todo el país y beneficios exclusivos para el sector.",
            resaltar:["obra social privada", "cobertura médica de calidad", "beneficios exclusivos"],
            texto:"Afiliate ahora",
            url:"./index.html"
        },
        {
            img: "./images/meopp/meopp.webp",
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
    <div id="carousel-container" class="carousel1">
        <div class="carousel-indicators">
            {#each heroContent as image,i }
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="{i}" class="{i=== 0 ? "active" :""}" aria-current="true" aria-label="Slide {i}"></button>
            {/each}
        </div>
        
        <div class="carousel-inner" >
            {#each heroContent as contenido,i}
                <div class="carousel-item {i===0 ? "active" :""}">
                    <img 
                        srcset="{contenido.img.replace(".webp",'.mobile.webp')} 570w, {contenido.img} 1200w"
                        class="d-block w-100 imagesC zoom-in" 
                        sizes="(max-width: 570px) 100vw, 1200px"
                        alt="img_{i}"
                        loading="lazy"
                        />

                    <!-- src="{contenido.img}"  -->

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

    .carousel1{
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
        /* position: absolute; */

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
        background-color: rgba(0,0,0,0.5);
        /* background: linear-gradient(90deg, var(--green-darker-90), var(--green-normal-20)); */
    }

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