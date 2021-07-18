//Variables para los controles.
var txtCod=document.getElementById("txtCod");
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var txtFec=document.getElementById("txtFec");
var txtDir=document.getElementById("txtDir");
var cboDistrito=document.getElementById("cboDistrito");
var txtTel=document.getElementById("txtTel");
var txtCel=document.getElementById("txtCel");
var txtCor=document.getElementById("txtCor");
var rbMas=document.getElementById("rbMas");
var rbFem=document.getElementById("rbFem");
var rbOtr=document.getElementById("rbOtr");
var chkEst=document.getElementById("chkEst");
var btnRegistrar=document.getElementById("btnRegistrar");
var btnActualizar=document.getElementById("btnActualizar");

//Cargar el combo.
function CargarDistrito(){
    var db=database.ref("distrito");
    db.once("value", function(snapshot){
        if (snapshot.exists()){
            snapshot.forEach(function(data){
                var cod=data.key;
                var nom=data.val().nombre;
                var options=document.createElement("option");
                options.text=nom;
                options.value=cod;

                cboDistrito.add(options)
            });
        }
    });
}

//Llamamos al combo.
window.onload=CargarDistrito;
function Registrar(){
    //Capturando Valores.
var nom=txtNom.value;
var ape=txtApe.value;
var dni=txtDni.value;
var fec=txtFec.value;
var dir=txtDir.value;
var dis=cboDistrito.options[cboDistrito.selectedIndex].text;
var tel=txtTel.value;
var cel=txtCel.value;
var cor=txtCor.value;
var sexo="";
if (rbMas.checked==true){
    sexo="Masculino";
}else if(rbFem.checked==true){
    sexo="Femenino";
}else if(rbOtr.checked==true){
    sexo="Otros";
}else{
    sexo="";
}
var est="";
if (chkEst.checked==true){
    est="Habilitado";
}else{
    est="Deshabilitado";
}
var db=database.ref("alumno");
var registros=db.push();
registros.set({
    nombre: nom,
    apellido: ape,
    dni: dni,
    fecha: fec,
    direccion: dir,
    distrito: dis,
    telefono: tel,
    celular: cel,
    correo: cor,
    sexo: sexo,
    estado: est,
});
alert("Se registro el alumno");
}
btnRegistrar.addEventListener("click", Registrar);

