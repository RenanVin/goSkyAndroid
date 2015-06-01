$(document).ready(function(){

	// POST LOGIN
	$(".formLogin input[type=submit]").click(function(evento){
		evento.preventDefault();
		$(this).val("Processando...");
		$(".formLogin input[type=submit]").addClass("disabled");

		var userForm = $("#userLogin").val();
		var passForm = $("#passLogin").val();

		if(userForm == false)
		{
			$("#userLogin").focus();
			$(".formLogin input[type=submit]").val("ENTRAR");
			$(".formLogin input[type=submit]").removeClass("disabled");
		}
		else if(passForm == false)
		{
			$("#passLogin").focus();
			$(".formLogin input[type=submit]").val("ENTRAR");
			$(".formLogin input[type=submit]").removeClass("disabled");
		}
		else
		{
			$(this).val("ENTRAR");
			$(".formLogin input[type=submit]").removeClass("disabled");
			alert("ok");
		}
	});

	// POST RECUP
	$(".formRecup input[type=submit]").click(function(evento){
		evento.preventDefault();
		$(this).val("Processando...");
		$(".formRecup input[type=submit]").addClass("disabled");

		var userCelular = $("#userCelular").val();

		if(userCelular == false)
		{
			$("#userCelular").focus();
			$(".formRecup input[type=submit]").val("ENVIAR CÓDIGO");
			$(".formRecup input[type=submit]").removeClass("disabled");
		}
		else
		{
			$(this).val("ENVIAR CÓDIGO");
			$(".formRecup input[type=submit]").removeClass("disabled");
			
			$.ajax({ 
				dataType : 'jsonp',
				url      : "http://gosky.com.br/webservice/lostPassword.php?userCelular="+userCelular,
				data     : $("form").serialize(),
				success: function(result)
				{
					alert(result.MSG);

					$(".formLogin").hide(0);
					$(".formRecup").hide(0);
					$(".formChangePass").show(0);
				} 
			});
		}
	});

	// POST ALTERAR SENHA
	$(".formChangePass input[type=submit]").click(function(evento){
		evento.preventDefault();
		$(this).val("Processando...");
		$(".formChangePass input[type=submit]").addClass("disabled");

		var userCelular = $("#userCelular").val();

		if(userCelular == false)
		{
			$("#userCelular").focus();
			$(".formChangePass input[type=submit]").val("ENVIAR CÓDIGO");
			$(".formChangePass input[type=submit]").removeClass("disabled");
		}
		else
		{
			$(this).val("ENVIAR CÓDIGO");
			$(".formChangePass input[type=submit]").removeClass("disabled");
			
			$.ajax({ 
				dataType : 'jsonp',
				url      : "http://gosky.com.br/webservice/lostPassword.php?userCelular="+userCelular,
				data     : $("form").serialize(),
				success: function(result)
				{
					alert(result.MSG);

					$(".formLogin").hide(0);
					$(".formChangePass").hide(0);
					$(".formChangePass").show(0);
				} 
			});
		}
	});

});