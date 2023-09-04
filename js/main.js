mostrarMain();


//-----OCULTAR TODO PREVIO MOSTRAR SECCION-------//
function ocultarTodo() {
  const backimagen= document.getElementById("infoSeccion").style.backgroundImage="url('../images/briefInfo/oficinas.jpeg')";
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
  const consultasSeccion = (document.getElementById(
    "consultasSeccion"
  ).style.display = "none");
  const prestadoresSeccion = (document.getElementById(
    "prestadoresSeccion"
  ).style.display = "none");
  const accidenteSeccion = (document.getElementById(
    "accidenteSeccion"
  ).style.display = "none");
  const prevencionSeccion = (document.getElementById(
    "prevencionSeccion"
  ).style.display = "none");
  const formulariosSeccion = (document.getElementById(
    "formulariosSeccion"
  ).style.display = "none");
  const cotizacionesSeccion = (document.getElementById(
    "cotizacionesSeccion"
  ).style.display = "none");
  const preguntasSeccion = (document.getElementById(
    "preguntasSeccion"
  ).style.display = "none");
  const normativaSeccion = (document.getElementById(
    "normativaSeccion"
  ).style.display = "none");
  const formacionSeccion = (document.getElementById(
    "formacionSeccion"
  ).style.display = "none");
  const formsGenerales = (document.getElementById(
    "formsGenerales"
  ).style.display = "none");
  const formsAfiliaciones = (document.getElementById(
    "formsAfiliaciones"
  ).style.display = "none");
  const formsPrevencion = (document.getElementById(
    "formsPrevencion"
  ).style.display = "none");
  const formsPrestaciones = (document.getElementById(
    "formsPrestaciones"
  ).style.display = "none");
  const formsPrestadores = (document.getElementById(
    "formsPrestadores"
  ).style.display = "none");
  const formsExamenes = (document.getElementById(
    "formsExamenes"
  ).style.display = "none");
  const normsRiesgos = (document.getElementById(
    "normsRiesgos"
  ).style.display = "none");
  const normsHigiene = (document.getElementById(
    "normsHigiene"
  ).style.display = "none");
  const normsCovid = (document.getElementById(
    "normsCovid"
  ).style.display = "none");
  const normsComisiones = (document.getElementById(
    "normsComisiones"
  ).style.display = "none");
  const normsPoliza = (document.getElementById(
    "normsPoliza"
  ).style.display = "none");
  const normsVentanilla = (document.getElementById(
    "normsVentanilla"
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

//--------------MOSTRAR SECCION CONSULTAS Y RECLAMOS----------------//
function mostrarConsultas(){
  ocultarTodo();
  const backimagen= document.getElementById("infoSeccion").style.backgroundImage="url('../images/briefInfo/consultasReclamos.png')";
  const consultasSeccion = (document.getElementById(
    "consultasSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Quejas, Consultas y Reclamos");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Complete los campos y envíe su queja, consulta o reclamo.";
}

//--------------CAMBIO DE CATEGORIAS EN FORMULARIO DE CONSULTA----------------//
function cambiarOptions(cambio){
switch (cambio.value) {
  case "6":
    const categoria1=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option><option value='21'>Exámenes Periódicos</option>";
    break;
  case "5":
    const categoria2=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option><option value='18'>Alcance de la Cobertura</option><option value='20'>Otros</option><option value='19'>Presentación de Documentos</option><option value='17'>Tarifas</option>";
    break;
    case "4":
    const categoria3=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option><option value='16'>Otros</option><option value='15'>Presentación de Documentos</option><option value='14'>Visitas a Establecimientos</option>";
    break;
    case "3":
    const categoria4=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option><option value='13'>Otros</option><option value='12'>Solicitud de documentación para trámites</option><option value='11'>Turnos</option>";
    break;
    case "2":
    const categoria5=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option><option value='10'>Otros</option><option value='9'>Pago de incapacidades</option><option value='8'>Pago directo de ILT</option><option value='7'>Reintegros de ILT</option>";
    break;
    case "1":
    const categoria6=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option><option value='2'>Demora de Prestaciones</option><option value='6'>Otros</option><option value='5'>Reintegros de gastos</option><option value='4'>Solicitud de historia clínica</option><option value='1'>Traslado</option><option value='3'>Turno</option>";
    break;
  default:
    const categoria=document.getElementById("categoria").innerHTML="<option value=''>--SELECCIONAR--</option>";
    break;
}
}

//----------MOSTRAR SECCION PRESTADORES------------//
function mostrarPrestadores(){
  ocultarTodo();
  const backimagen= document.getElementById("infoSeccion").style.backgroundImage="url('../images/briefInfo/prestadoresBrief.png')";
  const prestadoresSeccion = (document.getElementById(
    "prestadoresSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Cartilla de Prestadores");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Consulte nuestra Cartilla de profesionales y prestadores más cercanos a su zona.";
}

//----------MOSTRAR SECCION INDICACIONES FRENTE ACCIDENTE------------//
function mostrarAccidente(){
  ocultarTodo();
  const backimagen= document.getElementById("infoSeccion").style.backgroundImage="url('../images/briefInfo/accidente.png')";
  const accidenteSeccion = (document.getElementById(
    "accidenteSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Indicaciones en caso de Accidente");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Sr. Empleador en caso de un accidente siga estas instrucciones.";
}

//----------MOSTRAR SECCION PREVENCION DE FRAUDES------------//
function mostrarPrevencion(){
  ocultarTodo();
  const backimagen= document.getElementById("infoSeccion").style.backgroundImage="url('../images/briefInfo/prevencion.png')";
  const prevencionSeccion = (document.getElementById(
    "prevencionSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Prevención de Fraudes en Riesgos del Trabajo.");
const descripcion = document.getElementById("dSeccion").innerHTML =
"La SRT brinda asesoramiento jurídico y servicio de patrocinio gratuito. ¡Estamos para asesorarte y asistirte Gracias por confiar en MEOPP ART MUTUAL!";
}

//----------MOSTRAR SECCION DESCARGA DE FORMULARIOS------------//
function mostrarFormularios(){
  ocultarTodo();
  const formulariosSeccion = (document.getElementById(
    "formulariosSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "FORMULARIOS.");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Consulte On-Line y descargue los formularios específicos que le soliciten.";
const formsGenerales = (document.getElementById(
  "formsGenerales"
).style.display = "block");
}

function ocultarFormularios(){
  const formsGenerales = (document.getElementById(
    "formsGenerales"
  ).style.display = "none");
  const formsAfiliaciones = (document.getElementById(
    "formsAfiliaciones"
  ).style.display = "none");
  const formsPrevencion = (document.getElementById(
    "formsPrevencion"
  ).style.display = "none");
  const formsPrestaciones = (document.getElementById(
    "formsPrestaciones"
  ).style.display = "none");
  const formsPrestadores = (document.getElementById(
    "formsPrestadores"
  ).style.display = "none");
  const formsExamenes = (document.getElementById(
    "formsExamenes"
  ).style.display = "none");
}

function mostrarFormsSeccion(boton){
  ocultarFormularios();
  switch (boton.id) {
    case "fgenerales":
      const formsGenerales = (document.getElementById(
        "formsGenerales"
      ).style.display = "block");
    break;
    case "fafiliaciones":
      const formsAfiliaciones = (document.getElementById(
        "formsAfiliaciones"
      ).style.display = "block");
    break;
    case "fprevencion":
      const formsPrevencion = (document.getElementById(
        "formsPrevencion"
      ).style.display = "block");
    break;
    case "fprestaciones":
      const formsPrestaciones = (document.getElementById(
        "formsPrestaciones"
      ).style.display = "block");
    break;
    case "fprestadores":
      const formsPrestadores = (document.getElementById(
        "formsPrestadores"
      ).style.display = "block");
    break;
    case "fexamenes":
      const formsExamenes = (document.getElementById(
        "formsExamenes"
      ).style.display = "block");
    break;
    default:

    break;
  }
}



//----------MOSTRAR SECCION COTIZACIONES Y AFILIACIONES------------//
function mostrarCotizaciones(){
  ocultarTodo();
  const cotizacionesSeccion = (document.getElementById(
    "cotizacionesSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Pedido de Cotización y Afiliaciones.");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Cómo tramitar un traspaso a MEOPP ART MUTUAL. Nuevo servicio de póliza digital (RES 46/2018 SRT).";
}

//----------MOSTRAR SECCION PREGUNTAS FRECUENTES------------//
function mostrarPreguntas(){
  ocultarTodo();
  const preguntasSeccion = (document.getElementById(
    "preguntasSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Preguntas Frecuentes.");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Consulte todas sus dudas sobre el mundo de la ART.";
}

//----------MOSTRAR SECCION NORMATIVAS------------//
function mostrarNormativa(){
  ocultarTodo();
  const normativaSeccion = (document.getElementById(
    "normativaSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Normativas.");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Consulte On-Line los textos de las leyes y resolución que regulan la actividad de Riesgos del Trabajo.";
const normsRiesgos = (document.getElementById(
  "normsRiesgos"
).style.display = "block");
}

function ocultarNormativas(){
  const normsRiesgos = (document.getElementById(
    "normsRiesgos"
  ).style.display = "none");
  const normsHigiene = (document.getElementById(
    "normsHigiene"
  ).style.display = "none");
  const normsCovid = (document.getElementById(
    "normsCovid"
  ).style.display = "none");
  const normsComisiones = (document.getElementById(
    "normsComisiones"
  ).style.display = "none");
  const normsPoliza = (document.getElementById(
    "normsPoliza"
  ).style.display = "none");
  const normsVentanilla = (document.getElementById(
    "normsVentanilla"
  ).style.display = "none");
}

function mostrarNormativaSeccion(boton){
  ocultarNormativas();
  switch (boton.id) {
    case "friesgo":
      const normsRiesgos = (document.getElementById(
        "normsRiesgos"
      ).style.display = "block");
    break;
    case "fhigiene":
      const normsHigiene = (document.getElementById(
        "normsHigiene"
      ).style.display = "block");
    break;
    case "fcovid":
      const normsCovid = (document.getElementById(
        "normsCovid"
      ).style.display = "block");
    break;
    case "fcomisiones":
      const normsComisiones = (document.getElementById(
        "normsComisiones"
      ).style.display = "block");
    break;
    case "fpoliza":
      const normsPoliza = (document.getElementById(
        "normsPoliza"
      ).style.display = "block");
    break;
    case "fventanilla":
      const normsVentanilla = (document.getElementById(
        "normsVentanilla"
      ).style.display = "block");
    break;
    default:

    break;
  }
}


//----------MOSTRAR SECCION CENTRO DE FORMACIÓN------------//
function mostrarFormacion(){
  ocultarTodo();
  const formacionSeccion = (document.getElementById(
    "formacionSeccion"
  ).style.display = "block");
  const titulo = (document.getElementById("tituloSeccion").innerHTML =
  "Centro de Formación.");
const descripcion = document.getElementById("dSeccion").innerHTML =
"Centro de Formación On-Line de ART MUTUAL. Esta sección ha sido creada para que las empresas puedan seleccionar el material que necesita su personal para mantenerse actualizado.";
const centroCapacitaciones = (document.getElementById(
  "centroCapacitaciones"
).style.display = "block");
}

function ocultarFormacion(){
  const centroCapacitaciones = (document.getElementById(
    "centroCapacitaciones"
  ).style.display = "none");
  const centroFoco = (document.getElementById(
    "centroFoco"
  ).style.display = "none");
  const centroFolletos = (document.getElementById(
    "centroFolletos"
  ).style.display = "none");
  const centroCampana = (document.getElementById(
    "centroCampana"
  ).style.display = "none");
  const centroRecomendaciones = (document.getElementById(
    "centroRecomendaciones"
  ).style.display = "none");
  const centroBienestar = (document.getElementById(
    "centroBienestar"
  ).style.display = "none");
}


function mostrarFormacionSeccion(boton){
  ocultarFormacion();
  switch (boton.id) {
    case "fcapacitaciones":
      const centroCapacitaciones = (document.getElementById(
        "centroCapacitaciones"
      ).style.display = "block");
    break;
    case "ffoco":
      const centroFoco = (document.getElementById(
        "centroFoco"
      ).style.display = "block");
    break;
    case "ffolletos":
      const centroFolletos = (document.getElementById(
        "centroFolletos"
      ).style.display = "block");
    break;
    case "fcampana":
      const centroCampana = (document.getElementById(
        "centroCampana"
      ).style.display = "block");
    break;
    case "frecomendaciones":
      const centroRecomendaciones = (document.getElementById(
        "centroRecomendaciones"
      ).style.display = "block");
    break;
    case "fbienestar":
      const centroBienestar = (document.getElementById(
        "centroBienestar"
      ).style.display = "block");
    break;
    default:

    break;
  }
}