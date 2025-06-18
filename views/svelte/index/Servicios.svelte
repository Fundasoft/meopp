<script>
    // Datos estáticos para las tarjetas
    const processData = {
        title: "Nuestros Servicios",
        description: "",
        steps: [
            {
                time: 0,
                title: "Farmacias",
                description: "Con Meopp Mutual, acceder a tu medicación es más fácil. Presentá tu receta en la farmacia más cercana y aprovechá la cobertura de hasta el 100% en medicamentos del vademécum.",
                icon: "pharmacy",
                src:"farmacias"
            },
            {
                time: 100,
                icon: "glasses",
                title: "Óptica",
                description: "Presentando tu pedido médico, podés acceder a importantes coberturas en lentes aéreos o de contacto en las ópticas adheridas.",
                src:"optica"
            },
            {
                time: 200,
                icon: "money",
                title: "Ayuda Económica",
                description: "Te acompañamos en cada paso. Accedé a nuestras ayudas económicas y cancelá tus cuotas de manera simple y rápida. Dentro de esta solapa, vas a encontrar un instructivo con todos los pasos para realizar el trámite.",
                src:"ayudaEconomica"
            },
            {
                time: 300,
                icon: "subsidy",
                title: "Subsidios",
                description: "Acompañamos los momentos más importantes de tu vida. Brindamos apoyo económico en situaciones especiales como nacimientos, matrimonios, y otros eventos significativos, para que sientas el respaldo de Meopp Mutual cuando más lo necesitás.",
                src:"subsidios"
            },
            {
                time: 400,
                icon: "retirement",
                title: "Jubilados",
                description: "Beneficios exclusivos y atención personalizada para nuestros afiliados jubilados y pensionados.",
                src:"jubilados"
            }
        ]
    };

</script>

<div class="work-process-container" id="servicios">
    <div class="sidebar">
        <h2 
            data-aos="fade-right" 
            data-aos-duration="500"    
            data-aos-easing="linear" 
            >
            {processData.title}
        </h2>
        <p>{processData.description}</p>
    </div>
    
    <div class="cards-container">
    {#each processData.steps as step, index}
        <a 
            class="card" 
            data-aos="fade-up"
            data-aos-duration=400  
            data-aos-delay="{step.time}"  
            data-aos-easing="linear" 
            href="index.html?render={step.src}"
            >
            <!-- data-aos-delay={500+index*10}   -->
            <!-- data-aos-duration="500"   -->
            <div class="icon-container">
                {#if step.icon === 'pharmacy'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                {:else if step.icon === 'glasses'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="12" r="3"></circle>
                    <line x1="9" y1="12" x2="15" y2="12"></line>
                    </svg>
                {:else if step.icon === 'money'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                        <circle cx="12" cy="12" r="2"></circle>
                        <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                {:else if step.icon === 'subsidy'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                {:else if step.icon === 'retirement'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                {/if}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
        </a>
    {/each}
    </div>
</div>

<style>
    .work-process-container {
        display: flex;
        width: 100%;
        background-color: var(--dark);
        color: var(--white);
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .sidebar {
        background-color: var(--green-04);
        padding: 2rem;
        width: 20%;
        min-width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }

    .sidebar::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -15px;
        width: 30px;
        height: 30px;
        background-color: var(--green-04);
        transform: translateY(-50%) rotate(45deg);
    }

    .sidebar h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: 700;
        line-height: 1.2;
    }
    
    .sidebar p {
        font-size: 1rem;
        font-weight: 600;
        opacity: 0.9;
        line-height: 1.6;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
        padding: 2rem;
        gap: 0.5rem;
        justify-content: space-around;
    }

    .card {
        flex: 1;
        min-width: 200px;
        padding: 1.5rem;
        text-decoration: none !important;
        border-radius: 4px;
        transition: transform 0.3s ease, background-color 0.3s ease;
        cursor: pointer;
    }

    .card:hover {
        background-color: var(--green-04);
        color: white;
        transition-delay: 0s !important;
    }



    .icon-container {
        width: 40px;
        height: 40px;
        margin-bottom: 1rem;
    }

    .icon-container svg {
        width: 100%;
        height: 100%;
        stroke: var(--green-04);
        transition: stroke var(--transition);
    }

    .card:hover .icon-container svg {
        stroke: var(--white);
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        opacity: 0.7;
        line-height: 1.6;
    }

    /* Responsive styles */
    @media (max-width: 900px) {
        .work-process-container {
            flex-direction: column;
        }

        .sidebar {
            width: 100%;
            min-width: 100%;
            padding: 2rem;
        }

        .sidebar::after {
            display: none;
        }

        .cards-container {
            padding: 1.5rem;
        }
    }

    @media (max-width: 600px) {
        .cards-container {
            flex-direction: column;
        }
        .card {
            width: 100%;
        }               
    }
</style>