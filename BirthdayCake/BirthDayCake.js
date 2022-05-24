candles = [4,1,4,2]

function birthdayCakeCandles(candles) {
    candles.sort().reverse();
    var best_candles = [];
    var best_candle = candles[0]
    
    for(var i = 0; i < candles.length; i++){
        if(best_candle == candles[i]){
          best_candles.push(candles[i])
        }
    }

   return best_candles.length

}
birthdayCakeCandles(candles)
