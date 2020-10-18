/*Zadanie 2
Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli*/

function printParam(str) {
    console.log(str);
}

printParam('anyx');





const exampleArray = ["bla", "add", "fsa"];

function returnArray(array) {
    
  return array;
}

console.log(returnArray(exampleArray));





/*Zadanie 4
Napisz funkcję która przyjmie jako argument stringa a następnie co 3 sekundy będzie go wypisywać w konsoli.
Po 5 razach ma przestać wypisywanie i zwrócić do konsoli napiś "Koniec".*/

function printStr(str) {
    let counter = 1;
    let timer = setInterval(function () {
        if (counter < 5) {
            console.log(str);
            counter++;
        } else {
            clearInterval(timer);
            console.log("Koniec");
        }
    }, 3000);
}

printStr("We all live in a yellow submarine")







