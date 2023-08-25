const Div1 = document.getElementById("box1");
const Div2 = document.getElementById("box2");
function clickFunction() {
  if (Div1.style.display === "flex") {
    Div1.style.display = "none";
  } else {
    Div1.style.display = "flex";
  }
}


document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn2");
    
    var isBox2Visible = false;
  
    button.addEventListener("click", function() {
      if (isBox2Visible) {
        Div2.style.display = "none";
        isBox2Visible = false;
        button.innerHTML = "Poof"
      } else {
        Div2.style.display = "flex";
        isBox2Visible = true;
        button.innerHTML = "Tah Dah"
      }
    });
  });
 
  

  var isBox2Visible = true;

  function clickFunction1() {
    var button3 = document.getElementById("btn3");
    var frame = document.getElementById("frame");
  
    if (isBox2Visible) {
      frame.style.display = "none";
      isBox2Visible = false;
    } else {
      frame.style.display = "flex";
      isBox2Visible = true;
    }
  }
  
const cl1 = document.getElementById("cl1");
const cl2 = document.getElementById("cl2");

function showMenu() {
  Div2.style.display = "flex";
}

button3.addEventListener("click", clickFunction1);

const body = document.querySelector("body");
body.addEventListener("load", showMenu());
  

let clo = document.getElementsByClassName('closemenu');

for (let closeButton of clo) {
    closeButton.addEventListener('click', function() {
        closeButton.style.display = "none";
    });
}
  
  