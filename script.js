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
let post = document.getElementById("postcard");
states.addEventListener("change", newState);

function newState() {
    var picked = document.getElementById("states");
    gr.innerHTML = "Greetings from";
    stn.innerHTML = "" + picked;
   post.style.backgroundImage = "url('../img/nj@2x.jpg')";
    console.log(picked);
}











//what the mess