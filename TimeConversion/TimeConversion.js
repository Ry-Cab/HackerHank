var s = '12:01:00AM';
timeConversion(s)

function timeConversion(s) {

    var hour = s.split("");

    switch(hour[8]){

    case "P":
        var hour_convert = hour[0] + hour[1];
        var min_convert = hour[3] + hour[4];
        var sec_convert = hour[6] + hour[7];

        if(hour_convert !== "12"){
            hour_convert = Number(hour_convert)
            hour_convert = (hour_convert + 12).toString();
        }
        
        console.log(hour_convert + ":" + min_convert + ":" + sec_convert);

        break
    case "A":
        var hour_convert = hour[0] + hour[1];
        var min_convert = hour[3] + hour[4];
        var sec_convert = hour[6] + hour[7];

        if(hour_convert == "12"){
            hour_convert = "00";
        }

        console.log(hour_convert + ":" + min_convert + ":" + sec_convert);
        break
    }

}