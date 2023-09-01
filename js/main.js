mostrarMain();


//-----OCULTAR TODO PREVIO MOSTRAR SECCION-------//
function ocultarTodo() {
  const brieftarjetas = (document.getElementById(
    "tarjetasSeccion"
  ).style.display = "none");
  const carousel = (document.getElementById("carousel").style.display =
    "none");
    const agencias = (document.getElementById("agencias").style.display =
    "none");
  const trabajadorSeccion = (document.getElementById(
    "trabajadorSeccion"
  ).style.display = "none");
  const loginSeccion = (document.getElementById(
    "loginSeccion"
  ).style.display = "none");
  const newUsuarioSeccion = (document.getElementById(
    "newUsuarioSeccion"
  ).style.display = "none");
  const institucionalSeccion = (document.getElementById(
    "institucionalSeccion"
  ).style.display = "none");
}

//--------------MOSTRAR MAIN-----------------------//
function mostrarMain(){
    ocultarTodo();
    const brieftarjetas = (document.getElementById(
        "tarjetasSeccion"
      ).style.display = "block");
      const carousel = (document.getElementById("carousel").style.display =
    "block");
    const agenciasSeccion = (document.getElementById("agencias").style.display =
    "block");
  const briefSeccion = (document.getElementById("briefSeccion").style.display =
    "block");
    const titulo = (document.getElementById("tituloSeccion").innerHTML =
    "Le damos la bienvenida a la web de MEOPP ART MUTUAL.");
  const descripcion = document.getElementById("dSeccion").innerHTML =
  "Aquí encontrará todas nuestras herramientas y la información completa que necesitan nuestros Asociados.";
}

//--------------MOSTRAR SECCION AGENCIAS----------------//
function mostrarAgencias() {
  ocultarTodo();
  const agenciasSeccion = (document.getElementById("agencias").style.display =
    "block");
  const briefSeccion = (document.getElementById("briefSeccion").style.display =
    "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
    "Agencias");
  const descripcion = (document.getElementById("dSeccion").innerHTML =
    "Ubicación geográfica de Casa Central y Agencias.");
}

//--------------SELECCION DE AGENCIAS----------------//
function cambioAgencia(boton) {
  switch (boton.id) {
    case "aCentral":
      const agencia1 = (document.getElementById("agenciasFrame").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.8465855487065!2d-67.99762833041119!3d-38.93800145508522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a314ae367d051%3A0x195b10b13cff95dd!2sMeopp%20ART%20Mutual!5e0!3m2!1ses!2sar!4v1692696352144!5m2!1ses!2sar");
      break;
    case "aSur":
      const agencia2 = (document.getElementById("agenciasFrame").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173.6405709165682!2d-67.49730646719863!3d-45.866324972162815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbde454fa145a0021%3A0x9e42b77e030879d8!2sAlvear%20437%2C%20U9002EAB%20Comodoro%20Rivadavia%2C%20Chubut!5e0!3m2!1ses!2sar!4v1693064824355!5m2!1ses!2sar");
      break;
    case "aNorte":
      const agencia3 = (document.getElementById("agenciasFrame").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d326.1118612140553!2d-68.05388258207857!3d-38.957875820697964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a322b56eaf375%3A0x742b19b2fab7f22f!2sSindicato%20Petroleros%20Privados%20-%20Edificio%20Meopp!5e0!3m2!1ses!2sar!4v1693065016490!5m2!1ses!2sar");
      break;
    case "aCentro":
      const agencia4 = (document.getElementById("agenciasFrame").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217.37902105049426!2d-58.42572759984002!3d-34.63309015245952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35564fd36c4f05%3A0x325b60a7bd950eba!2sSINDICATO%20DE%20PETR%C3%93LEO%20Y%20GAS%20PRIVADO%20R%C3%8DO%20NEGRO%2C%20NEUQU%C3%89N%20Y%20LA%20PAMPA!5e0!3m2!1ses!2sar!4v1693063099022!5m2!1ses!2sar");
      break;
    case "aCuyo":
      const agencia5 = (document.getElementById("agenciasFrame").src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d418.77795154263083!2d-68.84512748044368!3d-32.8922556127456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091a98720e3f%3A0xea8dc31abe0f0a95!2sAv.%20Bartolom%C3%A9%20Mitre%20864%2C%20M5500BZA%20Mendoza!5e0!3m2!1ses!2sar!4v1693065169134!5m2!1ses!2sar");
      break;
  }
}

//--------------MOSTRAR SECCION TRABAJADOR----------------//
function mostrarTrabajador() {
  ocultarTodo();
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
    "Acceso a Plataforma de Trabajadores");
  const descripcion = (document.getElementById("dSeccion").innerHTML =
    "Esta sección ha sido creada para que los trabajadores cubiertos por MEOPP ART MUTUAL puedan descargar y contar con su credencial de cobertura.");
  const trabajadorSeccion = (document.getElementById(
    "trabajadorSeccion"
  ).style.display = "block");
}

//--------------MOSTRAR SECCION LOGIN----------------//

function mostrarLogin() {
  ocultarTodo();
  const loginSeccion = (document.getElementById(
    "loginSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
    "Acceso a los asociados.");
  const descripcion = (document.getElementById("dSeccion").innerHTML =
    "Ingrese al sistema para visualizar todas las funciones o solicite acceso como Nuevo Usuario.");
  
}

//-----TOGGLE VISIBILIDAD PASSWORD-------///
function verPassword(element){
  const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');
        const type = password.getAttribute('type') === 'password' ?'text' : 'password';
            password.setAttribute('type', type);
            // Toggle the eye and bi-eye icon
  element.classList.toggle('bi-eye');
}

//---------SECCION NUEVO USUARIO----------//
function mostrarNewUsuario(){
  ocultarTodo();
  const loginSeccion = (document.getElementById(
    "newUsuarioSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
    "Nuevo Usuario.");
  const descripcion = (document.getElementById("dSeccion").innerHTML =
    "Complete los campos y obtenga un usuario y contraseña para operar con nuestra web. (Para Alta de Usuarios u olvido de clave. )");
}

//--------------MOSTRAR SECCION INSTITUCIONAL----------------//
function mostrarInstitucional(){
  ocultarTodo();
  const institucionalSeccion = (document.getElementById(
    "institucionalSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
    "ART MUTUAL DE EMPLEADOS Y OBREROS PETROLEROS PRIVADOS (MEOPP)");
  const descripcion = document.getElementById("dSeccion").innerHTML =
  "Conozca nuestros valores y servicios.";
}