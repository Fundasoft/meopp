<script>
	async function actualizarCuota(){
		info.cuotas.inicial.valor = await variable(VAR_PUBLIC_JUBILADOS_CUOTA_INICIAL);
		info.cuotas.tardia.valor = await variable(VAR_PUBLIC_JUBILADOS_CUOTA_TARDIA);
	};

	actualizarCuota();
</script>

<section class="container">
    
	<div class="compact-container">
		<div class="info-panel">
			
			<div class="section contact-section">
				<h2 class="section-title">Afiliciones</h2>
				<div class="contact-grid">
					<div class="contact-item">
						<div class="contact-label">Mutual Meopp</div>
						<div class="contact-label">Requisitos para el alta</div>
						<div class="contact-value">El trabajador titular presenta su DNI e informa el nombre de la empresa empleadora, además firma la nota de afiliación correspondiente.</div>
					</div>
				</div>
			</div>
			
			<div class="divider"></div>
		</div>
	</div>
</section>




<style>
    section {
        min-height: 50vh;
        padding-block: 2rem;
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
	
	.contact-grid {
		display: grid;
		gap: 15px;
	}
	
	.contact-item {
		display: flex;
		flex-direction: column;
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
		
		.contact-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 8px;
		}
		
		.contact-label{
			min-width: auto;
		}
	}
</style>
