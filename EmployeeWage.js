//Welcome to Employee Wage Problem

const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOURS = 20;
const MAX_HRS_IN_MONTHS = 100;
const NUM_OF_WORKING_DAYS = 28;

//function return working hours
function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_FULL_TIME:
            return 8;
        case IS_PART_TIME:
            return 4;
        default:
            return 0;
    }
}

let empHrs = 0;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTHS && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    //gives random value
    let empCheck = Math.floor(Math.random() * 10) % 3;
    //calling function
    empHrs = getWorkingHours(empCheck);

    totalEmpHrs += empHrs;
    if(totalEmpHrs > 100){
        totalEmpHrs -= empHrs;
    }
}

//calculating employee wage
let empWage = totalEmpHrs * WAGE_PER_HOURS;
console.log("Employee Wage: " + empWage + ", Total Employee Hours: " + totalEmpHrs + " and Total Working Days: " + totalWorkingDays);