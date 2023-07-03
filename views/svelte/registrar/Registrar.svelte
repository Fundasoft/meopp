<script>

	import { onMount} from 'svelte';
	
	let psw = '', repsw = '', usr = '', danger, success;

	api.logged().then( logged => logged ? window.location = 'panel.html' : 0);

	function clear(){
		mensaje();
	}
	
	function mensaje(m='',contenedor=danger){
		contenedor.innerText = m, contenedor.style.display=m?'block':'none';
	}

	function registrar() {
		
		if ( validar(this) && psw === repsw ) {
			api.registrar(usr,psw).then( registrado => {
    	  if (registrado==ERR){
	    	  mensaje(ERR.message)
    	  } else {    	    
    	    psw = '', repsw = '', usr = '';
    	    mensaje('Usuario registrado con exito',success);
    	    setTimeout(e=>window.location = 'login.html', 1500);
    	  }
			});
		} else {
			mensaje('Complete los campos y genere una contraseña que coinsidir');
		}

	}

	onMount(()=>{
		
		// parche
		setTimeout( e=>[...document.querySelectorAll('[readonly]')].forEach(input=>input.removeAttribute('readonly')), 500);
		
	})	  
</script>

<div class="container-fluid"> 
  <div class="row justify-content-center align-items-center fs_bg">
      <div class="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-4 text-center p-5 bg-dark bg-opacity-50 rounded">
          <img src="images/logo/light.png" class="img-fluid mb-4" alt="login">
          <h4 class="text-center text-white mb-3">REGISTRO</h4>
          <form class="mb-4">
              <input class="form-control mb-3" readonly type="text" on:keyup={clear} bind:value={usr} placeholder="Nick" required>
              <input class="form-control mb-3" readonly type="password" on:keyup={clear} bind:value={psw} placeholder="Password"  pattern=".&#123;5,12&#125;" required>
							<input class="form-control mb-3" readonly type="password" on:keyup={clear} bind:value={repsw} placeholder="Password" pattern=".&#123;5,12&#125;" required>
              <div bind:this={danger} style="display:none;" class="alert alert-danger" role="alert"></div>
              <div bind:this={success} style="display:none;" class="alert alert-success" role="alert"></div>
              <input class="btn btn-primary w-100" type="button" value="Registrar" on:click={registrar}>
          </form>
          <div>
              <a class="text-white" href="index.html">INICIO</a>
              <p class="d-inline text-white"> - </p>
              <a class="text-white" href="login.html">INGRESAR</a>
          </div>
          <div class="mt-5 text-center"><a style="text-decoration: none;" href="http://fundasoft.org"><h5 style="color: gainsboro;">&#129665; FUNDASOFT</h5></a></div>
      </div>
  </div>
</div>
    
<style>
	.fs_bg {
    background: url("./../images/fondos/login.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh; 
	} 
</style>

