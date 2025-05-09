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
            img: "../images/meopp/meopp.webp",
            titulo: "Meopp",
            subtitulo: "Cada dia más cerca",
            resaltar:["cerca"]
        },
        {
            img: "../images/meopp/1.webp",
            titulo: "Titulo 2",
            subtitulo: "Subtitulo 2, otros y algo para ver",
            resaltar:["otros", "1"]
        },
        {
            img: "../images/meopp/2.webp",
            titulo: "Titulo 2",
            subtitulo: "Subtitulo 2, otros y algo para ver",
            resaltar:["otros", "1"]
        },
        
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
                    src="{contenido.img}"
                    alt="img_{i}" 
                    class="d-block w-100 imagesC zoom-in" 
                    loading="lazy"
                />
                <div class="phrase-container">
                    <div class="phrase d-none d-lg-block">
                        <p >
                            {contenido.titulo}
                        </p>
                        <h2>
                            <p>{@html resaltarTexto(contenido.subtitulo, contenido.resaltar)}</p>
                            <!-- {contenido.subtitulo} -->
                            <br>
                        </h2>
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
        <!-- <div class="phrase-container d-flex justify-content-center ">
            <div class="phrase d-none d-lg-block">
                <p >
                MEOPP
                </p>
                <h2>
                Cada dia más cerca 
                <br>
                </h2>
            </div>
        </div> -->
    </div>
    </div>
    
</div>


<style>
    /* .carousel_container{
        background-color: rgba(1, 157, 226,0.8);
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
    }

    .carousel-control-next, .carousel-control-prev {
        width: 8%;
    }

    .zoom-in{
        animation: zoomIn 5s ease-out forwards;
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
        background: linear-gradient(90deg, var(--green-darker-90), var(--green-normal-20));
    }

    .phrase{
        position: absolute;
        top: 30%;
        left: 20%;
        border-radius: 10px;
        z-index: 1;
        padding: 1rem;
        font-weight: bold;
        font-size: 2rem;
        color: white;
    }



    .phrase > p {
        line-height: 1;
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