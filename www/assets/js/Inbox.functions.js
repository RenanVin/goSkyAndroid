// GET INBOX MESSAGES
$(document).ready(function(){

	var userID = window.localStorage.getItem("userID");

	$.ajax({ 
		dataType : 'jsonp',
		url      : "http://gosky.com.br/webservice/getInbox.php?userID="+userID,
		data     : $("form").serialize(),
		success: function(result)
		{
			// alert(result.DADOS);

			$.each(result.DADOS, function(i, val) {
				
				var ID      = val.ID;
				var assunto = val.assunto;
				var login   = val.remetente_login;

				$(".inbox-list").append('<div class="col-md-12 col-inbox"><img class="img-responsive" src="http://gosky.com.br/thumb.php?tipo=nor&w=40&h=30&img=uploads/'+login+'/profile.jpg" alt="'+login+'" /><span>'+login+'#goSky<b>'+assunto+'</b></span></div>');

			});

		},
		error: function()
		{
			alert("erro");
		}
	});

});