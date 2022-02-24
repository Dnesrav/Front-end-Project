function filled()
{
	var getName = document.getElementById("Uname").value;
	var getPhone = document.getElementById("Phone").value;
	var getDate = document.getElementById("Pass").value;
	
	var checkName=getName.length;
	var checkPhone=getPhone.length;
	var checkDate=getDate.length;
	
	if((checkName==0)&&(checkPhone==0)&&(checkDate==0))
	{
	alert("Please fill all the fields ");}
	else{
		alert("your Response was Submitted ");}
	
//document.getElementById("Uname1").innerHTML= document.getElementById("Uname").value;
}

