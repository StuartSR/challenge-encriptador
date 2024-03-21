function encriptar()
{
    let textoIngresado = document.getElementById("textoUsuario").value;
    
    let textoEncriptado = textoIngresado.replace("e", "enter")
                                        .replace("i","imes")
                                        .replace("a","ai")
                                        .replace("u","ufat")
                                        .replace("o","ober");
    let textoHTML = document.getElementById("textoEncriptado");
    textoHTML.innerHTML = textoEncriptado
}


function desencriptar()
{
    let textoIngresado = document.getElementById("textoUsuario").value;
    let textoEncriptado = textoIngresado.replace("enter", "e")
                                        .replace("imes", "i")
                                        .replace("ai", "a")
                                        .replace("ufat", "u")
                                        .replace("ober", "o");
    let textoHTML = document.getElementById("textoEncriptado");
    textoHTML.innerHTML = textoEncriptado
}

function copiar()
{
    let texto = document.getElementById("textoEncriptado").value;
    navigator.clipboard.writeText(texto)
    
}
