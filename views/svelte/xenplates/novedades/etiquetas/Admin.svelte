<script>
    import { onMount } from 'svelte';
    
    let contenedor, tabla_etiquetas = table(_NOVEDADES_ETIQUETAS,{
        buttons: [
            VEN_BTN_ADD_WITH_FORM,
            VEN_BTN_DELETE,
            VEN_BTN_SETTING
        ],
        filter: true,
        columns: [
            { key: "nombre", value: ""},
            {
                ...BUTTON,
                title:"Borrar",
                value: fila => {
                    confirm(`¿Desea eliminar la etiqueta?`).accept(v=>{
                        NOVEDADES_ETIQUETAS.delete(fila).then(v=>v?eliminarEtiqueta(fila):false) 
                    })
                },
                icon:"trash",
                style:`color:red;`
            }
        ],
    });


	function eliminarEtiqueta(etiqueta){
		let novedadesLimpias = NOVEDADES.values
			// Paso 1: quedarme solo con las que tienen la etiqueta a borrar
			.filter(n => n.etiquetas.includes(etiqueta.Y))
			// Paso 2: devolver cada una modificada
			.map(n => ({
				Y:n.Y,
				etiquetas: n.etiquetas.filter(e => e !== etiqueta.Y)
			}));;
        if(novedadesLimpias.length){
            NOVEDADES.custom(NOVEDADES_UPDATES,novedadesLimpias).then(v=>{
                NOVEDADES.read();
            })
        }
	};
    
    onMount(()=>{
        contenedor.append(tabla_etiquetas);
    })

    tabla_etiquetas.on(ondelete, (fila,e)=>{
        log.e(e);
        log.fila(fila);
    });
    
</script>

<section class="container">
    <div bind:this={contenedor}></div>

</section>

<style>
    section {
        min-height: 80vh;
        padding-block: 2rem;
    }
</style>
