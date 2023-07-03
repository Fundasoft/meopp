
// controler

module.exports = function (NULL, api, test, controllers) {

	// ---------------------------------------------------------------
	// enviroment
	// ---------------------------------------------------------------

	this.test=()=>'agregado al enviroment: test';

	// ---------------------------------------------------------------
	// interfaz
	// ---------------------------------------------------------------
	
	test.controler=()=>'agregado al controler: test';

	// ---------------------------------------------------------------
	// routes - API
	// ---------------------------------------------------------------
	
	api.get('/test/view', function (req, res) {
		res.render('test',{title:'hello world', subtitle:'welcome'});
	});

	api.post('/test/json', function (req, res) {
		res.json([this.logged(),this.permission(),this.params({0:String})]);
	});

	api.post('/test/string', function (req, res) {
		res.send('string hola');
	});

	api.get('/test/enviroment', (req, res) => {
		res.send(this.test());
	});
	
	api.get('/test/controller', (req, res) => {
		res.send(test.controler());
	});
	
	api.get('/test/return', (req, res) => 10);

	api.get('/test/next', (req, res, next) => {
		console.log(0), next();
	});

	api.get('/test/next', (req, res) => {
		console.log(1), res.send('ok');
	});

	api.get('/DEV/dev', (req, res) => {
		res.send('dev');
	});

	api.get('/zumar', (a=0, b=0) => a+b); 
	api.post('/zumar', (a=0, b=0) => a+b); 
		
	api.get('/sumar', function (req, res) {
		let {a,b} = this.params({a:Number,b:Number});
		res.json(a+b);
	});

	api.post('/sumarr', function (req, res) {
		let [a,b=0] = this.params([0,0]);
		res.json(a+b);
	});

	api.post('/sumar', function (req, res) {
		let {a,b} = this.params({a:Number,b:Number});
		res.json(a+b);
	});
	
	api.post('/error', function (req, res) {
		res.send({$:'errooooooooooooooooooooooooooor'});
	});
	
}
