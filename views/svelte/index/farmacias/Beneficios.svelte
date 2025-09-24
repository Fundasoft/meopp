<script>
</script>

<div class="benefits-container">
    <!-- Título principal -->
    <div class="main-title">
        <h2>Beneficios Exclusivos en Nuestras Farmacias</h2>
        <div class="title-line"></div>
    </div>

    <!-- Información del convenio -->
    <div class="agreement-info">
        <h3>Convenio con Farmacias de la Asociación Bancaria Río Negro</h3>
        <p>
        La Mutual de Empleados y Obreros Petroleros Privados firmó un convenio especial de reciprocidad 
        con la Asociación Bancaria de Río Negro, brindándote acceso a beneficios exclusivos en una amplia 
        red de farmacias.
        </p>
    </div>

    <!-- Información de contacto -->
    <div class="contact-card">
        <h3 class="contact-title">ASOCIACIÓN MUTUAL BANCARIOS DE RÍO NEGRO</h3>
        <p class="contact-subtitle">ADMINISTRACIÓN CENTRAL</p>
        
        <div class="contact-grid">
        <!-- Dirección -->
        <div class="contact-item">
            <i class="bi bi-geo-alt contact-icon"></i>

            <div class="contact-text">
            <p class="main">Jujuy 1007 esquina Güemes</p>
            <p class="sub">GENERAL ROCA</p>
            </div>
        </div>
        
        <!-- Teléfonos -->
        <div class="contact-item">
            <i class="bi bi-telephone contact-icon"></i>
            <div class="contact-text">
            <p class="main">0298-4428757</p>
            <p class="sub">0298-4426343</p>
            </div>
        </div>
        
        <!-- Email -->
        <div class="contact-item">
            <i class="bi bi-envelope-fill contact-icon"></i>
            <div class="contact-text">
            <p class="main">bancariaosp@gmail.com</p>
            </div>
        </div>
        </div>
    </div>

    <!-- Botón principal -->
    <div class="main-button-container">
        
        <a class="main-button" href="./documents/pdf/farmacias-Asociacion-bancaria-rio-Negro.pdf" target="_blank" rel="noopener noreferrer">
            <span>Conocé Todas las Farmacias</span>
            <i class="bi bi-filetype-pdf"></i>
        </a>

    </div>

    <!-- Farmacias Externas -->
    <div class="external-section">
        <h3 class="external-title">Farmacias Externas</h3>
        
        <div class="external-buttons">
            
        <!-- <a class="external-button" href="./documents/pdf/camara-neuquina-de-farmacias.pdf" target="_blank" rel="noopener noreferrer">
            <span>Cámara Neuquina de Farmacias</span>
            <i class="bi bi-clipboard2-plus icon-external"></i>
        </a> -->

        <a class="external-button" href="./documents/pdf/listado-farmacias.pdf" target="_blank" rel="noopener noreferrer">
            <span>Listado de Farmacias</span>
            <i class="bi bi-clipboard2-plus icon-external"></i>
        </a>
        
        </div>
    </div>
</div>


<style>

.main-title {
    text-align: center;
    margin-bottom: 32px;
}

.main-title h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: var(--green-darker);
    margin: 0 0 16px 0;
}

.title-line {
    width: 96px;
    height: 4px;
    margin: 0 auto;
    border-radius: 2px;
    background-color: var(--green-neon-normal);
}

.agreement-info {
    margin-bottom: 32px;
    padding: 24px;
    border-radius: 8px;
    border-left: 4px solid var(--green-04);
    background-color: var(--green-light);
}

.agreement-info h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--green-darker);
    margin-top: 0;
}

.agreement-info p {
    color: #374151;
    line-height: 1.6;
    margin: 0;
}

.contact-card {
    margin-bottom: 32px;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    background-color: var(--green-light-50);
    color: var(--green-darker);
}

.contact-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
    color: var(--green-03);
    margin-top: 0;
}

.contact-subtitle {
    text-align: center;
    font-size: 0.875rem;
    margin-bottom: 16px;
    opacity: 0.9;
    margin-top: 0;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
}

@media (min-width: 768px) {
    .contact-grid {
    grid-template-columns: repeat(3, 1fr);
    }
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 12px;
}

.contact-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    fill: var(--green-05);
}

.contact-text {
    margin: 0;
}

.contact-text .main {
    font-weight: 500;
    margin: 0;
}

.contact-text .sub {
    font-size: 0.875rem;
    opacity: 0.9;
    margin: 0;
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

.external-section {
    border-top: 2px solid var(--green-light);
    padding-top: 32px;
}

.external-title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
    color: var(--green-darker);
    margin-top: 0;
}

.external-buttons {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 512px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .external-buttons {
    grid-template-columns: repeat(2, 1fr);
    }
}

.external-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 16px;
    border-radius: 8px;
    border: 2px solid var(--green-03);
    color: var(--green-darker);
    background-color: var(--green-light-50);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.external-button:hover {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.icon-external {
    width: 16px;
    height: 16px;
    fill: currentColor;
}

.benefits-container {
    margin-top: 2rem;
}

@media (max-width: 767px) {
    .main-title h2 {
    font-size: 1.5rem;
    }
    
}
</style>