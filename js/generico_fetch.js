// Fetch API

//esta API nos sirve para consumir API´s externas
//permite ejecutar cualquier método del lenguaje HTTP: 
//GET, POST, PUT, DELETE
//Ejemplos: FakeStoreAPI, DummyJSON

const API_URL = "https://fakestoreapi.com/products"; //guardar string, ruta de la documentación

//fetch(URL, opciones) recibe los parametros (url y opciones), 
// por defecto el method es GET
// funciona en base de promises, hay tres opciones: 
// Cumplió, no cumplió, pendiente
// definir qué hago en mi programa o página con esos datos

fetch(API_URL) // fetch llama a la API, espera una respuesta,
.then( (response) => {
    if(!response.ok){ //si la respuesta no llega
        throw new Error("no se pudo completar la solicitud"); //lanzar error
    }// response not ok

    return response.json(); //si obtiene respuesta, va a convertir el string (de json) en un objeto de JS
})
.then( (products) => {
    products.forEach(product => { //products es el arreglo
        //console.log(product) // imprime cada elemento 
        document.querySelector("body").innerHTML += `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${product.price} dollars</h6>
            </div>
        </div>  
        `;
    });
}).catch( (error) => console.log(error) ); 
