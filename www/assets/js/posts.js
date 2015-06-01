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

});