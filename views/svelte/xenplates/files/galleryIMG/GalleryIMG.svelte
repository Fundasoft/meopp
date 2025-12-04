<script>
    // --------------------------------------------------------------
    // Import - Solo si necesitás funciones de otros módulos
    // --------------------------------------------------------------

    // import GalleryIMG from './xenplates/files/gallery/Admin.svelte';

    import { onMount } from 'svelte';
    import Card from './Card.svelte';
    import Input from './Input.svelte';

    import "./style.css";

    // --------------------------------------------------------------
    // Export - conexiones externas (interfaz)
    // --------------------------------------------------------------

    export let path = "", publico = true, sync={};
    export function GET() {
        return galeria.value; // return files;
    }
    
    let {Y, model, key} = sync, error='', contenedor; 
    let tipoPermiso = publico ? PUBLIC : PRIVATE;
    if (model) path += '/' + Y;


    // --------------------------------------------------------------
    // Funcionalidad
    // --------------------------------------------------------------

    function render(){
        FILES.read(path, tipoPermiso).then(value => {
            galeria.value=value;
            if (model) {
                model.update({Y,[key]:value.map(v=>v.Y)})
            }
        })
    }

    function add(){
        modal(html(Input),{
            cancel:false,
            header:false
        }).accept(create);
    }

    async function create(archivos) {
        if(archivos.length) {
            error='';
            for (let file of archivos) {
                if(!await FILES.create(path, file, tipoPermiso)) {
                    error = `carga ${file.names} fallida`;
                }    
            }
            if (!error) 
                success("Carga de datos completada");
            render(true);
        }
    }

    // --------------------------------------------------------------
    // Logica de modulo
    // --------------------------------------------------------------

    let galeria = grid([], {
        filter: true,
        class:"galeria",
        draggable:false,
        item: Card,
        buttons:[{"+:Agregar:add":e=>add()}], 
        columns: [
            // { key: "extension", value: ""},
            // { key: "inf", value: ""},
            // { key: "src", value: ""},
            // { key: "thumbnail", value: ""},
            { key: "name", value: ""}
        ]
    });


    onMount(()=>{
        contenedor.append(galeria);
        render();
    });


    galeria.on(ondelete,  (e, v) => {
        log.delete_e(e);
        log.delete_v(v);
        // para evitar parpadeos
        galeria.value = galeria.value.filter(img=>img.Y!=v[0]); 
        FILES.delete(path, v, tipoPermiso).then(render);
    })
    
</script>

<section class="xen-galleryIMG container">
    {#if error}
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            {error}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>    
    {/if}
    <div bind:this={contenedor}></div>
</section>

<style>
    section {
        min-height: 80vh;
        padding-block: 2rem;
    }
</style>
