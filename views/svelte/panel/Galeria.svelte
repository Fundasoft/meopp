
<script>
	
	import Spinner from './Spinner.svelte';

	let promesa = api.images('publicidad');

</script>

{#await promesa} <Spinner/> {:then imagenes}
	<div class="album py-5 bg-body-tertiary">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				{#each imagenes as img}
				<div class="col">
					<div class="card shadow-sm">
						<img src="{img.src}" alt="{""}">
						<div class="card-body">
							<p class="card-text">{img.nombre}</p>						
						</div>
					</div>
				</div>
				{/each}
			</div>
		</div>
	</div>
{/await}
