const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-result");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function buttonEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value= textoEncriptado
    textArea.value= "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let codigoDeEncriptado = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]] 
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i= 0; i<codigoDeEncriptado.length; i++){
        if(stringEncriptado.includes(codigoDeEncriptado[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(codigoDeEncriptado[i][0], codigoDeEncriptado[i][1])
        }
    }
    return stringEncriptado
}

function buttonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value= textoDesencriptado
    textArea.value= "";
}

function desencriptar(stringDesencriptado){
    let codigoDeEncriptado = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]] 
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i= 0; i<codigoDeEncriptado.length; i++){
        if(stringDesencriptado.includes(codigoDeEncriptado[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(codigoDeEncriptado[i][1], codigoDeEncriptado[i][0])
        }
    }
    return stringDesencriptado
}

function buttonCopiar () {
    const textoACopiar = mensaje.value 
    navigator.clipboard.writeText(textoACopiar);    
}