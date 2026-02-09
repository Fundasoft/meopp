<script>
    import { onMount } from "svelte";

    // --------------------------------------------------------------
    // Forma de uso ejemplo en index 
    // --------------------------------------------------------------
    
    // import Single from './xenplates/files/singleIMG/SingleIMG.svelte';  
    
    // section(html(SingleIMG,{path:'img/single', sync:{model:MODELO, key:'image', Y:1, type:"img"}})); // para Imagenes

    // --------------------------------------------------------------
    // Export - conexiones externas (interfaz)
    // --------------------------------------------------------------
    export let path = "", permit = PRIVATE, sync = {};

    let { model, key, Y } = sync;
    let error = "";
    let value = {};
    let fileElem, errorTimeout, errorClearTimeout;
    let showError = false;          // controla el fade

    export function GET() {
        return value;
    }

    // --------------------------------------------------------------
    // Funcionalidad
    // --------------------------------------------------------------

    const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

    console.log("Inicio - value", value);

    function setError(msg) {
        error = msg;
        showError = true;           // aparece con opacidad 1

        // limpiar timeouts previos si existían
        if (errorTimeout) clearTimeout(errorTimeout);
        if (errorClearTimeout) clearTimeout(errorClearTimeout);

        // a los 4s comienza el fade-out
        errorTimeout = setTimeout(() => {
            showError = false;      // baja opacidad a 0

            // esperar a que termine la transición (0.3s)
            errorClearTimeout = setTimeout(() => {
                error = "";         // elimina el nodo {#if error}
            }, 300);
        }, 4000);
    }

    // function onchange() {
    //     console.log("onchange");

    //     const file = fileElem.files?.[0];

    //     // 1) No seleccionó archivo
    //     if (!file) {
    //         console.log('No se seleccionó ningún archivo, mantengo el anterior');
    //         return;
    //     }

    //     // 2) Validación de tamaño
    //     if (file.size > MAX_FILE_SIZE) {
    //         setError(`El archivo "${file.name}" supera 1 MB y no puede subirse.`);
    //         // limpiar el input para evitar que quede seleccionado
    //         fileElem.value = "";
    //         render();
    //         return;
    //     }

    //     // 3) Si pasa el límite, sigue lógica 
    //     if (value.Y) {
    //         FILES.delete(path, value.Y, permit).then(() => {
    //             create();
    //         });
    //     } else {
    //         create();
    //     }
    // }

    function compressImageFixed(file, {
        maxWidth = 1920,
        maxHeight = 1920,
        quality = 0.8
    } = {}) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const objectUrl = URL.createObjectURL(file);
            img.src = objectUrl;
            img.onload = () => {
            let { width, height } = img;
            const scale = Math.min(maxWidth / width, maxHeight / height, 1);
            width *= scale;
            height *= scale;
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob((blob) => {
                URL.revokeObjectURL(objectUrl);
                if (!blob) {
                reject("No se pudo generar WebP");
                return;
                }
                const webpFile = new File(
                    [blob],
                    file.name.replace(/\.[^/.]+$/, "") + ".webp",
                    { type: "image/webp" }
                );
                resolve(webpFile);
            }, "image/webp", quality);
            };
            img.onerror = () => reject("No se pudo cargar la imagen");
        });
    }

    function onchange() {
        console.log("onchange");

        const file = fileElem.files?.[0];

        if (!file) {
            console.log('No se seleccionó ningún archivo, mantengo el anterior');
            return;
        }

        console.log("Comprimendo imagen...");

        compressImageFixed(file).then(compressedFile => {
            console.log("Original: ", (file.size / 1024).toFixed(1), "KB");
            console.log("Comprimida: ", (compressedFile.size / 1024).toFixed(1), "KB");

            const finalFile = compressedFile;

            if (finalFile.size > MAX_FILE_SIZE) {
                setError(`Incluso comprimiendo la imagen, "${finalFile.name}" supera el límite permitido.`);
                fileElem.value = "";
                render();
                return;
            }

            console.log("onchange - value: ", value);

            // seguir flujo normal
            if (value.Y) {
                FILES.delete(path, value.Y, permit).then(() => {
                create(finalFile);
                });
            } else {
                create(finalFile);
            }
        })
    }

    function create(finalFile) { 
        FILES.create(path, finalFile, permit).then((valueY) => {

            console.log("Create - Y del Elemento creado: ", valueY);
            console.log("Create - path: ", path);
            console.log("Create - finalFile: ", finalFile);
            console.log("Create - permit: ", permit);
        
            if (!valueY) {
                setError(`Carga de ${finalFile.files[0]?.name || "archivo"} fallida`);
                console.log("Create - no tiene valueY: ", valueY);
            }

            if (valueY) {
                if (model) {
                    model.update({ Y, [key]: valueY });
                }
                success("Carga de datos completada");
            }

            render();
        });
    }

    function render() {
        model.id(Y).then(elem=>{
            console.log("RENDER - Elemento del modelo elem: ", elem)
            if(elem[key]){
                log.elem_key(elem[key])
                console.log("Elemento del modelo elem[key]: ", elem[key])
                FILES.id(path, elem[key], permit).then((_value) => {
                    log.value(_value);
                    value = _value;
                    console.log("RENDER - value: ", value);
                });
            }
            // else{
            //     alert("No tiene cargado un elemento")
            // }
        });
    }
    
    function add(){
        fileElem.click();
    }

    function remove() {
        confirm("Se borrará la imagen").accept(v=>{
            FILES.delete(path, value.Y, permit).then(() => {
                value = {};
                if (model) {
                    model.update({Y,[key]:0})
                }
            });
        })
    }

    function open() {
        FILES.modal(path, value.Y, permit);
    }

    onMount(() => {
        render();
    });
