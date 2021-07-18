//Creamos una funcion para cuando cargue el documento.

function Cargar(url, titulo, ancho, alto){
    var anc=screen.width;
    var alt=screen.height;

    alert(anc);
    alert(alt);

    var x=(anc/2)-(ancho/2);
    var y=(alt/2)-(alto/2);

    alert(x);
    alert(y);

    window-open(url, titulo, "width= "+ancho+", height="+alto+", left="+x+", top="+y+", scrollbar=NO");
}

//Llamamos a la funcion cargar.

window.onload=Cargar("pagina4.html", "Ventana Emergente", 400, 400);