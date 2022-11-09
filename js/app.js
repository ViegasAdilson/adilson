var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');
let section_tag = document.getElementById('section');
const navbar = document.querySelector(".div-menu").querySelectorAll("li");


console.log(popupBtns)

function aquisicao(url){
  let ajax = new XMLHttpRequest();
  ajax.open('GET', url)

  ajax.onreadystatechange = () => {
   if (ajax.readyState == 4 && ajax.status == 200) {
       section_tag.innerHTML = ajax.responseText
       //document.getElementById('loading').remove()
   }
   if (ajax.readyState == 4 && ajax.status == 404) {
      section_tag.innerHTML = 'requisicao nao encontrada'
       //document.getElementById('loading').remove()
   }
}
ajax.send()
}


navbar.forEach(element => {
  element.addEventListener("click", function(){
    navbar.forEach(nav => nav.classList.remove("active"))

    this.classList.add("active")

})
});


//javascript for quick view button
var popup = function (popupClick) {
  popupViews[popupClick].classList.add('active');
}

popupBtns.forEach((popupBtn, i) => {
  popupBtn.addEventListener("click", function(){
    popup(i);
  });
});

//javascript for close buttonaquisicao(url)
closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    popupViews.forEach((popupView) => {
      popupView.classList.remove('active');
    });
  });
});







      