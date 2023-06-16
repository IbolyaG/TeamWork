var menu = document.querySelector('.menu');            //  kiválasztott elemek, classok
var menu_items = document.querySelector('.menu-items');
var menu_items_div = document.querySelector('.menu_items_div');
var input_fields = document.querySelectorAll(".input_div input, .input_div textarea")
var header = document.querySelector(".header")
let login_div = document.querySelector(".login_div")
let input_div = document.querySelector(".input_div")
let akcio_igen = document.querySelector(".akcio_igen")
let akcio_nem = document.querySelector(".akcio_nem")
let akcio_mertek = document.querySelectorAll(".akcio_mertek")
var teszt_div = document.querySelector(".teszt_div")
let osszes_termek_divek = document.querySelectorAll(".osszes_termek div")
var slider_container = document.querySelector(".slider_container")
var slider_innerdivs = document.querySelectorAll(".slider_innerdiv");


var username_input = document.getElementById("username");        //  felhasználónév és jelszó
var password_input = document.getElementById("password");
let admin_username = "johnny078"
let admin_password = "1978"

let getItem1 = localStorage.getItem("termek1")          //  elmentett elemek megfogása a localStorage-ból
let getItem2 = localStorage.getItem("termek2")
let getItem3 = localStorage.getItem("termek3")

var termek_adatok_object = {};
var termek_adatok_tomb = []; 
var termek1 = []                            //  A terméktömbök
var termek2 = []
var termek3 = []

function toggleMenu() {   //  A menü button
  menu.classList.toggle('open');
  menu_items.classList.toggle('visible');
  menu_items_div.classList.toggle("visible");
}

menu.addEventListener('click', toggleMenu);  //  A menü button eseményfigyelője


function input_submit(){            //  termék felvitele gomb funkciója
    create_div(input())
    input_div.classList.toggle("visible")
    admin_login0()
    login_div.classList.toggle("visible")
}

document.addEventListener("DOMContentLoaded",function(){
  slider_innerdivs = document.querySelectorAll(".slider_innerdiv");
  var current_slide = 0;  //  az aktuálisan megjelenített slide sorszámát tárolja

  function show_slide(n){  //  Ez a függvény felelős az adott slide megjelenítéséért. Az argumentumként kapott "n" érték alapján megváltoztatja a jelenlegi slide láthatóságát a "slides" NodeList-ben. 
    slider_innerdivs[current_slide].style.display = "none";
      // Az előző slide "display" tulajdonsága "none" lesz, és az új slide "display" tulajdonsága "block" lesz.
    current_slide = (n + slider_innerdivs.length) % slider_innerdivs.length; 
    slider_innerdivs[current_slide].style.display = "block";  //  Az aktuális slide sorszámát a "currentSlide" változó tárolja, és a % slides.length rész a slide-ok ciklikus átváltását biztosítja.
  }

  function next_slide() {
    show_slide(current_slide + 1);
  }  //  Ez a függvény meghívja a "show-slide" függvényt a következő slide sorszámmal

 var set_int= setInterval(next_slide,3000)

 slider_container.addEventListener("mouseenter", function() {
  clearInterval(set_int);
  for(i=0;i<slider_text.length;i++){
  slider_text[i].style.fontSize = "30px";
  slider_text[i].style.backgroundColor = "rgba(4, 133, 4,0.8)";
  slider_text[i].style.borderRadius = "10px"}
  })

 slider_container.addEventListener("mouseleave", function() {
  set_int = setInterval(next_slide,3000);
  for(i=0;i<slider_text.length;i++){
    slider_text[i].style.fontSize = "20px";
    slider_text[i].style.backgroundColor = "transparent";}
  })

 show_slide(current_slide)   //  Ez a sor az első slide megjelenítését indítja el. Ez a sor biztosítja, hogy amikor az oldal betöltődik és a JavaScript kód lefut, az első slide rögtön megjelenjen.
})  //  A current_slide változó az aktuális slide indexét tartalmazza. Az show_slide függvényhívásban átadjuk neki az current_slide értékét, hogy megjelenítse az adott slide-ot.


