<script>
    import { onMount } from 'svelte';
    import NovedadCard from "./Card.svelte";
	import FileNotFoundSvg from "../recursos/FileNotFoundSvg.svelte";

    let novedades=[], contenedor;

    // const featuredPost = {
    //     title: "Novedades",
    //     subtitle: "Descubre nuestra seccion de noticias"
    // };

    onMount(()=>{
        contenedor.append(grilla);
    })

    let grilla=grid([],{
        class:"novedades",
        draggable:false,
        filter: true,
        item: NovedadCard,
        columns: [
            { key: "titulo", value: ""},
            { key: "subtitulo", value: ""}
        ]
    });

    log.QUERY_tag(QUERY.tag);

    if(QUERY.tag){
        NOVEDADES.read([AND,[_etiquetas,INCLUDES,QUERY.tag],[_habilitada,IGUAL,1]]).then(_novedades=> {
            log._novedades(_novedades)
            grilla.value=_novedades.reverse();
            novedades=_novedades
        });
    }else{

        NOVEDADES.read(QUERY.novedad ? [AND,['Y',IGUAL,QUERY.novedad],[_habilitada,IGUAL,1]] : [_habilitada,IGUAL,1]).then(_novedades=> {
            grilla.value=_novedades.reverse();
            novedades=_novedades;
        });
    }

</script>

<section class="blog container p-2">
    <!-- Hero -->
    <!-- <div class="hero">
        <h1>{featuredPost.title}</h1>
        <p class="subtitle">{featuredPost.subtitle}</p>
    </div> -->

    <!-- {#key novedades} -->
        {#if !novedades.length}
            <div class="div-content no-novedades">
                <FileNotFoundSvg />
                <h2>No se encontraron resultados</h2>
                <p>Tal vez no esté disponible en este momento.</p>
                <!-- svelte-ignore missing-declaration -->
                {#if (QUERY.tag || QUERY.novedad )}
                    <a href="/novedades" class="btn-link">Ir a novedades</a>
                {/if}
            </div>
        {/if}
    <!-- {/key} -->

    <div bind:this={contenedor} class="cards-container {novedades.length? "":"d-none"}"></div>
</section>

<style>
    .cards-container{
        min-height: 50vh;
        padding: 1rem;
    }

    /* SIN NOVEDADES */

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




    .blog {
        min-height: 50vh;
    }

    /* .hero {
        background: #f8f9fa;
        border: 1px solid #e9ecef;
        border-radius: 8px;
        padding: 2.5rem 2rem;
        margin-bottom: 2rem;
        justify-items: center;
    }

    .hero h1 {
        font-size: 2.25rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: #212529;
        line-height: 1.3;
        letter-spacing: -0.02em;
    }

    .subtitle {
        font-size: 1.1rem;
        color: #6c757d;
        margin: 0;
        line-height: 1.5;
        font-weight: 400;
    } */

    /* @media (max-width: 768px) {
        .hero {
            padding: 2rem 1.5rem;
        }
        
        .hero h1 {
            font-size: 1.875rem;
        }
        
        .subtitle {
            font-size: 1rem;
        }
    }

    @media (max-width: 480px) {
        .hero {
            padding: 1.5rem 1rem;
        }
        
        .hero h1 {
            font-size: 1.75rem;
        }
    } */
    
</style>