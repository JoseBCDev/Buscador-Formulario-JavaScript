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

    mostrarAutos(autos); //Muestra todos los autos en RESULTADOS

    llenarSelect(); //Llenara el select de Año

});

//EVENTOS CADA VEZ Q CAMBIE EL SELECT
marca.addEventListener('change',(e)=>{
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change',(e)=>{
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});
precioMin.addEventListener('change',(e)=>{
    datosBusqueda.precioMin = e.target.value;
    filtrarAuto();
});
precioMax.addEventListener('change',(e)=>{
    datosBusqueda.precioMax = e.target.value;
    filtrarAuto();
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

function mostrarAutos(autos)
{
    limpiarHTML();

    autos.forEach(auto => {
        const {marca,modelo,year,precio,puertas,color,transmision} = auto;
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} - Precio: ${precio} - Color: ${color} 
        `;

        resultado.appendChild(autoHTML);
    });
}

function limpiarHTML()
{
    while(resultado.firstChild)
    {
        resultado.removeChild(resultado.firstChild);
    }
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

//FUNCION FILTRAR AUTO
function filtrarAuto()
{
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo); //USAMOS FILTER EN FUNCION DE ALTO NIVEL PORQUE UTILIZA OTRA FUNCION DENTRO
    mostrarAutos(resultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(marca){
        return auto.marca === marca;  //RETORNAMOS LOS AUTOS DEL ARREGLO IDENTICOS A LO Q SELECCIONAMOS DEL SELECT
    }
    return auto; //RETORNAMOS TODOS LOS AUTOS YA QUE NO HAY SELECCION EN MARCA
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;  //RETORNAMOS LOS AUTOS DEL ARREGLO IDENTICOS A LO Q SELECCIONAMOS DEL SELECT
    }
    return auto; //RETORNAMOS TODOS LOS AUTOS YA QUE NO HAY SELECCION EN LOS AÑOS
}

function filtrarMinimo(auto){
  const {precioMin} = datosBusqueda;
    if(precioMin){
        return auto.precio <= precioMin;  //RETORNAMOS LOS AUTOS DEL ARREGLO IDENTICOS A LO Q SELECCIONAMOS DEL SELECT
    }
    return auto; //RETORNAMOS TODOS LOS AUTOS YA QUE NO HAY SELECCION 
}

function filtrarMaximo(auto){
    const {precioMax} = datosBusqueda;
    if(precioMax){
        return auto.precio >= precioMax;  //RETORNAMOS LOS AUTOS DEL ARREGLO IDENTICOS A LO Q SELECCIONAMOS DEL SELECT
    }
    return auto; //RETORNAMOS TODOS LOS AUTOS YA QUE NO HAY SELECCION 
}