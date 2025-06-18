<script>
    export let ubicacion=[];

    log.UBI(ubicacion)
</script>

<!-- <h1>
    {ubicacion}
</h1> -->

<!-- {#if ubicacion.length} -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe
        class="iframe_map"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q={ubicacion[0]},{ubicacion[1]}&output=embed">
    </iframe>
<!-- {/if}  -->

<style>
    iframe{
        width: 100%;
    }
</style>