function desplegarMensaje(){
	var respuesta=document.getElementsByName("resp1");
	var contador = 0;
	if(respuesta[0].checked){
		contador++;
	}
	respuesta=document.getElementsByName("resp2");
	if(respuesta[0].checked){
		contador++;
	}
	respuesta=document.getElementsByName("resp3");
	if(respuesta[1].checked){
		contador++;
	}
	alert("La calificacion obtenida es: "+contador);
	if(contador >= 2){
		alert("Eres la verg de mono");
	}
}