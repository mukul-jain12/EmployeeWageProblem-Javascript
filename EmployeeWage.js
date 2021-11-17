//Welcome to Employee Wage Problem

const IS_FULL_TIME = 1;
const IS_PART_TIME = 2;
const WAGE_PER_HOURS = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
    case IS_FULL_TIME:
        empHrs = 8;
        break;
    case IS_PART_TIME:
        empHrs = 4;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOURS;
console.log("Employee Wage: " + empWage);