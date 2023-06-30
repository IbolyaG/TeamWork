var burgerek_subcategory = document.querySelector(".burgerek_section");
var menu = document.querySelector('.menu');            //  kiválasztott elemek, classok
var menu_items = document.querySelector('.menu-items');
var menu_items_div = document.querySelector('.menu_items_div');
var header = document.querySelector(".header");
var burgers_divs = document.querySelectorAll(".burgerek_section div");
var product_image_divs = document.querySelectorAll(".product_image_divs");
var burgerek_subcategory_2 = document.querySelectorAll(".burgerek_subcategory h2")

var details_divs = [];   //   creatElementes divek, termekadatok kerulnek bele a for ciklusban
var buttontomb = [];  //   gombok  createElementtel
var products_tomb = [];  //  felpusholt termekek objectekben

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


var products_object = {termek_neve: "<b>"+"Cheddar Cheese Ring Lover"+"</b>", ara: 1000 + "Ft", termek_reszletes_leirasa:
"Ez a burger egy igazi sajtapokalipszis! A fényes bucikat megkentük sajtszósszal, az elmaradhatatlan WHOPPER® husira pakoltunk 2 szelet cheddart, friss paradicsomot, salátát, uborkát, pirított hagymát és a tetejére még egy panírozott sajtgyűrűt is pakoltunk, amit megtöltöttünk fondue sajtszósszal. Brutál? Brutál!",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve: "<b>"+"Valmar King" + "</b>",ara: 1200 + "Ft", termek_reszletes_leirasa: "Az idei nyár legforróbb slágere. Ami Valmar, az nagyot szól. A srácokkal közösen összepakolt, fullos burgerünkkel sem lesz ez másképp. A két Whopper® bucit megkentük bacon-majonézzel és ketchuppal, közéjük tettünk 6 szelet bacont, tűzön grillezett WHOPPER® marhahúst, amire 2 szelet cheddar sajtot olvasztottunk, majd belepakoltunk 3 db hagymakarikát, 4 szelet uborkát, pirított hagymát és friss salátát. Kóstold meg!",
akcio:"Akcio: "+ 10 + "%"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Plant-Based WHOPPER®"+ "</b>", ara: 1150 + "Ft", termek_reszletes_leirasa: "100% WHOPPER® 0% hús. Maximális WHOPPER® élmény, 0% hússal. A Plant-Based WHOPPER® hús nélkül hozza ugyanazt az élményt. A teljesen növényi alapú, fenntartható gazdálkodásból származó szójából és búzából készült Plant-Based pogácsa mellé kerülnek a jól megszokott alapanyagok: lédús paradicsom, friss hagyma, roppanós jégsaláta, uborka, krémes majonéz és ketchup.",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Bacon King"+ "</b>", ara: 850 + "Ft", termek_reszletes_leirasa: "Bacon fanoknak kötelező! Tapasztald meg, milyen az, amikor a dupla WHOPPER® húspogácsát nem kevesebb, mint 8 (!) szelet bacon és 4 (!) szelet sajt még tovább fokozza, az extrább ízélményt pedig a bacon-majonéz, a ketchup és a napon szárított paradicsomos szósz hozza. Ja igen, az egészet fényes zsemle koronázza meg.",
akcio:"Akcio: "+ 25 + "%"}
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Gluténmentes WHOPPER®"+"</b>", ara: 1350 + "Ft", termek_reszletes_leirasa: "A WHOPPER® mindenkié! Éppen ezért készítettük el gluténmentes változatban is! A burgerben minden más változatlan: tűzön grillezett marhahús, napérlelte paradicsom, friss hagyma, jégsaláta levelek, majonéz és ketchup. Kóstold meg, mitől WHOPPER® a WHOPPER® – glutén nélkül. A termék gluténmentes összetevőkből készül. Ugyanakkor ételeink feldolgozási technológiájából adódóan az egyes termékeinkben található allergének (pl. glutén) nyomokban előfordulhatnak ebben a termékünkben is.",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+"Chili Cheese Bacon King"+"</b>", ara: 1200 + "Ft", termek_reszletes_leirasa: "Erősen ajánljuk. Visszatért a kihagyhatatlan szendvics a bacon szerelmeseinek. A fényes zsemlébe kerülő 2db WHOPPER® húst kiegészítettük 4 szelet olvadós sajttal, plusz 8 ropogós baconnel. De most jön a csavar! Az egészet megkoronáztuk egy kis pikáns chili cheese szósszal, és néhány tüzes jalapeno karikával, az extra erő kedvéért.",
akcio:"Akcio: "+ 10 + "%"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+"Chicken Royal"+"</b>", ara: 1500 + "Ft", termek_reszletes_leirasa: "Nagyon hosszú, nagyon royal. Mindenki királyi bánásmódot érdemel, főleg ha burgerről van szó! Ezért a majonézzel megkent, hosszú, szezámmagos bucik közé extra hosszú, panírozott csirkét, friss salátát és paradicsomot pakoltunk. Na, ez fejedelmi!",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Xtra Long Chili Cheese"+"</b>", ara: 1300 + "Ft", termek_reszletes_leirasa: "Nagy kedvenc xtra változatban! Az xtrákat mindig xtra komolyan vesszük! Az Xtra hosszú buciban pikáns chili cheese szósszal ágyaztunk meg a HÁROM marhahús pogácsának, a KÉT szelet lágyan olvadó cheddar sajtnak és HAT jalapeno karikának, hogy igazán xtra legyen az ízélmény!",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Egyszemélyes kosár"+"</b>", ara: 2000 + "Ft", termek_reszletes_leirasa: "Csak magadnak… 4 db King Nuggets, 8 db Hagymakarika, 4 db Spicy King Nuggets, Közepes burgonya és 2 db választható tálkás szósz",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Spicy kosár"+"</b>", ara: 2300 + "Ft", termek_reszletes_leirasa: "Kosárba zárt tüzesség… 7 db Chili Cheese Nuggets, 9 db Spicy King Nuggets, Közepes burgonya és 2 db választható tálkás szósz",
akcio:"Akcio: "+ 5+"%"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Páros kosár"+"</b>", ara: 3000 + "Ft", termek_reszletes_leirasa: "Oszd meg és falatozz. 9 db King Nuggets, 10 db Chili Cheese Nuggets, 9 db Spicy King Nuggets, 2 db kis burgonya és 4 db választható tálkás szósz",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Nuggetsezős kosár"+"</b>", ara: 2200 + "Ft", termek_reszletes_leirasa: "Vigyázz, kész, mártogass! 9 db King Nuggets, 9 db Spicy King Nuggets, 2 db közepes burgonya és 4db választható tálkás szósz",
akcio:"Akcio: "+ 20+"%"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Coca-Cola®"+"</b>", ara: 400 + "Ft", termek_reszletes_leirasa: "Eredeti ízvilág. Coca-Cola® hagyományos változatban. Élvezd a jéghideg kortyokat!",
akcio:"Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Coca-Cola Zero®"+"</b>", ara: 300 + "Ft", termek_reszletes_leirasa: "Cukormentes felfrissülés. Coca-Cola® cukormentes változatban. Élvezd a jéghideg kortyokat!",
akcio:"Akcio: "+ 10+"%"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Espresso kávé"+"</b>", ara: 400 + "Ft", termek_reszletes_leirasa: "Garantáltan felpörget! Sűrű, krémes és karakteres presszókávé hamisítatlan olasz hagyományok szerint. A legkiválóbb minőségű, frissen őrölt Lavazza kávéból készítjük!",
akcio:"Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"<b>"+ "Hosszú kávé"+"</b>", ara: 350 + "Ft", termek_reszletes_leirasa: "Gyengéden élénkít. A legkiválóbb minőségű, frissen őrölt Lavazza kávéból készítjük a presszókávé hosszú és szelíd változatát, hogy bármelyik napszakban élvezhesd a forró kortyokat.",
akcio:"Akcio: "+ 5+"%"};
products_tomb.push(products_object);