function create_div(div_content, classlist_toggle, classlist_toggle_2){   //  dobozkészítő funkció
 let new_div= document.createElement("div")
 new_div.innerHTML = div_content;
 new_div.classList.toggle(classlist_toggle);
 new_div.classList.toggle(classlist_toggle_2);
 document.body.appendChild(new_div);
 return new_div 
 
}

function input(){                                //  Az Inputbevitelhez és adattároláshoz a localStorage-ban
  input_fields.forEach(function(input_field){
  let input_id = input_field.getAttribute("id");
  let input_value = input_field.value;
  termek_adatok_object[input_id] = input_value;
  })

  let termek_adatok = ""
  for(property in termek_adatok_object){
  termek_adatok += property + " " + termek_adatok_object[property] + "<br>";
  }
  if(getItem1 == null){
  termek1 = termek_adatok;
  localStorage.setItem("termek1",termek1);
  }else if(getItem2 == null){
  termek2 = termek_adatok;
  localStorage.setItem("termek2",termek2);
  }else if(getItem3 == null){
    termek3 = termek_adatok;
    localStorage.setItem("termek3",termek3);
  }
  return termek_adatok
  }
 
function display_login(){        //  mutassa a login dobozt + blur effect on
  login_div.classList.toggle("visible")
  header.classList.toggle("blur")
  slider_container.classList.toggle("none_display")
}


let button_0 = document.createElement("button")
let button_1 = document.createElement("button")
let button_2 = document.createElement("button")
let button_3 = document.createElement("button")
let button_4 = document.createElement("button")
let button_array = []
button_array.push(button_0,button_1,button_2,button_3,button_4)

button_array.forEach(function(button) {
  button.classList.toggle("button_style");
});

function admin_login0(){  //  bejelentkezés utáni rész
  if(username_input.value == admin_username && password_input.value == admin_password){
  button_0.innerText = "Új termék felvitele"
  button_3.innerText = "Összes Termék"
  button_2.innerText = "Összes termék törlése"
  button_1.innerText = "Vissza"
  button_4.innerText = "Kijelentkezés"

  
  
  
  login_div.classList.toggle("visible")
return create_div("<u>" + "Kérem válasszon:"+ "</u>", "grid_display","text_style").append(button_0,button_3,button_2,button_1,button_4)
}}

function button_style(buttons){
  buttons.forEach(function(button){
    button.classList.toggle("button_style")
  })
}

button_0.addEventListener("click", function(){        //  gombok eseményfigyelői
  input_div.classList.toggle("visible")
  remove_div()
  for_each(akcio_mertek,"none_display")
})
button_1.addEventListener("click", function(){
  login_div.classList.toggle("visible")
  remove_div()
})
button_2.addEventListener("click", function(){
  localStorage.clear();
})
button_3.addEventListener("click", function(){
  for(var i=0;i<osszes_termek_divek.length;i++){
      var key = localStorage.key(i);
      var value = localStorage.getItem(key)
      osszes_termek_divek[i].innerHTML = "<p>" + value + "</p>";
      osszes_termek_divek[i].classList.toggle("osszes_termek_divek")  
      } 
  
    }
)
button_4.addEventListener("click", function(){
  slider_container.classList.toggle("none_display")
  remove_div();
  header.classList.toggle("blur");

})

function remove_div(){
  document.body.lastChild.remove()
}

akcio_igen.addEventListener("input", function(){         //  akció radio gombok eseményfigyelői
  for_each(akcio_mertek, "grid_display", "none_display")
})

akcio_nem.addEventListener("input", function(){
  for_each(akcio_mertek, "none_display")
  })

function for_each(node_list, class_list_add, class_list_remove) {node_list.forEach(function(element){
  element.classList.add(class_list_add);       //  forEach funkció nodeListekhez
  element.classList.remove(class_list_remove)
  })}

