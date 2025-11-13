<script>
	let contenedor;
    
    export function onshow() {
        view.buttons = [
            {'-house:Inicio:primary': e => views.inicio()},
        ];
    }
	
	export function onmount(){
        
        contenedor.append(table(_OPTICAS,{
            filter:true,
			buttons:[
                VEN_BTN_ADD_WITH_FORM,
                VEN_BTN_DELETE,
                VEN_BTN_SETTING
            ],
			columns:[
                {
                    key:"codigo",
                    value:""
                }, 
                {
                    key:"articulo",
                    value:""
                }, 
                {
                    key:"precio",
                    value:0
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
