document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("#s5 > button");
    var box = document.querySelector("#s5 #box");
  
    button.addEventListener("click", function() {
      if (box.style.visibility === "hidden" || box.style.visibility === "") {
        box.style.visibility = "visible";
      } else {
        box.style.visibility = "hidden";
      }
    });
  });
 
  document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector("#s5 > button");
  
    image.addEventListener("mouseenter", function() {
      image.style.transition = "transform 1s";
      image.style.transform = "rotate(360deg)";
    });
  
    image.addEventListener("mouseleave", function() {
      image.style.transition = "transform 1s";
      image.style.transform = "rotate(0deg)";
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector("#s5 > #box");
    var button = document.querySelector("#s5 > button");
  
    button.addEventListener("mouseenter", function() {
      image.style.transition = "transform 1s";
      image.style.transform = "rotate(360deg)";
    });
  
    button.addEventListener("mouseleave", function() {
      image.style.transition = "transform 1s";
      image.style.transform = "rotate(0deg)";
    });
  });
  