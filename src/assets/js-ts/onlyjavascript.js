const Store = require('electron-store');
const store = new Store();


function getEbI(name){
	return document.getElementById(name);
}

function getEbCN(name){
	return document.getElementsByClassName(name);
}

function getEbQSA(name){
	return document.querySelectorAll(name);
}

function setInStore(propiedad, valor){
	store.set(propiedad, valor);
}

function getFromStore(propiedad){
	return store.get(propiedad)
}

function typescriptCantDoIt(sent){
	sent.parentElement.parentElement.className = sent.parentElement.parentElement.className.replace(" has-background-"+sent.parentElement.id, "");
}



function openTab(evt, nombreDelGusto) {
	if(!getEbI('inputThirdSlide').disabled){
		  var i, tablinks;
		  tablinks = document.getElementsByClassName("tab");
		  for (i = 0; i < tablinks.length; i++) {
		      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
		  }
		  evt.currentTarget.className += " is-active";
		  setInStore('usuario.gusto', nombreDelGusto);
  	}
}



function getCount(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
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



function openModal(value){
	var mdl = new BulmaModal("#myModal")
	switch(value){
		case 1: mdl.show(); break;
		case 2: mdl.close(); break;
	}
}


// let nombreKana = '';

// function setModalCard(value){

// }


function openModalCard(value){
	var mdl = new BulmaModal("#modalCard")
	switch(value){
		case 1: mdl.show(); break;
		case 2: mdl.close(); break;
	}
	
}


function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}