</script>

<section class="xen-galleryIMG container">

    <input bind:this={fileElem} on:change={onchange} type="file" accept="image/*" class="d-none">

    {#key value}
        {#if !value.Y}
            <div class="preview-wrapper">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
                </svg>
            
                <div class="actions">
                    <button class="btn btn-sm btn-primary" on:click={add}>Agregar imagen</button>
                </div>
            </div>
        {:else}
                {#if permit}
                    <div class="img-wrapper">
                        <img src="{value.src}" alt={value.name} loading="lazy"/>
                    </div>
                {/if}
                <div class="actions">
                    {#if !permit}
                        <button 
                            class="btn btn-view" 
                            on:click={open}
                            title="Ver img"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                            Ver
                        </button>
                    {/if}
                    <button class="btn btn-sm btn-secondary" on:click={add}>Cambiar</button>
                    <button class="btn btn-sm btn-danger" on:click={remove}>Eliminar</button>
                </div>
        {/if}
    {/key}

    {#if error}
        <p
            class="text-danger mt-2"
            style="
                opacity: {showError ? 1 : 0};
                transform: translateY({showError ? '0' : '4px'});
                transition: opacity 0.5s ease, transform 0.5s ease;
            "
        >
            {error}
        </p>
    {/if}

</section>

<style>
    section {
        min-height: 60vh;
        padding-block: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        font-family: system-ui, sans-serif;
    }

    /* Estado vacío */
    .preview-wrapper {
        text-align: center;
        padding: 2rem;
        border: 2px dashed #dee2e6;
        border-radius: 0.75rem;
        background: #f8f9fa;
        transition: background 0.3s ease;
    }

    .preview-wrapper:hover {
        background: #f1f3f5;
    }

    .img-wrapper {
        max-width: 320px;
        border-radius: 0.75rem;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .img-wrapper:hover {
        transform: scale(1.02);
        box-shadow: 0 6px 18px rgba(0,0,0,0.2);
    }

    .img-wrapper img {
        width: 100%;
        height: auto;
        display: block;
        object-fit: cover;
    }

    .actions {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .btn {
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.3px;
        transition: all 0.2s ease;
    }

    .btn-primary {
        background: #0d6efd;
        border: none;
    }
    .btn-primary:hover {
        background: #0b5ed7;
        transform: translateY(-1px);
    }

    .btn-secondary {
        background: #6c757d;
        border: none;
    }
    .btn-secondary:hover {
        background: #5c636a;
        transform: translateY(-1px);
    }

    .btn-danger {
        background: #dc3545;
        border: none;
    }
    .btn-danger:hover {
        background: #bb2d3b;
        transform: translateY(-1px);
    }


    .actions {
        display: flex;
        gap: 0.75rem;
        margin-top: 1rem;
    }

    .btn {
        border-radius: 0.5rem;
        padding: 0.5rem 1rem;
        font-size: 0.9rem;
        font-weight: 500;
        letter-spacing: 0.3px;
        transition: all 0.2s ease;
    }

    .btn-primary {
        background: #0d6efd;
        border: none;
    }
    .btn-primary:hover {
        background: #0b5ed7;
        transform: translateY(-1px);
    }

    .text-danger {
        font-size: 0.9rem;
        color: #dc3545;
        font-weight: 500;
    }

    .btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 8px;
        font-weight: 500;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s ease;
        flex: 1;
        justify-content: center;
        text-decoration: none;
    }

    .btn-view {
        background: #f8fafc;
        color: #186AAB;
        border: 1px solid #e2e8f0;
    }

    .btn-view:hover {
        background: #186AAB;
        color: white;
        border-color: #186AAB;
    }

    .btn:active {
        transform: translateY(0);
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        .btn {
            flex: none;
        }
    }

    @media (max-width: 480px) {
        .btn {
            padding: 0.625rem 0.75rem;
            font-size: 0.8rem;
        }
    }

</style>

