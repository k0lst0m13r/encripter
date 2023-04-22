/* Evil Otto es un legendario villano del arcade, salido del juego Berzerk donde 
usaba éste maravilloso código de encriptación para comunicarse con sus robots asesinos. */


/**
 * Esta función encripta el mensaje reemplazando las
 * vocales por cadenas cortas con el método .replace()
 */
function encriptarMensaje() {

    var mensaje = document.getElementById("in-box").value;
  
    var salida = mensaje.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ia")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
    document.getElementById("out-box").value = salida;  
}

/**
 * Esta función desencripta el mensaje restituyendo las
 * vocales a su lugar, reemplazando las cadenas cortas de la encriptación
 *  con el método .replace()
 */
function desencriptarMensaje() {
  var mensaje = document.getElementById("in-box").value;
  
  var salida = mensaje.replace(/enter/g, "e")
                      .replace(/imes/g, "i")
                      .replace(/ia/g, "a")
                      .replace(/ober/g, "o")
                      .replace(/ufat/g, "u");
  document.getElementById("out-box").value = salida;  
}

function copiar() {
  var contenido = document.getElementById("out-box").value;
  navigator.clipboard.writeText(contenido);
}

var foco = document.getElementById("in-box");
foco.focus();

document.getElementById("out-box").style.display = "none";
document.getElementById("copy").style.display = "none"; 

document.getElementById("encripter").addEventListener("click", function(event) {
  document.getElementById("robot").style.display = "none";
  document.getElementById("out-box").style.display = "block";
  document.getElementById("copy").style.display = "block";  
  event.preventDefault(); 
  encriptarMensaje();
});
document.getElementById("decripter").addEventListener("click", function(event) {
  document.getElementById("robot").style.display = "none";
  document.getElementById("out-box").style.display = "block";
  document.getElementById("copy").style.display = "block"; 
  event.preventDefault(); 
  desencriptarMensaje();
}); 


  
