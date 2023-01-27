
var btnselector = document.querySelector("#btn-translate")
var textinput = document.querySelector("#txt-input");

console.log(textinput);



function eventhandler(){
    console.log("clicked!!");
    console.log("input ",textinput.value);
};
btnselector.addEventListener("click",eventhandler)
    
