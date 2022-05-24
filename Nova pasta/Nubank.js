var n = [1.01, 1.01, 1.01, 1.4, 2.4]
var n_2 = [1.01, 1.01, 1.01, 1.4, 2.4]
var dias = [];
var count = 0;
n.sort()
n_2.sort().reverse();

var j =0;
while(n_2.length !== 0){
    

    for(var i = 0; i < n.length; i++){
        if(n[j] + n_2[i] <= 3){
            count++
            dias.push(n[j] + n_2[i]);
            
        }else{
            dias.push(n_2[i])
            n_2.splice(i, 1)
        } 
    }  
    j++ 
}


console.log(n)
console.log(n_2)
console.log(dias)
console.log(count)