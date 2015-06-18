$(document).ready(function(){
	
	var msgID     = window.localStorage.getItem("answerMsgID");
	var remetente = window.localStorage.getItem("userLogin");
	var destino   = window.localStorage.getItem("answerDestino");
	var assunto   = window.localStorage.getItem("answerAssunto");

	var remetenteConv = remetente.replace(",", "#");

	$(".remetente").val(remetenteConv);
	$(".destino").val(destino);
	$(".assunto").val("Re: "+assunto);

	$(".enviar").click(function(){
		
		var remetenteForm = $("#remetente").val();
		var destinoForm   = $("#destino").val();

		alert(destinoForm);
	});
});
