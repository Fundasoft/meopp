<script>
    let subsidios = [
        {
            title: "Casamiento",
            subtitle:"Requisitos",
            icon: "./images/icons/wedding.svg",
            alt: "Icono de casamiento",
            monto: "$420.000",
            requisitos: [
                "Acta de matrimonio",
                "Copia DNI asociado titular",
                "Copia DNI del cónyuge",
                "Último recibo de sueldo",
                "CBU del afiliado titular, emitido por entidad bancaria",
                "Plazo de presentación 30 días desde la fecha de casamiento"
            ],
            botonTexto: "Solicitar subsidio de casamiento",
            botonUrl: "https://sindicatopetroleros.org.ar/subsidios/index.php?tipoSolicitud=c"
        },
        {
            title: "Nacimiento",
            subtitle:"Requisitos",
            icon: "./images/icons/baby.svg",
            alt: "Icono de nacimiento",
            monto: "$330.000",
            requisitos: [
                "Acta de nacimiento",
                "Copia del DNI del menor",
                "DNI del asociado titular",
                "Ultimo recibo de sueldo",
                "CBU del asociado titular, emitido por entidad bancaria",
                "es condición que el hijo/a este de alta en la ficha del titular (gestionar en afiliaciones@ospepri.org.ar)",
                "Plazo de presentación 30 días desde la fecha del nacimiento"
            ],
            botonTexto: "Solicitar subsidio de nacimiento",
            botonUrl: "https://sindicatopetroleros.org.ar/subsidios/index.php?tipoSolicitud=n"
        },
        {
            title: "Defunción de titular",
            subtitle:"Requisitos de titular",
            icon: "./images/icons/memorial.svg",
            alt: "Icono de defuncion",
            monto: "$363.000",
            requisitos: [
                "Partida de defunción ",
                "DNI del asociado titular ",
                "DNI del esposo/a o conviviente ",
                "Ultimo recibo de sueldo del asociado titular ",
                "CBU de esposo/a, emitido por entidad bancaria o homebanking ",
                "En caso de no existir cónyuge o conviviente declarado, podrá ser percibido por los restantes miembros del grupo familiar, registrados en la Mutual. ",
                "Plazo de presentación 30 días desde la fecha de defunción."
            ],
            botonTexto: "Solicitar subsidio defuncion del titular",
            botonUrl:"https://sindicatopetroleros.org.ar/subsidios/index.php?tipoSolicitud=dt"
        },
        {
            title: "Defunción de esposo/a o conviviente",
            subtitle:"Requisitos de esposo/a o conviviente",
            icon: "./images/icons/memorial.svg",
            alt: "Icono de defuncion",
            monto: "$363.000",
            requisitos: [
                "Partida de defunción ",
                "DNI del asociado titular ",
                "DNI del fallecido ",
                "Ultimo recibo de sueldo ",
                "CBU del Asociado titular, emitido por entidad bancaria o homebanking ",
                "Plazo de presentación 30 días desde la fecha de defunción."
            ],
            botonTexto: "Solicitar subsidio de defunción del esposo/a o conviviente",
            botonUrl:"https://sindicatopetroleros.org.ar/subsidios/index.php?tipoSolicitud=de"
        },
        {
            title: "Defunción de hijo/a",
            subtitle:"Requisitos de hijo/a",
            icon: "./images/icons/memorial.svg",
            alt: "Icono de defuncion",
            monto: "$363.000",
            requisitos: [
                "Partida de defunción",
                "DNI del asociado titular",
                "DNI del fallecido ",
                "Ultimo recibo de sueldo ",
                "CBU del Asociado titular emitido por entidad bancaria o homebanking ",
                "Plazo de presentación 30 días desde la fecha de defunción."
            ],
            botonTexto: "Solicitar subsidio de defunción de hijo/a",
            botonUrl:"https://sindicatopetroleros.org.ar/subsidios/index.php?tipoSolicitud=de"
        }
    ];

    // Array para controlar el estado de cada collapse
    let isOpenArray = Array(subsidios.length).fill(false);

    function toggleRequirements(index) {
        isOpenArray[index] = !isOpenArray[index];
    }
</script>


