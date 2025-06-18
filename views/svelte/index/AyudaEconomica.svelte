<script>
    import SectionsHero from './SectionsHero.svelte';

</script>

<SectionsHero 
    image="./images/sectionshero/ayudaEconomica.webp" 
    titulo="Ayuda Económica" 
    subtitulo="" />

<section class="container">

    <h1>
        Contacte vía mail o teléfono
    </h1>
    
    <p>
        Si lo desea puede ponerse en contacto a distancia escribiéndonos a la dirección de correo prestamosmeopp@ospepri.org.ar para solicitar más información. 
    </p>
    <p>
        También puede realizar su consulta llamando a los teléfonos:
    </p>
    <p>
        (0299) 447 02 69
    </p>
    <p>
        (0299) 442 45 05
    </p>
    <p>
        (0299) 447 08 06
    </p>

    <div class="main-button-container">
        <a class="main-button" href="./documents/pdf/Instructivo-Pago-Cuotas-AYUDAS-MEOPP.pdf" target="_blank" rel="noopener noreferrer">
            <span>Instrucciones de pago</span>
        </a>
    </div>
</section>

<style>
    section {
        min-height: 50vh;
        padding-block: 2rem;
    }

    h1{
        font-size: 1.3rem;
        color: var(--green-03);
    }
    
    p{
        font-size: 1rem;
    }

    .main-button-container {
        text-align: center;
        margin-bottom: 32px;
    }

    .main-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 16px 32px;
        border-radius: 8px;
        font-weight: 600;
        color: white;
        font-size: 1.125rem;
        background-color: var(--green-04);
        border: none;
        cursor: pointer;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transition: all 0.2s ease;
    }

    .main-button:hover {
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
    }


</style>