//Función que muestra la simetría de un string o número para convertir en el arreglo.
function resultadoPrueba() {
    
    var array= document.getElementsByName("producto")[0].value;
    var arreglo = array.split('');
    document.querySelector("#Resultado").innerHTML = JSON.stringify(arreglo)
    
    //Capicua es la forma adecuada de crear la simetría
    const capicua = (numero) => {
        numero = numero.toString()
        for(let i = 0; i<numero.length; i++){
            if(numero[i] !== numero[numero.length-1-i]){
            return false
            }
        }
        return true
    }
  
    if(capicua(array)==true){
        document.getElementById("result2").innerHTML = ("El arreglo es SIMETRICO y su longitud es "+array.length);
    }else{
        document.getElementById("result2").innerHTML = ("El arreglo NO es simétrico y su longitud es "+array.length);
    }
    
}
