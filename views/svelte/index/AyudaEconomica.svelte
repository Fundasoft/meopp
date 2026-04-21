<script>
    import SectionsHero from './SectionsHero.svelte';

    const PDF_PATH = './documents/pdf/Instructivo Pago Cuotas AYUDAS ECONÓMICAS MEOPP.pdf';

    function enviarMail(destinatario) {
        const to = encodeURIComponent(destinatario);
        const subject = encodeURIComponent("");
        const body = encodeURIComponent("");

        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

        if (isMobile) {
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        } else {
            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
            window.open(url, "_blank");
        }
    }

</script>

<SectionsHero 
    image="./images/sectionshero/ayudaEconomica.webp" 
    titulo="Ayuda Económica" 
    subtitulo="" />

<section class="container ayuda-economica-section">
    <div class="content-card">
        <h1>Contacte vía mail o teléfono</h1>

        <p>
            Si lo desea puede ponerse en contacto a distancia escribiéndonos a la dirección de correo
            <button 
                class="link-mail" 
                on:click={() => enviarMail("prestamosmeopp@ospepri.org.ar")}
                aria-label="Enviar email a prestamosmeopp@ospepri.org.ar"
            >
                prestamosmeopp@ospepri.org.ar
            </button>
            para solicitar más información.
        </p>

        <p>
            También puede realizar su consulta llamando a los teléfonos:
        </p>

        <div class="telefonos">
            <a href="tel:+542994470269" class="telefono-item">(0299) 447 02 69</a>
            <a href="tel:+542994424505" class="telefono-item">(0299) 442 45 05</a>
            <a href="tel:+542994470806" class="telefono-item">(0299) 447 08 06</a>
        </div>

        <div class="main-button-container">

            <a 
                class="main-button" 
                href={PDF_PATH}
                target="_blank" 
                rel="noopener noreferrer"
                >
                <span>Descargar descriptivo de pago de cuotas</span>
                <i class="bi bi-filetype-pdf"></i>
            </a>
        </div>
    </div>
</section>

<style>
    .ayuda-economica-section {
        min-height: 50vh;
        padding-block: 2.5rem 3rem;
    }

    .content-card {
        max-width: 860px;
        margin: 0 auto;
        background: linear-gradient(180deg, var(--white) 0%, var(--green-light) 100%);
        border: 1px solid var(--green-normal-20);
        border-radius: 1.25rem;
        padding: 2rem 1.5rem;
        box-shadow: 0 14px 40px rgba(25, 59, 21, 0.08);
    }

    h1 {
        margin: 0 0 1rem;
        font-size: clamp(1.5rem, 2vw, 2rem);
        line-height: 1.15;
        color: var(--green-03);
        font-weight: 700;
    }

    p {
        margin: 0 0 1rem;
        font-size: 1rem;
        line-height: 1.7;
        color: var(--dark);
    }

    .link-mail {
        color: var(--green-02);
        font-weight: 600;
        text-decoration: none;
        transition: color var(--transition);
        word-break: break-word;
        border: none;
        background: none !important;
    }

    .link-mail:hover {
        color: var(--green-04);
        text-decoration: underline;
    }

    .telefonos {
        display: grid;
        gap: 0.75rem;
        margin: 1.5rem 0 2rem;
    }

    .telefono-item {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        max-width: 100%;
        padding: 0.85rem 1rem;
        border-radius: 0.9rem;
        background: var(--white);
        border: 1px solid var(--green-normal-20);
        color: var(--green-darker);
        font-weight: 600;
        text-decoration: none;
        transition:
            transform var(--transition),
            box-shadow var(--transition),
            border-color var(--transition),
            background var(--transition);
    }

    .telefono-item:hover {
        transform: translateY(-2px);
        border-color: var(--green-04-50);
        background: var(--green-light);
        box-shadow: 0 10px 25px rgba(25, 59, 21, 0.08);
    }

    .main-button-container {
        margin-top: 2rem;
        display: flex;
        justify-content: flex-start;
    }

    .main-button {
        display: inline-flex;
        align-items: center;
        gap: 0.85rem;
        padding: 1rem 1.2rem;
        border-radius: 1rem;
        font-weight: 700;
        font-size: 1rem;
        color: var(--white);
        background: linear-gradient(135deg, var(--green-03) 0%, var(--green-04) 100%);
        border: 1px solid transparent;
        text-decoration: none;
        cursor: pointer;
        box-shadow: 0 12px 28px rgba(88, 128, 0, 0.22);
        transition:
            transform var(--transition),
            box-shadow var(--transition),
            filter var(--transition);
        flex-wrap: wrap;
    }

    .main-button:hover {
        transform: translateY(-2px);
        box-shadow: 0 18px 34px rgba(88, 128, 0, 0.28);
        filter: brightness(1.03);
    }

    .main-button:focus-visible {
        outline: 3px solid var(--green-04-50);
        outline-offset: 3px;
    }

    /* .button-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.14);
        flex-shrink: 0;
    }

    .button-icon svg {
        width: 1.2rem;
        height: 1.2rem;
    }

    .button-text {
        line-height: 1.35;
    }

    .pdf-badge {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 3rem;
        padding: 0.35rem 0.65rem;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.16);
        border: 1px solid rgba(255, 255, 255, 0.22);
        font-size: 0.8rem;
        font-weight: 800;
        letter-spacing: 0.04em;
    } */

    @media (max-width: 768px) {
        .ayuda-economica-section {
            padding-block: 2rem 2.5rem;
        }

        .content-card {
            padding: 1.5rem 1rem;
            border-radius: 1rem;
        }

        .main-button-container {
            justify-content: stretch;
        }

        .main-button {
            width: 100%;
            justify-content: center;
            text-align: center;
        }

        .telefono-item {
            width: 100%;
            justify-content: center;
            text-align: center;
        }
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.35rem;
        }

        p {
            font-size: 0.98rem;
        }

        .main-button {
            padding: 0.95rem 1rem;
            gap: 0.7rem;
            font-size: 0.95rem;
        }

        /* 
        .pdf-badge {
            font-size: 0.75rem;
        } 
        */
    }
</style>