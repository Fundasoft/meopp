    import Navbar from './index/Navbar.svelte'; 
    import Servicios from './index/Servicios.svelte';
    import AdminFarmacias from './index/farmacias/Administrador.svelte';
    import AdminOpticas from './index/opticas/Administrador.svelte';
    import Hero from './index/Hero.svelte';
    import Subsidios from './index/Subsidios.svelte';
    import Defuncion from './index/Defuncion.svelte';
    import AyudaEconomica from './index/AyudaEconomica.svelte';
    import Afiliaciones from './index/Afiliaciones.svelte';
    import Jubilados from './index/Jubilados.svelte';
    import Autoridades from './index/Autoridades.svelte';
    import Informacion from './index/Informacion.svelte';
    import Footer from './index/Footer.svelte';
    // import Whatsapp from './xenplate/Whatsapp.svelte';

    import "./index/style.css";

    cdns(
        'https://unpkg.com/aos@2.3.1/dist/aos.css', 
        'https://unpkg.com/aos@2.3.1/dist/aos.js'
    ).then(e => AOS.init());

    // --------------------------------------------------------------
    // configuracion
    // --------------------------------------------------------------

    // PARA PRENDER EL DEMO
    // https://fundasoft.org/demo/up/21 => MEOPP
    // https://fundasoft.org/demo/up/22 => SINDICATOPETROLEROS
    // https://fundasoft.org/demo/up/23 => OSPEPRI
    // https://fundasoft.org/demo/up/26 => GENESIS

    // setting({});

    // --------------------------------------------------------------
    // Navbar
    // --------------------------------------------------------------

    section(Navbar);

    // --------------------------------------------------------------
    // render
    // --------------------------------------------------------------

switch (RENDER) {
    case 'index':    
        section(Hero);
        section(Servicios);
        section(Informacion);
        break;
    case 'farmacias':
        section(AdminFarmacias);
        break;
    case 'optica':
        section(AdminOpticas);
        break;
    case 'afiliaciones':
        section(Afiliaciones);
        break;
    case 'ayudaEconomica':
        section(AyudaEconomica);
        break;
    case 'subsidios':
        section(Subsidios);
        break;
    case 'defuncion':
        section(Defuncion);
        break;
    case 'jubilados':
        section(Jubilados);
        break;
    case 'autoridades':
        section(Autoridades);
        break;
    default: break;
}

    // --------------------------------------------------------------
    // footer
    // --------------------------------------------------------------

    section(Footer);
