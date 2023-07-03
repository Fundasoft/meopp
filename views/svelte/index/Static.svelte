<script>

  let nombre = '';
	
	STATIC.then(valor=>nombre=valor.nombre+' - TEL.: '+valor.telefono);
	
</script>
 
<style>
	h2 {color:blue} 
</style>
  
<div>
  <h2>STATIC {nombre}</h2>
</div>
