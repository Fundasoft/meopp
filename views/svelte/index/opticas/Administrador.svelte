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


    function enviarMail() {
        const to = encodeURIComponent("consultasmeopp@ospepri.org.ar");
        const subject = encodeURIComponent("Especificar Asunto");
        const body = encodeURIComponent("Hola!.\n\n ");

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            // Abre la app de correo predeterminada
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        } else {
            // Abre Gmail web en escritorio
            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
            window.open(url, "_blank");
        }
    }

</script>
<SectionsHero 
    image="./images/sectionshero/optica.webp" 
    titulo="Ópticas" 
    subtitulo="Beneficios exclusivos en ópticas de la región. Mutual de Empleados y Obreros Petroleros Privados (MEOPP) ponemos a disposición de nuestros afiliados cobertura en ópticas." />

<section class="container">
    <div bind:this={contenedor}></div>

    <h2 class="section-title">La cobertura en Opticas es un beneficio anual</h2>

    <div class="contact-info">
        <p class="contact-text">¿Sos un prestador? comunicarse al mail:</p>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <p class="mail-link" on:click={enviarMail}>consultasmeopp@ospepri.org.ar</p>
    </div>

</section>

<style>
    section {
        min-height: 80vh;
        padding-block: 2rem;
    }

    .section-title {
        margin-block: 2rem;
		font-size: 1.5rem;
		color: var(--green-darker);
		font-weight: 600;
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 2px solid var(--green-light);
	}



    
    .contact-info {
        background: var(--green-light-50);
        border: 2px solid var(--green-04);
        border-radius: 12px;
        padding: 2rem;
        margin-bottom: 2rem;
    }
    
    .contact-text {
        font-size: 1.1rem;
        color: var(--green-darker);
        margin-bottom: 1rem;
        font-weight: 500;
    }
    
    .mail-link {
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--green-03);
        text-decoration: none;
        transition: var(--transition);
    }
    
    .mail-link:hover {
        color: var(--green-neon-normal);
        transform: translateX(2px);
    }

</style>
