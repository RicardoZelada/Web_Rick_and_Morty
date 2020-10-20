
window.mostrarDatos = (datos)=>{
const contenidoDiv = document.querySelector("#contenido");
let ul = document.createElement("ul");
for(let i = 0; i < datos.length; i++){
    let personaje = datos[i];
    let li = document.createElement("li");
    let spanNombre = document.createElement("span");
    spanNombre.innerText = personaje.name;
    let spanEstado = document.createElement("span");
    spanEstado.innerText = personaje.status;
    let imagen = document.createElement("img");
    imagen.src = personaje.image;
    li.appendChild(spanNombre);
    li.appendChild(spanEstado);
    li.appendChild(imagen);
    ul.appendChild(li);
}
contenidoDiv.appendChild(ul);
};

window.addEventListener('DomContentLoaded', async ()=>{
    //Todo lo que vaya aca dentro se cargara al estar cargada la pagina
    let resultado = await axios.get("https://rickandmortyapi.com/api/character/");
    window.mostrarDatos(resultado.data.results);
});
