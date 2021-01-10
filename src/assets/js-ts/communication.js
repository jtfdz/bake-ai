var pyshell =  require('python-shell');
const app = require('electron').remote.app
const pathPython = app.getAppPath() + '/src/assets/js-ts/input.py'


function estiloPorcentaje(estilo){
	return getFromStore('estilo.' + estilo + '.porcentaje').toString()
}

var weights = [];

function setIA(weightsResultado){
	weights = weightsResultado;
}


function runIA(){

	let body = { 
	  	arrayOfEstilos: [
		  	estiloPorcentaje('visual'), 
		  	estiloPorcentaje('auditiva'), 
		  	estiloPorcentaje('escritura')
	  	], 
	  	weights: weights 
	  };

	let options = {
	  mode: 'text',
	  pythonOptions: ['-u'], // get print results in real-time
	  args: [JSON.stringify(body)]
	};

	return new Promise(resolve => {
		pyshell.PythonShell.run(pathPython, options, function (err, respuesta) {
		  if (err) throw err;
		  var resultado = JSON.parse(respuesta).resultado;
		  resolve(resultado)
		});	
	});



}







