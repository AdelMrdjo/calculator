reset();
var prvibroj = 0;
var drugibroj = 0;
var operator;
var zarez = false;
function operatora(f){
	if(f == '+'){
		operator = "+";
	}
	if(f == '-'){
		operator = "-";
	}
	if(f == '*'){
		operator = "*";
	}
	if(f == '/'){
		operator = "/";
	}
	document.getElementById('operator').innerHTML = f;
	document.getElementById('pbroj').innerHTML = document.getElementById('dbroj').innerHTML;
	prvibroj = document.getElementById('dbroj').innerHTML;
	zarez = false;
	if(prvibroj != 0){
		document.getElementById('dbroj').innerHTML = "0";
		drugibroj = "";
	}
}
function reset(){
	document.getElementById('operator').innerHTML = "";
	document.getElementById('pbroj').innerHTML = "";
	document.getElementById('dbroj').innerHTML = "0";
	prvibroj = 0;
	drugibroj = 0;
	operator = "";
	zarez = false;
}
function test(f){
	if(parseInt(drugibroj.length) < 20 || isNaN(drugibroj.length)){
		if(f.innerHTML == '.'){
			if(zarez == false){
				if(drugibroj == 0){
					document.getElementById('dbroj').innerHTML = "0.";
					drugibroj = "0.";
					zarez = !zarez;
				}else{
					document.getElementById('dbroj').innerHTML += ".";
					drugibroj += ".";
					zarez = !zarez; 
				}
			}else{
				return false;
			}
		}else{
			if(drugibroj == 0 && zarez == false) document.getElementById('dbroj').innerHTML = "";
			document.getElementById('dbroj').innerHTML += f.innerHTML;
			drugibroj += f.innerHTML;
		}
	}
}
function izracunaj(){
	prvibroj = parseFloat(prvibroj);
	drugibroj = parseFloat(drugibroj);
	var rez;
	switch(operator){
		case '+': rez = parseFloat(prvibroj+drugibroj); break;
		case '-': rez = parseFloat(prvibroj-drugibroj); break;
		case '*': rez = parseFloat(prvibroj*drugibroj); break;
		case '/': rez = parseFloat(prvibroj/drugibroj); break;
	}
	document.getElementById('dbroj').innerHTML = rez;
	document.getElementById('operator').innerHTML = "";
	document.getElementById('pbroj').innerHTML = "";
	if(rez == undefined || rez == NaN){
		document.getElementById('dbroj').innerHTML = "0";
	}
	prvibroj = 0;
	drugibroj = 0;
}