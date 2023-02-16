const boldBtn = document.querySelector("#bold-btn");
const italicBtn = document.querySelector("#italic-btn");
const underlineBtn = document.querySelector("#underline-btn");

const leftAlignBtn = document.querySelector("#left-align-btn");
const centerAlignBtn = document.querySelector("#center-align-btn");
const rightAlignBtn = document.querySelector("#right-align-btn");
const justifyAlignBtn = document.querySelector("#justify-align-btn");

const uppercaseBtn = document.querySelector("#uppercase-btn");

const inputFontSize = document.querySelector("#input-font-size");

const colorChange = document.querySelector("#color-change");

const textBox = document.querySelector("#text-box");

//               bold
boldBtn.addEventListener("click", function(event){
    if(textBox.style.fontWeight === "900"){
        textBox.style.fontWeight = "400";
    }
    else{
        textBox.style.fontWeight = "900";
    }
});

//               italic
italicBtn.addEventListener("click", function(event){
    if(textBox.style.fontStyle === "italic"){
        textBox.style.fontStyle = "normal";
    }
    else{
        textBox.style.fontStyle = "italic";
    }
});

//                underline
underlineBtn.addEventListener("click", function(event){
    if(textBox.style.textDecoration === "underline"){
        textBox.style.textDecoration = "none";
    }
    else{
        textBox.style.textDecoration = "underline";
    }
});

//                  left align
leftAlignBtn.addEventListener("click", function(event){
    textBox.style.textAlign = "left";
});

//               right align
rightAlignBtn.addEventListener("click", function(event){
    textBox.style.textAlign = "right";
});

//                center align
centerAlignBtn.addEventListener("click", function(event){
    textBox.style.textAlign = "center";
});

//                justify align
justifyAlignBtn.addEventListener("click", function(event){
    textBox.style.textAlign = "justify";
});

//                font size
inputFontSize.addEventListener("click", function(event){
    const fontSizeValue = inputFontSize.value;
      textBox.style.fontSize = fontSizeValue+"px";
});
inputFontSize.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const fontSizeValue = inputFontSize.value;
      textBox.style.fontSize = fontSizeValue+"px";
    }
});

//        uppercase
uppercaseBtn.addEventListener("click", function(event){
    if(textBox.style.textTransform === "uppercase"){
        textBox.style.textTransform = "none";
    }
    else{
        textBox.style.textTransform = "uppercase";
    }
});

// colorChange.addEventListener("keypress", function(event){
//     if (event.key === "Enter") {
//         event.preventDefault();
//         const c = colorChange.value
//         console.log(c);
//     }
// });
colorChange.addEventListener("change", function(event){
    const colorCode = colorChange.value;
    textBox.style.color = colorCode;
})

