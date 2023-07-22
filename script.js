function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('resultado').innerHTML = "";
}

function apagar(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    var x = eval(resultado);

        if(x % 1 > 0){
            
            document.getElementById('resultado').innerHTML =  x.toExponential(5);
        }
        else{

            document.getElementById('resultado').innerHTML = eval(resultado);
        }

}