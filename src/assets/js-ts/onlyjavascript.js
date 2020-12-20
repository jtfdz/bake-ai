const Store = require('electron-store');


  // const kanaBodyFull = {
  //   vocales: true,  k: false,   s: false,   t: false,  n: false,
  //   h: false,  m: false,  y: false,  r: false,  especiales: false,
  //   g: false,  z: false,   d: false,   b: false,  p: false,
  //   ky: false,  sh: false,   ch: false,   ny: false,  hy: false,
  //   my: false,  ry: false,   gy: false,   j: false,  by: false,  py: false
  // }


	const  kanaBodyFull = [
	  {key: 'vocales', desbloqueado: true, iniciada: false},
	  {key: 'k', desbloqueado: false, iniciada: false},
	  {key: 's', desbloqueado: false, iniciada: false},
	  {key: 't', desbloqueado: false, iniciada: false},
	  {key: 'n', desbloqueado: false, iniciada: false},
	  {key: 'h', desbloqueado: false, iniciada: false},
	  {key: 'm', desbloqueado: false, iniciada: false},
	  {key: 'y', desbloqueado: false, iniciada: false},
	  {key: 'r', desbloqueado: false, iniciada: false},
	  {key: 'especiales', desbloqueado: false, iniciada: false},
	  {key: 'g', desbloqueado: false, iniciada: false},
	  {key: 'z', desbloqueado: false, iniciada: false},
	  {key: 'd', desbloqueado: false, iniciada: false},
	  {key: 'b', desbloqueado: false, iniciada: false},
	  {key: 'p', desbloqueado: false, iniciada: false},
	  {key: 'ky', desbloqueado: false, iniciada: false},
	  {key: 'sh', desbloqueado: false, iniciada: false},
	  {key: 'ch', desbloqueado: false, iniciada: false},
	  {key: 'ny', desbloqueado: false, iniciada: false},
	  {key: 'hy', desbloqueado: false, iniciada: false},
	  {key: 'my', desbloqueado: false, iniciada: false},
	  {key: 'ry', desbloqueado: false, iniciada: false},
	  {key: 'gy', desbloqueado: false, iniciada: false},
	  {key: 'j', desbloqueado: false, iniciada: false},
	  {key: 'by', desbloqueado: false, iniciada: false},
	  {key: 'py', desbloqueado: false, iniciada: false},
	];


  const schema = {
    usuario: {
      type: 'object',
      default: {gusto: "animales", nombre: "", iniciado: false}
    },
    //aquí cuando la miércoles de teoría la defina XD
    teoria: {
      type: 'object',
      default: {}
    },

    //eso de veces estudiao pa estadísticas MEJORAR 

    progreso: {
      type: 'object',
      default: {
        hiragana: {
        	kanaBody: kanaBodyFull, 
        	vecesEstudiado: 0, 
        	aciertos: 0,
        	fallos: 0,
        	porcentaje: 3
        }
        	,
        katakana: {
        	kanaBody: kanaBodyFull, 
        	vecesEstudiado: 0, 
        	aciertos: 0,
        	fallos: 0,
        	porcentaje: 3
        },
        kanji: {
          niveles: {n5: false, n4: false, n3: false, n2: false, n1: false},
          porcentaje: 3
        }
      }
    },

    estilo: {
      type: 'object',
      default: {
      	general: {porcentaje: 0, aciertos: 0, fallos: 0},
        visual: {porcentaje: 33.333, aciertos: 0, fallos: 0},
        auditiva: {porcentaje: 33.333, aciertos: 0, fallos: 0},
        escritura: {porcentaje: 33.333, aciertos: 0, fallos: 0}     
      }
    },

    //In the general population, the distribution of the three learning styles is: 
    // 65% visual, 30% auditory and 5% kinesthetic.
    retencion: {
      type: 'object',
      default: {
      	mayor: 'visual',
        media: 'auditivo',
        baja: 'de escritura'
      }
    },


  };


const store = new Store({schema});


function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
}


function modeloDeAprendizaje(){
	var mayor = getFromStore('retencion.mayor');
	var media = getFromStore('retencion.media');
	var baja = getFromStore('retencion.baja');
	var modelo = [];

	var visuales = ['tierra', 'agua', 'árbol', 'luna'];
	var auditivos = ['sol', 'fuego'];
	var escritos = ['oro', 'luna', 'sol', 'fuego'];

	switch(mayor){
		//visual
		case 'visual': 
			switch(media){
				case 'auditivo': 
				modelo = arrayUnique(visuales.concat(auditivos));
				pushArray(modelo, visuales);
				break;
				
				case 'de escritura': 
				modelo = arrayUnique(visuales.concat(escritura));
				pushArray(modelo, visuales);
				break;
			}
		break;

		//auditiva
		case 'auditivo': 
			switch(media){
				case 'visual': 
				modelo = arrayUnique(auditivos.concat(visuales));
				pushArray(modelo, auditivos);
				break;
				case 'de escritura': 
				modelo = arrayUnique(auditivos.concat(escritura));
				pushArray(modelo, auditivos);
				break;
			}
		break;

		//escritura
		case 'de escritura': 
			switch(media){
				case 'visual': 
				modelo = arrayUnique(escritura.concat(visuales));
				pushArray(modelo, escritura);
				break;

				case 'auditivo': 
				modelo = arrayUnique(escritura.concat(auditivos));
				pushArray(modelo, escritura);
				break;
			}
		break;
	}

	return modelo;

}


