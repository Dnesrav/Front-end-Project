	function getInput(input) 
	{
        document.getElementById("calc").value += input;
    };
	function showOutput() 
	{
	  var stored=document.getElementById('calc').value;
      document.getElementById("calc").value = eval(stored);
    };
	function alter() 
	{
      var s= document.getElementById("calc").value =" ";
    };
	
	function zero() 
	{
      document.getElementById("calc").value =0;
    };
	
	var audio = new Audio('https://www.fesliyanstudios.com/play-mp3/387');
	document.onclick = function() {
	  audio.play();
	}