//Welcome to Employee Wage Problem

const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOURS = 20;

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

//gives random value
let empCheck = Math.floor(Math.random() * 10) % 3;

//calling function
empHrs = getWorkingHours(empCheck);

//calculating employee wage
let empWage = empHrs * WAGE_PER_HOURS;
console.log("Employee Wage: " + empWage);