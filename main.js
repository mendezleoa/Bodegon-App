inventario = localStorage.getItem("inventario");

updateInv(inventario)

function updateInv(invent) {
    localStorage.setItem("inventario", invent);
    updateDOM();
}

function updateDOM() {
    document.getElementById(table);
}