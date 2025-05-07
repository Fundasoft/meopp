import Header from './index/Header.svelte'; 
import Section from './index/Section.svelte';
import Footer from './index/Footer.svelte';
import Whatsapp from './xenplate/Whatsapp.svelte';

// --------------------------------------------------------------
// configuracion
// --------------------------------------------------------------

// setting({});

// --------------------------------------------------------------
// seo
// --------------------------------------------------------------

if (USUARIO.new) {
  seo(SEO_Nuevos_dispotivos);
} 

if (!USUARIO.Y) {
  seo('15s',SEO_Visitas); // 15 segundos
}

// --------------------------------------------------------------
// header
// --------------------------------------------------------------

header(Header);

// --------------------------------------------------------------
// render
// --------------------------------------------------------------

switch (RENDER) {
  case 'index':    
    section(Section);
    break;
  default: break;
}

section(Whatsapp);  

// --------------------------------------------------------------
// footer
// --------------------------------------------------------------

footer(Footer);
 
