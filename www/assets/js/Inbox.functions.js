// GET INBOX MESSAGES
$(document).ready(function(){

	$.ajax({ 
		dataType : 'jsonp',
		url      : "http://gosky.com.br/webservice/getInbox.php?userForm="+loginExp+"&passForm="+passForm,
		data     : $("form").serialize(),
		success: function(result)
		{
			
		} 
	});

});