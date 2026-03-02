<script>
    const secciones = [
        {
            titulo: "Contactános",
            descripcion: "",
            botonTexto: "Contactar",
            invertido: true,
            tipo: "contacto" // clave para saber qué mostrar
        }
    ];
</script>

<div class="obra-social-container container">
    {#each secciones as seccion}
        <div
            class="seccion"
            class:invertido={seccion.invertido}
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="400"
        >
            <div class="contenido">
                <h2>{seccion.titulo}</h2>

                {#if seccion.tipo === "contacto"}
                    <div class="info-contacto">
                        <p><strong>Teléfonos:</strong></p>
                        <p>(299) 443 98 42</p>
                        <p>(299) 442 45 05</p>
                        <p><strong>Email:</strong> contacto@meopp.com.ar</p>
                        <p><strong>Horario de Atención:</strong> Lun a Vie de 08:30 a 16:30 hs</p>
                    </div>
                {:else}
                    <p>{seccion.descripcion}</p>
                    <button>{seccion.botonTexto}</button>
                {/if}
            </div>

            <div class="imagen-container">
                <div class="svg-container">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        <path d="M14 2C16.2091 2 18 3.79086 18 6"></path>
                        <path d="M14 6C15.1046 6 16 6.89543 16 8"></path>
                    </svg>
                </div>
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

    .imagen-container {
        flex: 1;
        display: flex;
        justify-content: center;
    }

    .svg-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: #3d5900; /* 👈 corregido */
        padding: 2rem;
        width: 100%;
    }

    .svg-container svg {
        width: 120px;
        height: 120px;
        stroke: var(--green-04);
    }

    .info-contacto p {
        margin-bottom: 0.5rem;
        color: white;
    }

    @media (max-width: 900px) {
        .seccion,
        .seccion.invertido {
            flex-direction: column;
        }
    }
</style>