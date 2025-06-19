<script>
    import Card from './Card.svelte';
    import Beneficios from './Beneficios.svelte';
    import MensajeInicio from './MensajeInicio.svelte';
    import { onMount } from 'svelte';
    import SectionsHero from '../SectionsHero.svelte';
    
    let contenedor;

    onMount(()=>{
        contenedor.append(
            grid(_FARMACIAS, {
                // buttons: ['++'],
                
                filter: true,
                item: Card,
                columns: [
                    { key: "nombre", value: ""},
                    { key: "direccion", value: ""},
                    { key: "horarios", value: ""},
                    { key: "telefono", value: ""}
                ],
            })
        );
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
    <div bind:this={contenedor}></div>
    <Beneficios />
</section>

<style>
    section {
        min-height: 80vh;
        padding-block: 2rem;
    }
</style>
