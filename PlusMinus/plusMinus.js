const arr =  [1,1,0,-1,-1]

function plusMinus(arr) {

    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    
    let result =  []

    for(let i = 0; i < arr.length; i++){
    
        if(arr[i] < 0){
            positives++;
        }else if(arr[i] > 0){
            negatives++;
        }else{
            zeros++;
        }
    }
     
    result.push((positives/arr.length).toFixed(6))
    result.push((negatives/arr.length).toFixed(6))
    result.push((zeros/arr.length).toFixed(6))

    result.sort().reverse();
         
    console.log(result[0])
    console.log(result[1])
    console.log(result[2])
}

plusMinus(arr)
