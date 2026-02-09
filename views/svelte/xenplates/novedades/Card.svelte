<script>
    export let value, GRID;
    [GRID];

    log.VALUE(value);

    let ETIQUETAS_NAMES = NOVEDADES_ETIQUETAS.values.reduce((acc, { Y, nombre }) => {
        if (nombre.trim()) {
            acc[Y] = nombre;
        }
        return acc;
    }, {});

    const PATH_IMG_NOVEDADES = "img/novedades";

</script>

<div class="card-novedad">
    <a class="" href="novedades.html?render=novedad&y={value.Y}">
    <div class="card-img">
        {#if value.imagenes && value.imagenes.length > 0}
            <img 
                src="{PATH_IMG_NOVEDADES}/{value.Y}/{value.imagenes[0]}.webp"
                class="img-novedad" 
                alt="Img novedad {value.Y}" 
                loading="lazy"
            >
        {:else}
            <div class="img-placeholder">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
                </svg>
            </div>
        {/if}
        
    </div>
    
    <div class="card-body">
        
        <!-- Etiquetas antes del título -->
        <!-- svelte-ignore missing-declaration -->
        {#if value.etiquetas && value.etiquetas.length > 0 && ETIQUETAS_NAMES}
            <div class="card-etiquetas">
                {#each value.etiquetas.slice(0, 3) as etiqueta}
                    {#if ETIQUETAS_NAMES[etiqueta]}
                        <a class="tag-button" href="novedades.html?tag={etiqueta}">
                            <span class="etiqueta etiqueta-{etiqueta}"><i class="bi bi-tag"></i> {ETIQUETAS_NAMES[etiqueta]}</span>
                        </a>
                    {/if}
                {/each}
                {#if value.etiquetas.length > 3}
                    <span class="etiqueta etiqueta-mas">+{value.etiquetas.length - 3}</span>
                {/if}
            </div>
        {/if}

        <div class="card-header-info">
            {#if value.titulo}
                <h3 class="card-novedad-titulo">{value.titulo}</h3>
            {/if}
                {#if value.fecha}
                    <time class="card-novedad-fecha" datetime="{new Date(value.fecha).toISOString()}">{new Date(value.fecha).toLocaleDateString('es-AR')}</time>
                    <!-- <time class="card-novedad-fecha">{new Date(value.fecha).toLocaleDateString('es-AR')}</time> -->
                {/if}
        </div>
        {#if value.subtitulo}
            <p class="card-novedad-subtitulo">{value.subtitulo}</p>
        {/if}
        
    </div>
</a>
</div>

<style>
    img {
        max-width: 100%;
        height: auto;
    }

    .card-novedad {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        height: 100%;
        border: 1px solid #e5e7eb;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        transition: all 0.3s ease;
        max-width: 400px;
        margin: auto;
        position: relative;
    }

    .card-novedad:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        border-color: #d1d5db;
    }

    .img-novedad {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .card-novedad:hover .img-novedad {
        transform: scale(1.02);
    }

    .img-placeholder {
        width: 100%;
        height: 100%;
        color: #9ca3af;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .img-placeholder svg {
        width: 50%;
    }

    /* Etiquetas */
    
    .card-etiquetas {
        display: flex;
        gap: 6px;
        flex-wrap: wrap;
        margin-bottom: 4px;
    }

    .etiqueta {
        background: #f1f5f9;
        color: #475569;
        font-size: 0.75rem;
        font-weight: 500;
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid #e2e8f0;
        white-space: nowrap;
        transition: all 0.2s ease;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .etiqueta:hover {
        background: #e2e8f0;
        color: #334155;
    }

    .etiqueta-mas {
        background: #4f46e5;
        color: white;
        border-color: #4f46e5;
        font-weight: 600;
    }
    
    .etiqueta-mas:hover {
        background: #4338ca;
        border-color: #4338ca;
        color: white;
    }

    .card-header-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    a{
        text-decoration: none !important;
    }


    .card-novedad-subtitulo {
        font-size: 0.9rem;
        color: #4b5563;
        line-height: 1.5;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        flex-grow: 1;
    }

    .card-footer {
        display: flex;
        justify-content: flex-end;
        margin-top: auto;
    }

    .tag-button{
        text-decoration: none;
    }


    @media (max-width: 768px) {
        .card-img {
            height: 180px;
        }

        .card-body {
            padding: 1.25rem;
        }

        .card-novedad-titulo {
            font-size: 1.125rem;
        }

        .card-etiquetas {
            gap: 4px;
            margin-bottom: 8px;
        }

        .etiqueta {
            font-size: 0.7rem;
            padding: 3px 6px;
            max-width: 100px;
        }
    }


/* Estilos base */
.etiqueta-gris, .etiqueta-0 { 
    background: #f8fafc; 
    border-color: #cbd5e1; 
    color: #475569; 
}

.etiqueta-azul, .etiqueta-1 { 
    background: #eff6ff; 
    border-color: #bfdbfe; 
    color: #1e40af; 
}

.etiqueta-verde, .etiqueta-2 { 
    background: #f0fdf4; 
    border-color: #bbf7d0; 
    color: #166534; 
}

.etiqueta-rosa, .etiqueta-3 { 
    background: #fdf2f8; 
    border-color: #fbcfe8; 
    color: #be185d; 
}

.etiqueta-naranja, .etiqueta-4 { 
    background: #fff7ed; 
    border-color: #fed7aa; 
    color: #c2410c; 
}

.etiqueta-indigo, .etiqueta-5 { 
    background: #eef2ff; 
    border-color: #c7d2fe; 
    color: #4338ca; 
}

/* Efectos hover */
.etiqueta-gris:hover, .etiqueta-0:hover {
    background: #e2e8f0;
    border-color: #94a3b8;
    color: #334155;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
}

.etiqueta-azul:hover, .etiqueta-1:hover {
    background: #dbeafe;
    border-color: #93c5fd;
    color: #1d4ed8;
    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.15);
    transform: translateY(-1px);
}

.etiqueta-verde:hover, .etiqueta-2:hover {
    background: #dcfce7;
    border-color: #86efac;
    color: #15803d;
    box-shadow: 0 2px 8px rgba(34, 197, 94, 0.15);
    transform: translateY(-1px);
}

.etiqueta-rosa:hover, .etiqueta-3:hover {
    background: #fce7f3;
    border-color: #f9a8d4;
    color: #a21caf;
    box-shadow: 0 2px 8px rgba(236, 72, 153, 0.15);
    transform: translateY(-1px);
}

.etiqueta-naranja:hover, .etiqueta-4:hover {
    background: #fed7aa;
    border-color: #fb923c;
    color: #9a3412;
    box-shadow: 0 2px 8px rgba(249, 115, 22, 0.15);
    transform: translateY(-1px);
}

.etiqueta-indigo:hover, .etiqueta-5:hover {
    background: #e0e7ff;
    border-color: #a5b4fc;
    color: #3730a3;
    box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
    transform: translateY(-1px);
}

/* Transición suave para todos */
.etiqueta-gris, .etiqueta-0,
.etiqueta-azul, .etiqueta-1,
.etiqueta-verde, .etiqueta-2,
.etiqueta-rosa, .etiqueta-3,
.etiqueta-naranja, .etiqueta-4,
.etiqueta-indigo, .etiqueta-5 {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}

</style>


