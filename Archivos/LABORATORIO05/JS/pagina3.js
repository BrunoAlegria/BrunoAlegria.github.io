//Crear un vector que contenga la informacion del registro.

var estudiante=[];

//Creamos un procedimiento para poder registrar.

function Registrar(nomestudiante, apeestudiante, dniestudiante, curestudiante, turestudiante, estestudiante){
    var NuevoEstudiante={
        nombre:nomestudiante,
        apellido:apeestudiante,
        dni:dniestudiante,
        curso:curestudiante,
        turno:turestudiante,
        estado:estestudiante
    };
    estudiante.push(NuevoEstudiante);
}

//Creamos una funcion para mostrar la informacion del registro.

function Mostrar(){
    return estudiante;
}