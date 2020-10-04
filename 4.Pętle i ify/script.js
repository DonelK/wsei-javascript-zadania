let p1 = 2;
let p2 = 6;
if(p1>p2) {
  console.log(p1);  
} else if(p1==p2) {
  console.log("Sa rowne");  
} else {
  console.log(p2);  
} 





let firstNumber = 111;
let secondNumber = 222;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {

    console.log(firstNumber);

} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {

    console.log(secondNumber);
    
} else {
    console.log(thirdNumber);
}




for (var step = 0; step < 10; step++) {

  console.log('Lubię JavaScript');
}







let result = 0;

for(let i = 1; i<=10; i++){
    result += i;
}

console.log(result);






for(let n = 0; n<5; n++){
    if(n%2 == 0){
        console.log(n + " parzysta");
        
    } else {
        console.log(n + " nieparzysta");
    }
}




for ( let i = 0; i < 5; i++) {

	for ( let j = 0; j < 5; j++) {

		console.log("i= " + i + ", j= " + j);

		}
	}







for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}




const star = '*'
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result)
}








