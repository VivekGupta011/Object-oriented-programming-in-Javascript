// traditional way
function constructor(fname,lname){
    this.firstname=fname,
    this.lastname=lname;

};

constructor.prototype.getDetails=function(){
    console.log(` this is ${this.firstname} ${this.lastname}`);
}

let stud1=new constructor("viviek","gupta");
console.log(stud1.getDetails());



// using ES6 

class constructor1{
    constructor(fname1,lname1,salary){
        this.firstname1=fname1;
        this.lastname1=lname1;
        this.Usersalary=salary;
    }
// this is protype method
    hello(){
        console.log(`${this.firstname1} ${this.lastname1} ${this.Usersalary}`)
    }
}

// object declaration with many instances
let studd=new constructor1("viviek","guptaa",4500);
studd.hello();