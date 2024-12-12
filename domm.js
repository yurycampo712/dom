function enviar() {
    let texto = document.getElementById("tarea").value;
    let lista = document.getElementById("lista");
    lista.setAttribute("class", 'lista')
    let elemento = document.createElement("li");
    elemento.setAttribute("class", 'elemento')

    let tarea = document.createElement("p");
    tarea.setAttribute("class", 'tarea')
    tarea.textContent = texto;

    tarea.value=" "

    let actualizarBtn = document.createElement("button");
    actualizarBtn.textContent = "Actualizar";
    actualizarBtn.setAttribute("class", 'color')
    actualizarBtn.onclick = () => actualizar(tarea);

    let eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.setAttribute("class", 'colorelim')
    eliminarBtn.onclick = () => eliminar(elemento);

    elemento.append(tarea, actualizarBtn, eliminarBtn);
    lista.appendChild(elemento);
}

function eliminar(item) {
    document.getElementById("lista").removeChild(item);
}

function actualizar(tarea) {
    let nuevoTexto = prompt("Edita la tarea:", tarea.textContent);
    if (nuevoTexto) tarea.textContent = nuevoTexto;
}
