var number = Math.random();
var arr = [];

while(arr.length !== 10){
    number = (Math.random() * (9999 - 1000) + 1000);
    number = Math.floor(number)
    number_array = number.toString().split("")
    var soma__array = 0;

    for(var i = 0; i <= 3; i++){
            soma__array  = soma__array + Number(number_array[i]);         
    }
    var soma =  soma__array;
        
    console.log(soma)
        if(soma === 21){
            arr.push(number)
        }      
}

console.log(arr)

   