<script>
    export let image;
    export let titulo="";
    export let subtitulo="";
</script>
<section style="background-image: url({image})">
    <div class="overlay"></div>
    <div class="container">
            <div class="content-wrapper text-center">
                <h2 class="title">{titulo}</h2>
                <p class="subtitle">
                    {subtitulo}
                </p>
            </div>
    </div>
</section>

<style>
    section {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        overflow: hidden;
        min-height: 40vh;
        border-bottom: solid 5px var(--green-03);
        align-content: center;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 1;
        pointer-events: none;
    }

    .container {
        position: relative;
        z-index: 2;
        height: 100%;
            align-content: center;
    }

    .title {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 4px;
        position: relative;
        margin-bottom: 10px;
        /* text-transform: uppercase; */

        color: #A7E028;
        font-size: 2.5rem;
        font-weight: bold;
        text-align: center;
        padding: 0 20px;
        margin: 0;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    .subtitle{
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: var(--green-light);
        font-size: 1.2rem;
    }

    @media (max-width: 1024px) {
        .title {
        font-size: 2.5rem;
        }

    }

    @media (max-width: 767px) {
        .title {
            font-size: 2.2rem;
        }
    }

    @media (max-width: 576px) {
        .title {
            font-size: 1.6rem;
        }
        .subtitle {
            font-size: 1rem;
        }
    }

</style>