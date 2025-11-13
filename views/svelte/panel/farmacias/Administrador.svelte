<script>
    import Ubicacion from "./Ubicacion.svelte";

	let contenedor;
    
    export function onshow() {
        view.buttons = [
            {'-house:Inicio:primary': e => views.inicio()},
        ];
    }
	
	export function onmount(){
        
        contenedor.append(table(_FARMACIAS,{
            filter:true,
			buttons:[
                VEN_BTN_ADD_WITH_FORM,
                VEN_BTN_DELETE,
                VEN_BTN_SETTING
            ],
			columns:[
                {
                    key:"nombre",
                    value:""
                }, 
                {
                    key:"direccion",
                    value:""
                }, 
                {
                    key:"horarios",
                    value:""
                },
                {
                    key:"telefono",
                    value:""
                },
                {
                    ...CUSTOM,
                    key:"ubicacion",
                    icon:"geo-alt",
                    custom:Ubicacion,
                    modal:true,   
                    size:"md"
                },
                {
                    key:"habilitado",
                    value:false
                }
			]
		}));
	}

</script>




<!-- svelte-ignore a11y-click-events-have-key-events -->
<section>
	<div bind:this={contenedor}></div>
</section>

<style>
	
</style>
