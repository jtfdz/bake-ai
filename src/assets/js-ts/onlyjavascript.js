const wanakana = require('wanakana');
const Store = require('electron-store');

let kanaBodyFull = [ //26 TOTAL
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
      default: {
        gusto: "animales", 
        nombre: "", 
        toursIniciados: {primerinicio: false, iniciogeneral: false, modulos: false}
        }
    },
    //aquí cuando la miércoles de teoría la defina XD
    teoria: {
      type: 'object',
      default: {}
    },

    // 78% los kanas - cada letra equivale a 3% (1.5 bloqueado y 1.5 iniciado)
    // 22% la teoria
  
    progreso: {
      type: 'object',
      default: {
        hiragana: {
        	kanaBody: kanaBodyFull, 
        	vecesEstudiado: 0, 
        	aciertos: 0,
        	fallos: 0,
        	porcentaje: 1.5
        },
        katakana: {
        	kanaBody: kanaBodyFull, 
        	vecesEstudiado: 0, 
        	aciertos: 0,
        	fallos: 0,
        	porcentaje: 1.5
        },
        kanji: {
          niveles: {n5: false, n4: false, n3: false, n2: false, n1: false},
          vecesEstudiado: 0, 
          aciertos: 0,
          fallos: 0,
          porcentaje: 1.5
        }
      }
    },

    estilo: {
      type: 'object',
      default: {
        visual: {porcentaje: 33.334},
        auditiva: {porcentaje: 33.333}, 
        escritura: {porcentaje: 33.333},     
      }
    },

    //In the general population, the distribution of the three learning styles is: 
    // 65% visual, 30% auditory and 5% kinesthetic.
    retencion: {
      type: 'object',
      default: {
      	mayor: 'visual',
        media: 'auditiva',
        baja: 'de escritura'
      }
    },

    modelo: {
      type: 'object',
      default: {
      	material: {
          hiragana: {iniciado: [], desbloqueado: []},
          katakana: {iniciado: [], desbloqueado: []},
        },
        modulos: [],
        dataParaModulos: []
      }
    },

};


const store = new Store({schema});


function setInStore(propiedad, valor){
	store.set(propiedad, valor);
}

function getFromStore(propiedad){
	return store.get(propiedad)
}

//chequea si target tiene todos los elementos de arr
let checker = (arr, target) => target.every(v => arr.includes(v));

//empuja los elementos de un array a otro
function pushArray(arr, arr2) {
    arr.push.apply(arr, arr2);
}

//envia n cantidad de elementos aleatorios de un array
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

//shuffle array elements
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

//dos arrays se unen sin repetir elementos
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


//como se dividen los modulos: el doble de mayor, uno y medio del medio, y uno del más bajo
function asignarModelo(mayor, medio, bajo){
	var modeloArray = [];
	// pushArray(modeloArray, mayor);
	// pushArray(modeloArray, mayor);
 //  pushArray(modeloArray, mayor);
  // pushArray(modeloArray, medio);
  // pushArray(modeloArray, medio);
	//pushArray(modeloArray, getRandom(medio, Math.floor(medio.length/2) ));
	pushArray(modeloArray, bajo);
	return shuffle(modeloArray);
}



