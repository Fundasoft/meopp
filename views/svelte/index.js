import Header from './index/Header.svelte'; 
import Section from './index/Section.svelte';
import Servicios from './index/Servicios.svelte';
import Servicios2 from './index/Servicios2.svelte';
import Hero from './index/Hero.svelte';
import Informacion from './index/Informacion.svelte';
import Footer from './index/Footer.svelte';
import Whatsapp from './xenplate/Whatsapp.svelte';

import "./index/styles.css"
// --------------------------------------------------------------
// configuracion
// --------------------------------------------------------------

// setting({});

// --------------------------------------------------------------
// seo
// --------------------------------------------------------------

// if (USUARIO.new) {
//   seo(SEO_Nuevos_dispotivos);
// } 

// if (!USUARIO.Y) {
//   seo('15s',SEO_Visitas); // 15 segundos
//}

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
    // section(Servicios);
    section(Servicios2);
    // section(Section);
    section(Informacion);
    break;
  default: break;
}

section(Whatsapp);  

// --------------------------------------------------------------
// footer
// --------------------------------------------------------------

section(Footer);
