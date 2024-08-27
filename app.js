var continuar = "si";
var salir = "";
var opcion = prompt(`¿Que operación deseas realizar?, presiona la tecla correspondiente:
    
    1-Sumar.
    2-Restar.
    3-Multiplicar.
    4-Dividir.
    5-Salir.
    
    `);


function sumar() {

    let num1 = parseInt(prompt("Ingresa el primer número."));
    let num2 = parseInt(prompt("Ingresa el segundo número."));
    let resultado = num1 + num2;

    alert(`Resultado: ${resultado}`);

}

function restar() {

    let num1 = parseInt(prompt("Ingresa el primer número."));
    let num2 = parseInt(prompt("Ingresa el segundo número."));
    let resultado = num1 - num2;

    alert(`Resultado: ${resultado}`);

}

function multiplicar() {

    let num1 = parseInt(prompt("Ingresa el primer número."));
    let num2 = parseInt(prompt("Ingresa el segundo número."));
    let resultado = num1 * num2;

    alert(`Resultado: ${resultado}`);

}

function dividir() {

    let num1 = parseInt(prompt("Ingresa el primer número."));
    let num2 = parseInt(prompt("Ingresa el segundo número."));
    let resultado = num1 / num2;

    alert(`Resultado: ${resultado}`);

}


while(continuar == "si"){


    switch (opcion) {
        case "1":
            sumar();
            break;
        case "2":
            restar();
            break;
        case "3":
            multiplicar();
            break;
        case "4":
            dividir();
            break;
        case "5":
            salir = "si"
            break
        default:
            alert("No se ingreso una opción valida");
            break;
    }

    if (salir == "si") {
        
        continuar = "no";
        
    } else {

        continuar = prompt("Deseas realizar otra operacion? escribe si o no para salir")
        if(continuar == "si"){

            opcion = prompt(`¿Que operación deseas realizar?, presiona la tecla correspondiente:
    
                1-Sumar.
                2-Restar.
                3-Multiplicar.
                4-Dividir.
            
                `);
        

        }
        
    }
    
    
}
