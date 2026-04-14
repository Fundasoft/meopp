<script>
	const currentYear = new Date().getFullYear();
	
	const socialLinks = [
		{
			name: 'Facebook',
			icon: "facebook",
			url: 'https://www.facebook.com/meopp.mutual',
			color: '#1877F2'
		},
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
			texto: 'Afiliaciones', 
			url: "index.html?render=afiliaciones" 
		},
		{ 
			texto: 'Autoridades', 
			url: "index.html?render=autoridades"
		}
	];
	
	const contactInfo = {
		telefonos: [
			{ 
				tipo: 'principal',
				numeros: ['(299) 442 4505', '443 9842'],
				internos: ['Int 1513', '1512', '1511']
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
		direcciones: [
			{ 
				direccion: 'Santa Cruz N° 267',
				detalle: 'Edificio MEOPP (Atención en general)'
			},
			{ 
				direccion: 'Santa Cruz N° 356',
				detalle: 'Agrupación de Jubilados'
			}
		],
		horario: 'Lun-Vie 8:30-16:30'
	};

	function enviarMail(destinatario) {
		const to = encodeURIComponent(destinatario);
		const subject = encodeURIComponent("");
		const body = encodeURIComponent("");

		const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

		if (isMobile) {
			window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
		} else {
			const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
			window.open(url, "_blank");
		}
	}
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
					<div class="contact-sections">
						<!-- Teléfonos -->
						<div class="contact-section">
							<div class="contact-item">
								<i class="bi bi-telephone-fill contact-icon"></i>
								<div class="contact-content">
									{#each contactInfo.telefonos as tel}
										<div class="phone-group">
											<div class="phone-numbers">
												{#each tel.numeros as numero, i}
													<span class="phone-number">{numero}</span>
													{#if i < tel.numeros.length - 1}
														<span class="separator">|</span>
													{/if}
												{/each}
											</div>
											{#if tel.internos.length > 0}
												<div class="internos">
													{tel.internos.join(' - ')}
												</div>
											{/if}
										</div>
									{/each}
								</div>
							</div>
						</div>

						<!-- Emails -->
						<div class="contact-section">
							<i class="bi bi-envelope-fill contact-icon"></i>
							<div class="contact-content">
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

						<!-- Direcciones -->
						<div class="contact-section">
							<i class="bi bi-geo-alt-fill contact-icon"></i>
							<div class="contact-content">
								{#each contactInfo.direcciones as dir}
									<div class="address-group">
										<span class="address-main">{dir.direccion}</span>
										<span class="address-detail">{dir.detalle}</span>
									</div>
								{/each}
							</div>
						</div>

						<!-- Horario -->
						<div class="contact-section">
							<div class="contact-item">
								<i class="bi bi-clock-fill contact-icon"></i>
								<span class="contact-text">{contactInfo.horario}</span>
							</div>
						</div>
					</div>
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
							<i class="bi bi-{social.icon}"></i>
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
					&copy; {currentYear} <a class="login" aria-current="page" href="./login.html">MEoPP.</a> Todos los derechos reservados.
				</p>
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

	.login {
		text-decoration: none;
		color: var(--green-neon-normal);
		transition: var(--transition);
	}

	.login:hover {
		color: var(--green-04);
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
		gap: 2rem;
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
	.contact-sections {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.contact-section {
		display: flex;
		align-items: flex-start;
		gap: 0.7rem;
	}

	.contact-item {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}

	.contact-icon {
		color: var(--green-neon-normal);
		font-size: 1rem;
		flex-shrink: 0;
		margin-top: 0.2rem;
	}

	.contact-content {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		flex: 1;
	}

	.contact-text {
		color: var(--white);
		font-size: 0.95rem;
	}

	/* Teléfonos */
	.phone-group {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.phone-numbers {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.phone-number {
		color: var(--white);
		font-size: 0.95rem;
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

	/* Emails */
	.email-group {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.email-label {
		color: var(--green-light);
		font-size: 0.85rem;
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

	/* Direcciones */
	.address-group {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.address-main {
		color: var(--white);
		font-size: 0.95rem;
		font-weight: 500;
	}

	.address-detail {
		color: var(--green-light);
		font-size: 0.85rem;
		font-style: italic;
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
		justify-content: center;
		padding: 0.8rem;
		background: var(--white);
		color: var(--dark);
		text-decoration: none;
		border-radius: 50%;
		font-weight: 500;
		font-size: 1.2rem;
		transition: var(--transition);
		border: 2px solid transparent;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		width: 45px;
		height: 45px;
	}

	.social-button:hover {
		background: var(--social-color);
		color: var(--white);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		border-color: var(--social-color);
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
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.copyright {
		color: var(--green-light);
		font-size: 0.9rem;
		margin: 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.footer {
			padding: 2rem 1rem 1rem;
		}

		.footer-columns {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.logo-column {
			text-align: center;
			align-items: center;
		}

		.footer-logo {
			max-width: 150px;
		}

		.contact-column {
			order: -1;
		}

		.phone-numbers {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.3rem;
		}

		.separator {
			display: none;
		}

		.social-buttons {
			gap: 0.7rem;
		}

		.footer-bottom-content {
			flex-direction: column;
			text-align: center;
		}
	}

	@media (max-width: 480px) {
		.footer {
			padding: 1.5rem 0.75rem 0.75rem;
		}

		.footer-columns {
			gap: 1.5rem;
		}

		.column-title {
			font-size: 1rem;
		}

		.contact-sections {
			gap: 1rem;
		}

		.phone-number,
		.email-link,
		.address-main,
		.contact-text {
			font-size: 0.85rem;
		}

		.email-label,
		.address-detail,
		.internos {
			font-size: 0.8rem;
		}

		.social-button {
			width: 40px;
			height: 40px;
			font-size: 1.1rem;
		}
	}
</style>