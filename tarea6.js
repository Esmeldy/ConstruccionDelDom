function crearBody_ModificarEnlace() {
    //Insertar en el body y antes de la etiqueta button
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByTagName("button")[0];


    //crear h1 y texto
    var h1 = document.createElement("h1");
    var txtH1 = document.createTextNode("Encabezado dinámico");
    h1.appendChild(txtH1);
   // body.appendChild(h1);
    body.insertBefore(h1, button);

    //crear div con su hijo
    var div = document.createElement("div"); 
    var divParrafo = document.createElement("p");
    var txtParrafo = document.createTextNode("Párrafo dinámico");
    divParrafo.appendChild(txtParrafo);
    div.appendChild(divParrafo);
    //ahora se añade al body
    body.insertBefore(div, button);
             
    //crear hr
    var hr = document.createElement("hr");
    body.insertBefore(hr, div)

    /** Ahora pasamos a la parte del enlace */
    //Selecionamos la primera etiqueta "a"
    var a = document.getElementsByTagName("a")[0];
    // var txtA = document.createElement("Text");
    // a.appendChild(txtA);

    a.firstChild.nodeValue = "Ir a Wikipedia";
    a.setAttribute("href", "http://www.wikipedia.es");

}