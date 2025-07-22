<script>
	let contenedor;
    
    export function onshow() {
        view.buttons = [
            {'-house:Inicio:primary': e => views.inicio()},
        ];
    }
	
	function onmount(){
        
        contenedor.append(table(_OPTICAS,{
            filter:true,
			buttons:[
                '++',
                '-',
                'u', 
                'c'
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
<section on:mount={onmount}>
	<div bind:this={contenedor}></div>
</section>

<style>
	
</style>
