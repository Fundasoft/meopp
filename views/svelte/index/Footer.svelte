<script>
	// import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-svelte';
	
	const currentYear = new Date().getFullYear();
	
	const socialLinks = [
		{
			name: 'Facebook',
			icon: "facebook",
			url: 'https://www.facebook.com/meopp.mutual',
			color: '#1877F2'
		},
		// {
		// 	name: 'X (Twitter)',
		// 	// icon: Twitter,
		// 	url: 'https://x.com/meopp',
		// 	color: '#000000'
		// },
		{
			name: 'Instagram',
			icon: "instagram",
			url: 'https://www.instagram.com/meopp.mutual/',
			color: '#E4405F'
		},
		{
			name: 'YouTube',
			icon: "youtube",
			url: 'https://www.youtube.com/channel/UCNNd12EOZiMlGbLO3fHK0hg?view_as=subscriber',
			color: '#FF0000'
		}
	];
	
	const enlaces = [
		{ 
			texto: 'Nosotros', 
			url: '#' 
		},
		{ 
			texto: 'Servicios', 
			url: '#servicios' 
		},
		// { 
		// 	texto: 'Beneficios', 
		// 	url: '/beneficios' 
		// },
		{ 
			texto: 'Contacto', 
			url: '#' 
		}
	];
	
	const contactInfo = [
		{ 
			// icon: Phone, 
			texto: '2994122082' 
		},
		{ 
			// icon: Mail, 
			texto: 'info@meopp.com' 
		},
		{ 
			// icon: MapPin, 
			texto: 'Santa Cruz 356, Neuquén' 
		},
		{ 
			// icon: Clock, 
			texto: 'Lun-Vie 8:30-16:30' 
		}
	];
</script>

