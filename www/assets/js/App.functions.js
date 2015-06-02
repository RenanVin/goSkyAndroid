function validaSession()
{
	var login = window.localStorage.getItem("userLogin");
	var pass  = window.localStorage.getItem("userPass");

	if(login == null || pass == null)
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

