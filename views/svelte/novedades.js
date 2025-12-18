import Navbar from './index/Navbar.svelte'; 
import Novedades from './xenplates/novedades/OnePage.svelte';
import Novedad from './xenplates/novedades/Novedad.svelte';
import Footer from './index/Footer.svelte';

import "./xenplates/novedades/style.css";

setting({});

NOVEDADES_ETIQUETAS.read();

section(Navbar);

switch(RENDER){
    case "novedades":
        section(Novedades);
        break;
    case "novedad":
        section(Novedad);
        break;
    default: break;
}

section(Footer);