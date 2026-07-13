let studentName = prompt("Enter student name:");
let attendancePercentage = Number(prompt("Enter attendance percentage:"));
let midtermScore = Number(prompt("Enter midterm score:"));
let finalExamScore = Number(prompt("Enter final exam score:"));
let assignmentScore = Number(prompt("Enter assignment score:"));
let tuitionPaymentStatus = prompt("Enter tuition payment status (paid/unpaid):");

if (tuitionPaymentStatus.toLowerCase() !== "paid") {
    console.log("Error: You cannot view your results because tuition is unpaid.");
} 
else if (attendancePercentage < 75) {
    console.log("Academic Status: Failed due to low attendance.");
} 
else {
    let totalScore = midtermScore + finalExamScore + assignmentScore;
    let letterGrade;

    if (totalScore >= 90) {
        letterGrade = "A";
    } 
    else if (totalScore >= 80) {
        letterGrade = "B";
    } 
    else if (totalScore >= 70) {
        letterGrade = "C";
    } 
    else if (totalScore >= 60) {
        letterGrade = "D";
    } 
    else {
        letterGrade = "F";
    }

    let academicStatus;

    if (totalScore >= 60) {
        academicStatus = "Passed";
    } 
    else {
        academicStatus = "Failed";
    }

    console.log("----- Student Report -----");
    console.log(`Student Name: ${studentName}`);
    console.log(`Attendance: ${attendancePercentage}%`);
    console.log(`Total Score: ${totalScore}`);
    console.log(`Letter Grade: ${letterGrade}`);
    console.log(`Academic Status: ${academicStatus}`);
    console.log("--------------------------");
}