//leyendo la configuración de retención se asignan los módulos
function modeloDeAprendizaje(kana){

	var mayor = getFromStore('retencion.mayor'), media = getFromStore('retencion.media'), baja = getFromStore('retencion.baja');
  var esHiragana = (kana==='hiragana');
  var dataGustosArray = getGustoArray(esHiragana);

	var visuales = (dataGustosArray.length>0)? ['agua', 'luna', 'tierra', 'arbol']: ['agua', 'luna'];
	var auditivos = (dataGustosArray.length>0)? ['sol', 'fuego', 'tierra']: ['sol', 'fuego'];
	var escritos = ['oro', 'luna', 'sol', 'fuego'];

  var modelo = [];

	switch(mayor){
		//visual
		case 'visual': 
			switch(media){
				case 'auditiva': 
				modelo = asignarModelo(visuales, auditivos, escritos);
				break;
				
				case 'de escritura': 
				modelo = asignarModelo(visuales, escritos, auditivos);
				break;
			}
		break;

		//auditiva
		case 'auditiva': 
			switch(media){
				case 'visual': 
				modelo = asignarModelo(auditivos, visuales, escritos);
				break;
				case 'de escritura': 
				modelo = asignarModelo(auditivos, escritos, visuales);
				break;
			}
		break;

		//escritura
		case 'de escritura': 
			switch(media){
				case 'visual': 
				modelo = asignarModelo(escritos,  visuales, auditivos);
				break;

				case 'auditiva': 
				modelo = asignarModelo(escritos, auditivos,  visuales);
				break;
			}
		break;
	}

  if(getFromStore('modelo.material.'+kana+'.desbloqueado').length > 0){ 
    modelo[modelo.length] = modelo[0]; modelo[0] = 'teoria'; 
  };

  modelo.push('modulosfinalizados')

	setInStore('modelo.modulos', modelo)

  var dataParaModulo = [];


  for (var i = 0; i < modelo.length; i++) {

    if(i>Math.floor(modelo.length*(2/3))){ //para lo iniciado dos tercios del total y se pone al final

      if(getFromStore('modelo.material.'+kana+'.iniciado').length > 0){ 
        dataParaModulo.push(porTipoDeModulo(modelo[i], getFromStore('modelo.material.'+kana+'.iniciado'), dataGustosArray))
      }else{ //kanasDesbloqueadas.length > 0 si no hay iniciado
        dataParaModulo.push(porTipoDeModulo(modelo[i], getFromStore('modelo.material.'+kana+'.desbloqueado'), dataGustosArray))
      }
    }else{ 

      if(getFromStore('modelo.material.'+kana+'.desbloqueado').length > 0){ 
        dataParaModulo.push(porTipoDeModulo(modelo[i], getFromStore('modelo.material.'+kana+'.desbloqueado'), dataGustosArray))
      }else{ 
        dataParaModulo.push(porTipoDeModulo(modelo[i], getFromStore('modelo.material.'+kana+'.iniciado'), dataGustosArray))   
      }

    }
  }


  setInStore('modelo.dataParaModulos', dataParaModulo)

}




