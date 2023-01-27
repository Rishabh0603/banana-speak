
var btnselector = document.querySelector("#btn-translate")
var textinput = document.querySelector("#txt-input");
var outputdiv= document.querySelector("#output");

console.log(btnselector);
console.log(textinput);
console.log(outputdiv)



function eventhandler(){
    outputdiv.innerText="Banana";
};
btnselector.addEventListener("click",eventhandler);
    