{#each subsidios as item, index}
    <div class="container">
        <h2 class="title">{item.title}</h2>

        <div class="content-wrapper">
            <div class="icon-container">
                <img src={item.icon} alt="{item.alt}" class="icon" />
            </div>

            <div class="main-content">
                <div class="requirements-section">
                    <button 
                        on:click={() => toggleRequirements(index)}
                        class="requirements-button"
                    >
                        <div class="button-content">
                            <div class="icon-text-wrapper">
                                <div class="plus-icon" class:rotated={isOpenArray[index]}>
                                    {#if isOpenArray[index]}
                                        <!-- Flecha hacia abajo -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    {:else}
                                        <!-- Cruz -->
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                                        </svg>
                                    {/if}
                                </div>
                                <span class="requirements-text">{item.subtitle}</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="chevron-icon" class:rotated={isOpenArray[index]} width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>

                    <div class:open={isOpenArray[index]} class="requirements-content-wrapper">
                        <div class="requirements-content">
                            <ul class="requirements-list">
                                {#each item.requisitos as req}
                                    <li class="requirement-item">
                                        <div class="bullet"></div><span>{req}</span>
                                    </li>
                                {/each}
                                <li class="amount-item"><span>Monto: {item.monto}</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="action-section">
                    <a class="action-button" href="botonUrl">
                        {item.botonTexto}
                    </a>
                </div>
            </div>
        </div>
    </div>
{/each}


<style>

    .icon{
        width: 150px;
    }

    .requirements-content-wrapper {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.4s ease, padding 0.4s ease;
        padding: 0;
    }

    .requirements-content-wrapper.open {
        max-height: 500px; 
        padding-top: 8px;
    }

    .requirements-content {
        background-color: white;
        padding: 16px;
        border-radius: 8px;
        border-left: 4px solid var(--green-04);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        opacity: 1;
        transition: opacity 0.3s ease;
    }

    .requirements-content-wrapper:not(.open) .requirements-content {
        opacity: 0;
    }

    .plus-icon.rotated svg {
        transition: transform 0.3s ease;
        transform: rotate(180deg);
    }

    .chevron-icon.rotated {
        transform: rotate(90deg);
    }

    .container {
        background-color: #f3f4f6;
        padding: 24px;
        border-radius: 8px;
        max-width: 1000px;
        margin: 1rem auto;
        position: relative;
    }

    .title {
        color: var(--green-04);
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 16px 0;
    }

    .content-wrapper {
        display: flex;
        align-items: center !important;
        flex-direction: column;
        gap: 16px;
    }

    .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .main-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .requirements-section {
        width: 100%;
    }

    .requirements-button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: white;
        padding: 16px;
        border-radius: 8px;
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .requirements-button:hover {
        background-color: #f9fafb;
    }

    .button-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .icon-text-wrapper {
        display: flex;
        align-items: center;
    }

    .plus-icon {
        background-color: var(--green-04);
        border-radius: 50%;
        padding: 4px;
        margin-right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .requirements-text {
        font-weight: 500;
        color: #374151;
    }

    .chevron-icon {
        color: #9ca3af;
        transition: transform 0.2s;
    }

    .chevron-icon.rotated {
        transform: rotate(90deg);
    }

    .requirements-content {
        background-color: white;
        margin-top: 8px;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        border-left: 4px solid var(--green-04);
        animation: fadeIn 0.3s ease-in-out;
    }

    .requirements-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .requirement-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 8px;
        color: #374151;
    }

    .bullet {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: var(--green-04);
        margin-top: 8px;
        margin-right: 8px;
        flex-shrink: 0;
    }

    .amount-item {
        font-weight: 600;
        margin-top: 16px;
        color: #374151;
    }

    .action-section {
        width: 100%;
        align-items: center !important;
    }

    .action-button {
        width: 100%;
        background-color: var(--green-04);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        border: none;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.2s;
    }

    .action-button:hover {
        background-color: var(--green-03);
    }

    @keyframes fadeIn {
        from {
        opacity: 0;
        transform: translateY(-10px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
    }

    @media (min-width: 768px) {
        .content-wrapper {
        flex-direction: row;
        align-items: flex-start;
        }

        .icon-container {
        flex-shrink: 0;
        margin-left: 24px;
        }

        .main-content {
        flex: 1;
        flex-direction: row;
        gap: 16px;
        }

        .requirements-section {
        flex: 1;
        }

        .action-section {
        flex: 1;
        display: flex;
        align-items: flex-start;
        }

        .action-button {
        width: 100%;
        min-height: 60px;
        }
    }

    @media (min-width: 1024px) {
        .container {
        padding: 32px;
        }

        .title {
        font-size: 28px;
        margin-bottom: 24px;
        }

        .content-wrapper {
        gap: 24px;
        }

        .main-content {
        gap: 24px;
        }
    }
</style>
