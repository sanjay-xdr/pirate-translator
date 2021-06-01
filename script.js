


var buttonmsg = document.querySelector("#bu");
var txtinput = document.querySelector("#txt-input");
var output=document.querySelector("#output");
 
var url= "https://api.funtranslations.com/translate/pirate.json";


function makeingurl(txtinput){
    return url +"?"+"text="+txtinput.value;
}

buttonmsg.addEventListener("click",()=>{
  
   var name=fetch(makeingurl(txtinput))
.then(response => response.json())
.then(json=>{
    var translatedtext = json.contents.translated;
    output.innerText = translatedtext;
})

output.innerHTML=name;


})