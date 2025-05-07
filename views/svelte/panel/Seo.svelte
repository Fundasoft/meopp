<script>
	
  import Spinner from '../xenplate/Spinner.svelte';
    
	let promesa = SEOS.read().then(seosToCards);

    const CARD_SEO = (title='',valor=0) => ({    
        title, 
        color:'',
        icon:'',
        valor
    });

    function seosToCards(seos) {
        
        let cards = LIST_SEOS.map(title=>CARD_SEO(title)), ultimo_ingreso = 0;

        // Analiza los seo procedentes del servidor

        for(let seo of seos) {
            let id = seo.id, card = cards[id];
            switch (id) {
                case SEO_Inmueble_visitado: /*1*/
                    card.color="red"; 
                    card.icon="house-up";
                    card.valor++; 
                    card.inmuebles??=[];
                    card.inmuebles.push(seo.y);
                    card.action??= async e => {
                        //ordenarContar(card.inmuebles);
                        let inmuebles = await INMUEBLES.ids(card.inmuebles,[_titulo]);
                        ventana('wala',JSON.stringify(inmuebles));
                    };
                    break;
                case SEO_Ingreso_nuevo_usuario_a_pagina: /*2*/
                    card.color="orange";
                    card.icon="arrow-clockwise";    
                    card.valor++; 
                    break;
                case SEO_Ingreso_pagina: /*3*/
                    card.valor++; 
                    ultimo_ingreso = new Date(Math.max(seo.date,ultimo_ingreso));
                    break;
                case SEO_Inmueble_consultado: 
                    card.valor++; 
                    break;
                default: console.warn(`seo no registrado: ${id} ${LISTA_SEOS[id]}`); break;
            }
        }

        // Crear tarjetas de seo personalizadas

        if (ultimo_ingreso)
            cards.push(CARD_SEO('Ultimo Ingreso',ultimo_ingreso.toLocaleDateString()));

        return cards.splice(1);
    }


</script>

<section> 

{#await promesa} <Spinner/> {:then cards}
    <div class="row rows-col-auto text-center" >
        <!-- <div class="d-flex flex-wrap justify-content-center">     -->
            {#each cards as card, pos}
                {#if card.valor}
                    <div class="col-auto">
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <div 
                            class="card m-2 shadow" 
                            style="max-width: 15rem; min-width: 15rem; min-height:130px"
                            on:click={card.action?card.action:e=>e}>
                            <div 
                                class="card-header" 
                                style="color:{card.color}; border-bottom:2px solid;">
                                <div class="d-flex">
                                    <h3 class="m-0" style="color:{card.color}; align-self: center;">{card.valor}</h3>
                                    <i class="bi bi-{card.icon} ms-3 " style="font-size:1.5rem; color:{card.color};"></i>
                                </div>
                            </div>
                            <div class="card-body"  >
                                <!-- <hr class="my-1" style="color:{card.color}; border:2px solid;"> -->
                                <p class="card-text">{card.title}</p>
                            </div>
                        </div>
                    </div>
                {/if}
            {/each} 
        <!-- </div> -->
    </div>
{/await}

</section>

<style>

</style>
