var txtNom=document.getElementById("txtNom");

var txtApe=document.getElementById("txtApe");

var txtCor=document.getElementById("txtCor");

var rbMas=document.getElementById("rbMas");
var rFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");

var chkEst=document.getElementById("chkEst");

//Nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Porfavor ingrese sus nombres</li>";
    }else{
        error.style.display="none";
    }
}

//Apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Porfavor ingrese sus apellidos</li>";
    }else{
        error.style.display="none";
    }
}

//Correo
function ValidarCorreo(){
    if(txtCor.value=="" || txtCor.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Porfavor ingrese su correo</li>";
    }else{
        error.style.display="none";
    }
}

//Sexo
function ValidarSexo(){
    if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Porfavor seleccione un sexo</li>";
    }else{
        error.style.display="none";
    }
}

//Estado
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Porfavor seleccione un estado</li>";
    }else{
        error.style.display="none";
    }
}

//Creamos un procedimiento para validar
function Validar(){
    ValidarNombre();
    ValidarApellido();
    ValidarCorreo();
    ValidarSexo();
    ValidarEstado();
}

//Creamos una funcion para asignar la clase error
function LLamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

//Creamos una funcion Registrar
function Registrar(){
    //Reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value==""||txtNom.value==null){
        LLamarClase("Porfavor ingrese sus nombres");
        LLamarClase("Porfavor ingrese sus apellidos");
        LLamarClase("Porfavor ingrese su correo");
        LLamarClase("Porfavor seleccione su sexo");
        LLamarClase("Porfavor seleccione su estado");
        txtNom.focus();
    }else if(txtApe.value==""||txtApe.value==null){
        LLamarClase("Porfavor ingrese sus apellidos");
        LLamarClase("Porfavor ingrese su correo");
        LLamarClase("Porfavor seleccione su sexo");
        LLamarClase("Porfavor seleccione su estado");
        txtApe.focus();
    }else if(txtCor.value==""||txtCor.value==null){
        LLamarClase("Porfavor ingrese su correo");
        LLamarClase("Porfavor seleccione su sexo");
        LLamarClase("Porfavor seleccione su estado");
    }else if(rbMas.checked==false && rbFem.checked==false && rbOtr.checked==false){
        LLamarClase("Porfavor seleccione su sexo");
        LLamarClase("Porfavor seleccione su estado");
    }else if(chkEst.checked==false){
        LLamarClase("Porfavor seleccione su estado");
        chkEst.focus();
    }
}




alert("Se registro correctamente");