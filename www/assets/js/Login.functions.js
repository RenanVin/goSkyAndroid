$(document).ready(function(){

	function resetForms()
	{
		document.formRecup.reset();
		document.formLogin.reset();
		document.formChangePass.reset();
		document.formCadastro.reset();
	}

	// Show and hide login
	$(".formRecup").hide(0);
	$(".formChangePass").hide(0);
	$(".formCadastro").hide(0);

	$(".recuperar-senha").click(function(){
		resetForms();
		
		$(".formLogin").hide(0);
		$(".formChangePass").hide(0);
		$(".formRecup").show(0);
	});

	$(".voltar-login").click(function(){
		resetForms();

		$(".formRecup").hide(0);
		$(".formChangePass").hide(0);
		$(".formLogin").show(0);
	});

	$(".alterar-senha").click(function(){
		resetForms();

		$(".formRecup").hide(0);
		$(".formLogin").hide(0);
		$(".formChangePass").show(0);
	});

	$(".fazer-cadastro").click(function(){
		resetForms();

		$(".formRecup").hide(0);
		$(".formLogin").hide(0);
		$(".formChangePass").hide(0);
		$(".formCadastro").show(0);
	});
	// Show and hide login

	function maskTel(elementID)
	{
		$('#'+elementID).mask("(99) 9999-9999?9").ready(function(event) {
			var target, phone, element;
			target = (event.currentTarget) ? event.currentTarget : event.srcElement;
			phone = target.value.replace(/\D/g, '');
			element = $(target);
			element.unmask();
			if(phone.length > 10)
			{
				element.mask("(99) 99999-999?9");
			}
			else
			{
				element.mask("(99) 9999-9999?9");
			}
		});
	}

	maskTel("userCelular");

});