
// controler

module.exports = function (CARDS, api, cards) {

	// ---------------------------------------------------------------
	// enviroment
	// ---------------------------------------------------------------

	//console.log(CARDS);
	//CARDS.eliminar([17,18,19,24,25,26]);
	//CARDS.insertar();
	//CARDS.buscar().then(arr=>console.log(arr));
	//CARDS.id(27).then(card=>console.log(card));*/

	// ---------------------------------------------------------------
	// interfaz g CRUD 
	// ---------------------------------------------------------------
	
	// ---------------------------------------------------------------
	// routes - api
	// ---------------------------------------------------------------

	api.POST('/cards/buscar', 	(where = [], desde = 0, cantidad = 90, select = [])	=> CARDS.buscar(where, desde, cantidad, select));
	api.POST('/cards/insertar', (cards={}) 	=> CARDS.insertar(cards));
	api.POST('/cards/modificar',(m={})			=> CARDS.modificar(m));	
	api.POST('/cards/eliminar',	(e=[])			=> CARDS.eliminar(e));	
	api.POST('/cards/cantidad', (where=[])	=> CARDS.cantidad());
	
}
