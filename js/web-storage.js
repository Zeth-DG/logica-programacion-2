function cambiarTema (){
    // cosas que necesitamos recuperar del html:
    const temaBtn = document.getElementById("temaBtn"); // el botón
    const html = document.querySelector("html"); // nuestro html
    let temaActual; // variable vacía


    if(localStorage.getItem("tema") != null){ //revisar si el elemento tema ya existe dentro de localStorage
        temaActual = localStorage.getItem("tema"); // devuelve dark/light
        html.setAttribute("data-bs-theme", temaActual); // se renderiza color según el

    } else {// si no existe
        localStorage.setItem("tema", "light"); // lo crea con el valor inicial "light"
        temaActual = localStorage.getItem("tema"); // actualiza temaActual con LocalStorage
        html.setAttribute("data-bs-theme", temaActual); // renderiza en html según el temaActual
    }//else


    temaBtn.addEventListener("click", ()=> {
        if (temaActual === "light"){
            html.setAttribute("data-bs-theme", "dark"); //primero cambia el tema 
            temaActual = html.getAttribute("data-bs-theme"); // la funcion lo guarda
            localStorage.setItem("tema", temaActual);
        } else {
            html.setAttribute("data-bs-theme", "light")
            temaActual = html.getAttribute("data-bs-theme");
            localStorage.setItem("tema", temaActual);
        }//else
    });

}//funcion cambiar tema 

cambiarTema();