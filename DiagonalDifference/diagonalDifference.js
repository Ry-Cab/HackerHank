var arr = [[11, 2, 4],[4, 5, 6],[10, 8, -12]];

function diagonalDifference(arr) {
    var soma_diag_1 = 0;
    var soma_diag_2 = 0;
    
    var i = 0;

    while(i < arr.length){
        soma_diag_1 = soma_diag_1 + arr[i][i];
        i++
    }

    var j = 0;
    var k = arr.length - 1;
    
    while(j < arr.length){
        soma_diag_2 = soma_diag_2 + arr[j][k]
        j++
        k--
    }
    
    if(soma_diag_1 < soma_diag_2){
        return soma_diag_2 - soma_diag_1
    }else{
        return soma_diag_1 - soma_diag_2
    }
    
}

diagonalDifference(arr);             