console.log(modeloDeAprendizaje());



function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}





function apuebaParaNuevo(kana){
	var totalAciertos = getFromStore('progreso.'+kana+'.aciertos');
	var totalFallos = getFromStore('progreso.'+kana+'.fallos');
	var totalIntentos = totalAciertos + totalFallos;
	if(totalIntentos){
		var nivelDeAcertado = ((totalAciertos/totalIntentos) * 100).toFixed(3);
		var aprueba = (nivelDeAcertado >= 75);
		return aprueba;
	}
	return false;
}


// mejorar: no es usada XD
function siguienteKey(db, key) {
  for (var i = 0; i < db.length; i++) {
    if (db[i].key === key) {
      return db[i + 1].key && db[i + 1].desbloqueado && db[i + 1].iniciado;
    }
  }
};

function keyBloqueada(kanadb) {
    if (kanadb.desbloqueado) {
    	return false;
    }else{
    	return kanadb;
    }
};


//sirve, lo único no probado es apruebaParaNuevo mejorar XD
function desbloqueaNuevo(kana){
	if(apuebaParaNuevo(kana)){
		var bodyKana = getFromStore('progreso.'+kana+'.kanaBody')
		for (var i = 0; i < bodyKana.length; i++) {
			var kanaBloqueado = keyBloqueada(bodyKana[i]);
			if(kanaBloqueado){
				bodyKana[i].desbloqueado = true;
				setInStore('progreso.'+kana+'.kanaBody', bodyKana)
				break;
			} 
		}

	}
}

function aprobarIniciado(kana) {
var bodyKana = getFromStore('progreso.'+kana+'.kanaBody')
  for (var i = 0; i < bodyKana.length; i++) {
    if (bodyKana[i].desbloqueado) {
      bodyKana[i].iniciado = true;
      //setInStore(propiedad, valor)
    }
  }
};






// store.delete('estilo.lye');

function setInStore(propiedad, valor){
	store.set(propiedad, valor);
}

function getFromStore(propiedad){
	return store.get(propiedad)
}




function removeObjectProperty(obj, property){
	delete obj[property]
	return obj
}






function getEbI(name){
	return document.getElementById(name);
}

function getEbCN(name){
	return document.getElementsByClassName(name);
}

function getEbQSA(name){
	return document.querySelectorAll(name);
}


//mejorar est3e nombnre XDDDDDDDDDDDDDDD
function typescriptCantDoIt(sent){
	sent.parentElement.parentElement.className = sent.parentElement.parentElement.className.replace(" has-background-"+sent.parentElement.id, "");
}




















function openTab(evt, nombreDelGusto) {
	var i, tablinks;
	tablinks = document.getElementsByClassName("tab");
	var isTrueSet = (getEbI("gustosPicker").getAttribute("disabled") == 'true');
	if(isTrueSet){
		for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" is-active", "");
		}
		evt.currentTarget.className += " is-active";
		setInStore('usuario.gusto', nombreDelGusto);
	}
}


function openTabInstruccion(evt, item) {
	var i, x, tablinks;
	tablinks = document.getElementsByClassName("tab");


  x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
	
		for (i = 0; i < tablinks.length; i++) {
		  tablinks[i].className = tablinks[i].className.replace(" has-background-grey-lighter", " has-background-white");
	
		}

 document.getElementById('content-'+evt.currentTarget.id).style.display = "block";

		evt.currentTarget.className += " has-background-grey-lighter";

	
}




class BulmaModal {
	constructor(selector) {
		this.elem = document.querySelector(selector)
		var modalClose = this.elem.querySelectorAll("[data-bulma-modal='close'], .modal-background")
		var that = this
		modalClose.forEach(function(e) {
			e.addEventListener("click", function() {
				that.elem.classList.toggle('is-active')
				var event = new Event('modal:close')
				that.elem.dispatchEvent(event);
			})
		})
	}
	
	show() {
		this.elem.classList.toggle('is-active')
		this.on_show()
	}
	
	close() {
		this.elem.classList.toggle('is-active')
		this.on_close()
	}
	
	
	on_show() {
		var event = new Event('modal:show')
	
		this.elem.dispatchEvent(event);
	}
	
	on_close() {
		var event = new Event('modal:close')
	
		this.elem.dispatchEvent(event);
	}
	
	addEventListener(event, callback) {
		this.elem.addEventListener(event, callback)
	}
}


//mejorar cambiar este nombre XD
function openModal(value, idModal){
	var mdl = new BulmaModal(idModal)
	switch(value){
		case 1: mdl.show(); break;
		case 2: mdl.close(); break;
	}
}



function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}