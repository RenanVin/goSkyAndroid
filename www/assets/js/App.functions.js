$(document).ready(function(){

	// OPEN AND HIDE SLIDE MENU
	$(".open-slide-menu").click(function(){
		$(".bg-slide-menu").fadeIn("fast");
		$(".slide-menu").animate({width:'toggle'},350);
	});

	$(".bg-slide-menu").click(function(){
		$(".bg-slide-menu").fadeOut("fast");
		$(".slide-menu").animate({width:'hide'},350);
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

// function downloadFile(){

// window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, 
//     function onFileSystemSuccess(fileSystem) {
//         fileSystem.root.getFile(
//         "dummy.html", {create: true, exclusive: false}, 
//         function gotFileEntry(fileEntry) {
//             var sPath = fileEntry.fullPath.replace("dummy.html","");
//             var fileTransfer = new FileTransfer();
//             fileEntry.remove();

//             fileTransfer.download(
//                 "http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf",
//                 sPath + "theFile.pdf",
//                 function(theFile) {
//                     console.log("download complete: " + theFile.toURI());
//                     showLink(theFile.toURI());
//                 },
//                 function(error) {
//                     console.log("download error source " + error.source);
//                     console.log("download error target " + error.target);
//                     console.log("upload error code: " + error.code);
//                 }
//             );
//         }, fail);
//     }, fail);
// };
// }