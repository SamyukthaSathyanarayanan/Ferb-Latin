var btnTranslate = document.querySelector("#btn-translate");
var inputTxt = document.querySelector("#txt-input"); 
var outputTxt = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

btnTranslate.addEventListener("click",clickevent)

function getTranslationURL(text){
    return serverURL + "?text=" + text
}

function errorHandler(error) {
    console.log("Error occured");
    alert("Error: " + error);
}

function clickevent(){
    var textInput = inputTxt.value;
    fetch(getTranslationURL(textInput))
        .then(Response => Response.json())
        .then(json => {
            var translatedTxt = json.contents.translated;
            outputTxt.innerHTML = translatedTxt;
        })
        .catch(errorHandler);
}