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

setting({[SETTING_TITLE]:"meopp"});

// --------------------------------------------------------------
// menu + vistas
// --------------------------------------------------------------

// menu('Index', permiso(ADMINISTRADOR) ? view(Seo,{title:"Estadisticas"}) : view(PanelIndex));
// menu('Index', view(PanelIndex,{title:'Panel de Administrador'}), {icon:"house"});
menu('Farmacias', view(AdminFarmacias), {icon:"clipboard-plus", shortcut});
menu('Opticas', view(AdminOpticas), {icon:"eyeglasses", shortcut});
menu('Sitio', {icon:"globe"});
menu('Sitio/Cuota inicial Jubilados', e=>{
	variable(VAR_PUBLIC_JUBILADOS_CUOTA_INICIAL)
    .then(p=>input("Editar cuota inicial, hasta el 15 de cada mes (número con punto decimal)",p)
        .accept(p=>variable(VAR_PUBLIC_JUBILADOS_CUOTA_INICIAL,p)))
}, {icon:"globe"});
menu('Sitio/Cuota tardia Jubilados', e=>{
	variable(VAR_PUBLIC_JUBILADOS_CUOTA_TARDIA)
    .then(p=>input("Editar cuota tardia a pagos a partir del 15 de cada mes (número con punto decimal)",p)
        .accept(p=>variable(VAR_PUBLIC_JUBILADOS_CUOTA_TARDIA,p)))
}, {icon:"globe"});
