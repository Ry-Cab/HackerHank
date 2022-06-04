function gradingStudents(grades) {
    // Write your code here
    var grade = grades;
    var result = 0;
    var nextMulti = 0;
    var diference = 0;

    function checkGrade(){
        
        if(diference < 3){
            result = nextMulti;
        }else{
            result = grade;
        }

        return result
    }

    if (grade >= 0 && grade <= 100) {

        if (grade >= 38) {

            if (grade % 5 == 0) {
                result = (grade + 5) - grade;
                nextMulti = grade + 5;
                //console.log("O numero é " + grade)
                //console.log("Proximo multi é " + nextMulti );
                diference = nextMulti - grade;
                console.log(checkGrade(diference, grade, nextMulti));

            } else {
                nextMulti = grade;
                while(nextMulti !== 0 && nextMulti % 5 !== 0){
                    nextMulti++;
                }
                diference = nextMulti - grade;
                console.log(checkGrade(diference, grade, nextMulti));
            }

        } else {
            console.log(grade);
        }
    }

}
var test = gradingStudents(57)
console.log(test);