for(var inde=0;inde<products_tomb.length;inde++){   //  create divs, buttons
    var new_div = document.createElement("div");
    details_divs.push(new_div);
    var new_div2 = document.createElement("div");
    var new_button = document.createElement("button");
    new_button.innerText = "Tobb informacio a termekrol"
    new_button.style.backgroundColor = "transparent"
    new_button.style.border = "none"
    new_button.style.fontSize = "20px"
    new_div2.appendChild(new_button);
    buttontomb.push(new_div2);
} 
for(var ind=0;ind<products_tomb.length;ind++){ 
for(property in products_tomb[ind]){
    details_divs[ind].innerHTML += products_tomb[ind][property] + "<br>" + "<br>";   //  objectertekek hozzaadasa a krealt divekhez
    product_image_divs[ind].insertAdjacentElement("afterbegin",details_divs[ind]);   //  divek behelyezese a hatterkepek dobozokba
    product_image_divs[ind].insertAdjacentElement("afterbegin",buttontomb[ind]);     //  krealt gombok behelyezese szinten oda
    buttontomb[ind].classList.add("button_style")
    if(products_tomb[ind].akcio === "Nincs"){
        delete products_tomb[ind].akcio
    }
} 
(function (index){
buttontomb[index].addEventListener("click", function(){
    classlist_overflow(product_image_divs[index])                 //  overflow:scroll
    product_image_divs[index].classList.toggle("height_500")      //  magassagnoveles gombrakatt eseten
})
})(ind)     //  for ciklus ind valtozojanak atadasa az onmagat meghivo funkcionak parameterkent, hogy tudjon vele dolgozni
}

