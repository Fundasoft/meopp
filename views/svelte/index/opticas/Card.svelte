<script>
    export let value, trash, render, edit;
    [render,trash,edit];
</script>

<div class="optica-card">
    <div class="card-header">
        {#if value.articulo}
            <h3 class="articulo">{value.articulo}</h3>
        {/if}
    </div>

    <div class="card-body">
        {#if value.precio}
            <p class="price">$ {new Intl.NumberFormat('de-DE').format((value.precio).toFixed(2))}</p>
        {:else}
            <p>Consultar</p>
        {/if}
    </div>
</div>

<style>
    .optica-card {
        background: #e6e9eb;
        border-radius: 12px;
        padding: 16px;
        color: #000 !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        width: 100%;
        height: 100% !important;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .card-header {
        margin-bottom: 12px;
        align-self: anchor-center;
    }

    .articulo {
        font-size: 18px;
        font-weight: bold;
        margin: 0;
        line-height: 1.2;
        color: var(--green-01);
        position: relative;
        display: inline-block;
        text-align: center;
    }

    .articulo::after {
        content: '';
        position: absolute;
        bottom: -10px;
        justify-self: anchor-center;
        left: 0;
        width: 50%;
        height: 2px;
        background-color:  var(--green-01);
        transition: width 0.3s ease;
    }

    .card-body {
        flex-grow: 1;
        align-content: center;
        justify-items: center;
    }

    .price {
        font-size: 1.5rem;
        margin: 0 0 8px 0;
        color: #000;
        line-height: 1.3;
    }

    @media (max-width: 640px) {
        .optica-card {
            max-width: calc(100% - 8px);
            padding: 12px;
            height: 100% !important;
        }

        .articulo {
            font-size: 16px;
        }

        .price {
            font-size: 12px;
        }
    }
</style>