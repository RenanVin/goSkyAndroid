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

						window.localStorage.setItem("userID", result.MSG);
						window.localStorage.setItem("userLogin", loginExp);
						window.localStorage.setItem("userPass",  passForm);

						location.href="inbox.html";
					}
					else
					{
						window.localStorage.clear();
						swal(result.MSG);
					}
				} 
			});

		}
	});

	// POST RECUP
	$(".formRecup input[type=submit]").click(function(evento){
		evento.preventDefault();
		
			var userCelular = $("#userCelular").val();

			if(userCelular == "" || userCelular == false || userCelular == null)
			{
				$("#userCelular").focus();
				swal.close();
			}
			else
			{
				swal({   
					title: "Processando solicitação",
					text: "Aguarde...",
					timer: 1000,
					showConfirmButton: false 
				},
				function continueRequest(){
					$.ajax({ 
						dataType : 'jsonp',
						url      : "http://gosky.com.br/webservice/lostPassword.php?userCelular="+userCelular,
						data     : $("form").serialize(),
						success: function(result)
						{
							//swal.close();
							swal(result.MSG);
								
							if(result.RETORNO == "sucesso")
							{
								location.href="changePassword.html";
							}
						} 
					});
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
			$("#changePassConf").focus();
			swal("As senhas não conferem, verifique!");
			swal("As senhas não conferem, verifique!");
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
					swal(result.MSG);

					if(result.RETORNO == "sucesso")
					{
						location.href="index.html";
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
			$("#cadSenhaRep").focus();
			swal("As senhas não conferem, verifique!");

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

					swal(result.MSG);

					if(result.RETORNO == "sucesso")
					{

						location.href="inbox.html";
					}
				} 
			});
		}
	});

});