<script>
	let _generarID = generarID;
</script>
   
<form class="container" data-insert="consultas">
	<div class="alert alert-success" role="alert">
		Formulario enviado correctamente! En breve nos contactactaremos.		
	</div>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		<h2>Consulta</h2>
	</div>
	<div class="mb-3">
		<label for="{_generarID()}" class="form-label">Nombre</label>
		<input type="text" class="form-control" id="{_generarID(true)}" name="nombre" required>
	</div>
	<div class="mb-3">
		<label for="{_generarID()}" class="form-label">Email</label>
		<input type="email" class="form-control" id="{_generarID(true)}" placeholder="name@example.com" name="email" required>
	</div>
	<div class="mb-3">
		<label for="{_generarID()}" class="form-label">Consulta</label>
		<textarea class="form-control" id="{_generarID(true)}" rows="3" name="consulta" required></textarea>
	</div>
	<div class="mb-3">
		<button class="btn btn-primary">Enviar</button>
	</div>
</form>

<style>
form {
	text-align:left!important;
}
</style>