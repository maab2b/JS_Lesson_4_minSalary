let salaries = {
    andrey: 500,
    sveta: 600,
    anton: 200,
    kolya: 400
};

let sumSalaries = 0;
let highSalary = 0;

for(let key in salaries) {
    sumSalaries = sumSalaries + salaries[key];
    
    if(salaries[key] > highSalary) {
        highSalary = salaries[key];
    }
 }

let minSalary = 0;

for(let key in salaries) {
        minSalary = minSalary + salaries[key];
    }


for(let key in salaries) {
    if (salaries[key] < minSalary)
        minSalary = salaries[key];
}

console.log(sumSalaries);
console.log(highSalary);
console.log(`The minimum wage is ${minSalary}`);