const Store = require('electron-store');
const store = new Store();


function getEbI(name){
	return document.getElementById(name);
}

function setInStore(propiedad, valor){
	store.set(propiedad, valor);
}

function getFromStore(propiedad){
	return store.get(propiedad)
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
