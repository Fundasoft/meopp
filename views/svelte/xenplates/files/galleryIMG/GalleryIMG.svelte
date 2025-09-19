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

    // --------------------------------------------------------------
    // Funcionalidad
    // --------------------------------------------------------------

    function render(){
        files.read(path,publico).then(value => {
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
                if(!await files.create(path, file, publico)) {
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

    let {Y, model, key} = sync, error='', contenedor, galeria = grid([], {
        filter: true,
        class:"galeria",
        item: Card,
        buttons:[{"+:Agregar:add":add}], 
        on:{
            delete: v => {
                galeria.value = galeria.value.filter(img=>img.Y!=v); // para evitar parpadeos
                files.delete(path, v, publico).then(render)
            }
        },
        columns: [
            { key: "extension", value: ""},
            { key: "inf", value: ""},
            { key: "src", value: ""},
            { key: "name", value: ""},
            { key: "thumbnail", value: ""}
        ],
    });

    if (model) path+='/'+Y;

    onMount(()=>{
        contenedor.append(galeria);
        render();
    });
    
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
