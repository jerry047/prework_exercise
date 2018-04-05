function reversenumber(){
	var a = document.getElementById('reversenumber').value;	
	document.getElementById('reversenumber').value = a.split('').reverse('').join('');
}

function alphabeticalorder(){
	var a = document.getElementById('order').value;
	document.getElementById("order").value = a.split('').sort().join('');
}

function uppercase(){
	var a = document.getElementById('upper').value;
	a.split('');
	document.getElementById('upper').value =  a[0].toLocaleUpperCase() + a.slice(1);
}

function vowels(){
	var a = document.getElementById('vowel').value;
	var count = 0;
	var char = '';
	for(var i = 0; i < a.length; i++){
		console.log(a[i]);
		if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || 
			a[i] == 'u'){
			char += a[i]+",";
			count++;
		}
	}
	document.getElementById('vowel').value = count + " vowel => "+ 
	char.slice(0, -1);
}

function gettype(a){
	console.log(typeof a);
}

function long(){
	var num = prompt("enter the number of country");
	var country = [];
	if(num){
		for(var i = 0; i<num; i++){
			country.push(prompt("enter the name of country"));
		}
	}
	var longCon = '';		
	for(var i = 0 ; i<num; i++){
		for(var j = 0; j<=i; j++){
			if(country[i].length>country[j].length){
				longCon = country[i];
			}	
		}
	}
	document.getElementById('country').value = longCon;
}

function check(){
	var a = ["a", "b", "c"];
	console.log(typeof a);
}

function clone(){
	var ran = ["a", "b", "c"];
	var nar = ran.slice(0);
	document.getElementById("clone").value = nar;
}

function sort(){
	var bike = ["monster", "brutale", "fz"];
	bike.sort();
	console.log(bike);
}

function rand(){
	var items = ["abc", "cde", "efg", "ghi", "ijk", "klm", "mno","opq"];
	var item = items[Math.floor(Math.random()*items.length)];
	document.getElementById("randomitem").value = item;
}

function fizzbuzz(){
	for(var i=1; i<101; i++){
		if(i%15 == 0){
			console.log("fizzbuzz");
		}
		else if(i%3 == 0){
			console.log("fizz");
		}
		else if(i%5 == 0){
			console.log("buzz");
		}
		else
		console.log(i);
	}	
}

function arrow(){
	var numbers = ['fizz','buzz','fizzbuzz'];
	console.log(numbers.map(material => material.length));
}