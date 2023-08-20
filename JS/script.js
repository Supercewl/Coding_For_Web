const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiop[]asdfghjkl;'zxcvbnm,./<>?:|+_=-!@#$%^&*()1234567890`~";
function changeText(element, originalText) {
    let iteration = 0;
    let interval = null;
  
    interval = setInterval(() => {
      element.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return originalText[index];
          }
          return letters[Math.floor(Math.random() * 90)];
        })
        .join("");
  
      if (iteration >= originalText.length) {
        clearInterval(interval);
      }
  
      iteration += 5;
    }, 90);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const exerciseElements = document.querySelectorAll(".container-main2");
  
    exerciseElements.forEach((exerciseElement) => {
      const anchorElement = exerciseElement.querySelector(".assignment-link");
      const originalText = anchorElement.textContent;
  
      exerciseElement.addEventListener("mouseover", () => {
        changeText(anchorElement, originalText);
      });
  
      exerciseElement.addEventListener("mouseout", () => {
        anchorElement.textContent = originalText;
      });
});
});