import { Injectable, EventEmitter  } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ShepherdService } from 'angular-shepherd';


@Injectable({
  providedIn: 'root'
})
export class ShepherdPasosService {

  nombreUsuario: string = '';

  constructor(private componentesService: ComponentesService, private shepherdService: ShepherdService) { }


  	todosLosBotones: any[] = [
  		//0
  		{ classes: 'shepherd-button-secondary', text: 'skip por ahora', type: 'cancel' },
  		//1
  		{ classes: 'shepherd-button-primary has-background-dark', text: 'atrás', type: 'back'},
  		//2
  		{ classes: 'shepherd-button-primary has-background-warning has-text-dark', text: 'siguiente',  type: 'next' },
  		//3
  		{ classes: 'shepherd-button-secondary', text: 'skip', type: 'cancel' },
  		//4
  		{ classes: 'shepherd-button-secondary', text: 'salir', type: 'cancel' },
  		//5
  		{ classes: 'shepherd-button-secondary has-background-success', action(){ return this.complete() } , text: '¡listo!' } 
  	];


  	botones: any[] = [
		this.todosLosBotones[0],
		this.todosLosBotones[2],
	];

  	botonesModulos: any[] = [
		this.todosLosBotones[3],
		this.todosLosBotones[2],
	];

  	botonesConAntes: any[] = [
		this.todosLosBotones[3],
		this.todosLosBotones[1],
		this.todosLosBotones[2],
	];

  	botonesSinSiguiente: any[] = [
		this.todosLosBotones[1],
		this.todosLosBotones[4],
	];


	botonFinalizar: any[] = [ 
		this.todosLosBotones[5]
	];


	inciarPasosInicioGeneral() { 

		this.componentesService.getNombreUsuario().subscribe(
	     nombreUsuario => this.nombreUsuario = nombreUsuario
	    ); 

	    this.shepherdService.modal = true;
	    this.shepherdService.confirmCancel = false;

		this.shepherdService.defaultStepOptions = {
		    id: 'intro',
			scrollTo: false,
		    arrow: true,
		    cancelIcon: { enabled: false },
		    buttons: this.botonesConAntes,
		    classes: 'has-text-centered',
		    highlightClass: 'highlight',
		    
		};

	    this.shepherdService.addSteps([{
		    arrow: false,
		    attachTo: { on: 'auto' },
		    buttons: this.botones,
		    title: '¡hola, '+this.nombreUsuario+'!',
		    text: ['a continuación tendrás una introducción sobre el inicio :)'],
		  },
		  {
		    attachTo: { element: '.step1-iniciogeneral', on: 'bottom' },
		    title: 'la aplicación (1/5)',
		    text: ['aquí podrás leer información sobre la aplicación: ¿qué hace? ¿qué ofrece? ¿por qué el nombre?'],
		  },
		  {
		    attachTo: { element: '.step2-iniciogeneral', on: 'bottom' },
		    title: 'las estadísticas (2/5)',
		    text: ['aquí podrás informarte sobre tu rendimiento y lo que has logrado en la aplicación'],
		  },
		  {
		    attachTo: { element: '.step3-iniciogeneral', on: 'bottom' },
		    title: 'la configuración (3/5)',
		    text: ['aquí podrás cambiar el nombre y el gusto que elegiste en la introducción'],
		  },
		  {
		    attachTo: { element: '.step4-iniciogeneral', on: 'bottom' },
		    title: 'la teoría (4/5)',
		    text: ['aquí accedes a contenido teórico del lenguaje: la historia, conocer mejor los sistemas de escritura y mucho más (¡además de un widget secreto!)'],
		  },
		  {
		    attachTo: { element: '.step5-iniciogeneral', on: 'top' },
		    title: 'los tres sistemas de escritura (5/5)',
		    text: ['aquí accederás al material de cada uno de los tres sistemas de escritura que aprenderás en esta aplicación :)'],
		  },
		{
		    arrow: false,
		    attachTo: { on: 'auto' },
		    buttons: this.botonFinalizar,
		    title: '¡y eso es todo por ahora, '+this.nombreUsuario+'!',
		    text: ['aquí termina tu tour del inicio, te recomiendo vayas ahora a teoría :)'],
		    when: {
		      show: () => {
		        this.componentesService.setUsuarioIniciadoInicioGeneral(true)
		      }
		    }
		  },
		]);

	    this.shepherdService.start();
	}





