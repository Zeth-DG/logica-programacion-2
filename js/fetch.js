// Fetch API

const API_URL = "https://fakestoreapi.com/products"; //guardar string, ruta de la documentación

//sintaxis moderna, JavaScript asincrono

async function fetchData (){ //declarar función asíncrona
    // bloque de manejo de errores de tiempo de ejecución
    try{
        const response = await fetch(API_URL); //devolver objeto tipo promesa
        const data = await response.json();  //conversión de json a objeto

        if (!response.ok){
            throw new Error("No se pudo completar la solicitud...")
        }//if
        return data; 

    } catch(error){
        console.log(error); 
    }//try-catch
}//fetch data

function renderizarTarjetas(data){

    data.forEach(product => {
    document.querySelector("body").innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${product.price} dollars</h6>
            </div>
        </div>  
        `;  
    });
}//renderizarTarjeta

async function init (){
    const data = await fetchData(); 
    renderizarTarjetas(data); 
}// init

init(); //llamar a la función init