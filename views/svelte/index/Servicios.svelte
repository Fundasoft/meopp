<script>
    // Datos actualizados para las tarjetas
    const cards = [
    {
        id: "01",
        icon: "pharmacy",
        title: "Farmacias",
        description: "Accede a medicamentos con descuentos especiales en nuestra red de farmacias asociadas en todo el país."
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
    ];
</script>

<section class="my-3">
    <div class="cards-container">
    {#each cards as card, index}
        <div class="card" style="color: var(--green-02);" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="card-content">

            <h2>{card.title}</h2>
            <div class="divider"></div>
            <p>{card.description}</p>
        </div>
        <div class="card-number">
            <div class="icon-container">
                {#if card.icon === 'pharmacy'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                {:else if card.icon === 'glasses'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="12" r="3"></circle>
                    <line x1="9" y1="12" x2="15" y2="12"></line>
                    </svg>
                {:else if card.icon === 'money'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                {:else if card.icon === 'subsidy'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 11 12 14 22 4"></polyline>
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                {:else if card.icon === 'retirement'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                {/if}
            </div>
        </div>
        </div>
    {/each}
    </div>
</section>

<style>
    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }

    .card {
        position: relative;
        background-color: var(--card-color);
        color: var(--white);
        border-radius: 8px;
        overflow: hidden;
        width: 100%;
        max-width: 250px;
        /* min-height: 250px; */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
    }

    .card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-content {
        position: relative;
        z-index: 2;
        padding: 25px;
    }

    .icon-container {
        width: 50px;
        height: 50px;
        margin-bottom: 15px;
    }

    .icon-container svg {
        width: 100%;
        height: 100%;
        stroke: var(--green-03);
    }

    h2 {
        font-size: 24px;
        margin: 0 0 15px 0;
        font-weight: 600;
    }

    .divider {
        width: 40px;
        height: 3px;
        background-color: var(--green-03);
        margin-bottom: 15px;
    }

    
    .card:hover{
        color: var(--green-01) !important;
        border-radius: 6px;
    }

    .card::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0;
        background-color: currentColor;
        transition: width 0.2s ease-in-out;
    }

    .card:hover::after {
        width: 100%;
    }

    /* .divider{} */

    p {
        font-size: 16px;
        line-height: 1.5;
        margin: 0;
    }

    .card-number {
        position: absolute;
        bottom: 10%;
        transform: translate(-50%, -50%);
        right: 10px;
        font-size: 100px;
        /* font-weight: 700; */
        opacity: 0.1;
        z-index: 1;
    }

    /* Responsive styles */
    @media (max-width: 1200px) {
    .card {
        max-width: 250px;
    }
    }

    @media (max-width: 768px) {
    .cards-container {
        flex-direction: column;
        align-items: center;
    }

    .card {
        max-width: 100%;
    }
    }
</style>