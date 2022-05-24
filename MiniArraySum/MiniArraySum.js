var arr = [1,2,3,4,5];
var numbers = arr;
var sum = 0;
var sum_array = [];

for(var i = 0; i < numbers.length; i++){

for(var j = 0; j < numbers.length; j++){
    sum = sum + numbers[j];
}

sum_array.push(sum);
sum = 0;
}


for(var k = 0; k < numbers.length; k++){
sum_array[k] = sum_array[k] - numbers[k]
}

sum_array.sort();
console.log(sum_array[0] + " " + sum_array[4])