<footer class="footer">
	<div class="footer-container">
		<!-- Sección principal del footer -->
		<div class="footer-main">
			<div class="footer-columns">
				<!-- Columna del logo -->
				<div class="column logo-column">
					<div class="logo-container">
						<img src="./images/logo/light.png" alt="MEoPP logo" class="footer-logo">
					</div>
					<p class="logo-description">
						Mutual de Empleados y Obreros de la Provincia del Neuquén
					</p>
				</div>

				<!-- Columna de enlaces -->
				<div class="column links-column">
					<h4 class="column-title">Enlaces Rápidos</h4>
					<ul class="links-list">
						{#each enlaces as enlace}
							<li>
								<a href={enlace.url} class="footer-link">
									{enlace.texto}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Columna de contacto -->
				<div class="column contact-column">
					<h4 class="column-title">Contacto</h4>
					<ul class="contact-list">
						{#each contactInfo as info}
							<li class="contact-item">
								<!-- <info.icon class="contact-icon" size={16} /> -->
								<span>{info.texto}</span>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Columna de información legal -->
				<div class="column legal-column">
					<h4 class="column-title">Información Legal</h4>
					<div class="legal-info">
						<p class="legal-text">
							Inscripta en el Registro Nacional de Mutualidades de la Provincia de Neuquén.
						</p>
						<ul class="legal-list">
							<li>Matrícula n°5</li>
							<li>Resolución n°511 del 20/12/73</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Sección de redes sociales -->
		<div class="footer-social">
			<div class="social-container">
				<!-- <h4 class="social-title">Síguenos en nuestras redes</h4> -->
				<div class="social-buttons">
					{#each socialLinks as social}
						<a 
							href={social.url} 
							class="social-button"
							aria-label="Seguir en {social.name}"
							target="_blank"
							rel="noopener noreferrer"
							style="--social-color: {social.color}"
						>
							<!-- <social.icon class="social-icon" size={20} /> -->
							<i class="bi bi-{social.icon}"></i>
							<span class="social-name">{social.name}</span>
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- Línea divisoria -->
		<div class="footer-divider"></div>

		<!-- Footer bottom -->
		<div class="footer-bottom">
			<div class="footer-bottom-content">
				<p class="copyright">
					&copy; {currentYear} MEoPP. Todos los derechos reservados.
				</p>
				<!-- 
				<div class="footer-bottom-links">
					<a href="/privacidad" class="bottom-link">Política de Privacidad</a>
					<span class="separator">•</span>
					<a href="/terminos" class="bottom-link">Términos de Uso</a>
				</div> 
				-->
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: linear-gradient(135deg, var(--dark), var(--green-01));
		color: var(--white);
		padding: 3rem 1rem 1rem;
		position: relative;
		overflow: hidden;
	}
	
	.footer::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, var(--green-04), var(--green-neon-normal), var(--green-05));
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-main {
		margin-bottom: 1rem;
	}

	.footer-columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		text-align: left;
	}

	/* Columna del logo */
	.logo-column {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.logo-container {
		margin-bottom: 1rem;
	}

	.footer-logo {
		max-width: 200px;
		height: auto;
		filter: brightness(1.1);
		transition: var(--transition);
	}

	.footer-logo:hover {
		filter: brightness(1.3);
		transform: scale(1.02);
	}

	.logo-description {
		color: var(--green-light);
		font-size: 0.9rem;
		line-height: 1.4;
		margin: 0;
	}

	/* Títulos de columnas */
	.column-title {
		color: var(--green-neon-normal);
		font-size: 1.1rem;
		font-weight: 600;
		margin: 0 0 1rem 0;
		padding-bottom: 0.5rem;
		border-bottom: 2px solid var(--green-03);
		position: relative;
	}

	.column-title::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 30px;
		height: 2px;
		background: var(--green-neon-normal);
	}

	/* Enlaces */
	.links-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.links-list li {
		margin-bottom: 0.7rem;
	}

	.footer-link {
		color: var(--white);
		text-decoration: none;
		font-size: 0.95rem;
		transition: var(--transition);
		display: inline-block;
		position: relative;
	}

	.footer-link::before {
		content: '→';
		opacity: 0;
		transform: translateX(-10px);
		transition: var(--transition);
		margin-right: 5px;
		color: var(--green-neon-normal);
	}

	.footer-link:hover {
		color: var(--green-neon-normal);
		transform: translateX(5px);
	}

	.footer-link:hover::before {
		opacity: 1;
		transform: translateX(0);
	}

	/* Información de contacto */
	.contact-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.7rem;
		margin-bottom: 0.8rem;
		color: var(--white);
		font-size: 0.95rem;
	}

	:global(.contact-icon) {
		color: var(--green-neon-normal);
		flex-shrink: 0;
	}

	/* Información legal */
	.legal-info {
		color: var(--green-light);
	}

	.legal-text {
		font-size: 0.9rem;
		line-height: 1.4;
		margin: 0 0 1rem 0;
	}

	.legal-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.legal-list li {
		font-size: 0.9rem;
		margin-bottom: 0.5rem;
		padding-left: 1rem;
		position: relative;
	}

	.legal-list li::before {
		content: '•';
		color: var(--green-neon-normal);
		position: absolute;
		left: 0;
	}

	/* Sección de redes sociales */
	.footer-social {
		background: rgba(0, 0, 0, 0.2);
		border-radius: 12px;
		padding: 1.5rem;
		border: 1px solid var(--green-03-50);
	}

	.social-container {
		text-align: center;
	}


	.social-buttons {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.social-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.2rem;
		background: var(--white);
		color: var(--dark);
		text-decoration: none;
		border-radius: 25px;
		font-weight: 500;
		font-size: 0.9rem;
		transition: var(--transition);
		border: 2px solid transparent;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.social-button:hover {
		background: var(--social-color);
		color: var(--white);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		border-color: var(--social-color);
	}

	.social-name {
		font-weight: 600;
	}

	/* Divisor */
	.footer-divider {
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--green-03), transparent);
		margin: 1rem 0;
	}

	/* Footer bottom */
	.footer-bottom {
		text-align: center;
	}

	.footer-bottom-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.copyright {
		color: var(--green-light);
		font-size: 0.9rem;
		margin: 0;
	}

	/* .footer-bottom-links {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.bottom-link {
		color: var(--green-light);
		text-decoration: none;
		font-size: 0.85rem;
		transition: var(--transition);
	}

	.bottom-link:hover {
		color: var(--green-neon-normal);
	}

	.separator {
		color: var(--green-03);
		font-size: 0.8rem;
	} */

	/* Responsive */
	@media (max-width: 768px) {
		.footer {
			padding: 2rem 1rem 1rem;
		}

		.footer-columns {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.logo-column {
			text-align: center;
			align-items: center;
		}

		.footer-logo {
			max-width: 150px;
		}

		.social-buttons {
			gap: 0.7rem;
		}

		.social-button {
			padding: 0.6rem 1rem;
			font-size: 0.85rem;
		}

		.footer-bottom-content {
			flex-direction: column;
			text-align: center;
		}

		.footer-bottom-links {
			justify-content: center;
		}
	}

	@media (max-width: 480px) {
		.social-button .social-name {
			display: none;
		}

		.social-button {
			padding: 0.8rem;
			border-radius: 50%;
			width: 45px;
			height: 45px;
			justify-content: center;
		}
	}
</style>
