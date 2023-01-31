
var btnselector = document.querySelector("#btn-translate")
var textinput = document.querySelector("#txt-input");
var outputdiv = document.querySelector("#output");


//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL ="https://api.funtranslations.com/translate/minion.json"
function getTranslation(text){
  return serverURL + "?" + "text=" + text
}
function errorHandler(error){
  console.log("error occurred",error)
}

function clickhandler(){
 var inputText = textinput.value;

 fetch(getTranslation(inputText))
  .then(response => response.json())
  .then(json => {
    var translatedtext = json.contents.translated;
    outputdiv.innerText = translatedtext;
  })
  .catch(errorHandler)
};
btnselector.addEventListener("click",clickhandler);
    



