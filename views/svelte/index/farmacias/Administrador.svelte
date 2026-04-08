<script>
    import Card from './Card.svelte';
    import Beneficios from './Beneficios.svelte';
    import MensajeInicio from './MensajeInicio.svelte';
    import { onMount } from 'svelte';
    import SectionsHero from '../SectionsHero.svelte';
    
    let contenedor;
    let grilla = grid([],{
        sync: {
            read:false
        },
        filter: true,
        class: "farmacias",
        item: Card,
        columns: [
            { key: "nombre", value: ""},
            { key: "direccion", value: ""},
            { key: "horarios", value: ""},
            { key: "telefono", value: ""}
        ],
    })
    
    FARMACIAS.read([_habilitado,IGUAL,1]).then((_farmacias) => {
        grilla.value=_farmacias;
        log.farm(_farmacias)
    })
    
    onMount(()=>{
        contenedor.append(grilla);

        document.querySelector('.xen-grid-farmacias .xen-grid-header input[type="search"]')
            ?.setAttribute('placeholder', 'Buscar sucursal o farmacia...');
    })
    
    modal("",html(MensajeInicio),{footer:false})
</script>

<SectionsHero 
    image="./images/sectionshero/farmacias.webp" 
    titulo="Farmacias" 
    subtitulo="Para retirar medicamentos es necesario presentar DNI y credencial vigentes.
En caso de menores de edad, la solicitud deberá ser realizada por sus representantes legales con acreditación de DNI y credencial del menor sin excepción.
Contamos con doce farmacias propias donde los afiliados tienen la posibilidad de comprar medicamentos recetados con hasta el 100% de cobertura, según vademecum vigente al momento de la compra." />
<section class="container">
    <img src="./images/meopp/farmacias.webp" alt="farmacias" class="img-farmacias" >
    <div class="py-2" bind:this={contenedor}></div>
    <Beneficios />
</section>

<style>
    section {
        min-height: 80vh;
        padding-block: 2rem;
    }

    .img-farmacias {
        display: block;
        width: 100%;
        max-width: 100%;
        height: auto;
        object-fit: contain;
    }

</style>
