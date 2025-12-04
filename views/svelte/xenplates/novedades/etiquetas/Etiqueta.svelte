<script>

</script>

<div>
    {#key etiquetas}
		<div class="container">
			<div class="header-section">
				<div class="title-row">
					<h3 class="section-title">🏷️ Gestión de Etiquetas</h3>
					<span class="counter">{etiquetas.filter(tag => tag.nombre).length}/{MAX_ETIQUETAS}</span>
				</div>
				<p class="description">
					Organiza tus novedades con etiquetas personalizadas. Haz clic en ➕ para crear nuevas etiquetas o ✏️ para editarlas.
				</p>
				<p class="description">
					Si quedan vacias simplemente no se mostraran en la novedad.
				</p>

				<!-- <p>Máximo {MAX_ETIQUETAS} etiquetas</p> -->
				<div class="grid">
					{#each etiquetas as tag}
						{#if tag.nombre}
							<div class="chip etiqueta-{tag.Y}">
								<span class="text"><i class="bi bi-tag"></i> {tag.nombre}</span>
								<button class="edit-btn" on:click={() => editar(tag)}>✏️</button>
							</div>
						{:else}
							<div class="chip etiqueta-0">
								<span class="text">🏷️ Vacío</span>
								<button class="edit-btn" on:click={() => editar(tag)}>➕</button>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/key}
</div>