function vel(){
    distancia =(document.getElementById("distancia")).value;
    tiempo =(document.getElementById("tiempo")).value;
    var v = velocidad(distancia,tiempo);
    var calculo_velocidad = document.getElementById("calculo_velocidad");
    calculo_velocidad.innerHTML=v;

}

function velocidad(d,t){
    var distancia=Number(d);
    var tiempo=Number(t);
    var metros = distancia*1000;
    var segundos = tiempo * 60;
    var vel = metros / segundos;
    if(isNaN(vel)){
        return("Los valores ingresados no son números")
    }else{
        return(vel+" m/s")
    }
}

function triangulo() {
    var lado1 = parseFloat(document.getElementById("lado1").value);
    var lado2 = parseFloat(document.getElementById("lado2").value);
    var lado3 = parseFloat(document.getElementById("lado3").value);

    var t_triangulo = tipo_triangulo(lado1, lado2, lado3);
    var mostrar_triangulo = document.getElementById("mostrar_triangulo");
    mostrar_triangulo.innerHTML = t_triangulo;
}

function tipo_triangulo(l1, l2, l3) {
    var lado1 = Number(l1);
    var lado2 = Number(l2);
    var lado3 = Number(l3);

    if (lado1 === lado2 && lado2 === lado3) {
        return "Es un triángulo equilátero";
    } else if (lado1 !== lado2 && lado2 !== lado3 && lado1 !== lado3) {
        return "Es un triángulo escaleno";
    } else {
        return "Es un triángulo isósceles";
    }
}

function sumar(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    n1 = Number(num1);
    n2 = Number(num2);
    var suma = n1 + n2;
    var calculo = document.getElementById("calculo");
    calculo.innerHTML="= "+suma;
}

function restar(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    n1 = Number(num1);
    n2 = Number(num2);
    var suma = n1 - n2;
    var calculo = document.getElementById("calculo");
    calculo.innerHTML="= "+suma;
}

function multiplicar(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    n1 = Number(num1);
    n2 = Number(num2);
    var suma = n1 * n2;
    var calculo = document.getElementById("calculo");
    calculo.innerHTML="= "+suma;
}

function dividir(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    n1 = Number(num1);
    n2 = Number(num2);
    var suma = n1 / n2;
    var calculo = document.getElementById("calculo");
    calculo.innerHTML="= "+suma;
}

function es_primo() {
    var numeroInput = document.getElementById("primo");
    var numero = parseInt(numeroInput.value);
    var respuesta_primo = document.getElementById("respuesta_primo");
    var respuesta = "";

    if (numero <= 1) {
        respuesta =numero +  " no es primo";
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                respuesta = numero + " no es primo";
            }
        }

        if (respuesta === "") {
            respuesta = numero + " es primo";
        }
    }

    respuesta_primo.innerHTML = respuesta;
    numeroInput.value = "";
}

