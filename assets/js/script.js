var rep =["Ça dépend.", "Vu le prix du gaz, non.", "Non, par contre tu peux mettre un pull.","Non.","Ça va, il ne fait pas si froid que ça.", "Le tarif du gaz a pris +10% en juillet, +5% en août, +9% en septembre et +12,6% en octobre, donc non."];
function newRep(){
let numrand = Math.floor(Math.random()* rep.length);
document.getElementById('repdisp').innerHTML = rep[numrand];
}
