// webstorage
// ejemplo generico: 
// localStorage.setItem("key", "value");
// set Item - crea un dato nuevo dentro del localStorage

localStorage.setItem("nombre", "Zeth");
//sessionStorage.setItem("nombre", "Liz");

//getItem - recupera un dato dentro del localStorage () SIEMPRE los regresa como string
console.log(localStorage.getItem("nombre"));
// al ser un string podemos hacer comparaciones como usar un if: 
if (localStorage.getItem("nombre")=== "Zeth"){
    console.log("adivinaste el nombre :D");
} else {
    console.log(`El nombre real es: ${localStorage.getItem("nombre")}`);
}//else

localStorage.removeItem("nombre");

//evaluar si el elemento ya existe en localStorage
if (localStorage.getItem("nombre") != null){//si el elemento es diferente de vacío
    localStorage.setItem("nombre", "Maiceno"); 
};

if (localStorage.getItem("nombre" === null)){ //si esta vacío
    //crea el dato
    localStorage.setItem("nombre", "Maiceno");
    //mostarlo en consola
    console.log(localStorage.getItem("nombre"));
} else {
    localStorage.removeItem("nombre"); //si ya existe, borralo
}

//localStorage.clear(); conviene para cuando tenemos muchos datos