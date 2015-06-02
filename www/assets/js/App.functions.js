$(document).ready(function(){

	// OPEN AND HIDE SLIDE MENU
	$(".open-slide-menu").click(function(){
		$(".slide-menu").fadeIn("fast");
	});
	
	// LOGOU
	$(".logout").click(function(){
		window.localStorage.clear();
		location.href="index.html";
	});
});


function validaSession()
{
	var userID = window.localStorage.getItem("userID");
	var login  = window.localStorage.getItem("userLogin");
	var pass   = window.localStorage.getItem("userPass");

	if(userID == null || login == null || pass == null)
	{
		return false;
	}
	else
	{
		return true;
	}
}


function lowCase(lstr)
{
	var str = lstr.value;
	lstr.value = str.toLowerCase();
}

function upCase(lstr)
{
	var str = lstr.value;
	lstr.value = str.toUpperCase();
}

