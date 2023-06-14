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
let carousel_img = document.getElementById("slider_image")

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

function create_div(div_content, classlist_toggle){   //  dobozkészítő funkció
 let new_div= document.createElement("div")
 new_div.innerHTML = div_content;
 new_div.classList.toggle(classlist_toggle)
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
}

let button_0 = document.createElement("button")
let button_1 = document.createElement("button")
let button_2 = document.createElement("button")
let button_3 = document.createElement("button")

function admin_login0(){  //  bejelentkezés utáni rész
  if(username_input.value == admin_username && password_input.value == admin_password){
  button_0.innerText = "Új termék felvitele"
  button_3.innerText = "Összes Termék"
  button_2.innerText = "Összes termék törlése"
  button_1.innerText = "Vissza"
  
  login_div.classList.toggle("visible")
return create_div("Kérem válasszon: ", "grid_display").append(button_0,button_3,button_2,button_1)
}}

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