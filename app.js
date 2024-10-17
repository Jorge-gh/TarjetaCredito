const numeroInput = document.getElementById("inputnumTarjeta")
const numeroTarjeta = document.getElementById("numeroTarjeta")

const nombreInput = document.getElementById("inputnombreCompleto")
const nombreCompleto = document.getElementById("nombreCompleto")
const firma = document.getElementById("firma")

const expiracionInput = document.getElementById("inputExpiracion")


const expiracion =  document.getElementById("fechaExpiracion")

const ccvInput = document.getElementById("inputccv")
const ccv = document.getElementById("ccv")

const card = document.querySelector(".card")

function setNumeroTarjeta(event){
    let numberText = parseInt(numeroInput.value.replace(/ /g, ""))

    if (isNaN(numberText)){
        numberText = ""
    }

    if (numeroInput.value == ""){
        numeroTarjeta .textContent = "#### #### #### ####"
        return;
    }

    if (numeroInput.value == 0){
        alert("No puede iniciar en Cero")
        numeroInput.value = ''
        return;
    }

    // TODO Bug a la hora de escribir varios 0 al principio
    const result = String(numberText).replace(/([0-9]{4})/g, '$1 ')
    
    numeroInput.value = result

    numeroTarjeta.textContent = result
}

function setNombreCompleto(event){

    nombreCompleto.textContent = nombreInput.value
    firma.textContent = nombreInput.value

}

function setExpiracion(){

    
    expiracion.textContent = expiracionInput.value
    
}

function setCCV (){

    let ccvText = parseInt(ccvInput.value.replace(/ /g, ""))

    if (isNaN(ccvText)){
        ccvText = ""
    }

    if (ccvInput.value == '') {
        ccv.textContent = "***"
        return;
    }

    const result = String(ccvText).replace(/([0-9]{3})/g, '$1')

    ccvInput.value = result
    ccv.textContent = result
}

function girarTarjeta() {
    card.classList.toggle("flip")
}

card.addEventListener('click', girarTarjeta)

function toggleFormulario(){
    document.getElementById("form").classList.toggle("hidden")
}

function mostrarDatos (){
    if (nombreInput.value == "" || numeroInput.value == "" || numeroInput.value.length < 19  || expiracionInput.value == "" || ccvInput.value == "" || ccvInput.value.length < 3) {
        alert("Completa los campos")
    } else {
        alert("Nombre Completo: "+ nombreInput.value + " \nNumero De Tarjeta: "+ numeroInput.value + "\nExpiracion: "+ expiracionInput.value + "\nCCV: "+ ccvInput.value)
    }
}
numeroInput.addEventListener("keyup", setNumeroTarjeta)
nombreInput.addEventListener("keyup", setNombreCompleto)
expiracionInput.addEventListener("input", setExpiracion)
ccvInput.addEventListener("keyup", setCCV)