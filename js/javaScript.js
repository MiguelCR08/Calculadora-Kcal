function enviar(){
    // variables
    let edad = parseInt(document.getElementById("edad").value);
    let talla = parseInt(document.getElementById("talla").value);
    let peso = parseInt(document.getElementById("peso").value);
    let genero = document.getElementById("genero").value;
    let actividad = document.getElementById("actividad").value;
    let objetivo = document.getElementById("objetivo").value;
    
    let tmb = (10 * peso) + (6.25 * talla) - (5 * edad);
    if(genero == "m"){
        tmb += 5;
    }else if(genero == "f"){
        tmb -=161;
    }

    let kcal = 0;
    switch(actividad){
        case "s": kcal = tmb * 1.375; break;
        case "m": kcal = tmb * 1.55; break;
        case "a": kcal = tmb * 1.725; break;
    }

    switch(objetivo){
        case "v": kcal += 400; break;
        case "d": kcal -= 400; break;
    }
    document.querySelector(".tmb").textContent = "TMB: "+tmb;
    document.querySelector(".kcal").textContent = "Kcal: "+Math.round(kcal);
    limpiar();
}
document.querySelector("button").addEventListener("click",()=>{
    document.querySelector("dialog").showModal();
})

document.addEventListener("DOMContentLoaded",()=>{
    limpiar();
})

function limpiar(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach((input)=>{
        input.value = "";
    })
    let selects = document.querySelectorAll("select");
    selects.forEach((select)=>{
        select.value = "none";
    })
}