/*
* File: index.html
* Author: Székely Márton
* Copyright: 2021, Székely Márton
* Group: Szoft I/N
* Date: 2022-02-28
* Github: https://github.com/Lijakudo/
* Licenc: GNU GPL
*/

var oldalIn = document.getElementById("oldal");
var szogIn = document.getElementById("szog");
var szamitGomb = document.getElementById("szamitGomb")
var eredmenyOut = document.getElementById("eredmeny")

szamitGomb.addEventListener('click', function(){

    var oldal = Number(oldalIn.value);
    var szog = Number(szogIn.value);
    var eredmeny = (1/2)*oldal*Math.sin(szog/180*Math.PI);

    console.log(eredmeny)
    eredmenyOut.value = eredmeny;
});