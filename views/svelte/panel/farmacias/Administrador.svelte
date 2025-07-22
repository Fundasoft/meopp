<script>
    import Ubicacion from "./Ubicacion.svelte";

	let contenedor;
    
    export function onshow() {
        view.buttons = [
            {'-house:Inicio:primary': e => views.inicio()},
        ];
    }
	
	function onmount(){
        
        contenedor.append(table(_FARMACIAS,{
            filter:true,
			buttons:[
                '++',
                '-',
                'u', 
                'c'
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
                },
                // {
                //     USUARIOS.CREATE({nick:'pepinito'},_SOCIOS,26)
                // }
			]
		}));
	}

</script>




<!-- svelte-ignore a11y-click-events-have-key-events -->
<section on:mount={onmount}>
	<div bind:this={contenedor}></div>
</section>

<style>
	
</style>