function porTipoDeModulo(modulo, data, dataGustosArray){

  
  if(modulo!='teoria'){
    var randomKanaArrayRandom = getRandom(data, 1)[0];
    var randomKanaRandom = getRandom(randomKanaArrayRandom, 1)[0];
    if(dataGustosArray.length > 0){
      var gustosArrayRandom = getRandom(dataGustosArray, 1)[0];
      var gustosRestantesRandom = getRandom(get4gustos(gustosArrayRandom.original), 3);
      gustosRestantesRandom.push(gustosArrayRandom.original)
    }
    var randomKanaArrayShuffled = shuffle(randomKanaArrayRandom);
  }


  switch(modulo){

    case 'teoria': //siempre recibirá lo nuevo (desbloqueado pero no iniciado)
      return data[0];
    break;
  
    case 'luna': //se envia el kana a adivinar su romaji más la respuesta (el romaji)
      var dataLuna = [];
      dataLuna[0] = randomKanaRandom;
      dataLuna[1] = wanakana.toRomaji(randomKanaRandom);      
      return dataLuna;
    break;

    case 'arbol': //con gustos 
      var dataArbol = [];
      dataArbol[0] = gustosArrayRandom.original;
      dataArbol[1] = wanakana.toRomaji(gustosArrayRandom.original);
      dataArbol[2] = gustosArrayRandom.gusto;
      dataArbol[3] = shuffle(gustosRestantesRandom);
      return dataArbol;
    break;

    case 'tierra': //con gustos
      var dataTierra = [];
      dataTierra[0] = gustosArrayRandom.original;
      dataTierra[1] = wanakana.toRomaji(gustosArrayRandom.original);
      dataTierra[2] = gustosArrayRandom.gusto;
      dataTierra[3] = shuffle(gustosRestantesRandom);
      return dataTierra;
    break;

    case 'agua': 
      var dataAgua = [];
      dataAgua[0] = wanakana.toRomaji(randomKanaRandom);
      dataAgua[1] = randomKanaRandom;
      return dataAgua;
    break;

    case 'oro': 
      var dataOro = [];
      var randomRomajiArray = [];
      for (var items of randomKanaArrayShuffled) {
        randomRomajiArray.push( wanakana.toRomaji(items) )
      }
      dataOro[0] = randomKanaArrayShuffled;
      dataOro[1] = randomRomajiArray;      
      return dataOro;
    break;

    case 'sol': 
      var dataSol = [];
      dataSol[0] = wanakana.toRomaji(randomKanaRandom);
      dataSol[1] = randomKanaRandom;      
      return dataSol;
    break;

    case 'fuego': 
      var dataFuego = [];
      dataFuego[0] = randomKanaArrayShuffled[0];
      randomKanaArrayShuffled.splice(0, 1);
      var arrayOfResto = [];
      for (var items of randomKanaArrayShuffled) {
        arrayOfResto.push(wanakana.toRomaji(items))
      }
      dataFuego[1] = arrayOfResto;
      dataFuego[2] = wanakana.toRomaji(dataFuego[0]);
      return dataFuego;
    break;

  }


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


function keyBloqueada(kanadb) {
    if (kanadb.desbloqueado) {
    	return false;
    }else{
    	return kanadb;
    }
};




function desbloqueaNuevo(kana){
	if(apuebaParaNuevo(kana)){ 
		var bodyKana = getFromStore('progreso.'+kana+'.kanaBody')
		for (var i = 0; i < bodyKana.length; i++) {
			if(keyBloqueada(bodyKana[i])){
				bodyKana[i].desbloqueado = true;
				setInStore('progreso.'+kana+'.kanaBody', bodyKana)
				break;
			} 
		}

	}
}


//cuando la evaluación se acaba, lo desbloqueado no iniciado pasa a iniciado también
function aprobarIniciado(kana) {
var bodyKana = getFromStore('progreso.'+kana+'.kanaBody');
var contarPorcentaje = 0;
  for (var i = 0; i < bodyKana.length; i++) {
    if(bodyKana[i].desbloqueado){
      contarPorcentaje += 1;
      if (!bodyKana[i].iniciada) {
        bodyKana[i].iniciada = true;
        setInStore('progreso.'+kana+'.kanaBody', bodyKana)
        break;
      }
    }
  }
  var porcentajeTotal = (contarPorcentaje/26) * 78;
  setInStore('progreso.'+kana+'.porcentaje', porcentajeTotal)
  desbloqueaNuevo(kana);
};




//DOM 
function getEbI(name){
	return document.getElementById(name);
}

function getEbCN(name){
	return document.getElementsByClassName(name);
}

function getEbQSA(name){
	return document.querySelectorAll(name);
}

function accessParent(sent){
	sent.parentElement.parentElement.className = sent.parentElement.parentElement.className.replace(" has-background-"+sent.parentElement.id, "");
}

function animateValue(id, start, end, duration) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = getEbI(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
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

function modalFunction(value, idModal){
	var mdl = new BulmaModal(idModal)
	switch(value){
		case 1: mdl.show(); break;
		case 2: mdl.close(); break;
	}
}


//wakanaka
//se podría hacer un servicio digo yo MEJORAR
function setInputToWaka(idInput, kana){
  if(wanakana.isHiragana(kana)){ 
    wanakana.bind(getEbI(idInput), {IMEMode: 'toHiragana'})  
  }else if(wanakana.isKatakana(kana)){ 
    wanakana.bind(getEbI(idInput), {IMEMode: 'toKatakana'}) 
  }
}

function setInputToWakaByMultiple(elementsClass, kana){
  for (var i = 0; i < getEbCN(elementsClass).length; i++) {
    if(wanakana.isHiragana(kana)){ 
      wanakana.bind(getEbCN(elementsClass)[i], {IMEMode: 'toHiragana'})  
    }else if(wanakana.isKatakana(kana)){ 
      wanakana.bind(getEbCN(elementsClass)[i], {IMEMode: 'toKatakana'}) 
    }
  }
}


//gustos


function gustosPorKana(esHiragana, dataGustosArray){
  var filteredArray = [], filteredArrayFinal = [], kanaArrayDesbloqueo = [], kanaDesbloqueoTrue = []; 

  esHiragana? pushArray(kanaArrayDesbloqueo, getFromStore('progreso.hiragana.kanaBody')): pushArray(kanaArrayDesbloqueo, getFromStore('progreso.katakana.kanaBody'));

  for (var i = 0; i < dataGustosArray.length; i++) {
    if(esHiragana && dataGustosArray[i].kana === 'hiragana'){
        filteredArray.push(dataGustosArray[i])
    }else if(!esHiragana && dataGustosArray[i].kana === 'katakana'){
        filteredArray.push(dataGustosArray[i])
    }
  }

  for (var item of kanaArrayDesbloqueo) {
    if(item.desbloqueado){
      kanaDesbloqueoTrue.push(item.key)
    }
  }

  for (var i = 0; i < filteredArray.length; i++) {
    if(checker(kanaDesbloqueoTrue, filteredArray[i].desbloquear) ){
      filteredArrayFinal.push(filteredArray[i]);
    }
  }


  return filteredArrayFinal;
}

function get4gustos(kana){
  var arrayOfGustos = [];
  for (var i = 0; i < gustos.length; i++) {
    for (var j = 0; j < gustos[i].length; j++) {
      if(gustos[i][j].original.length == kana.length && gustos[i][j].original != kana){
        arrayOfGustos.push(gustos[i][j].original)
      }
    }
  }
  return arrayOfGustos;
}



function getGustoArray(esHiragana){
  switch(getFromStore('usuario.gusto')){
    case 'animales': return gustosPorKana(esHiragana, gustos[0]); break;
    case 'comida': return gustosPorKana(esHiragana, gustos[1]); break;
    case 'música': return gustosPorKana(esHiragana, gustos[2]); break;
    case 'deportes': return gustosPorKana(esHiragana, gustos[3]); break;
  }
}



const gustoAnimales = [
    {kana: 'hiragana', nombre: 'conejo', original: 'うさぎ', desbloquear: ['vocales', 's', 'g']},
    {kana: 'hiragana', gusto: 'oso', original: 'くま', desbloquear: ['k', 'm']},
    {kana: 'hiragana', gusto: 'perro', original: 'いぬ', desbloquear: ['vocales', 'n']},
    {kana: 'hiragana', gusto: 'gato', original: 'ねこ', desbloquear: ['n', 'k']},
    {kana: 'hiragana', gusto: 'caballo', original: 'うま', desbloquear: ['vocales', 'm']},
    {kana: 'hiragana', gusto: 'pájaro', original: 'とり', desbloquear: ['t', 'r']},
    {kana: 'hiragana', gusto: 'ratón', original: 'ねずみ', desbloquear: ['n', 'z', 'm']},
    {kana: 'hiragana', gusto: 'vaca', original: 'うし', desbloquear: ['vocales', 's']},
    {kana: 'hiragana', gusto: 'mono', original: 'さる', desbloquear: ['s', 'r']},
    {kana: 'hiragana', gusto: 'tigre', original: 'とら', desbloquear: ['t', 'r']},
    {kana: 'hiragana', gusto: 'gallina', original: 'にわとり', desbloquear: ['n', 'especiales', 't', 'r']},
    {kana: 'hiragana', gusto: 'venado', original: 'しか', desbloquear: ['s', 'k']},
    {kana: 'hiragana', gusto: 'cerdo', original: 'ぶた', desbloquear: ['b', 't']},
    {kana: 'hiragana', gusto: 'lobo', original: 'おおかみ', desbloquear: ['vocales', 'k', 'm']},
    {kana: 'hiragana', gusto: 'zorro', original: 'きつね', desbloquear: ['k', 't', 'n']},
    {kana: 'hiragana', gusto: 'oveja', original: 'ひつじ', desbloquear: ['h', 't', 'z']},
    {kana: 'hiragana', gusto: 'jirafa', original: 'きりん', desbloquear: ['especiales', 'r', 'k']},
    {kana: 'hiragana', gusto: 'elefante', original: 'ぞう', desbloquear: ['vocales', 'z']},
    {kana: 'hiragana', gusto: 'sapo', original: 'かえる', desbloquear: ['vocales', 'k', 'r']},
    {kana: 'hiragana', gusto: 'serpiente', original: 'へび', desbloquear: ['h', 'b']},
    {kana: 'hiragana', gusto: 'ardilla', original: 'りす', desbloquear: ['r', 's']},
    {kana: 'hiragana', gusto: 'pulpo', original: 'たこ', desbloquear: ['t', 'k']},
    {kana: 'hiragana', gusto: 'cangrejo', original: 'かに', desbloquear: ['n', 'k']},
    {kana: 'hiragana', gusto: 'halcón', original: 'たか', desbloquear: ['t', 'k']},
    {kana: 'hiragana', gusto: 'pez', original: 'さかな', desbloquear: ['s', 'n', 'k']},

    {kana: 'katakana', gusto: 'león', original: 'ライオン', desbloquear: ['r', 'vocales', 'especiales']},
    {kana: 'katakana', gusto: 'loro', original: 'オウム', desbloquear: ['vocales', 'm']},
    {kana: 'hiragana', gusto: 'jirafa', original: 'キリン', desbloquear: ['especiales', 'r', 'k']},
];



const gustoComida = [ //vegetales y frutas salvan la patria
    {kana: 'hiragana', nombre: 'comida', original: 'たべもの', desbloquear: ['t', 'b', 'm', 'n']},
    {kana: 'hiragana', nombre: 'fruta', original: 'くだもの', desbloquear: ['k', 'd', 'm', 'n']},  
    {kana: 'hiragana', nombre: 'manzana', original: 'りんご', desbloquear: ['r', 'especiales', 'g']},
    {kana: 'hiragana', gusto: 'patilla', original: 'すいか', desbloquear: ['s', 'vocales','k']},
    {kana: 'hiragana', gusto: 'fresa', original: 'いちご', desbloquear: ['vocales', 't', 'g']},
    {kana: 'hiragana', gusto: 'uvas', original: 'ぶどう', desbloquear: ['b', 'd', 'vocales']},
    {kana: 'hiragana', gusto: 'pera', original: 'なし', desbloquear: ['n', 's']},
    {kana: 'hiragana', gusto: 'durazno', original: 'もも', desbloquear: ['m']},
    {kana: 'hiragana', gusto: 'zanahoria', original: 'にんじん', desbloquear: ['n', 'especiales', 'z']},
    {kana: 'hiragana', gusto: 'cebolla', original: 'たまねぎ', desbloquear: ['t', 'm', 'n', 'g']},
    {kana: 'hiragana', gusto: 'huevo', original: 'たまご', desbloquear: ['t', 'm', 'g']},
    {kana: 'hiragana', gusto: 'carne', original: 'にく', desbloquear: ['n', 'k']},
    {kana: 'hiragana', gusto: 'arroz (crudo)', original: 'こめ', desbloquear: ['k', 'm']},
    {kana: 'hiragana', gusto: 'arroz (cocinado)', original: 'ごはん', desbloquear: ['k', 'h', 'especiales']},
    {kana: 'hiragana', gusto: 'vegetales', original: 'やさい', desbloquear: ['y', 's', 'vocales']},
    {kana: 'hiragana', gusto: 'sal', original: 'しお', desbloquear: ['s', 'vocales']},
    {kana: 'hiragana', gusto: 'té verde', original: 'おちゃ', desbloquear: ['vocales', 'ch']},
    {kana: 'hiragana', gusto: 'pescado', original: 'さかな', desbloquear: ['s', 'k', 'n']},
    {kana: 'hiragana', gusto: 'azúcar', original: 'さとう', desbloquear: ['s', 't', 'vocales']},
    {kana: 'hiragana', gusto: 'agua', original: 'みず', desbloquear: ['m', 'z']},
    {kana: 'hiragana', gusto: 'vinagre', original: 'す', desbloquear: ['s']},
    {kana: 'hiragana', gusto: 'harina de trigo', original: 'こむぎこ', desbloquear: ['k', 'm', 'g']},
    {kana: 'hiragana', gusto: 'miel', original: 'はちみつ', desbloquear: ['h', 'ch', 'm', 't']},

    {kana: 'katakana', gusto: 'melón', original: 'メロン', desbloquear: ['m', 'r', 'especiales']},
    {kana: 'katakana', gusto: 'tomate', original: 'トマト', desbloquear: ['t', 'm', 't']},
    {kana: 'katakana', gusto: 'limón', original: 'レモン', desbloquear: ['r', 'm', 'especiales']},
    {kana: 'katakana', gusto: 'banana', original: 'バナナ', desbloquear: ['b', 'n']},
    {kana: 'katakana', gusto: 'kiwi', original: 'キウイ', desbloquear: ['k', 'vocales']},
    {kana: 'katakana', gusto: 'naranja', original: 'オレンジ', desbloquear: ['vocales', 'r', 'especiales', 'z']},
    {kana: 'katakana', gusto: 'lechuga', original: 'レトス', desbloquear: ['r', 't', 's']},
    {kana: 'katakana', gusto: 'pan', original: 'パン', desbloquear: ['p', 'especiales']},
    {kana: 'katakana', gusto: 'lima', original: 'ライム', desbloquear: ['r', 'vocales', 'm']},
    {kana: 'katakana', gusto: 'pizza', original: 'ピザ', desbloquear: ['p', 'z']},
    {kana: 'katakana', gusto: 'pastel', original: 'ケーキ', desbloquear: ['k']},
    {kana: 'katakana', gusto: 'mantequilla', original: 'バター', desbloquear: ['b', 't']},
];

const gustoMusica = [
    {kana: 'hiragana', gusto: 'música', original: 'おんがく', desbloquear: ['vocales', 'especiales', 'g', 'k']},
    {kana: 'hiragana', gusto: 'batería japonesa', original: 'たいこ', desbloquear: ['t', 'vocales', 'k']},
    {kana: 'hiragana', gusto: 'canción', original: 'うた', desbloquear: ['vocales', 't']},
    {kana: 'hiragana', gusto: 'canción', original: 'きょく', desbloquear: ['ky', 'k']},
    {kana: 'hiragana', gusto: 'letra (de canción)', original: 'かし', desbloquear: ['k', 's']},
    {kana: 'hiragana', gusto: 'cantante', original: 'かしゅ', desbloquear: ['k', 'sh']},
    {kana: 'hiragana', gusto: 'voz', original: 'こえ', desbloquear: ['k', 'vocales']},
    {kana: 'hiragana', gusto: 'instrumento', original: 'がっき', desbloquear: ['k','g']},
    {kana: 'hiragana', gusto: 'cuerdas (de guitarra)', original: 'げん', desbloquear: ['g', 'especiales']},
    {kana: 'hiragana', gusto: 'acordes', original: 'わおん', desbloquear: ['vocales', 'especiales']},
    {kana: 'hiragana', gusto: 'nota musical', original: 'おんぷ', desbloquear: ['vocales', 'especiales', 'p']},

    {kana: 'katakana', gusto: 'banda', original: 'バンド', desbloquear: ['b', 'especiales', 'd']},
    {kana: 'katakana', gusto: 'jazz', original: 'ジャズ', desbloquear: ['j', 'z']},
    {kana: 'katakana', gusto: 'guitarra', original: 'ギター', desbloquear: ['g', 't']},
    {kana: 'katakana', gusto: 'batería', original: 'ドラム', desbloquear: ['d', 'r', 'm']},
    {kana: 'katakana', gusto: 'piano', original: 'ピアノ', desbloquear: ['p', 'vocales', 'n']},
    {kana: 'katakana', gusto: 'violín', original: 'バイオリン', desbloquear: ['b', 'vocales', 'r', 'especiales']},
    {kana: 'katakana', gusto: 'rock', original: 'ロック', desbloquear: ['r', 'k']},
    {kana: 'katakana', gusto: 'música clásica', original: 'クラシック', desbloquear: ['k', 'r', 's']},
    {kana: 'katakana', gusto: 'flamenco', original: 'フラメンコ', desbloquear: ['f', 'r', 'm', 'especiales', 'k']},
    {kana: 'katakana', gusto: 'ritmo', original: 'リズム', desbloquear: ['r', 'z', 'm']},
    {kana: 'katakana', gusto: 'micrófono', original: 'マイク', desbloquear: ['m', 'vocales', 'k']},
    {kana: 'katakana', gusto: 'harpa', original: 'ハープ', desbloquear: ['h', 'p']},
    {kana: 'katakana', gusto: 'bajo', original: 'ベース', desbloquear: ['b', 's']},
    {kana: 'katakana', gusto: 'acordes', original: 'コード', desbloquear: ['k', 'd']},
    {kana: 'katakana', gusto: 'soul (género musical)', original: 'ソウル', desbloquear: ['s', 'r', 'vocales']},
    {kana: 'katakana', gusto: 'blues (género musical)', original: 'ブルース', desbloquear: ['b', 'r', 's']},
    {kana: 'katakana', gusto: 'country (género musical)', original: 'カントリー', desbloquear: ['k', 'especiales', 't', 'r']},
    {kana: 'katakana', gusto: 'rap (género musical)', original: 'ラップ', desbloquear: ['p', 'r']},
    {kana: 'katakana', gusto: 'pop', original: 'ポップ', desbloquear: ['p']},

];

const gustoDeportes = [
    {kana: 'hiragana', gusto: 'béisbol', original: 'やきゅう', desbloquear: ['y', 'ky', 'vocales']},
    {kana: 'hiragana', gusto: 'ejercicio', original: 'うんどう', desbloquear: ['vocales', 'especiales', 'd']},
    {kana: 'hiragana', gusto: 'sumo', original: 'すもー', desbloquear: ['s', 'm', 'vocales']},
    {kana: 'hiragana', gusto: 'judo', original: 'じゅうどう', desbloquear: ['j', 'vocales', 'd']},
    {kana: 'hiragana', gusto: 'kendo (esgrima japonesa)', original: 'けんどう', desbloquear: ['k', 'especiales', 'd', 'vocales']},
    {kana: 'hiragana', gusto: 'karate', original: 'からて', desbloquear: ['k', 'r', 't']},
    {kana: 'hiragana', gusto: 'natación', original: 'すいえい', desbloquear: ['s', 'vocales']},
    {kana: 'hiragana', gusto: 'gimnasia', original: 'たいそう', desbloquear: ['t', 'vocales', 's']},
    {kana: 'hiragana', gusto: 'pescar', original: 'つり', desbloquear: ['t', 'r']},
    {kana: 'hiragana', gusto: 'ping-pong', original: 'たっきゅう', desbloquear: ['t', 'ky', 'vocales']},
    {kana: 'hiragana', gusto: 'partido', original: 'しあい', desbloquear: ['s', 'vocales']},
    {kana: 'hiragana', gusto: 'jugadora', original: 'せんしゅ', desbloquear: ['s', 'especiales', 'sh']},
    {kana: 'hiragana', gusto: 'victoria', original: 'かち', desbloquear: ['k', 't']},
    {kana: 'hiragana', gusto: 'derrota', original: 'まけ', desbloquear: ['m', 'k']},
    {kana: 'hiragana', gusto: 'empate', original: 'ひかわけ', desbloquear: ['h', 'k', 'especiales']},

    {kana: 'katakana', gusto: 'skate', original: 'スケート', desbloquear: ['s', 'k', 't']},
    {kana: 'katakana', gusto: 'deportes', original: 'スポッツ', desbloquear: ['s', 'p', 't']},
    {kana: 'katakana', gusto: 'fútbol', original: 'サッカー', desbloquear: ['s', 'k']},
    {kana: 'katakana', gusto: 'yoga', original: 'ヨガ', desbloquear: ['y', 'g']},
    {kana: 'katakana', gusto: 'lucha', original: 'レスリング', desbloquear: ['r', 's', 'especiales', 'g']},
    {kana: 'katakana', gusto: 'tenis', original: 'テニス', desbloquear: ['t', 'n', 's']},
    {kana: 'katakana', gusto: 'boxeo', original: 'ボクシング', desbloquear: ['b', 'k', 's', 'especiales', 'g']},
    {kana: 'katakana', gusto: 'equipos', original: 'チーム', desbloquear: ['t', 'm']},
    {kana: 'katakana', gusto: 'ping-pong', original: 'ピンポン', desbloquear: ['p', 'especiales']},
    {kana: 'katakana', gusto: 'rugby', original: 'ラグビー', desbloquear: ['r', 'g', 'b']},
    {kana: 'katakana', gusto: 'hockey', original: 'ホッケー', desbloquear: ['h', 'k']},
    {kana: 'katakana', gusto: 'bowling', original: 'ボーリング', desbloquear: ['b', 'r', 'especiales', 'g']},
    {kana: 'katakana', gusto: 'maratón', original: 'マラソン', desbloquear: ['m', 'r', 's', 'especiales']},
    {kana: 'katakana', gusto: 'juego', original: 'ゲーム', desbloquear: ['g', 'm']},
];


const gustos = [gustoAnimales, gustoComida, gustoMusica, gustoDeportes];