class HeaderGeneral extends HTMLElement {
  connectedCallback() {
    this.innerHTML = '<head><meta charset="UTF-8"><title>bake ai!!</title><link rel="stylesheet" href="styles/mystyles.css"></head><style>html{scroll-behavior: smooth; overflow: hidden;}</style>';
  }
}
    
customElements.define('header-general', HeaderGeneral);