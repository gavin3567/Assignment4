$("#btnSend").on("click", function () {

    // Calculate the percent the student is at
    let percentGrade = ($("#txtassignment").val() * .5) + ($("#txtgroup").val() * .1) + ($("#txtquiz").val() * .1) +
        ($("#txtmidterm").val() * .1) + ($("#txtfinal").val() * .1) + ($("#txtintex").val() * .1);

    // Create a variable to store the letter grade
    let letterGrade;

    // Use if statements to accurately assign a stusent's letter grade
    if (percentGrade >= 94) {
        letterGrade = 'A';
    } else if (percentGrade >= 90) {
        letterGrade = 'A-'
    } else if (percentGrade >= 87) {
        letterGrade = 'B+'
    } else if (percentGrade >= 84) {
        letterGrade = 'B'
    } else if (percentGrade >= 80) {
        letterGrade = 'B-'
    } else if (percentGrade >= 77) {
        letterGrade = 'C+'
    } else if (percentGrade >= 74) {
        letterGrade = 'C'
    } else if (percentGrade >= 70) {
        letterGrade = 'C-'
    } else if (percentGrade >= 67) {
        letterGrade = 'D+'
    } else if (percentGrade >= 64) {
        letterGrade = 'D'
    } else if (percentGrade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }

    // Output the results by updating the span values
    $("#percentResult").text("Final Percentage: " + percentGrade);
    $("#letterResult").text("Letter Grade: " + letterGrade);
})