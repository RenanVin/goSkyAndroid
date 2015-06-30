$(document).ready(function(){
	
	var msgID     = window.localStorage.getItem("answerMsgID");
	var userID    = window.localStorage.getItem("userID");
	var remetente = window.localStorage.getItem("userLogin");
	var destino   = window.localStorage.getItem("answerDestino");
	var assunto   = window.localStorage.getItem("answerAssunto");

	var remetenteConv = remetente.replace(",", "#");

	$(".remetente").val(remetenteConv);
	$(".destino").val(destino);
	$(".assunto").val("Re: "+assunto);

	$(".enviar").click(function(){
		
		var destinoForm   = $("#destino").val();
		var assuntoForm   = $("#assunto").val();
		var msgForm       = $("#msg").val();

		if(destinoForm == null || destinoForm == "")
		{
			$("#destino").focus();
		}
		else if(assuntoForm == null || assuntoForm == "")
		{
			$("#assunto").focus();
		}
		else if(msgForm == null || msgForm == "")
		{
			$("#msg").focus();
		}
	});
});
