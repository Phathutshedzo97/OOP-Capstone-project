// Employees class creation
class Employee {
    constructor(name, age, salesTarget) {
    this.name = name;
    this.age = age;
    this.salesTarget = salesTarget;
    }
    // Calculate the end of month payout
    calculatePayout() {
        return 0; 
    }
}
//subclass of employess earning Salaries
class SalariedEmployee extends Employee {
    constructor(name, age, salesTarget,basicSalary){
        super(name,age,salesTarget);
        this.basicSalary = basicSalary;
    }

    //Calculating payout for employees on Salaries
    calculatePayout() {
        let payout = this.basicSalary;
        if (this.salesTarget > this.salesTarget ){
            payout *= 1.1; // increase by 10% if sales target exceeded
        }
        return payout;
    }
}

//Hourly paid employees extending from Employee
class HourlyEmployee extends Employee {
    constructor(name, age, salesTarget, hourlyRate, hoursLogged) {
      super(name, age, salesTarget);
      this.hourlyRate = hourlyRate;
      this.hoursLogged = hoursLogged;
    }

    calculatePayout() {
        let payout = this.hourlyRate * this.hoursLogged;
        if (this.salesTarget > this.salesTarget){
            payout *= 1.5; //increase by 50% if sales target exceeded
        }
        return payout;
    }
}

//HybridEmployee class extending from Employee
class HybridEmployee extends Employee {
    constructor(name, age, salesTarget, basicSalary, hourlyRate, hoursLogged) {
      super(name, age, salesTarget);
      this.basicSalary = basicSalary;
      this.hourlyRate = hourlyRate;
      this.hoursLogged = hoursLogged;
    }
  
    calculatePayout() {
      let payout = this.basicSalary + (this.hourlyRate * this.hoursLogged);
      if (this.salesTarget >= this.salesTarget * 1.1) {
        payout += this.hourlyRate * this.hoursLogged * 0.2; // Increase hourly rate by 20%
      }
      return payout;
    }
  }
  
  // Create instances of each type of employee
  const salariedEmployee1 = new SalariedEmployee('John Doe', 30, 50, 3000);
  const salariedEmployee2 = new SalariedEmployee('Jane Smith', 25, 60, 2500);
  
  const hourlyEmployee1 = new HourlyEmployee('Alice Johnson', 28, 40, 20, 100);
  const hourlyEmployee2 = new HourlyEmployee('Bob Williams', 35, 45, 25, 120);
  
  const hybridEmployee1 = new HybridEmployee('Eva Brown', 27, 55, 2000, 15, 80);
  const hybridEmployee2 = new HybridEmployee('Max Davis', 32, 65, 1800, 18, 90);
  
  // Calculate and display payouts for each employee
  function displayPayout(employee) {
    const payout = employee.calculatePayout();
    let formula = '';

    //Determine the formula to display based on the employee type
    if (employee.constructor.name === 'SalariedEmployee') {
        formula = `Payout = Basic Salary: $${employee.basicSalary}`;
        if (employee.salesTarget > employee.salesTarget) {
            formula += ` + 10% Bonus (Exceeded Sales Target)`;
        }
    } else if (employee.constructor.name === 'HourlyEmployee') {
        formula = `Payout = Hourly Rate: $${employee.hourlyRate} * Hours Logged: ${employee.hoursLogged}`;
        if (employee.salesTarget > employee.salesTarget) {
            formula += ` * 1.5 (Exceeded Sales Target)`;
        }
    } else if (employee.constructor.name === 'HybridEmployee') {
        formula = `Payout = Basic Salary: $${employee.basicSalary} + Hourly Rate: $${employee.hourlyRate} * Hours Logged: ${employee.hoursLogged}`;
        if (employee.salesTarget >= employee.salesTarget * 1.1) {
            formula += ` + 20% (Exceeded Sales Target by 10%)`;
        }
    }
    //Display the employee name, type, and payout
    console.log(`${employee.name} (${employee.constructor.name}) - Payout: $${payout.toFixed(2)} (${formula})`);
}

//Display the payouts for each employee
console.log('Payouts for Salaried Employees:');
displayPayout(salariedEmployee1);
displayPayout(salariedEmployee2);

console.log('\nPayouts for Hourly Employees:');
displayPayout(hourlyEmployee1);
displayPayout(hourlyEmployee2);

console.log('\nPayouts for Hybrid Employees:');
displayPayout(hybridEmployee1);
displayPayout(hybridEmployee2);
