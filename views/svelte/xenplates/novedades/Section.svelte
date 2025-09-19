<script>
    // Se utiliza como seccion para una onepage

	import Swiper from './../sliders/Swiper.svelte';

    const PATH_IMG_NOVEDADES = "img/novedades";
    const PATH_NOVEDADES = `novedades.html`;

</script>

<section>
    COMPONENTE SECTION

    <!-- svelte-ignore missing-declaration --> 
    <Swiper 
        value={NOVEDADES.read(3,[_habilitada,IGUAL,1])} 
        path={PATH_IMG_NOVEDADES} 
        href={PATH_NOVEDADES}
        />

</section>

