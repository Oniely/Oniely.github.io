var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

var next = document.getElementById("nextBtn");
var back = document.getElementById("backBtn");
var reg = document.getElementById("regBtn");
var log = document.getElementById("logBtn");

next.onclick = function() {
	form1.style.left = "-600px";
	form2.style.left= "0";
}

back.onclick = function() {
    form1.style.left = "138px";
    form2.style.left = "600px";
	console.log(regUser);
}

reg.onclick = function () {
	var regUser = document.getElementById("regUser").value;
	var regPass = document.getElementById("regPass").value;

	if (regUser == "" || regPass == "") {
		form1.style.left = "138px";
		form2.style.left = "600px";
	}
}