<script>
    export let setting={}, value=[], onchange=v=>v;
    let ubicacion="", url="";
    
    export function GET(){
        return value;
    };

    export function SET(v=[]){
        value = v.length ? v:[0,0];
        ubicacion=`https://www.google.com/maps?q=${value[0]},${value[1]}&output=embed`;
        url=`https://www.google.com/maps?q=${value[0]},${value[1]}`;
    };
    
    function handleChange(e) {
        const inputValue = e.target.value.trim();
        
        let match = inputValue.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/) ||  // Formato @lat,lng
                    inputValue.match(/place\/(-?\d+\.\d+),(-?\d+\.\d+)/) ||  // Formato place/lat,lng
                    inputValue.match(/^(-?\d+\.\d+),\s*(-?\d+\.\d+)$/);  // Formato lat,lng directo

        if (match) {
            value = [parseFloat(match[1]), parseFloat(match[2])];
            SET(value);
            onchange(value);
            return;
        }else{
            alert("FORMATO NO VALIDO")
        }

        // Si no es decimal, intentamos detectar el formato DMS
        match = inputValue.match(/(\d+)°(\d+)'([\d.]+)"([NS]),\s*(\d+)°(\d+)'([\d.]+)"([EW])/);
        if (match) {
            const lat = dmsToDecimal(match[1], match[2], match[3], match[4]);
            const lng = dmsToDecimal(match[5], match[6], match[7], match[8]);
            value = [lat, lng];
            SET(value);
            onchange(value);
        }
    }

    // Función para convertir DMS a decimal
    function dmsToDecimal(degrees, minutes, seconds, direction) {
        let decimal = parseFloat(degrees) + parseFloat(minutes) / 60 + parseFloat(seconds) / 3600;
        if (direction === "S" || direction === "W") {
            decimal = -decimal;
        }
        return decimal;
    }

    SET(value);

    function copiarEnlace(){
        navigator.clipboard.writeText(url).then(function() {
            info("¡Enlace copiado al portapapeles!");
        }).catch(function(err) {
            alert("Error al copiar el enlace: " + err);
        });
    }

</script>


<div class="">
    {#if setting.readonly}
        {value.join('')}
    {:else}


        <label for="url_lat_lng">
            <small>
                Insertar URL del mapa o latitud y longitud (en el formato lat,long)
            </small>   
        </label>
        <input
            type="text"
            id="url_lat_lng"
            on:input={handleChange}
            bind:value={ubicacion}
            on:focus={e=>e.target.select()} 
            class="input_valor_ubicacion"
            />

            <button class="btn btn-sm btn-outline-secondary boton_compartir" on:click={copiarEnlace}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
                </svg>
                compartir ubicacion
            </button>



        {#if !(value[0] === 0 && value[1] === 0)}
            <p> 
                <span>
                    {value[0]}
                </span>   
                <span>
                    {value[1]}
                </span>   
            </p>
            <!-- svelte-ignore a11y-missing-attribute -->
            <iframe
                class="iframe_map"
                height="450"
                style="border:0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q={value[0]},{value[1]}&output=embed">
            </iframe>
        {:else}
            <p>
                Ubicacion no asignada
            </p>
        {/if}
    {/if}
</div>


<style>

    .boton_compartir    {
        margin-block: 0.5rem;
    }
    
    .iframe_map{
        width: 100%;
        max-width: 500px;
    }

    
    .input_valor_ubicacion {
        width: 100%;
        height: 1.5rem;
        text-align: center;
        font-size: 1rem;
        border-radius: 0.5rem;
        background-color: #dee2e6;
        border: 2px solid transparent;
        transition: all 0.2s ease-in-out;
        font-weight: 500;
        justify-self: center;
    }

    .input_valor_ubicacion:focus {
        outline: none;
        border-color: #d1d5db;
        background-color: white;
    }

    .input_valor_ubicacion:hover {
        border-color: #e5e7eb;
    }
    
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

</style>