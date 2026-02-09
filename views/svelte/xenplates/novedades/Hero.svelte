<script>
    // Props para hacer el componente genérico y reutilizable
    export let title = "Novedades";
    export let subtitle = "Explora nuestras últimas noticias, acontecimientos relevantes y publicaciones recientes";
    export let bgColor = "#f8f9fa";
    export let accentColor = "#0d6efd";
</script>

<section class="news-hero" style="--accent-color: {accentColor}; --bg-color: {bgColor};">
    <div class="container">
        <div class="row">
        <div class="col-12">
            <div class="hero-content">
            <h1 class="hero-title">{title}</h1>
            <p class="hero-subtitle">{subtitle}</p>
            
            <div class="hero-decorative-line"></div>
            </div>
        </div>
        </div>
    </div>
</section>

<style>
    .news-hero {
        background: linear-gradient(135deg, var(--bg-color) 0%, #ffffff 100%);
        padding: 4rem 0 3rem;
        position: relative;
        overflow: hidden;
    }

    .news-hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, var(--accent-color) 0%, transparent 100%);
    }

    .hero-content {
        text-align: center;
        max-width: 800px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
    }

    .hero-title {
        font-size: 3rem;
        font-weight: 700;
        color: #212529;
        margin-bottom: 1rem;
        line-height: 1.2;
        animation: fadeInUp 0.6s ease-out 0.1s backwards;
    }

    .hero-subtitle {
        font-size: 1.25rem;
        color: #6c757d;
        margin-bottom: 2rem;
        line-height: 1.6;
        animation: fadeInUp 0.6s ease-out 0.2s backwards;
    }

    .hero-decorative-line {
        width: 80px;
        height: 4px;
        background: var(--accent-color);
        margin: 0 auto;
        border-radius: 2px;
        animation: expandWidth 0.8s ease-out 0.3s backwards;
    }

    /* Animations */
    @keyframes fadeInDown {
        from {
        opacity: 0;
        transform: translateY(-20px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
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

    @keyframes expandWidth {
        from {
        width: 0;
        }
        to {
        width: 80px;
        }
    }

    @keyframes pulse {
        0%, 100% {
        opacity: 1;
        transform: scale(1);
        }
        50% {
        opacity: 0.6;
        transform: scale(1.2);
        }
    }

    /* Responsive Design */
    @media (max-width: 991px) {
        .news-hero {
        padding: 3rem 0 2.5rem;
        }

        .hero-title {
        font-size: 2.5rem;
        }

        .hero-subtitle {
        font-size: 1.125rem;
        }
    }

    @media (max-width: 767px) {
        .news-hero {
        padding: 2.5rem 0 2rem;
        }

        .hero-title {
        font-size: 2rem;
        }

        .hero-subtitle {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        }
    }

    @media (max-width: 575px) {
        .news-hero {
        padding: 2rem 0 1.5rem;
        }

        .hero-title {
        font-size: 1.75rem;
        }

        .hero-subtitle {
        font-size: 0.9375rem;
        }

        .hero-decorative-line {
        width: 60px;
        }
    }
</style>