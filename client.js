// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

rob = 
{
  name: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 1
};


// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let percentage = 0;
  if (employee.reviewRating <= 2) {
    percentage = 0;
  } else if (employee.reviewRating === 3) {
    percentage = 0.04;
  } else if (employee.reviewRating === 4) {
    percentage = 0.06;
  } else if (employee.reviewRating === 5) {
    percentage = 0.10;
  }
  if (employee.employeeNumber.length === 4) {
    percentage += 0.05;
  }
  // we assume that this is a separate condition:
  if (Number(employee.annualSalary) > 65000) {
    percentage -= 0.01;
  }
  if (percentage < 0) {
    percentage = 0;
  }
  if (percentage > 0.13) {
    percentage = 0.13;
  }

  let bonus = Number(employee.annualSalary) * percentage;
  bonus = Math.round(bonus);

  let compensation = Number(employee.annualSalary) + bonus;

  let employeeBonus = {
    name: employee.name,
    bonusPercentage: percentage,
    totalCompensation: compensation,
    totalBonus: bonus,
  }
  return employeeBonus;
}


  
  // return new object with bonus results


  console.log(calculateIndividualEmployeeBonus(rob));


function calculateBonuses(employees) {
  let employeeData;
  for (let employee of employees) {
    employeeData = calculateIndividualEmployeeBonus(employee);
    console.log(`Employee ${employeeData.name} receives a ${employeeData.bonusPercentage*100}% `);
    console.log(`   bonus on his ${employeeData.totalCompensation-employeeData.totalBonus} salary,`);
    console.log(`   for a total bonus of $${employeeData.totalBonus}, making their total compensation`);
    console.log(`   of $${employeeData.totalCompensation}.`);
  }
}

calculateBonuses(employees);