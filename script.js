const cocktails = [
  {
    name : ["ΤΑΥΡΟΣ", "TAURUS"],
    price : 8.5,
    img : [],
    sign : "./assets/icons/signs/taurus.svg",
    ingredients : ["Ρούμι Λευκό", "Ιβίσκος", "Ραβέντι", "Κιτρικό"]
  },
  {
    name : ["ΔΙΔΥΜΟΣ", "GEMINI"],
    price : 8.5,
    img : [],
    sign : "./assets/icons/signs/gemini.svg",
    ingredients : ["Ρούμι Λευκό", "Παλαιωμένο Ρούμι", "Overproof", "Tropical Βlue", "Κιτρικό" , "Μαύρο Πιπέρι"]
  },
  {
    name : ["ΚΑΡΚΙΝΟΣ", "CANCER"],
    price : 8,
    img : [],
    sign : "./assets/icons/signs/cancer.svg",
    ingredients : ["Ρούμι Λευκό", "Φρούτα Του Πάθους", "Βανίλια", "Lychee", "Φρέσκο Λάιμ"]
  },
  {
    name : ["ΛΕΩΝ", "LEO"],
    price : 8,
    img : [],
    sign : "./assets/icons/signs/leo.svg",
    ingredients : ["Βότκα Αρωματισμένη Με Φρούτα Του Δάσους", "Μάνγκο","Κανέλα","Κιτρικό"]
  },
  {
    name : ["ΠΑΡΘΕΝΟΣ", "VIRGO"],
    price : 9,
    img : [],
    sign : "./assets/icons/signs/virgo.svg",
    ingredients : ["Βοτκα" ,"Τσιχλόφουσκα", "Φράουλα", "Βανίλια", "Κιτρικό"]
  },
  {
    name : ["ΖΥΓΟΣ", "LIBRA"],
    price : 8,
    img : [],
    sign : "./assets/icons/signs/libra.svg",
    ingredients : ["Τζιν", "Καρπούζι", "Ζαχαρόνερο", "Κιτρικό"]
  }
]


let arrIndex;

//let random = Math.floor(Math.random() * cocktails.length);

function getRandom(){ 
  arrIndex = Math.floor(Math.random() * cocktails.length);
  return arrIndex;
}

const rotateItem = 60;

function rotate(){
  return getRandom() * rotateItem * -1 + (1800);  
}

const zodiacCyrcle = document.querySelector(".zodiac-circle");
const spin = document.querySelector(".spin-btn");
const zodiacs = document.querySelectorAll(".zodiac-item .logo img");
const cocktailName = document.querySelector(".cocktail-name span");
const price = document.querySelector(".price");
const cocktailDetails = document.querySelector(".cocktail-details");
const cocktailList = document.querySelector(".cocktail-list");
const logo = document.querySelector(".hotel-logo");

zodiacs.forEach((item, index) => {
  item.src =  cocktails[index].sign;
})

spin.addEventListener("click", spinActions);

function spinActions(){
  zodiacCyrcle.style.transform = "rotate("+ rotate() +"deg)";
  //console.log(arrIndex);
  //console.log(cocktails[arrIndex].name[0]);
  spin.classList.add("hide");
  setTimeout(hideItems, 3000);
  setTimeout(highlight, 4000);
  setTimeout(showdetails, 4500);
  setTimeout(showName, 4500);
  setTimeout(showList, 5500);
  setTimeout(showPrice, 6500);
  setTimeout(showLogo, 7000);
}

const zodiacItems = document.querySelectorAll(".zodiac-item");


function hideItems() {
  zodiacItems.forEach((z, index) => {
    if(index !== arrIndex){
      z.classList.add("hide");
    }
  });
  zodiacCyrcle.classList.add("hide");
  spin.removeEventListener("click", spinActions);
}

function highlight() {
  zodiacItems[arrIndex].classList.add("highlight");  
}


function showdetails(){
  cocktailName.innerHTML = cocktails[arrIndex].name[0];
  cocktails[arrIndex].ingredients.forEach(ing => {
    console.log(ing)
    const li = document.createElement('li');
    li.innerHTML = ing;
    cocktailList.appendChild(li);
  });
  price.innerHTML = "Τιμή : " + cocktails[arrIndex].price + "	&#8364;";
}

function showName(){
  cocktailName.classList.add("show");
}


function showList(){
  cocktailDetails.classList.add("show");
}
function showPrice(){
  price.classList.add("show");
}
function showLogo(){
  logo.classList.add("show");
}