	activarAyuda(nombreModulo: string): void{

	    this.shepherdService.modal = true;
	    this.shepherdService.confirmCancel = false;

		this.shepherdService.defaultStepOptions = {
		    id: 'modulos',
			scrollTo: false,
			arrow: true,
		    cancelIcon: { enabled: false },
		    classes: 'has-text-justified',
		    highlightClass: 'highlight',  
		};

		switch(nombreModulo) { 
		   case 'luna': { 
		      this.inciarPasosLuna();
		      break; 
		   }
		   case 'sol': { 
		      this.inciarPasosSol();
		      break; 
		   } 
		   case 'oro': { 
		      this.inciarPasosOro();
		      break; 
		   } 
		   case 'tierra': { 
		      this.inciarPasosTierra();
		      break; 
		   } 
		   case 'agua': { 
		      this.inciarPasosAgua();
		      break; 
		   } 
		   case 'arbol': { 
		      this.inciarPasosArbol();
		      break; 
		   } 
		   case 'fuego': { 
		      this.inciarPasosFuego();
		      break; 
		   } 

		} 

		
	}

	//el tercer botón puede valer MEJORAR
	//la verdad es que MEJORAR EN GENERAL XD

	inciarPasosLuna() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-luna', on: 'top' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: identifica el kana',
		    text: ['este kana se te ha enseñado previamente a través del módulo de teoría y deberás identificarlo con la ayuda de tu memoria; recuerda lo siguiente: ¿el carácter, a qué silaba o sonido traduce?'],
		  },
		  {
		    attachTo: { element: '.step2-modulo-luna', on: 'right' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: escribe el romaji del kana',
		    text: ['como pautado en teoría, el romaji es la romantización de los carácteres japoneses; así que, luego de identificarlo, responde su versión escrita en este cuadro'],
		  },
		  {
		    attachTo: { element: '.step3-modulo-luna', on: 'top' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de escribir tu mejor respuesta se habilitará este botón y podrás darle click para saber si acertaste o no :) no te preocupes si fallas, ¡así se aprende!'],
		  },

		]);

		this.shepherdService.start();
	}


	inciarPasosFuego() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-fuego', on: 'top' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: reproduce cada bocina',
		    text: ['deberás dar click a cada una de las 4 bocinas y reproducirán una silaba única; lo importante a tener en cuenta es que cada silaba que escucharás pertenecerá a una misma consonante (s, m, h, etcétera)']
		  },
		  {
		    attachTo: { element: '.step2-modulo-fuego', on: 'right' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: escribe el kana',
		    text: ['tu trabajo es identificar auditivamente la quinta silaba faltante y escribirla en este cuadro; ¡la aplicación traducirá automáticamente tu respuesta!']
		},
		{
		    attachTo: { element: '.step3-modulo-fuego', on: 'top' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de escribir tu mejor respuesta se habilitará este botón y podrás darle click para saber si acertaste o no :) no te preocupes si fallas, ¡así se aprende!']
		},

		]);

		this.shepherdService.start();
	}



	inciarPasosSol() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-sol', on: 'top' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: reproduce la bocina',
		    text: ['deberás dar click a esta bocina y reproducirá una silaba única; será cuestión de memoria que identifiques la silaba ya que, aún si existe gran similitud con la pronunciación del español, existen excepciones :)']
		  },
		  {
		    attachTo: { element: '.step2-modulo-sol', on: 'right' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: escribe el kana',
		    text: ['la silaba que identificaste ahora deberás escribirla en este cuadro; ¡la aplicación traducirá automáticamente tu respuesta!']
		},
		{
		    attachTo: { element: '.step3-modulo-sol', on: 'top' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de escribir tu mejor respuesta se habilitará este botón y podrás darle click para saber si acertaste o no :) no te preocupes si fallas, ¡así se aprende!']
		},

		]);

		this.shepherdService.start();
	}



	inciarPasosTierra() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-tierra', on: 'top' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: identifica la palabra',
		    text: ['deberás identificar una palabra pautada, la cual estará compuesta por silabas pertenecientes a consonantes que ya has o estás estudiando y será importante reconocer como suena cada silaba que la compone']
		  },
		  {
		    attachTo: { element: '.step2-modulo-tierra', on: 'top' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: da click a cada bocina',
		    text: ['cada bocina reproducirá una palabra aleatoria; tu trabajo es dejar seleccionada la que reproduce la palabra que concuerda con la pautada antes']
		},
		  {
		    attachTo: { element: '.step3-modulo-tierra', on: 'top' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de seleccionar tu mejor respuesta se habilitará este botón y podrás darle click para saber si acertaste o no :) no te preocupes si fallas, ¡así se aprende!']
		},

		]);

		this.shepherdService.start();
	}


	inciarPasosAgua() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-agua', on: 'top' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: identifica el romaji',
		    text: ['este romaji se te ha enseñado previamente a través del módulo de teoría y deberás identificar su kana equivalente']
		  },
		  {
		    attachTo: { element: '.step2-modulo-agua', on: 'right' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: encuentra su kana',
		    text: ['ahora deberás seleccionar el cuadro donde esté el kana equivalente']
		},
		  {
		    attachTo: { element: '.step3-modulo-agua', on: 'left' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de seleccionar tu mejor respuesta se habilitará este botón y podrás darle click para saber si acertaste o no :) no te preocupes si fallas, ¡así se aprende!']
		},

		]);

		this.shepherdService.start();
	}


	inciarPasosOro() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-oro', on: 'right' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: identifica el kana',
		    text: ['el objetivo es identificar los 5 romaji respectivos a cinco silabas de una misma consonante; estos kana se te han enseñado previamente a través del módulo de teoría y deberás identificarlos con la ayuda de tu memoria']
		  },
		  {
		    attachTo: { element: '.step2-modulo-oro', on: 'right' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: escribe el romaji del kana',
		    text: ['en cada cuadro deberás escribir el romaji que equivale al kana identificado']
		},
		  {
		    attachTo: { element: '.step3-modulo-oro', on: 'top' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de escribir las cinco respuestas se habilitará este botón y podrás darle click para saber cuales acertaste y/o cuales no :) no te preocupes si fallas, ¡así se aprende!']
		},

		]);

		this.shepherdService.start();
	}


	inciarPasosArbol() { 
	    this.shepherdService.addSteps([
		  {
		    attachTo: { element: '.step1-modulo-arbol', on: 'top' },
		    buttons: this.botonesModulos,
		    title: 'paso 1: identifica la palabra',
		    text: ['deberás identificar esta palabra pautada en romaji, la cual estará compuesta por silabas pertenecientes a consonantes que ya has o estás estudiando y será importante reconocer a qué traduce cada silaba que la compone']
		  },
		  {
		    attachTo: { element: '.step2-modulo-arbol', on: 'top' },
		    buttons: this.botonesConAntes,
		    title: 'paso 2: del romaji al kana',
		    text: ['ahora sabiendo el romaji, selecciona el botón donde resida el kana equivalente a la palabra pautada en romaji']
		},
		  {
		    attachTo: { element: '.step3-modulo-arbol', on: 'top' },
		    buttons: this.botonesSinSiguiente,
		    title: 'paso 3: ¡listo!',
		    text: ['luego de seleccionar tu mejor respuesta se habilitará este botón y podrás darle click para saber si acertaste o no :) no te preocupes si fallas, ¡así se aprende!']
		},

		]);

		this.shepherdService.start();
	}




  
}