window.mostrarPersonaje = function(){
    let elemento = this.item;//this toma el btn-personaje, ya que el personaje tiene toda la info de let personaje atraves del item
    let moldemodal = document.querySelector('.modal-molde').cloneNode(true);
    moldemodal.querySelector('.imagen-personaje-modal').src = elemento.image;
    moldemodal.querySelector('.nombre-personaje-modal').innerText = elemento.name;
    moldemodal.querySelector('.genero-personaje-modal').innerText = elemento.gender;
    let estado = moldemodal.querySelector('.estado-personaje-modal');
    let icono = document.createElement('i');
    icono.classList.add('icono-estado');
    if(elemento.status == "Alive"){
        icono.classList.add('fas','fa-heartbeat','text-success');
    }else if(elemento.status == 'Dead'){
        icono.classList.add('fas','fa-skull-crossbones','text-danger');
    }else{
        icono.classList.add('fas','fa-question','text-info');
    }
    //agrego el icono al molde
    estado.appendChild(icono);
    Swal.fire({
        title: elemento.name,
        html: moldemodal.innerHTML,
        confirmButtonText: "Cerrar"
    })
};

window.mostrarDatos = (datos)=>{
const contenidoDiv = document.querySelector("#contenido");//tomo el div donde ponde el contenido
let moldeDiv = document.querySelector(".card-molde")//tomo card molde el html
for(let i = 0; i < datos.length; i++){
    let personaje = datos[i];
    let div = moldeDiv.cloneNode(true)//clonenode, clona el div y con el valor true copia todo el contendio dentro (hijos)
    div.querySelector('.nombre-personaje').innerText = personaje.name;//la linea anterior busca desde el div hacia adentro 
    div.querySelector('.imagen-personaje').src = personaje.image;
    div.querySelector('.btn-personaje').item = personaje;//tomo el boton y le doy la info del personaje
    div.querySelector('.btn-personaje') 
       .addEventListener('click',window.mostrarPersonaje);
    contenidoDiv.appendChild(div);
}
};

window.addEventListener('DOMContentLoaded', async ()=>{
    //Todo lo que vaya aca dentro se cargara al estar cargada la pagina
    let resultado = await axios.get("https://rickandmortyapi.com/api/character/");
    window.mostrarDatos(resultado.data.results);
});
