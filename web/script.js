//Registro de sesion
function registrar(){
		nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    //genero = document.getElementById("genero").value;
		clave = document.getElementById("clave").value;
		claveC = document.getElementById("claveC").value;
		
		if(clave==claveC){
		
		localStorage.setItem("EMAIL", correo);
		localStorage.setItem("CONTRASEÑA", clave);
		localStorage.setItem("NOMBRE", nombre);
		$('#registrar').modal('hide');
		alert("¡Cuenta creada con éxito!");
		}else{
			alert("Verifique su contraseña");
		}
}

//Iniciar Sesion
function sesion(){
		usuario = document.getElementById("correoU").value;
		contraseña = document.getElementById("claveU").value;		
		if(usuario == localStorage.getItem("EMAIL") && contraseña == localStorage.getItem("CONTRASEÑA")){
			
        //Estan
				$('#iniciar').addClass("d-none");
				$('#registro').addClass("d-none");
        $('#welcome').addClass("d-none");
        
        //NO estan
				$('#cerrar').removeClass("d-none");
      	$('#menu').removeClass('d-none');
        $('#pan').removeClass('d-none');
        $('#username').removeClass("d-none");

				$('#Modal').modal('hide');
			 alert("¡Bienvendo!");
			}	
  
		else{
				alert("Por favor, verificar");	
		}
  //Guarda nombre del usuario
	document.getElementById("username").innerHTML= nombre;
}


//Cerrar Sesion
function cerrarS(){
   
  //Estan
  $('#menu').addClass("d-none");
  $('#pan').addClass("d-none");
  $('#Galeria').addClass("d-none");
	$('#Otros').addClass("d-none");
  $('#MediaQ').addClass("d-none");
	$('#Rest').addClass("d-none");
  $('#username').addClass("d-none");
  $('#cerrar').addClass("d-none");
  
  //NO estan
	$('#iniciar').removeClass('d-none');
	$('#registro').removeClass("d-none");
	$('#welcome').removeClass("d-none");

	 localStorage.clear();
	sessionStorage.clear();
}


//Menu
function cargarG(){
	$('#Galeria').removeClass("d-none");
	$('#Rest').addClass("d-none");
	$('#Otros').addClass("d-none");
  $('#MediaQ').addClass("d-none");
}
function cargarR(){
	$('#Rest').removeClass("d-none");
	$('#Galeria').addClass("d-none");
	$('#Otros').addClass("d-none");
  $('#MediaQ').addClass("d-none");
}
function cargarO(){
	$('#Galeria').addClass("d-none");
	$('#Rest').addClass("d-none");
	$('#Otros').removeClass("d-none");
  $('#MediaQ').addClass("d-none");
}
function cargarM(){
  $('#MediaQ').removeClass("d-none");
	$('#Galeria').addClass("d-none");
	$('#Rest').addClass("d-none");
	$('#Otros').addClass("d-none");
}


//Consulta Rest //no funciona
   //fetch=('https://api.sunrise-sunset.org/json?{lat}=?&{lng}=?');
function consultar(){  
   url = "https://api.sunrise-sunset.org/json?lat=?&lng=?";
   var proxy = 'https://cors-anywhere.herokuapp.com/';
   url = proxy+url; 
   http_request = false;
   http_request = new XMLHttpRequest();
   if (!http_request) {
            alert('Falla No es posible crear una instancia XMLHTTP');
            return false;
        }
   http_request.overrideMimeType('application/json');
   http_request.onreadystatechange = alertContents;
   http_request.open('GET', url, true);
   http_request.send();
  
  //Longitud
   longitud = document.getElementById('long').value;
      if(long != null){
        var obj = JSON.parse(http_request.responseText); //convertir lo que dice el servicio en un objeto 
        arreglo = obj.results;//result inicio de busqueda
        for(var k in arreglo) {//se busca la ciudad
            if(arreglo[k].lng==long){
              document.getElementById('respuesta2').innerHTML =+ JSON.stringify(arreglo[k].lng);//mostrar de objeto a JSON
              break;
            }
           }
	    } 
  
  //Latitud
   latitud = document.getElementById('lati').value;
      if(lati != null){
        var obj = JSON.parse(http_request.responseText); //convertir lo que dice el servicio en un objeto 
        arreglo = obj.results;//result inicio de busqueda
        for(var k in arreglo) {//se busca la ciudad
            if(arreglo[k].lat==lati){
              document.getElementById('respuesta2').innerHTML =+ JSON.stringify(arreglo[k].lat);//mostrar de objeto a JSON
              break;
            }
         }
	   } 
 }

 function alertContents() {
      
      if (http_request.readyState == 4) {
          if (http_request.status == 200) {
              document.getElementById('respuesta2').innerHTML =http_request.responseText;
          } else {
              alert('Lo sentimos, hubo problemas con la petición.');
          }
      }
  }