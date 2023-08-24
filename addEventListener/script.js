
const input2 = document.querySelector('#calculo2');
const input1 = document.querySelector('#calculo1');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const formulario = document.querySelector('#form');

form.addEventListener('submit', calcular);

function  calcular(evento){
    console.log({evento});
    evento.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: "+ sumaInputs;
}

