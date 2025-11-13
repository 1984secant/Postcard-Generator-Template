// old code 


//var stateName = document.getElementById('#states').names.length;

// //stateName.addEventListener("DOMContentLoaded", function);


// //when a state is selected,

// //greeting
// function names() {
//     var greeting = document.querySelector('#greeting');
// //where the state name will be
// var heading = document.querySelector('#state-heading');
// greeting.innerHTML = "Greetings from";
// heading.innerHTML = stateName;
// }
// // var greeting = document.querySelector('#greeting');
// // //where the state name will be
// // var heading = document.querySelector('#state-heading');
// // greeting.innerHTML = "Greetings from";
// // heading.innerHTML = stateName;

// console.log(stateName);

let gr = document.getElementById("greeting");
let stn = document.getElementById("stateName");
//^^^^ was commented out to use the test code
let post = document.getElementById("postcard");
let pic = document.getElementById("states");

pic.addEventListener("change", newState);
function newState() {
    var picked = pic.options[pic.selectedIndex].text;
    //old code: document.getElementById("states");
    gr.innerHTML = "Greetings from";
    stn.innerHTML = "" + picked;
   // test code: document.getElementById("stateName").innerHTML = "" + picked;
 
 post.style.backgroundImage = `url('img/${pic.value}@2x.jpg')`;
    console.log(picked);
    console.log(`url('../img/${pic.value}@2x.jpg')`);
}










//what the mess