// GET INBOX MESSAGES
$(document).ready(function(){

	var userID = window.localStorage.getItem("userID");

	$(".inbox-list").html("Carregando...");

	$.ajax({ 
		dataType : 'jsonp',
		url      : "http://gosky.com.br/webservice/getInbox.php?userID="+userID,
		data     : $("form").serialize(),
		success: function(result)
		{
			$(".inbox-list").html("");
			$.each(result.DADOS, function(i, val) {
				
				var ID      = val.ID;
				var assunto = val.assunto;
				var login   = val.remetente_login;

				var createList = $('<div data-msg-id="'+ID+'" class="col-md-12 col-inbox"><img class="img-responsive" src="http://gosky.com.br/thumb.php?tipo=nor&w=40&h=30&img=uploads/'+login+'/profile.jpg" alt="'+login+'" /><span>'+login+'#goSky<b>'+assunto+'</b></span></div>');
				$(".inbox-list").append(createList);

				// GO READ PAGE
				createList.click(function(){
				    var msgID = $(this).attr("data-msg-id");
				    window.localStorage.setItem("read_inbox_id", msgID);

				    location.href="read.html";

				});

			});

		},
		error: function()
		{
			alert("erro");
		}
	});

	// CLOSE READ
	$(".close-read").click(function(){
		$(".read-message").fadeOut("fast");
		$(".read-message .lead").html("");
		$(".read-message .text-message").html("");
	});

});