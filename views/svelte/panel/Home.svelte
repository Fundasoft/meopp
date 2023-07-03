<script>
  
	import { onMount } from "svelte";

	let imagenes = [], section;

	api.images('publicidad').then( respuesta => {
		imagenes = respuesta;
	});

	let estilo = 'light'; // dark
	let id = generarID();

  onMount(() => {
  	section.append(ven.h1({titulo:'Muy bueno'}));  
  });
	

</script>


<section bind:this={section}>	
	<div id="{id}" class="carousel carousel-{estilo} slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			{#each imagenes as img,pos}
				<button type="button" data-bs-target="{'#'+id}" data-bs-slide-to="{pos}" class="{pos?'':'active'}" aria-current="{pos?'false':'true'}" aria-label="Slide {pos+1}"></button>
			{/each}
		</div>
		<div class="carousel-inner">
			{#each imagenes as img,pos}
				<div class="carousel-item active" data-bs-interval="10000">
					<img src="{img.src}" class="d-block w-100" alt="{img.nombre}">
					<div class="carousel-caption d-none d-md-block">
						<h5>First slide label</h5>
						<p>{img.nombre}</p>
					</div>
				</div>
			{/each}
		</div>
		<button class="carousel-control-prev" type="button" data-bs-target="{'#'+id}" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="{'#'+id}" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>
</section>

