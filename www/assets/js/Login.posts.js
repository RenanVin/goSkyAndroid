$(document).ready(function(){

	function resetForms()
	{
		document.formRecup.reset();
		document.formLogin.reset();
		document.formChangePass.reset();
		document.formCadastro.reset();
	}

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

			// Explode #
    		var loginExp = userForm.split("#");

			$.ajax({ 
				dataType : 'jsonp',
				url      : "http://gosky.com.br/webservice/login.php?userForm="+loginExp+"&passForm="+passForm,
				data     : $("form").serialize(),
				success: function(result)
				{

					if(result.RETORNO == "sucesso")
					{

						resetForms();
						window.localStorage.setItem("userID", result.MSG);
						window.localStorage.setItem("userLogin", loginExp);
						window.localStorage.setItem("userPass",  passForm);

						location.href="inbox.html";
					}
					else
					{
						window.localStorage.clear();
						alert(result.MSG);
					}
				} 
			});

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

					if(result.RETORNO == "sucesso")
					{

						resetForms();

						$(".formLogin").hide(0);
						$(".formRecup").hide(0);
						$(".formChangePass").show(0);
					}
				} 
			});
		}
	});

	// POST ALTERAR SENHA
	$(".formChangePass input[type=submit]").click(function(evento){
		evento.preventDefault();
		$(this).val("Processando...");
		$(".formChangePass input[type=submit]").addClass("disabled");

		var changeCode     = $("#changeCode").val();
		var changePass     = $("#changePass").val();
		var changePassConf = $("#changePassConf").val();

		if(changeCode == false)
		{
			$("#changeCode").focus();
			$(".formChangePass input[type=submit]").val("ALTERAR SENHA");
			$(".formChangePass input[type=submit]").removeClass("disabled");
		}
		else if(changePass == false)
		{
			$("#changePass").focus();
			$(".formChangePass input[type=submit]").val("ALTERAR SENHA");
			$(".formChangePass input[type=submit]").removeClass("disabled");
		}
		else if(changePassConf == false)
		{
			$("#changePassConf").focus();
			$(".formChangePass input[type=submit]").val("ALTERAR SENHA");
			$(".formChangePass input[type=submit]").removeClass("disabled");
		}
		else if(changePass != changePassConf)
		{
			alert("As senhas não conferem, verifique!");
			$("#changePassConf").focus();
			$(".formChangePass input[type=submit]").val("ALTERAR SENHA");
			$(".formChangePass input[type=submit]").removeClass("disabled");
		}
		else
		{
			$(this).val("ALTERAR SENHA");
			$(".formChangePass input[type=submit]").removeClass("disabled");
			
			$.ajax({ 
				dataType : 'jsonp',
				url      : "http://gosky.com.br/webservice/changePassword.php?changeCode="+changeCode+"&newPass="+changePass,
				data     : $("form").serialize(),
				success: function(result)
				{
					alert(result.MSG);

					if(result.RETORNO == "sucesso")
					{

						resetForms();

						$(".formLogin").show(0);
						$(".formRecup").hide(0);
						$(".formChangePass").hide(0);
						$(".formCadastro").hide(0);
					}
				} 
			});
		}
	});

	// POST CADASTRO
	$(".formCadastro input[type=submit]").click(function(evento){
		evento.preventDefault();
		$(this).val("Processando...");
		$(".formCad input[type=submit]").addClass("disabled");

		var cadNome     = $("#cadNome").val();
		var cadLogin    = $("#cadLogin").val();
		var cadSenha    = $("#cadSenha").val();
		var cadSenhaRep = $("#cadSenhaRep").val();

		if(cadNome == false)
		{
			$("#cadNome").focus();
			$(".formCadastro input[type=submit]").val("FINALIZAR CADASTRO");
			$(".formCadastro input[type=submit]").removeClass("disabled");
		}
		else if(cadLogin == false)
		{
			$("#cadLogin").focus();
			$(".formCadastro input[type=submit]").val("FINALIZAR CADASTRO");
			$(".formCadastro input[type=submit]").removeClass("disabled");
		}
		else if(cadSenha == false)
		{
			$("#cadSenha").focus();
			$(".formCadastro input[type=submit]").val("FINALIZAR CADASTRO");
			$(".formCadastro input[type=submit]").removeClass("disabled");
		}
		else if(cadSenhaRep == false)
		{
			$("#cadSenhaRep").focus();
			$(".formCadastro input[type=submit]").val("FINALIZAR CADASTRO");
			$(".formCadastro input[type=submit]").removeClass("disabled");
		}
		else if(cadSenha != cadSenhaRep)
		{
			alert("As senhas não conferem, verifique!");
			$("#cadSenhaRep").focus();
			$(".formCadastro input[type=submit]").val("FINALIZAR CADASTRO");
			$(".formCadastro input[type=submit]").removeClass("disabled");
		}
		else
		{
			$.ajax({ 
				dataType : 'jsonp',
				url      : "http://gosky.com.br/webservice/createAccount.php?nome="+cadNome+"&login="+cadLogin+"&senha="+cadSenha,
				data     : $("form").serialize(),
				success: function(result)
				{
					$(".formCadastro input[type=submit]").val("FINALIZAR CADASTRO");
					$(".formCadastro input[type=submit]").removeClass("disabled");

					alert(result.MSG);

					if(result.RETORNO == "sucesso")
					{

						resetForms();

						location.href="inbox.html";
					}
				} 
			});
		}
	});

});