//variables

const resultado = document.querySelector('#resultado');
const select = document.querySelector('#year');
const max = new Date().getFullYear(); //Permite tener el año actual
const min = max - 10;


document.addEventListener('DOMContentLoaded',()=>{

    mostrarAutos(); //Muestra todos los autos en RESULTADOS

    llenarSelect(); //Llenara el select de Año

});

//funciones

function mostrarAutos()
{
    autos.forEach(auto => {
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color} 
        `;

        resultado.appendChild(autoHTML);
    });
}

function llenarSelect()
{
    //Generamos una lista del año actual hasta -10 años atras
    for(let i = max; i>=min; i--)
    {
        //Creamos un elemento OPTION
        const option = document.createElement('option');
        option.value = i;   //le dimos el valor a cada option de i
        option.textContent = i; //agregamos texto

        select.appendChild(option); //agregamos un hijo al elemento select.
    }
}