
import Menu from './panel/Menu.svelte';
import Cards from './panel/Cards.svelte';
import Home from './panel/Home.svelte';
import Galeria from './panel/Galeria.svelte';
import Chatia from './panel/Chatia.svelte';
import Demo from './panel/Demo.svelte';
import Consultas from './panel/Consultas.svelte';
import Link from './panel/Link.svelte';

cdn('icons');

star({
	loader:1000,
	unlogged:'login.html'
});

header(Menu,{titulo:'Fundasoft'});

view(Home,{},{titulo:'Inicio', ico:"house", new:true});
view(Cards,{},'Cards');
view(Consultas,{},'Consultas');
view(Galeria,{},'Galeria');
view(Chatia,{},'Chatia');
view(Demo,{},'Demo');
view(Link,{link:'http://localhost:7707',titulo:'Links/Opcion A'},'Links/Opcion A');

//menu('Test/Anexo 2',function(){});
