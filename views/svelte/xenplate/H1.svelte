<script>
	export let titulo = '';
	
	let numero = 0;
	
	export function GET(){
		return numero;
	}
	
	function onshow(e){
		let [num1,num2,saludo] = e.detail;
		console.log('onshow',e,num1,num2,saludo);
	}
	
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<section style="height:100%;background:red" on:show={onshow}>
	<h1 on:click={e=>numero++}>
		{titulo} {numero}
	</h1>
</section>

<style>
	h1 {
		color: orange
	}
</style>
