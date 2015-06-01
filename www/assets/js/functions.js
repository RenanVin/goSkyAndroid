$(document).ready(function(){

	// Show and hide login
	$(".formRecup").hide(0);
	$(".recuperar-senha").click(function(){
		$(".formLogin").hide(0);
		$(".formRecup").show(0);
	});

	$(".voltar-login").click(function(){
		$(".formLogin").hide(0);
		$(".formRecup").show(0);
	});
	// Show and hide login

});