<script>

    import { onMount } from "svelte";

    onMount(()=>{
    var myCarousel = document.querySelector('#carouselExampleAutoplaying');
    var carousel = new bootstrap.Carousel(myCarousel,{
        interval: 6000,
    });
    carousel.cycle();
    })

    let images =[
        "../images/meopp/meopp.webp",
        "../images/meopp/meopp2.webp"
    ]

</script>  

<div class="carousel_container">
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false" >
    <div id="carousel-container" class="carousel1">
        <div class="carousel-indicators">
        {#each images as image,i }
            <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="{i}" class="{i=== 0 ? "active" :""}" aria-current="true" aria-label="Slide {i}"></button>
        {/each}
        </div>
        
        <div class="carousel-inner" >
        {#each images as image,i}
            <div class="carousel-item {i===0 ? "active" :""}">
            <img 
                src="{image}"
                alt="img_{i}" 
                class="d-block w-100 imagesC" 
                loading="lazy"
            />
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
        <div class="phrase-container d-flex justify-content-center ">
        <div class="phrase d-none d-lg-block">
            <p >
            MEOPP
            </p>
            <h2>
            Cada dia más cerca 
            <br>
            </h2>
        </div>
        </div>
    </div>
    </div>
    
</div>


<style>
    .carousel_container{
    background-color: rgba(1, 157, 226,0.8);
    }

    .carousel1{
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:relative;
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
    background-color: rgba(0, 0, 0, 0.3);
    }
    .phrase{
    border-radius: 10px;
    z-index: 1;
    padding: 1rem;
    font-weight: bold;
    font-size: 5rem;
    color: white;
    }

    .phrase > p {
    line-height: 1;
    }

    .carousel-control-next:active,
    .carousel-control-prev:active {
    background-color: transparent;
    }

</style>