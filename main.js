const html = document.querySelector("html");
const iptTempC = document.getElementById("iptTempC"); 

const btnFaKe = document.getElementById("btnFaKe");
const btnFahr = document.getElementById("btnFahr"); 
const btnKel = document.getElementById("btnKel");


btnFaKe.addEventListener("click", ()=> {
    let temperaturaUsr = parseFloat(iptTempC.value);
    const espacioFahrenheit = document.getElementById("espacioFahrenheit");
    let calcularFahrenheit = ((9/5)*temperaturaUsr)+32; 

    espacioFahrenheit.innerHTML = `La temperatura en grados Fahrenheit es: ${calcularFahrenheit}`;
    let calcularKelvin = temperaturaUsr + 273.15; 

    espacioKelvin.innerHTML = `La temperatura en grados Kelvin es: ${calcularKelvin}`;

  iptTempC.value = "";     
})



btnFahr.addEventListener("click", () => {
  let temperaturaUsr = parseFloat(iptTempC.value);
  const espacioFahrenheit = document.getElementById("espacioFahrenheit");
  let calcularFahrenheit = ((9/5)*temperaturaUsr)+32; 

  espacioFahrenheit.innerHTML = `La temperatura en grados Fahrenheit es: ${calcularFahrenheit}`;

  iptTempC.value = ""; 
});

btnKel.addEventListener("click", () =>{
    let temperaturaUsr = parseFloat(iptTempC.value); 
    const espacioKelvin = document.getElementById("espacioKelvin"); 
    let calcularKelvin = temperaturaUsr + 273.15; 

    espacioKelvin.innerHTML = `La temperatura en grados Kelvin es: ${calcularKelvin}`;

    iptTempC.value = "";
})