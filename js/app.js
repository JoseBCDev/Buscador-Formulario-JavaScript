//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const precioMin = document.querySelector('#minimo');
const precioMax = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');
const select = document.querySelector('#year');
const max = new Date().getFullYear(); //Permite tener el año actual
const min = max - 10;

//CREAMOS UN OBJETO PARA Q EXTRAIGA TODOS LOS DATOS DE LOS SELECT
const datosBusqueda = {
    marca: '',
    year: '',
    precioMin: '',
    precioMax: '',
    puertas: '',
    transmision: '',
    color: ''
}

//SE EJECUTA CUANDO SE CARGA EL ARCHIVO JS
document.addEventListener('DOMContentLoaded',()=>{

    mostrarAutos(); //Muestra todos los autos en RESULTADOS

    llenarSelect(); //Llenara el select de Año

});

//EVENTOS CADA VEZ Q CAMBIE EL SELECT
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;
});

year.addEventListener('change',(e)=>{
    datosBusqueda.year = e.target.value;
});
precioMin.addEventListener('change',(e)=>{
    datosBusqueda.precioMin = e.target.value;
});
precioMax.addEventListener('change',(e)=>{
    datosBusqueda.precioMax = e.target.value;
});
puertas.addEventListener('change',(e)=>{
    datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change',(e)=>{
    datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change',(e)=>{
    datosBusqueda.color = e.target.value;
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