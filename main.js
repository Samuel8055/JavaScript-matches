var elem = document.querySelectorAll('.section-title');
for (var i = 0; i < elem.length; i++) {
  if (elem[i].matches('h2')) {
    elem[i].style.color = "red";
  } else {
    elem[i].style.color = "green";
  }
}
