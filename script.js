
let g = "Hi, i'm a g string"; //string "" or '' does the same thing
let b = 25; // integer
let c = 15.5; // float (but js consider float as integer anyway)
let d = true; // boolean (also named bool)

let x; // x is stored in the user's ram, so it's fast and malable
var y; // don't use that one is basically let but worse
const z = 0; // "constant" it's a variable store in the ssd of the user, very stable but cannot be alterate after

/*
< : smaller than
>: greater than
<= : smaller or equal to
>= : greater or equal to
== : same value
=== : strictly the same value and type
!= : different to 
==! : strictly different  type OR value (only one)
*/

//console.log(); // show something in the console
//document.getElementById("myTitle"); // search in my html file a tag by its unique id
//addEventListener('click',function() {}) // make something when the user click onto something

if (5 != 6) {
  //a test if
  console.log(5 + " is different to " + 6);
}

for (let i = 0; i < 5; i++) {
  // a loop
  console.log(i);
}

// // color things
const btn = document.getElementById("myBtn"); // iniatilisation of variables
const selector = document.getElementById("selector");
selector.value = "#db909000";

btn.addEventListener("click", function () { // event listeners waiting for stuff to happen
  if (btn.style.backgroundColor == "blue") { // test
    btn.style.backgroundColor = selector.value; // instructions
  } else {
    btn.style.backgroundColor = "blue";
  }
});
selector.addEventListener("change", function () {
  btn.style.backgroundColor = selector.value;// instructions
});

const btnAni = document.getElementById("AniButton");
const selectorAni = document.getElementById("SelectorAni");
selectorAni.value = "#ad737300";
 //selectorAni.style.opacity = "10%";


btnAni.addEventListener("click",function () {
   if (btnAni.style.backgroundColor == "green") {
    btnAni.style.backgroundColor =selectorAni.value;
   }else {
      btnAni.style.backgroundColor = "green";
    } 
    
  })


