//Declarando variables para los controles.

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para mostrar.

function MostrarRegistro(){
    var listaregistro=Mostrar();
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    for(var i=0;i<listaregistro.length;i++){
        var fila=tbody.insertRow(i);
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);

        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulocor.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}

//Procedimiento para registrar.

function RegistrarDatos(){
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;

    Registrar(nom, ape, cor);

    MostrarRegistro();
}

//Agregamos un evento al boton.

// btnRegistrar.addEventListener("click", function(){
//     alert("hola");
// })

//Creamos un procedimiento para mostrar el mensaje.

// function Mensaje(){
//     alert("Hola");
// }

// //Llamamos al proceimiento en el evento boton.
// btnRegistrar.addEventListener("click", Mensaje);

//Llamamos al procedimiento registrar en el evento del boton.

btnRegistrar.addEventListener("click", RegistrarDatos);