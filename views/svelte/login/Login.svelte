<script>

	let usr='', psw='', msg;

	api.logged().then( logged => logged ? window.location = 'panel.html' : 0);

	function ingresar(){
		api.login(usr,psw).then( logged => {
      if (logged) 
        window.location = 'panel.html'
      else {
        msg.innerText = 'Login fail';
        msg.style.display = 'block';
       }
		 });		
	}
	  
</script>


<div class="container-fluid"> 
    <div class="row justify-content-center align-items-center fs_bg">
        <div class="col-11 col-sm-8 col-md-7 col-lg-6 col-xl-4 text-center p-5 bg-dark bg-opacity-50 rounded">
            <img src="images/logo/light.png" class="img-fluid mb-4" alt="login">
            <h4 class="text-center text-white mb-3">INGRESAR</h4>
            <form id="f" class="mb-4">
                <input class="form-control mb-3" type="text" bind:value={usr} placeholder="Nick" required>
                <input class="form-control mb-3" type="password" bind:value={psw} placeholder="Password" required>
                <div class="form-check mb-3 text-start">
                    <input type="checkbox" name="recordarme" id="recordarme" class="form-check-input p-2">
                    <label for="recordarme" class="text-white">Recordarme</label>
                </div>
                <div bind:this={msg} style="display:none;" class="alert alert-danger" role="alert"></div>
                <input class="btn btn-primary w-100" type="button" value="Ingresar" on:click={ingresar}>
            </form>
            <div>
                <a class="text-white" href="index.html">INICIO</a>
                <p class="d-inline text-white"> - </p>
                <a class="text-white" href="registrar.html">REGISTRARSE</a>
            </div>
            <div class="mt-5 text-center">
                <a href="http://fundasoft.org" style="display: -webkit-inline-box;text-decoration: none;">
                    <img src="/images/logo/favicon.svg" style="vertical-align:middle;" width="20px" alt="favicon">
                    <h5 id="ct" style="color: gainsboro;">FUNDASOFT</h5>
                </a>
            </div>
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

