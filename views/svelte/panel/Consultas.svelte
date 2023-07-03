<script>
	let promesa = api.consultas.buscar();
</script>

{#await promesa}
	<div class="d-flex justify-content-center">
		<div class="spinner-border m-5" role="status">
			<span class="visually-hidden"></span>
		</div>
	</div>
{:then tabla} 
	<div class="album py-5 bg-body-tertiary">
		<div class="container">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
				<table class="table table-striped">
					<thead>
						<tr>
						{#each Object.keys(tabla[0]||{}) as titulo}
							<th>{titulo}</th>
						{/each}
						</tr>
					</thead>
					<tbody>
					{#each tabla as row}
						<tr>
						{#each Object.values(row) as celda}
							<th>{celda}</th>
						{/each}
						</tr>
					{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
{/await}

