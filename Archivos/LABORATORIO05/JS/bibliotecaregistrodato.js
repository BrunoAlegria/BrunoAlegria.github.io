//Variables para los controles.
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");
var txtCod=document.getElementById("txtCod");
var btnActualizar=document.getElementById("btnActualizar")

//Creamos un procedimiento para limpiar.
function Limpiar(){
    txtNom.value=="";
    txtApe.value=="";
    txtCor.value=="";
    txtNom.focus();
}

//Procedimiento para buscar.
function Buscar(codigo){
    var db=database.ref().child("registro");
    db.once("value", function (snapshot){
        snapshot.forEach(function(data){
            var key=data.key;
            if(key==codigo){
                var cod=key;
                var nom=data.val().nombre;
                var ape=data.val().apellido;
                var cor=data.val().correo;

                txtCod.value=cod;
                txtNom.value=nom;
                txtApe.value=ape;
                txtCor.value=cor;
            }
        });
    });
}


//Creamos un procedimiento para registrar.
function Registrar(){
    if(txtNom.value == "" || txtNom.value == null){
        alert("Ingrese sus nombres");
        txtNom.focus();
    }else if(txtApe.value == "" || txtApe.value == null){
        alert("Ingrese sus apellidos");
        txtApe.focus();
    }else if (txtCor.value == "" || txtCor.value == null){
        alert("Ingrese el correo");
        txtCor.focus();
    }else{
        //Capturando valores.
        var nom=txtNom.value;
        var ape=txtApe.value;
        var cor=txtCor.value;

        //LLamando a la funcion para registrar del Firebase.
        //Creamos la tabla si no existiera y la seleccionamos.
        var db=database.ref("registro");
        //Asignamos los valores a la tabla que ha sido creada.
        var registros=db.push();
        //Le paso los campos y los valores que tendra la tabla.
        registros.set({
            nombre: nom,
            apellido: ape,
            correo: cor,
            });
            alert("Se registraron los datos");
            //Llamamos a la funcion Limpiar.
            Limpiar();
    }
}

//Procedimiento para actualizar.
function Actualizar(){
    var cod=txtCod.value;
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;

    var db=database.ref("registro/"+cod);

    db.update(
    {
        nombre:nom,
        apellido:ape,
        correo:cor
    }
    );
};
alert("Se actualizo el dato");

Limpiar();

function Eliminar(codigo){
    var result=confirm("¿Estas seguro que quieres eliminar el dato?");

    if(result){
        var cod=codigo;
        var db=database.ref("registro"/+cod).remove();

        alert("Se elimino el registro");

        Limpiar();
        
    }
}

//Asignamos el procedimiento al boton.
btnRegistrar.addEventListener("click", Registrar);
btnActualizar.addEventListener("click",Actualizar);