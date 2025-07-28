<script>
    import SectionsHero from './SectionsHero.svelte';

	let info = {
		cuotas: {
			inicial:{
				valor:0,
				periodo: 'del 1 al 15 de cada mes'
			},
			tardia: {
				valor:0,
				periodo: 'del 15 al 28 de cada mes'
			}
		},

		contacto: '2994122082 (vía WhatsApp)',
		organizacion: 'Agrupación Jubilados',
		horario: '8:30 a 16:30 hs - Lunes a Viernes',
		direccion: 'Calle Santa Cruz 356, Neuquén'
	};

	async function actualizarCuota(){
		info.cuotas.inicial.valor = await variable(VAR_PUBLIC_JUBILADOS_CUOTA_INICIAL);
		info.cuotas.tardia.valor = await variable(VAR_PUBLIC_JUBILADOS_CUOTA_TARDIA);
	};

	actualizarCuota();
</script>

<SectionsHero 
    image="./images/sectionshero/jubilados.webp" 
    titulo="Jubilados" 
    subtitulo="" />

<section class="container">

    <h1>
        Contacte vía mail o teléfono
    </h1>
    
    <div class="compact-container">
	<div class="info-panel">
		<div class="section cuotas-section">
			<h2 class="section-title">Valores de Cuotas Mensuales</h2>
			<div class="cuotas-grid">
				{#key info}
					<div class="cuota-box">
						<div class="cuota-valor">$ {info.cuotas.inicial.valor ? new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true}).format(info.cuotas.inicial.valor) : "-" }</div>
						<div class="cuota-periodo">{info.cuotas.inicial.periodo}</div>
					</div>
					<div class="cuota-box">
						<div class="cuota-valor">$ {info.cuotas.tardia.valor ? new Intl.NumberFormat('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: true}).format(info.cuotas.tardia.valor) : "-" }</div>
						<div class="cuota-periodo">{info.cuotas.tardia.periodo}</div>
					</div>
				{/key}
			</div>
		</div>
		
		<div class="divider"></div>
		
		<div class="section contact-section">
			<h2 class="section-title">📞 Información de Contacto</h2>
			<div class="contact-grid">
				<div class="contact-item">
					<div class="contact-label">Teléfono:</div>
					<div class="contact-value">{info.contacto}</div>
				</div>
				<div class="contact-item">
					<div class="contact-label">Organización:</div>
					<div class="contact-value">{info.organizacion}</div>
				</div>
			</div>
		</div>
		
		<div class="divider"></div>
		
		<div class="section details-section">
			<h2 class="section-title">Horarios y Ubicación</h2>
			<div class="details-grid">
				<div class="detail-item">
					<div class="detail-icon">🕐</div>
					<div class="detail-content">
						<div class="detail-label">Horario de Atención:</div>
						<div class="detail-value">{info.horario}</div>
					</div>
				</div>
				<div class="detail-item">
					<div class="detail-icon">
                        <i class="bi bi-geo-alt"></i>
                    </div>
					<div class="detail-content">
						<div class="detail-label">Dirección:</div>
						<div class="detail-value">{info.direccion}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    <div class="map">
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe
            class="mb-2"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498.337490114304!2d-68.05245129142403!3d-38.95867485930185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a322b5e79c6ad%3A0x9245a7a092a35999!2sSta.%20Cruz%20356%2C%20Q8300%20Neuqu%C3%A9n!5e0!3m2!1ses-419!2sar!4v1750160813148!5m2!1ses-419!2sar"
            width="100%" 
            height="400" style="border:0;" 
            allowfullscreen="" 
            loading="lazy">
        </iframe>
    </div>
</section>




<style>
    section {
        min-height: 50vh;
        padding-block: 2rem;
    }

    .map {
        padding-block: 0.5rem;
    }

    h1{
        font-size: 1.3rem;
        color: var(--green-03);
    }

	.compact-container {
		max-width: 900px;
		margin: 0 auto;
	}
	
	.info-panel {
		background: var(--white);
		border-radius: 20px;
		padding: 30px;
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
		border: 3px solid var(--green-light);
	}
	
	.section {
		margin-bottom: 25px;
	}
	
	.section:last-child {
		margin-bottom: 0;
	}
	
	.section-title {
		font-size: 1.5rem;
		color: var(--green-darker);
		margin: 0 0 20px 0;
		font-weight: 600;
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 2px solid var(--green-light);
	}
	
	.cuotas-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}
	
	.cuota-box {
		background: linear-gradient(135deg, var(--green-light), var(--white));
		border: 2px solid var(--green-04);
		border-radius: 12px;
		padding: 20px;
		text-align: center;
		transition: var(--transition);
	}
	
	.cuota-box:hover {
		transform: scale(1.02);
		box-shadow: 0 4px 15px var(--green-normal-20);
	}
	
	.cuota-valor {
		font-size: 1.8rem;
		font-weight: bold;
		color: var(--green-darker);
		margin-bottom: 8px;
	}
	
	.cuota-periodo {
		font-size: 1rem;
		color: var(--green-03);
		font-weight: 500;
	}
	
	.contact-grid {
		display: grid;
		gap: 15px;
	}
	
	.contact-item {
		display: flex;
		align-items: center;
		gap: 15px;
		padding: 15px;
		background: var(--green-light);
		border-radius: 10px;
		border-left: 4px solid var(--green-04);
	}
	
	.contact-label {
		font-weight: 600;
		color: var(--green-darker);
		font-size: 1.1rem;
		min-width: 120px;
	}
	
	.contact-value {
		font-size: 1.2rem;
		color: var(--dark);
		font-weight: 500;
	}
	
	.details-grid {
		display: grid;
		gap: 15px;
	}
	
	.detail-item {
		display: flex;
		align-items: flex-start;
		gap: 15px;
		padding: 15px;
		background: var(--green-light);
		border-radius: 10px;
		border-left: 4px solid var(--green-04);
	}
	
	.detail-icon {
		font-size: 1.5rem;
		margin-top: 2px;
	}
	
	.detail-content {
		flex: 1;
	}
	
	.detail-label {
		font-weight: 600;
		color: var(--green-darker);
		font-size: 1.1rem;
		margin-bottom: 5px;
	}
	
	.detail-value {
		font-size: 1.1rem;
		color: var(--dark);
		font-weight: 500;
	}
	
	.divider {
		height: 2px;
		background: linear-gradient(90deg, transparent, var(--green-04), transparent);
		margin: 25px 0;
		border-radius: 1px;
	}
	
	@media (max-width: 768px) {
		.info-panel {
			padding: 20px;
		}
		
		.cuotas-grid {
			grid-template-columns: 1fr;
		}
		
		.cuota-valor {
			font-size: 1.6rem;
		}
		
		.contact-item,
		.detail-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}
		
		.contact-label,
		.detail-label {
			min-width: auto;
		}
	}
</style>
