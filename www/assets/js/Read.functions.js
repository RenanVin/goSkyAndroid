$(document).ready(function(){

	var msgID = window.localStorage.getItem("read_inbox_id");

	$(".body-message").html("Carregando...");

	$.ajax({ 
		dataType : 'jsonp',
		url      : "http://gosky.com.br/webservice/readMessage.php?msgID="+msgID,
		data     : $("form").serialize(),
		success: function(result)
		{
			$(".lead").html(result.ASSUNTO);
			$(".text-message").html(result.MSG);
		}
	});

});
