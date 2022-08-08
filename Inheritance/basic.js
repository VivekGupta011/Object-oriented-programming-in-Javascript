class person {
    employee(name, age, salary) {
      this.firstname = name;
      this.userAge = age;
      this.userSalary = salary;
    }
  
    getdata() {
      console.log(` this is ${this.employee.firstname} ${this.employee.userAge} ${this.employee.userSalary}`);
      console.log(this);
    }
  }
  
  let detail = new person("vivek", "21", 1243543);
  detail.getdata();
  
  
  
  // using ES6 
  
  class constructor1{
      constructor(fname1,lname1,salary){
          this.firstname1=fname1;
          this.lastname1=lname1;
          this.Usersalary=salary;
      }
  // this is protype method
      hello(){
          console.log(`this is  ${this.firstname1} ${this.lastname1} ${this.Usersalary}`)
      }
  }
  
  // object declaration with many instances
  let studd=new constructor1("viviek","guptaa",4500);
  studd.hello();