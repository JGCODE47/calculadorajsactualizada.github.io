//Cuando coloco el script en el head 

/* document.addEventListener("DOMContentLoaded", ()=>{
    const btnNumericos = document.querySelectorAll("#btnNumericos")
    console.log(btnNumericos)
}) */



//Cuando coloco el script en el final del body
const btnNumericos = document.querySelectorAll("#btnNumericos")
const display = document.querySelector("#display")


//Variables globals 
var incial = 0 
var final = 0
var operadorLG = ''


//Numeros
const numerosCalculadora = [...btnNumericos]

const mostrarNumeros = e =>{
    display.value +=`${Number(e.target.getAttribute("numero"))}`
}


numerosCalculadora.map(number =>{
    number.addEventListener("click", mostrarNumeros)
})
//Numeros 



//Operadores
    const operadorLogico = document.querySelectorAll("#operadorLogico")
    const operadores = [...operadorLogico]


    const operarYcalcular = e =>{
        const operador = e.target.textContent
        

        switch (operador) {
            case "+":
                incial = Number(display.value)
                operadorLG = operador
                display.value=''
                break;
            case "-":
                incial = Number(display.value)
                operadorLG = operador
                display.value=''
                break;
            case "*":
                incial = Number(display.value)
                operadorLG = operador
                display.value=''
                break;
            case "=":
                final = Number(display.value)
                display.value=''
                 switch(operadorLG){
                    case '+':
                        display.value = incial+final
                     break;
                    case '-':
                         display.value = incial-final
                    break;
                    case '*':
                        display.value = incial*final
                   break;
                   case '/':
                    display.value = incial/final
               break;
                 }
                break;
            case "/":
            incial = Number(display.value)
            operadorLG = operador
                 display.value=''
                break;
            case "C":
                incial = 0
                final = 0
                operadorLG = '' 
                display.value = ''
                break;
           
        }
    }

    operadores.map(op=>{
        op.addEventListener("click", operarYcalcular)
    })



//Operadores