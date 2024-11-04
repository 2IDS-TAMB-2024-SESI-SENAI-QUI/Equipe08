const quadro = document.getElementById('quadro');
const addCarbon = document.getElementById('c');
const addCH = document.getElementById('ch');
const addCHdois = document.getElementById('ch2');
const addCHtres = document.getElementById('ch3');
const addHidro = document.getElementById('h');
const addSimples = document.getElementById('ls');
const addDupla = document.getElementById('ld');
const addTripla = document.getElementById('lt');
const apagar = document.getElementById('apagar');
const verificar = document.getElementById('pronto');

var arrayClick = [];
var arrayLigações = []; 
var carbonos = 0;
var duplas = [];
var triplas =[];
var nomes = [];

addCarbon.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "C";
    arrayClick.push("C");
    quadro.appendChild(p);    
    //p.className = "carb";
    //makeDraggable(p);
});

addCH.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "CH";
    arrayClick.push("CH");
    quadro.appendChild(p);    
    //p.className = "carb";
    //makeDraggable(p);
});

addCHdois.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "CH2";
    arrayClick.push("CH2");
    quadro.appendChild(p);    
    //p.className = "carb";
    //makeDraggable(p);
});

addCHtres.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "CH3";
    arrayClick.push("CH3");
    quadro.appendChild(p);    
    //p.className = "carb";
    //makeDraggable(p);
});

addHidro.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "CH4";
    arrayClick.push("CH4");
    quadro.appendChild(p);
    //p.className = "hidro";
    //makeDraggable(p);
});

addSimples.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "-";
    arrayClick.push("-");
    arrayLigações.push("-");
    quadro.appendChild(p);
    //p.className = "simples";
    //makeDraggable(p);
});

addDupla.addEventListener("click", ()=>{
    const p = document.createElement('p');   
    p.innerHTML += "=";
    arrayClick.push("=");
    arrayLigações.push("=");
    quadro.appendChild(p);
    // p.className = "dupla";
    //makeDraggable(p);
});

addTripla.addEventListener("click", ()=>{
    const p = document.createElement('p');
    p.innerHTML += "≡";    
    arrayClick.push("≡");
    arrayLigações.push("≡");
    quadro.appendChild(p);
    //p.className = "tripla";
    //makeDraggable(p);
});

apagar.addEventListener("click", () => {
    arrayClick = [];
    arrayLigações = []; 
    carbonos = 0;
    duplas = [];
    triplas =[];
    nomes = [];
    carbonos = 0;
    quadro.innerHTML = ' ';
});

verificar.addEventListener("click", ()=>{
    if(quadro.innerHTML == ""){
        alert("Insira a Cadeia Carbônica");
    } 
    if(arrayClick[0] != "CH3"){
        if(arrayClick[0] == "CH4"){
            nomes.push("metano");
        } 
        if(arrayClick[0] == "CH2" && arrayClick[1] == "="){
            nomeando();
        } 
        else if(arrayClick[0] == "CH" && arrayClick[1] == "≡"){
            //alert(arrayClick);
            nomeando();
        } 
        /*else{
            alert("Essa Cadeia Carbônica não existe")
        }*/
    } else if(arrayClick[0] == "CH3"){
        //alert("Entrou aqui!");
        //alert(carbonos);

        nomeando();
    }
    //alert(nomes);
    Swal.fire({
        title: nomes.join("-"),
        icon: "success"
    });
    carbonos = 0;
})


function nomeando() {
    arrayClick.forEach(elemento => {
        if(elemento.includes("C")){
            carbonos++;
        }
    });
    if (carbonos == 2) {
        nomes.push("et");
    } else if (carbonos == 3) {
        nomes.push("prop");
    } else if (carbonos == 4) {
        nomes.push("but");
    } else if (carbonos == 5) {
        nomes.push("pent");
    } else if (carbonos == 6) {
        nomes.push("hex");
    } else if (carbonos == 7) {
        nomes.push("hept");
    } else if (carbonos == 8) {
        nomes.push("oct");
    } else if (carbonos == 9) {
        nomes.push("non");
    } else if (carbonos == 10) {
        nomes.push("dec");
    }

    for(let i=0;i<arrayLigações.length;i++){
        if(arrayLigações[i] == "="){
            duplas.push((i+1));
            //alert(nomes);
        } else if(arrayLigações == "≡"){
            triplas.push((i+1));
        }
    }

    if (duplas.length == 0 && triplas.length == 0) {
        nomes.push("ano");
    }
    else if (duplas.length > 0) {
        lista = ["eno", "dieno", "trieno"];
        nomes.push(duplas.join(", "));
        nomes.push(lista[duplas.length - 1]);
    }
    else if (triplas.length > 0) {
        lista = ["ino", "diino", "triino"];
        nomes.push(triplas.join(", "));
        nomes.push(lista[triplas.length - 1]);
    }

    while (arrayClick.length > 0) {
        arrayClick.pop();
    }
}
// document.getElementById('pronto').addEventListener('click', function() {
//     Swal.fire({
//         title: "Good job!",
//         text: "You clicked the button!",
//         icon: "success"
//     });
// });