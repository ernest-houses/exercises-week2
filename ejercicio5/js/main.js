function addElement() {
    const lista = document.getElementById("lista");
  
    const itemCount = lista.getElementsByTagName("li").length;
  
    const nuevoElemento = document.createElement("li");
  
    nuevoElemento.textContent = `Elemento ${itemCount + 1}`;
  
    nuevoElemento.classList.add("list-group-item");
  
    lista.appendChild(nuevoElemento);
  }