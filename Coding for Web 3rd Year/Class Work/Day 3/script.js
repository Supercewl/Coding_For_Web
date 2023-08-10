function myFunc() {
    let xyz = document.getElementById('box');
    let abc = document.getElementById('h-one');
    let btn = document.getElementById('btn')

    if (xyz.style.backgroundColor === "rgb(68, 68, 68)" && xyz.style.width === "400px" &&
        abc.style.fontSize === "32px" && abc.style.color === "rgb(0, 0, 0)" && btn.style.width === "450px") {
        xyz.style.backgroundColor = "rgb(0, 0, 0)";
        xyz.style.width = "800px";   
        abc.style.fontSize = "64px";
        abc.style.color = "rgb(68, 68, 68)";
        btn.style.width = "250px";
        btn.style.background = "rgb(68, 68, 68)"
    } else {
        xyz.style.backgroundColor = "rgb(68, 68, 68)";
        xyz.style.width = "400px";
        abc.style.fontSize = "32px";
        abc.style.color = "rgb(0, 0, 0)";
        btn.style.width = "450px";
        btn.style.background = "rgb(0, 0, 0)";    
    }
}

function outputText() {
    var inputText = document.getElementById("textIndex").value;
    var h1Element = document.getElementById("h-one");
    h1Element.textContent = inputText;
}

function fontChoice1() {
    var headingElement = document.getElementById("h-one");
    headingElement.style.fontFamily = 'Borel', cursive;

}

function fontChoice2() {
    var headingElement = document.getElementById("h-one");
    headingElement.style.fontFamily = 'Poppins', sans-serif;

}

function fontChoice3() {
    var headingElement = document.getElementById("h-one");
    headingElement.style.fontFamily = 'Space Grotesk', sans-serif;

}

function changeSize() {
    const sliderValue = document.getElementById("slider").value;
    const resizableDiv = document.getElementById("resizeimg");

    resizeimg.style.width = sliderValue + "px";
    resizeimg.style.height = sliderValue + "px";
}

function changeImg() {
    const selectedImage = document.getElementById("imgSelector").value;
    const resizableImage = document.getElementById("resizeimg");

    resizeimg.src = selectedImage;
}
