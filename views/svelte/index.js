import Header from './index/Header.svelte'; 
import Section from './index/Section.svelte';
import Hero from './index/Hero.svelte';
import Footer from './index/Footer.svelte';
import Whatsapp from './xenplate/Whatsapp.svelte';

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
    section(Section);
    break;
  default: break;
}

section(Whatsapp);  

// --------------------------------------------------------------
// footer
// --------------------------------------------------------------

section(Footer);
