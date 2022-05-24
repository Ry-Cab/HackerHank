var staircase = []
var n = 6;
var space = n - 1;
var count = 0;

for(var i = 0; i < n; i++){
    staircase.push([]);
}

for(var k = 0; k < staircase.length; k++){
    
    for(var l = 0; l < space; l++){
        staircase[k].push(" ")
        
    }
    space--
    

    count = n - staircase[k].length;
    
    for(var m = 0; m < count; m++){
        staircase[k].push("#")
    }

}

let output ="";

for(var row = 0; row < staircase.length; row++){

    for(var col = 0; col < staircase.length; col++){
        output += staircase[row][col]
    }
    output+="\n"
}
console.log(output)