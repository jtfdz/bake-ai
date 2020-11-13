/* FIRST SLIDE */

class FirstSlide extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `



      <section class="hero is-fullheight has-text-black">      
        <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns is-centered">
            <div class="column">
              <img src="media/icons8-geta-96.png" style="width:7%">
              <img src="media/icons8-sakura-96.png" style="width:7%">
              <img src="media/icons8-fuji-96.png" style="width:7%">
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column">
              <img src="media/icons8-japanese-umbrella-96.png" style="width:7%">
              <img src="media/icons8-japan-96.png" style="width:7%">
              <img src="media/icons8-origami-96.png" style="width:7%">
            </div>
          </div>
          <div class="columns is-centered">
            <div class="column">
              <img src="media/icons8-torii-96.png" style="width:7%">
              <img src="media/icons8-kimono-96.png" style="width:7%">
              <img src="media/icons8-bento-96.png" style="width:7%">
            </div>
          </div>
          <a class="slide" href="#section2"><button class="button is-info is-rounded">Info</button></a>
      </div>
      </div>
     </section>

      
      

				
		`
    ;
  }
}
    
customElements.define('first-slide', FirstSlide);

/* FIN DE LA FIRST SLIDE */



/* SECOND SLIDE */

class SecondSlide extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  		<section class="hero is-fullheight is-success">
	    <div class="hero-header">

  <a class="slide" href="#section1"><button class="button is-info">Info</button></a>
		</div>
		</section>
    `;
  }
}
    
customElements.define('second-slide', SecondSlide);

/* FIN DE SECOND SLIDE */








const links = document.querySelectorAll("a.slide");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  
  const offsetTop = document.getElementById(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}



