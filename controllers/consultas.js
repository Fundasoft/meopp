
// controler

module.exports = function (MODELO, api, cards) {

	// ---------------------------------------------------------------
	// enviroment
	// ---------------------------------------------------------------

	
	
	// ---------------------------------------------------------------
	// routes - CRUD
	// ---------------------------------------------------------------

	api.POST('/consultas/buscar', 	(where = [], desde = 0, cantidad = 90, select = [])	=> MODELO.b(where, desde, cantidad, select));
	api.POST('/consultas/insertar', (i={}) 	=> MODELO.i(i));
	api.POST('/consultas/modificar',(m={})	=> MODELO.m(m));	
	api.POST('/consultas/eliminar',	(e=[])	=> MODELO.e(e));	
	api.POST('/consultas/cantidad', (w=[])	=> MODELO.c());
	
}