var osszes_termek_tomb = [];
var termekek_object = {termek_neve: "Cheddar Cheese Ring Lover", mennyiseg: 1 + "db", ara: 1000 + "Ft", termek_reszletes_leirasa:
"Ez a burger egy igazi sajtapokalipszis! A fényes bucikat megkentük sajtszósszal, az elmaradhatatlan WHOPPER® husira pakoltunk 2 szelet cheddart, friss paradicsomot, salátát, uborkát, pirított hagymát és a tetejére még egy panírozott sajtgyűrűt is pakoltunk, amit megtöltöttünk fondue sajtszósszal. Brutál? Brutál!",
akcio: "Nincs"};
osszes_termek_tomb.push(termekek_object)
termekek_object = {termek_neve:"Spicy kosár", mennyiseg: 1 + "db kosár", ara: 3000 + "ft", termek_reszletes_leirasa:
"Kosárba zárt tüzesség…" +  7 +  "db Chili Cheese Nuggets,"+ 9 + "db Spicy King Nuggets, Közepes burgonya és 2 db választható tálkás szósz", akcio: "10%"}
osszes_termek_tomb.push(termekek_object)
termekek_object = {termek_neve:"Whisky BBQ Wrapper", mennyiseg: 1 + "db", ara: 2350 + "ft", termek_reszletes_leirasa:
"Egy pikáns Wrapper az igazi ínyenceknek! Hot&Spicy Bites, Whisky szósszal nyakon öntve, ropogós sült krumplival, egy tortillában ropogósra sütve! Fontos összetevők még a cheddar sajt, a finom bacon, a pirított hagyma, a friss zöldsaláta, a pirított hagyma és a savanyú uborka. Nagyszerű! 0,1% alatti arányban alkoholt tartalmaz.",
akcio:"Nincs"}
osszes_termek_tomb.push(termekek_object)
termekek_object = {termek_neve:"Pepsi", mennyiseg: 5 + "db", ara: 1000 + "ft", termek_reszletes_leirasa:
"A jól ismert 0,33 l-es dobozos üdítő", akcio: "25%"}
osszes_termek_tomb.push(termekek_object)
termekek_object = {termek_neve:"Schweppes Narancs", mennyiseg: 5 + "db", ara: 1250 + "ft", termek_reszletes_leirasa:
"0,33 l-es narancsos dobozos üdítő a kellemes időkre!", akcio: "Nincs" }
osszes_termek_tomb.push(termekek_object)

var slider_innerdiv_div = document.querySelectorAll(".slider_innerdiv div")
var slider_text = document.querySelectorAll(".slider_text")
let kiiratas = ""                          //  Összes termék kiiratása forEach metódussal
osszes_termek_tomb.forEach(function(object){
kiiratas += "Termék Neve: " + object.termek_neve + "<br>" +"Mennyisége: " +object.mennyiseg+ "<br>" + "Ára: " +object.ara
+ "<br>" + "Termék részletes leírása: " + object.termek_reszletes_leirasa + "<br>" + "Akció: " + object.akcio + "<br>"
})

var clicked_divs = document.querySelectorAll(".clicked_div")

for(var i=0;i<osszes_termek_tomb.length;i++){
  for(var property in osszes_termek_tomb[i])
  { 
    slider_text[i].innerHTML += osszes_termek_tomb[i][property] + "<br>";
    clicked_divs[i].innerHTML  +=  osszes_termek_tomb[i][property] + "<br>";
  } 
  }
  
var click_div_1 = document.querySelector(".click_div_1");
var click_div_2 = document.querySelector(".click_div_2");
var click_div_3 = document.querySelector(".click_div_3")
var click_div_4 = document.querySelector(".click_div_4")
var click_div_5 = document.querySelector(".click_div_5")


 function slider_click(actual_click_div,m){
  header.classList.toggle("blur");
  slider_container.classList.toggle("blur");
  actual_click_div.classList.toggle("clicked_div");
  actual_click_div.classList.toggle("background");
 }

slider_text[0].addEventListener("click", function(){
  slider_click(click_div_1)
})
slider_text[1].addEventListener("click", function(){
  slider_click(click_div_2)
})
slider_text[2].addEventListener("click", function(){
  slider_click(click_div_3)
})
slider_text[3].addEventListener("click", function(){
  slider_click(click_div_4)
})
slider_text[4].addEventListener("click", function(){
  slider_click(click_div_5)
})
