<script>
    // Datos estáticos para las tarjetas
    const processData = {
    title: "Nuestros Servicios",
    description: "",
    steps: [
    {
        id: "01",
        title: "Farmacias",
        description: "Accede a medicamentos con descuentos especiales en nuestra red de farmacias asociadas en todo el país.",
        icon: "pharmacy"
    },
    {
        id: "02",
        icon: "glasses",
        title: "Óptica",
        description: "Obtén anteojos, lentes de contacto y exámenes visuales con importantes beneficios para todos los afiliados."
    },
    {
        id: "03",
        icon: "money",
        title: "Ayuda Económica",
        description: "Préstamos personales con tasas preferenciales y planes de pago adaptados a tus necesidades financieras."
    },
    {
        id: "04",
        icon: "subsidy",
        title: "Subsidios",
        description: "Programas de apoyo económico para situaciones especiales como nacimiento, matrimonio y otros eventos importantes."
    },
    {
        id: "05",
        icon: "retirement",
        title: "Jubilados",
        description: "Beneficios exclusivos y atención personalizada para nuestros afiliados jubilados y pensionados."
    }
    ]
    };

</script>

<div class="work-process-container">
    <div class="sidebar">
    <h2>{processData.title}</h2>
    <p>{processData.description}</p>
    </div>
    
    <div class="cards-container">
    {#each processData.steps as step}
        <div class="card animate__fadeInRight" data-aos="fade-up">
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
            <!-- {#if step.icon === 'calendar'}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
                <line x1="8" y1="14" x2="8" y2="14"></line>
                <line x1="12" y1="14" x2="12" y2="14"></line>
                <line x1="16" y1="14" x2="16" y2="14"></line>
                <line x1="8" y1="18" x2="8" y2="18"></line>
                <line x1="12" y1="18" x2="12" y2="18"></line>
                <line x1="16" y1="18" x2="16" y2="18"></line>
            </svg>
            {:else if step.icon === 'monitor'}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            {:else if step.icon === 'rocket'}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
            </svg>
            {/if} -->
        </div>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
        </div>
    {/each}
    </div>
</div>

<style>
    :root {
        --dark: #2D3339;
        --white: #ffffff;
        --transition: 0.3s ease;
    }

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
        width: 25%;
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
        font-size: 0.9rem;
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
        border-radius: 4px;
        transition: transform var(--transition), background-color var(--transition);
        cursor: pointer;
    }

    .card:hover {
        background-color: var(--green-04);
        transform: translateY(-4px);
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
        font-size: 0.9rem;
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