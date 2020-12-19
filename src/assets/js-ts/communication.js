var pyshell =  require('python-shell');
const app = require('electron').remote.app
const pathPython = app.getAppPath() + '/src/assets/js-ts/input.py'


function estiloPorcentaje(estilo){
	return getFromStore('estilo.' + estilo + '.porcentaje').toString()
}

function runIA(){

	let options = {
	  mode: 'text',
	  pythonOptions: ['-u'], // get print results in real-time
	  args: [ estiloPorcentaje('visual'), estiloPorcentaje('auditiva'), estiloPorcentaje('escritura'), 'v_acierto']
	};


	pyshell.PythonShell.run(pathPython, options, function (err, results) {
	  if (err) throw err;
	  // results is an array consisting of messages collected during execution
	  console.log('results: ', results);
	});

}


// runIA();


