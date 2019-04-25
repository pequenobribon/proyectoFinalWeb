function getData(){
	
	var opcionAsignatura = document.getElementById("menuFormularioAsignatura").value;
	var opcionClase = document.getElementById("menuFormularioClase").value;
	var opcionFormato = document.getElementById("menuFormularioFormato").value;
	var codigo=opcionAsignatura+opcionClase+opcionFormato;
	console.log(codigo);
	
	//Clase 1 de video de español
	
	if(codigo == "a1c1f1"){
		console.log("dentro del if");
	document.getElementById("iframeNivel1").src="https://www.youtube.com/embed/I_5BmxJrcDE";
	}
	//Clase 2 de video de español
	if(codigo == "a1c2f1"){
		document.getElementById("iframeNivel1").src="https://www.youtube.com/embed/5qF_qbaWt3Q";
		
		console.log("dentro del segundo if");
	}
	//Clase 3 de video de español
	if(codigo == "a1c3f1"){
		document.getElementById("iframeNivel1").src="https://www.youtube.com/embed/-jxO22-dakg";
	}
	if(codigo == "a1c1f2"){
		document.getElementById("iframeNivel1").src="../pdfNivel1/TutorialPython2.pdf";
	}
	if(codigo == "a1c1f3"){
		document.getElementById("iframeNivel1").src="../evaluacionNivel1/evaluacion1.html";
	}
	
}



