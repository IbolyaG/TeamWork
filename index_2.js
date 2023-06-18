let burgerek_subcategory = document.querySelector(".burgerek_section")
var menu = document.querySelector('.menu');            //  kiválasztott elemek, classok
var menu_items = document.querySelector('.menu-items');
var menu_items_div = document.querySelector('.menu_items_div');
var header = document.querySelector(".header")

function show_burger(){
    burgerek_subcategory.classList.toggle("products_grid_style")
    burgerek_subcategory.classList.toggle("products")
}

function toggleMenu() {   //  A menü button
    menu.classList.toggle('open');
    menu_items.classList.toggle('visible');
    menu_items_div.classList.toggle("visible");
  }
  
  menu.addEventListener('click', toggleMenu);  //  A menü button eseményfigyelője