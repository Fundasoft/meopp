<script>
	// Puedes agregar lógica aquí si necesitas dinámicamente cambiar cosas
</script>

<footer>
	<div class="footer-container">
		<div class="footer-columns">
			<div class="column">
				<img src="./images/logo/light.png" alt="meopp logo">
			</div>

			<div class="column">
				<h4>Enlaces</h4>
				<ul>
					<li><a href="/nosotros">Nosotros</a></li>
					<li><a href="/servicios">Servicios</a></li>
					<li><a href="/beneficios">Beneficios</a></li>
					<li><a href="/contacto">Contacto</a></li>
				</ul>
			</div>

			<div class="column">
				<h4>Inscripta en el Registro Nacional de Mutualidades de la Provincia de Neuquén.</h4>
				<ul>
					<li>Matrícula n°5.</li>
					<li>Resolución n°511 del 20/12/73.</li>
					<!-- 
					<li>Email: info@meopp.org.ar</li>
								<li>Tel: +54 299 123 4567</li>
								<li>Dirección: Calle Ejemplo 123, Neuquén</li> 
					-->
				</ul>
			</div>
		</div>

		<div class="footer-bottom">
			&copy; {new Date().getFullYear()} MEoPP. Todos los derechos reservados.
		</div>
	</div>
</footer>


<style>
	img{
		max-width: 300px;
	}

	footer {
		background-color: var(--dark);
		/* background-color: var(--green-01); */
		color: white;
		padding: 2rem 1rem;
		text-align: center;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.footer-columns {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		text-align: left;
		gap: 1.5rem;
	}

	.column {
		flex: 1 1 200px;
	}

	.column h4 {
		margin-bottom: 0.5rem;
		font-size: 1.1rem;
		color:var(--green-light);
	}

	.column ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.column li {
		margin-bottom: 0.5rem;
	}

	.column a {
		color: white;
		text-decoration: none;
		font-size: 0.95rem;
		transition: color 0.2s ease;
	}

	.column a:hover {
		color: var(--green-05);
	}

	.footer-bottom {
		margin-top: 2rem;
		font-size: 0.9rem;
		color: #94a3b8;
		border-top: 1px solid var(--green-03);
		padding-top: 1rem;
	}
</style>