function classlist_overflow(xy){                       //  overflow: scroll  function
    xy.classList.toggle("overflow")
}

var show_long = document.querySelectorAll(".show_long")
var long_burgerek_section = document.querySelector(".long_burgerek_section")
long_burgerek_section.classList.add("burgerek_section")
function show_long_burger(){
    long_burgerek_section.classList.toggle("products_grid_style");
    long_burgerek_section.classList.toggle("products");
 /*   for(var ind=0;ind<show_long.length;ind++){
        show_long[ind].classList.remove("none_display");
        show_long[ind].classList.toggle("products_image_divs");
        show_long[ind].classList.toggle("burgerek_section");
        show_long[ind].style.display = "grid"
        show_long[ind].style.gridTemplateColumns = "auto auto auto"
        console.log(show_long[ind].classList)
    }  */ console.log(long_burgerek_section.classList)
}



var szamlalo = 0;
function osszes_termek(){  //  Osszes termek funkcio
var new_div3 = document.createElement("div");  
for(var index=0;index<details_divs.length;index++){
new_div3.append(product_image_divs[index])
document.body.appendChild(new_div3)
if(product_image_divs[index].classList.contains("product_image_divs_2")){
    product_image_divs[index].classList.add("grid_display");
   product_image_divs[index].classList.remove("product_image_divs_2");
    product_image_divs[index].classList.remove("none_display");
}else if(product_image_divs[index].classList.contains("grid_display")){
product_image_divs[index].classList.add("product_image_divs_2");
product_image_divs[index].classList.remove("grid_display");
product_image_divs[index].classList.add("none_display");
 }
}}

document.addEventListener("DOMContentLoaded",function(){
    burgerek_subcategory_2[0].classList.add("none_display");
    burgerek_subcategory_2[1].classList.add("none_display");
    kosarak_subcategory.classList.add("none_display");
    italok_subcategory.classList.add("none_display");
})
function termekeink(){                                             
    burgerek_subcategory_2[0].classList.toggle("none_display");
    burgerek_subcategory_2[1].classList.toggle("none_display");
    kosarak_subcategory.classList.toggle("none_display");
    kosarak_subcategory.classList.toggle("burgerek_subcategory");
    italok_subcategory.classList.toggle("none_display");
    italok_subcategory.classList.toggle("burgerek_subcategory");
} 

var kosarak_subcategory = document.querySelector(".kosarak_subcategory");
var egyszemelyes_kosarak_section = document.querySelector(".egyszemelyes_kosarak_section");
var paros_kosarak_section = document.querySelector(".paros_kosarak_section");
egyszemelyes_kosarak_section.classList.toggle("none_display");
paros_kosarak_section.classList.toggle("none_display");
var italok_subcategory = document.querySelector(".italok_subcategory");
var uditoitalok_section = document.querySelector(".uditoitalok_section");
var kavek_section = document.querySelector(".kavek_section");
uditoitalok_section.classList.toggle("none_display");
kavek_section.classList.toggle("none_display");

function show_sub(variable){
    variable.classList.toggle("products_grid_style");
    variable.classList.toggle("products");
    variable.classList.toggle("burgerek_section")
}
var teszt_div2 = document.querySelector(".teszt_div2")
teszt_div2.classList.add(".product_image_divs");