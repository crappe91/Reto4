// CAMBIAR EL COLOR DEL NAVBAR AL HACER SCROLL


  window.onscroll = function(){scrollFunction()};

  function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop> 20){
      document.getElementById("navbar").style.backgroundColor = "white";
    }else{
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }

  //mensaje bienvenida

  alert ("Bienvenido "+JSON.parse(localStorage.getItem('datos')).nombre);

//Redirección a mis trabajos

document.getElementById("mistrabajos").addEventListener("click", function(){
    window.location.href = "album.html";
});

