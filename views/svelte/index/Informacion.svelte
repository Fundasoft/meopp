<script>
    // Datos estáticos para las secciones
    const secciones = [
        {
            titulo: "Cómo Afiliarse",
            descripcion: "Formar parte de nuestra obra social es simple y rápido. Ofrecemos planes personalizados para individuos, familias y empresas con beneficios exclusivos y cobertura integral en todo el país.",
            botonTexto: "CONOCER MÁS",
            imagen: "../images/meopp/meopp.webp",
            invertido: false
        },
        {
            titulo: "Nuestro Contacto",
            descripcion: "Estamos disponibles para atenderte a través de múltiples canales. Nuestro equipo de atención al afiliado está preparado para resolver todas tus consultas y brindarte la mejor asistencia.",
            botonTexto: "CONTACTAR",
            invertido: true
        },
        {
            titulo: "Autorizaciones y Órdenes Médicas",
            descripcion: "Gestioná tus autorizaciones médicas de manera rápida y sencilla. Contamos con un sistema digital que te permite solicitar y recibir aprobaciones para estudios y tratamientos en tiempo récord.",
            botonTexto: "SOLICITAR",
            imagen: "../images/meopp/2.webp",
            invertido: false
        }
    ];

</script>

<div class="obra-social-container container">
    {#each secciones as seccion, i}
    <!-- data-aos="fade-{i % 2 === 0 ? 'right' : 'left'}"  no anda porque se hace scroll en x-->
        <div class="seccion " 
            class:invertido={seccion.invertido}
            data-aos="fade-{i % 2 === 0 ? 'right' : 'right'}" 
            data-aos-easing="linear" 
            data-aos-duration="400"    
            >
            <div class="contenido{i%2?"-02":""}">
                <h2>{seccion.titulo}</h2>
                <p>{seccion.descripcion}</p>
                <button>{seccion.botonTexto}</button>
            </div>
            
            <div class="imagen-container">
                {#if i==1}
                    <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M14 2C16.2091 2 18 3.79086 18 6"></path>
                        <path d="M14 6C15.1046 6 16 6.89543 16 8"></path>
                    </svg>
                    <div class="info-contacto">
                        <p><strong>Teléfono:</strong> 0800-123-4567</p>
                        <p><strong>Email:</strong> contacto@meopp.com.ar</p>
                        <p><strong>Horario:</strong> Lun a Vie 8:00 a 18:00</p>
                    </div>
                    </div>
                {:else}
                    <img src={seccion.imagen || "/placeholder.svg"} alt={seccion.titulo} />
                {/if}
            </div>
        </div>
    {/each}
</div>

<style>
    .obra-social-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 1rem auto;
    }

    .seccion {
        display: flex;
        min-height: 400px;
        margin-bottom: 2rem;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .seccion.invertido {
    flex-direction: row-reverse;
    }

    .contenido {
        flex: 1;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--green-04);
        color: white;
    }

    .contenido-02 {
        flex: 1;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--green-02);
        color: white;
    }

    .imagen-container {
        flex: 1;
        position: relative;
        overflow: hidden;
    }

    .imagen-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    h2 {
        font-size: 2.2rem;
        margin-bottom: 1.5rem;
        font-weight: 700;
        line-height: 1.2;
    }

    p {
        font-size: 1rem;
        margin-bottom: 2rem;
        line-height: 1.6;
        opacity: 0.9;
    }

    button {
        align-self: flex-start;
        padding: 0.8rem 1.5rem;
        background-color: white;
        color: var(--green-02);
        border: none;
        border-radius: 4px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        letter-spacing: 1px;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.9);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .svg-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color:3d5900;
        padding: 2rem;
    }

    .svg-container svg {
        width: 120px;
        height: 120px;
        stroke: var(--green-04);
        margin-bottom: 2rem;
    }

    .info-contacto {
        text-align: center;
    }

    .info-contacto p {
        margin-bottom: 0.5rem;
        color: #333;
    }

    /* Responsive styles */
    @media (max-width: 900px) {
    .seccion, .seccion.invertido {
        flex-direction: column;
    }

    .contenido, .imagen-container {
        width: 100%;
    }

    .imagen-container {
        min-height: 300px;
    }
    }

    @media (max-width: 600px) {
    .contenido {
        padding: 2rem;
    }

    h2 {
        font-size: 1.8rem;
    }
    }
</style>