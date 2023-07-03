<script>

	import H1 from './H1.svelte';
	
	function demo_ventana(){
		ventana('zen',H1,{titulo:'Y san wala', cancelar:'CANCELAR'},e=>console.log(e))
	}
	
</script>
   
<div class="container pb-5">
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		<h2>Demo</h2>
	</div>
	<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
		<!-- <input type="file" class="form-control"> -->
		<button on:click={demo_ventana} class="btn btn-primary">Ventana</button>
	</div>
</div>

