var rep =["Ça dépend", "Vu le prix du gaz, non.", "Non, par contre tu peux mettre un pull"];
function newRep(){
let numrand = Math.floor(Math.random()* rep.length);
document.getElementById('repdisp').innerHTML = rep[numrand];
}
