$(document).ready(function(){

	// Show and hide login
	$(".formRecup").hide(0);
	$(".formChangePass").hide(0);
	$(".recuperar-senha").click(function(){
		document.formRecup.reset();
		document.formLogin.reset();
		
		$(".formLogin").hide(0);
		$(".formChangePass").hide(0);
		$(".formRecup").show(0);
	});

	$(".voltar-login").click(function(){
		document.formRecup.reset();
		document.formLogin.reset();

		$(".formRecup").hide(0);
		$(".formChangePass").hide(0);
		$(".formLogin").show(0);
	});
	// Show and hide login

});