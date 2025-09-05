    import Header from './index/Header.svelte'; 
    import Servicios from './index/Servicios.svelte';
    import AdminFarmacias from './index/farmacias/Administrador.svelte';
    import AdminOpticas from './index/opticas/Administrador.svelte';
    import Hero from './index/Hero.svelte';
    import Subsidios from './index/Subsidios.svelte';
    import AyudaEconomica from './index/AyudaEconomica.svelte';
    import Jubilados from './index/Jubilados.svelte';
    import Autoridades from './index/Autoridades.svelte';
    import Informacion from './index/Informacion.svelte';
    import Footer from './index/Footer.svelte';
    // import Whatsapp from './xenplate/Whatsapp.svelte';

    import "./index/styles.css";

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
    // header
    // --------------------------------------------------------------

    section(Header);

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
    case 'ayudaEconomica':
        section(AyudaEconomica);
        break;
    case 'subsidios':
        section(Subsidios);
        break;
    case 'jubilados':
        section(Jubilados);
        break;
    case 'autoridades':
        section(Autoridades);
        break;
    default: break;
}

    // section(Whatsapp);  

    // --------------------------------------------------------------
    // footer
    // --------------------------------------------------------------

    section(Footer);
