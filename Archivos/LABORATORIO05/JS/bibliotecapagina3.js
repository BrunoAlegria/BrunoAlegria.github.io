//Declarando variables para los controles.

var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbN=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");

//Creamos un procedimiento para mostrar.

function MostrarAlumno(){
    var listaalumno=Mostrar();
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    for(var i=0;i<listaalumno.length;i++){
        var fila=tbody.insertRow(i);
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);

        titulonom.innerHTML=listaalumno[i].nombre;
        tituloape.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocur.innerHTML=listaalumno[i].curso;
        titulotur.innerHTML=listaalumno[i].turno;
        tituloest.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

//Procedimiento para registrar.

function RegistrarAlumno(){
    var nom=txtNom.value;
    var ape=txtApe;
    var dni=txtDni.value;
    var cur="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cat="Diseño Web"
            break;
        case 2:
            cat="Base de Datos"
            break;
        case 3:
            cat="Programacion Java";
            break;
        default:
            cat="";
            break;
    }

    var rbM=rbM.value;
    var rbT=rbT.value;
    var rbN=rbN.value;
    var chkEst=chkEst.value;

    Registrar(nom, ape, dni, cur, rbM, rbT, rbN, chkEst);

    MostrarAlumno();
}

btnRegistrar.addEventListener("click", RegistrarAlumno);