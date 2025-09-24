<script>
	const autoridades = [
		{
			nombre: 'Marcelo Rucci',
			cargo: 'Secretario General',
			imagen: './images/meopp/Marcelo_Rucci.webp'
		},
		{
			nombre: 'Guillermo Leiton',
			cargo: 'Presidente',
			imagen: './images/meopp/Guillermo_Leiton.webp'
		}
	]
</script>

<section class="autoridades-section">
	<h2 class="page-title">Autoridades</h2>

	{#each autoridades as autoridad }	
		<div class="autoridades-card">
			<div class="autoridad-container">
				<p class="autoridad-cargo">{autoridad.cargo}</p>
				<div class="imagen-container">
					<img 
						src={autoridad.imagen || "/placeholder.svg"} 
						alt="Foto de {autoridad.nombre}"
						class="autoridad-imagen"
					/>
				</div>
				<div class="autoridad-info">
					<h3 class="autoridad-nombre">{autoridad.nombre}</h3>
				</div>
			</div>
		</div>
	{/each}

</section>

<style>

	.autoridades-card {
		background: var(--white);
		border-radius: 16px;
		padding: 30px;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
		text-align: center;
		max-width: 400px;
		margin: 2rem auto;
	}

	.page-title {
		/* font-size: 1.5rem; */
		color: var(--green-darker);
		margin: 0 0 20px 0;
		font-weight: 600;
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 2px solid var(--green-light);
	}
	
	/* .section-title {
		color: var(--green-darker);
		font-size: 1.8rem;
		margin: 0 0 25px 0;
		font-weight: 600;
		border-bottom: 2px solid var(--green-light);
		padding-bottom: 10px;
	} */
	
	.autoridad-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
	}
	
	.imagen-container {
		position: relative;
	}
	
	.autoridad-imagen {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
		border: 4px solid var(--green-04);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
		transition: var(--transition);
	}
	
	.autoridad-imagen:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
	}
	
	.autoridad-info {
		text-align: center;
	}
	
	.autoridad-nombre {
		color: var(--green-darker);
		font-size: 1.3rem;
		margin: 0 0 5px 0;
		font-weight: 600;
	}
	
	.autoridad-cargo {
		color: var(--green-03);
		font-size: 1rem;
		margin: 0;
		font-weight: 500;
	}
	
	@media (max-width: 768px) {
		.autoridades-section {
			padding: 20px;
		}
		
		.autoridad-imagen {
			width: 120px;
			height: 120px;
		}
		
		.autoridad-nombre {
			font-size: 1.2rem;
		}
	}
</style>
