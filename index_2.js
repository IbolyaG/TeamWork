let burgerek_subcategory = document.querySelector(".burgerek_section")
var menu = document.querySelector('.menu');            //  kiválasztott elemek, classok
var menu_items = document.querySelector('.menu-items');
var menu_items_div = document.querySelector('.menu_items_div');
var header = document.querySelector(".header");
var burgers_divs = document.querySelectorAll(".burgerek_section div");
var product_image_divs = document.querySelectorAll(".product_image_divs");

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


var products_object = {termek_neve: "Cheddar Cheese Ring Lover", ara: 1000 + "Ft", termek_reszletes_leirasa:
"Ez a burger egy igazi sajtapokalipszis! A fényes bucikat megkentük sajtszósszal, az elmaradhatatlan WHOPPER® husira pakoltunk 2 szelet cheddart, friss paradicsomot, salátát, uborkát, pirított hagymát és a tetejére még egy panírozott sajtgyűrűt is pakoltunk, amit megtöltöttünk fondue sajtszósszal. Brutál? Brutál!",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve: "Valmar King",ara: 1200 + "Ft", termek_reszletes_leirasa: "Az idei nyár legforróbb slágere. Ami Valmar, az nagyot szól. A srácokkal közösen összepakolt, fullos burgerünkkel sem lesz ez másképp. A két Whopper® bucit megkentük bacon-majonézzel és ketchuppal, közéjük tettünk 6 szelet bacont, tűzön grillezett WHOPPER® marhahúst, amire 2 szelet cheddar sajtot olvasztottunk, majd belepakoltunk 3 db hagymakarikát, 4 szelet uborkát, pirított hagymát és friss salátát. Kóstold meg!",
akcio: 10 + "%"};
products_tomb.push(products_object);
products_object = {termek_neve: "Plant-Based WHOPPER®", ara: 1150 + "Ft", termek_reszletes_leirasa: "100% WHOPPER® 0% hús. Maximális WHOPPER® élmény, 0% hússal. A Plant-Based WHOPPER® hús nélkül hozza ugyanazt az élményt. A teljesen növényi alapú, fenntartható gazdálkodásból származó szójából és búzából készült Plant-Based pogácsa mellé kerülnek a jól megszokott alapanyagok: lédús paradicsom, friss hagyma, roppanós jégsaláta, uborka, krémes majonéz és ketchup.",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve: "Bacon King", ara: 850 + "Ft", termek_reszletes_leirasa: "Bacon fanoknak kötelező! Tapasztald meg, milyen az, amikor a dupla WHOPPER® húspogácsát nem kevesebb, mint 8 (!) szelet bacon és 4 (!) szelet sajt még tovább fokozza, az extrább ízélményt pedig a bacon-majonéz, a ketchup és a napon szárított paradicsomos szósz hozza. Ja igen, az egészet fényes zsemle koronázza meg.",
akcio: 25 + "%"}
products_tomb.push(products_object);
products_object = {termek_neve: "Gluténmentes WHOPPER®", ara: 1350 + "Ft", termek_reszletes_leirasa: "A WHOPPER® mindenkié! Éppen ezért készítettük el gluténmentes változatban is! A burgerben minden más változatlan: tűzön grillezett marhahús, napérlelte paradicsom, friss hagyma, jégsaláta levelek, majonéz és ketchup. Kóstold meg, mitől WHOPPER® a WHOPPER® – glutén nélkül. A termék gluténmentes összetevőkből készül. Ugyanakkor ételeink feldolgozási technológiájából adódóan az egyes termékeinkben található allergének (pl. glutén) nyomokban előfordulhatnak ebben a termékünkben is.",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve:"Chili Cheese Bacon King", ara: 1200 + "Ft", termek_reszletes_leirasa: "Erősen ajánljuk. Visszatért a kihagyhatatlan szendvics a bacon szerelmeseinek. A fényes zsemlébe kerülő 2db WHOPPER® húst kiegészítettük 4 szelet olvadós sajttal, plusz 8 ropogós baconnel. De most jön a csavar! Az egészet megkoronáztuk egy kis pikáns chili cheese szósszal, és néhány tüzes jalapeno karikával, az extra erő kedvéért.",
akcio: 10 + "%"};
products_tomb.push(products_object);
products_object = {termek_neve:"Chicken Royal", ara: 1500 + "Ft", termek_reszletes_leirasa: "Nagyon hosszú, nagyon royal. Mindenki királyi bánásmódot érdemel, főleg ha burgerről van szó! Ezért a majonézzel megkent, hosszú, szezámmagos bucik közé extra hosszú, panírozott csirkét, friss salátát és paradicsomot pakoltunk. Na, ez fejedelmi!",
akcio: "Nincs"};
products_tomb.push(products_object);
products_object = {termek_neve: "Xtra Long Chili Cheese", ara: 1300 + "Ft", termek_reszletes_leirasa: "Nagy kedvenc xtra változatban! Az xtrákat mindig xtra komolyan vesszük! Az Xtra hosszú buciban pikáns chili cheese szósszal ágyaztunk meg a HÁROM marhahús pogácsának, a KÉT szelet lágyan olvadó cheddar sajtnak és HAT jalapeno karikának, hogy igazán xtra legyen az ízélmény!",
akcio: "Nincs"};
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

var long_burgerek_section = document.querySelector(".long_burgerek_section")
function show_long_burger(){
    long_burgerek_section.classList.toggle("products_grid_style");
    long_burgerek_section.classList.toggle("products")
}

long_burgerek_section.classList.add("burgerek_section")

function termekeink(){                                             //  Osszes termek funkcio
    var new_div3 = document.createElement("div");
    for(i=0;i<details_divs.length;i++){
    new_div3.append(product_image_divs[i])
    document.body.appendChild(new_div3)
    product_image_divs[i].classList.toggle("none_display")
} 
}