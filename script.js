const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const input = document.querySelector('input');
const pid = document.querySelector('#pid');

console.log(h1);
console.log(input.value);
console.log({
    h1, 
    p, 
    parrafo, 
    input, 
    pid
});


h1.innerText = 'Patito como un titulo <h1>';
pid.innerHTML = 'esto es una parrafo con un id que <br> cambio el <h1>contenido';

//getattribute obtiene el valor de de un atributo en un elemento html
console.log(parrafo.getAttribute('class'));

//setAtribute cambia el valor de cualquier atributo de un elemento html
parrafo.setAttribute('class', 'parrafocambiado');
console.log(parrafo.getAttribute('class'));

//classList.add agrega una clase a cualquier elemento html
parrafo.classList.add('rojo');
//classList.remove remueve una clase a cualquier elemento html
parrafo.classList.remove('rojo');

input.value='esto es el valor de un input cambiado';

const crearImagen = document.createElement('img');
crearImagen.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLulenmpUlRp4m1ry2u169Yt-XENZzo5sIg&usqp=CAU');

console.log(crearImagen);

pid.append(crearImagen);