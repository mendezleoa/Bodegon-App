const table = document.getElementById('table');
let inventario;

if (localStorage.getItem("inventario")) {
    inventario = localStorage.getItem("inventario");
    
    updateInv(inventario);
} else {
    updateDOM('<h1 class="text-xl">No hay datos</h1>')
}

inventario = {}

function updateInv(invent) {
    localStorage.setItem("inventario", invent);
    tableinv = `<table>
    <thead>
      <tr>
        <th>id</th>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Existencia</th>
        <th>Precio</th>
      </tr>
    </thead>
    <tbody>`;
    invent.forEach(elem => {
        tableinv =+`<tr>
            <td>${elem.id}</td>
            <td>${elem.nombre}</td>
            <td>${elem.categoria}</td>
            <td>${elem.existencia}</td>
            <td>${elem.precio}</td>
        </tr>`        
    });
    tableinv =+ `</tbody>
    </table>`
    updateDOM(invent);
}

function updateDOM(invent) {
    table.innerHTML = invent;
}