const Store = require('electron-store');


  const kanaBodyFull = {
    vocales: true,  k: false,   s: false,   t: false,  n: false,
    h: false,  m: false,  y: false,  r: false,  especiales: false,
    g: false,  z: false,   d: false,   b: false,  p: false,
    ky: false,  sh: false,   ch: false,   ny: false,  hy: false,
    my: false,  ry: false,   gy: false,   j: false,  by: false,  py: false
  }



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
        hiragana: {kanaBody: kanaBodyFull, vecesEstudiado: 0},
        katakana: {kanaBody: kanaBodyFull, vecesEstudiado: 0},
        kanji: {
          n5: false, n4: false, n3: false, n2: false, n1: false
        }
      }
    },

    estilo: {
      type: 'object',
      default: {
      	general: {porcentaje: 0, aciertos: 0, desaciertos: 0},
        visual: {porcentaje: 33.333, aciertos: 0, desaciertos: 0},
        auditiva: {porcentaje: 33.333, aciertos: 0, desaciertos: 0},
        escritura: {porcentaje: 33.333, aciertos: 0, desaciertos: 0}     
      }
    },

    //In the general population, the distribution of the three learning styles is: 
    // 65% visual, 30% auditory and 5% kinesthetic.
    retencion: {
      type: 'object',
      default: {
      	mayor: 'visual',
        media: 'auditiva',
        baja: 'escritura'
      }
    },


  };



const store = new Store({schema});


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