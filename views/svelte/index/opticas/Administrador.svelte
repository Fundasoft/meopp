<script>
    import Card from './Card.svelte';
    import { onMount } from 'svelte';
    import SectionsHero from '../SectionsHero.svelte';
    
    let contenedor;
    let grilla=grid([],{
        // buttons: ['++'],
        sync: {
            read:false
        },
        filter: true,
        item: Card,
        columns: [
            { key: "articulo", value: ""},
            { key: "precio", value: ""}
        ],
    });

    OPTICAS.read([_habilitado,IGUAL,1]).then((_opticas) => {
        grilla.value=_opticas;
    })
    
    onMount(()=>{
        contenedor.append(grilla);
    })
</script>
<SectionsHero 
    image="./images/sectionshero/optica.webp" 
    titulo="Ópticas" 
    subtitulo="Beneficios exclusivos en ópticas de la región. Mutual de Empleados y Obreros Petroleros Privados (MEOPP) ponemos a disposición de nuestros afiliados cobertura en ópticas." />

<section class="container">
    <div bind:this={contenedor}></div>
</section>

<style>
    section {
        min-height: 80vh;
        padding-block: 2rem;
    }
</style>
