function funcionBtnEnv(){
    let btn = document.getElementById("botonEnviar");
    let nombre = document.getElementById("nom").value;
    if(isNaN(nombre) == true){
        btn.disabled=false;
    }else{
        btn.disabled=true;
    }
}

function nomApe(){
    let nom = document.getElementById("nom").value;
    let ape = document.getElementById("ape").value;
    nom = nom.toUpperCase();
    ape = ape.toUpperCase();
    alert(nom + " " +ape)
}