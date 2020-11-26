function openTab(evt, tabName) {
  var i, tablinks;
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  evt.currentTarget.className += " is-active";
}