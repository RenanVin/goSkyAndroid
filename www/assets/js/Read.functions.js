$(document).ready(function(){

	var msgID = window.localStorage.getItem("read_inbox_id");

	$(".read-message").hide(0);

	swal({   
		title: "Processando solicitação",
		text: "Aguarde...",
		timer: 1000,
		showConfirmButton: false 
	},
	function continueRequest(){
		
		$.ajax({ 
			dataType : 'jsonp',
			url      : "http://gosky.com.br/webservice/readMessage.php?msgID="+msgID,
			data     : $("form").serialize(),
			success: function(result)
			{
				$(".lead").html(result.ASSUNTO);
				$(".remetente").html("De: <strong>"+result.REMETENTE+"</strong>");
				$(".data").html("Em: <strong>"+result.DATA+"</strong>");
				$(".lead").html(result.ASSUNTO);
				$(".text-message").html(result.MSG);

				$(".read-message").fadeIn("slow");
				swal.close();
			}
		});
	});

});
