<script>
    // COMPONENTE INFO - CONTACTO

    const contactInfo = {
        telefonos: {
            numeros: ['(299) 442 4505', '443 9842'],
            internos: ['Int 1513', '1512', '1511']
        },
        whatsapp: [
            {
                label: 'Consultas MEOPP (subsidios / ópticas / cobranza)',
                numero: '+54 9 299 4604193'
            },
            {
                label: 'Agrupación Jubilados',
                numero: '+54 9 299 4122082'
            }
        ],
        emails: [
            {
                tipo: 'Subsidios / Ópticas / Jubilados',
                email: 'consultasmeopp@ospepri.org.ar'
            },
            {
                tipo: 'Cobranza Ayudas Económicas',
                email: 'ayudasmeopp@ospepri.org.ar'
            },
            {
                tipo: 'Información general',
                email: 'info@meopp.com'
            }
        ],
        horario: 'Lun a Vie — 08:30 a 16:30 hs'
    };

    function enviarMail(destinatario) {
        const to = encodeURIComponent(destinatario);
        const subject = encodeURIComponent('');
        const body = encodeURIComponent('');
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
        } else {
            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
            window.open(url, '_blank');
        }
    }
</script>

<section class="contacto-wrapper">
    <div class="contacto-inner">
        <div
            class="seccion invertido"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="400"
        >
            <div class="imagen-panel">
                <svg class="svg-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    <path d="M14 2C16.2091 2 18 3.79086 18 6"/>
                    <path d="M14 6C15.1046 6 16 6.89543 16 8"/>
                </svg>
            </div>

            <div class="contenido">
                <h2 class="seccion-titulo">Contactanos</h2>

                <div class="contact-sections">
                    <!-- Teléfonos -->
                    <div class="contact-section">
                        <i class="bi bi-telephone-fill contact-icon"></i>
                        <div class="contact-content">
                            <span class="section-label">Teléfonos</span>
                            <div class="phone-group">
                                <div class="phone-numbers">
                                    {#each contactInfo.telefonos.numeros as numero, i}
                                        <span class="phone-number">{numero}</span>
                                        {#if i < contactInfo.telefonos.numeros.length - 1}
                                            <span class="separator">|</span>
                                        {/if}
                                    {/each}
                                </div>
                                <span class="internos">{contactInfo.telefonos.internos.join(' – ')}</span>
                            </div>
                        </div>
                    </div>

                    <!-- WhatsApp -->
                    <div class="contact-section">
                        <i class="bi bi-whatsapp contact-icon"></i>
                        <div class="contact-content">
                            <span class="section-label">WhatsApp</span>
                            <div class="whatsapp-group">
                                {#each contactInfo.whatsapp as wa}
                                    <div class="whatsapp-item">
                                        <span class="wa-label">{wa.label}</span>
                                        <span class="wa-number">{wa.numero}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>

                    <!-- Emails -->
                    <div class="contact-section">
                        <i class="bi bi-envelope-fill contact-icon"></i>
                        <div class="contact-content">
                            <span class="section-label">Email</span>
                            {#each contactInfo.emails as emailInfo}
                                <div class="email-group">
                                    <span class="email-label">{emailInfo.tipo}:</span>
                                    <button
                                        class="email-link"
                                        on:click={() => enviarMail(emailInfo.email)}
                                        aria-label="Enviar email a {emailInfo.email}"
                                    >
                                        {emailInfo.email}
                                    </button>
                                </div>
                            {/each}
                        </div>
                    </div>

                    <!-- Horario -->
                    <div class="contact-section">
                        <i class="bi bi-clock-fill contact-icon"></i>
                        <div class="contact-content">
                            <span class="section-label">Horario de atención</span>
                            <span class="horario-text">{contactInfo.horario}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    .contacto-wrapper {
        padding: 3rem 1.5rem;
        position: relative;
        overflow: hidden;
        background: rgba(0, 0, 0, 0.25);

    }

    .contacto-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--green-04), var(--green-neon-normal), var(--green-05));
    }

    .contacto-inner {
        max-width: 900px;
        margin: 0 auto;
    }

    .seccion {
        display: flex;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        border: 1px solid var(--green-03-50);
    }

    .seccion.invertido {
        flex-direction: row-reverse;
    }

    .contenido {
        flex: 1;
        padding: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        justify-content: center;
        background: linear-gradient(135deg, var(--dark), var(--green-01));

    }

    .seccion-titulo {
        color: var(--green-neon-normal);
        font-size: 1.4rem;
        font-weight: 600;
        padding-bottom: 0.6rem;
        border-bottom: 2px solid var(--green-03);
        position: relative;
        display: inline-block;
    }

    .seccion-titulo::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 30px;
        height: 2px;
        background: var(--green-neon-normal);
    }

    .imagen-panel {
        width: 220px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--green-02);
        padding: 2rem;
    }

    .svg-icon {
        width: 100px;
        height: 100px;
        stroke: var(--green-neon-normal);
        fill: none;
        stroke-width: 1.5;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    /* Secciones de contacto */
    .contact-sections {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }

    .contact-section {
        display: flex;
        align-items: flex-start;
        gap: 0.8rem;
    }

    .contact-icon {
        color: var(--green-neon-normal);
        font-size: 1rem;
        flex-shrink: 0;
        margin-top: 3px;
    }

    .contact-content {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .section-label {
        color: var(--green-light);
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    /* Teléfonos */
    .phone-group {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

    .phone-numbers {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex-wrap: wrap;
    }

    .phone-number {
        color: var(--white);
        font-size: 1rem;
        font-weight: 500;
    }

    .separator {
        color: var(--green-04);
        font-weight: 300;
    }

    .internos {
        color: var(--green-light);
        font-size: 0.85rem;
        font-style: italic;
    }

    /* WhatsApp */
    .whatsapp-group {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .whatsapp-item {
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }

    .wa-label {
        color: var(--green-light);
        font-size: 0.82rem;
    }

    .wa-number {
        color: var(--green-neon-normal);
        font-size: 0.95rem;
        font-weight: 500;
    }

    /* Emails */
    .email-group {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    .email-label {
        color: var(--green-light);
        font-size: 0.82rem;
        font-weight: 500;
    }

    .email-link {
        background: none;
        border: none;
        color: var(--white);
        font-size: 0.9rem;
        text-align: left;
        cursor: pointer;
        padding: 0;
        text-decoration: underline;
        text-decoration-color: var(--green-03);
        transition: var(--transition);
        font-family: inherit;
    }

    .email-link:hover {
        color: var(--green-neon-normal);
        text-decoration-color: var(--green-neon-normal);
    }

    .email-link:focus {
        outline: 2px solid var(--green-neon-normal);
        outline-offset: 2px;
        border-radius: 2px;
    }

    /* Horario */
    .horario-text {
        color: var(--white);
        font-size: 0.95rem;
    }

    /* Responsive */
    @media (max-width: 700px) {
        .seccion,
        .seccion.invertido {
            flex-direction: column;
        }

        .imagen-panel {
            width: 100%;
            min-height: 120px;
            padding: 2rem;
        }

        .svg-icon {
            width: 70px;
            height: 70px;
        }

        .phone-numbers {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.2rem;
        }

        .separator {
            display: none;
        }

        .contenido {
            padding: 1.75rem 1.25rem;
        }
    }

    @media (max-width: 480px) {
        .contacto-wrapper {
            padding: 2rem 1rem;
        }

        .seccion-titulo {
            font-size: 1.2rem;
        }

        .phone-number {
            font-size: 0.9rem;
        }
    }
</style>