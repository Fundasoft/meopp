<script>
	function logout(){
			fetch('logout', {
					method: 'POST',
					headers:{'Content-Type':'application/json;charset=utf-8'}
					})
					.then ( response => response.json())
					.then( exit => {
							if (exit) 
							window.location = 'index.html';
					}).catch((error) => {
									console.error('Error:', error);
			});
	}
</script>

<style>
 button {
	 font-size:20px;
 }
</style>
<!--
<nav>
	<h2>Panel</h2>
	<button on:click={logout}> Logout </button>
</nav>
-->