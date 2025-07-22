// --------------------------------------------------------------
// import local
// --------------------------------------------------------------

// import Seo from './panel/Seo.svelte';
import AdminFarmacias from './panel/farmacias/Administrador.svelte';
import AdminOpticas from './panel/opticas/Administrador.svelte';

// --------------------------------------------------------------
// import externo
// --------------------------------------------------------------

// cdns("urls");

// --------------------------------------------------------------
// configuracion
// --------------------------------------------------------------

setting({titulo:"meopp",loader:1000});

// --------------------------------------------------------------
// menu + vistas
// --------------------------------------------------------------

// menu('Index', permiso(ADMINISTRADOR) ? view(Seo,{title:"Estadisticas"}) : view(PanelIndex));
// menu('Index', view(PanelIndex,{title:'Panel de Administrador'}), {icon:"house"});
menu('Farmacias', view(AdminFarmacias), {icon:"clipboard-plus", shortcut});
menu('Opticas', view(AdminOpticas), {icon:"eyeglasses", shortcut});
