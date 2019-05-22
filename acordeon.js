var cartel = document.getElementById("cartel");
var camiseta = document.getElementById("camiseta");
var poster = document.getElementById("poster");
var libro = document.getElementById("libro");

var grande = null;

cartel.addEventListener("click", agrandar);
camiseta.addEventListener("click", agrandar);
libro.addEventListener("click", agrandar);
poster.addEventListener("click", agrandar);





function agrandar(e) {


    var elem = e.target.parentElement;
    grande = elem;

    elem.style.width = "83vw";
    var titulo = elem.querySelector("h2");
    elem.style.backgroundColor = "white";
    titulo.style.float = "left";
        reducir();


}

function reducir() {
    
    if(grande==cartel){
         cierraLibro();
            cierraCamiseta();
            cierraPoster();
        
    }else if(grande==libro){
        
         cierraCartel();
            cierraCamiseta();
            cierraPoster();
    }else if(grande==camiseta){
        
         cierraCartel();
            cierraLibro();
            cierraPoster();
    }else if(grande==poster){
        
         cierraCartel();
            cierraCamiseta();
            cierraLibro();
    }

   
}


function cierraLibro() {

    libro.style.width = "5vw";
  //  libro.style.background = url(images / cartelcnt.jpg);
    libro.querySelector("h2").style.float = "none";
}

function cierraCamiseta() {

    camiseta.style.width = "5vw";
   // camiseta.style.background =  url(images / cartelcnt.jpg);
    camiseta.querySelector("h2").style.float = "none";
}

function cierraPoster() {

    poster.style.width = "5vw";
    //poster.style.background =  url(images / cartelcnt.jpg);
    poster.querySelector("h2").style.float = "none";
}

function cierraCartel() {

    cartel.style.width = "5vw";
   // cartel.style.background =  url(images / cartelcnt.jpg);
    cartel.querySelector("h2").style.float = "none";
}
