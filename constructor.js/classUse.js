// when we use 'class' then we can call multiple time


class student{
    // this is constructor method
    constructor(namee,lname){
        this.firstname=namee,
        this.lastname=lname,
        console.log("this is constructor function!")
    }
    // this is protype method
    hello(){
        console.log(`${this.firstname} ${this.lastname} `)
 
    }
    // this is static method
    static staticmethod(){
        console.log("static function");
    }
}
// first we have to create object then constructor function automatically call
// object creation
let studd=new student("vivek","gupta");
let studd1=new student("vivek1","gupta1");
let studd2=new student("vivek2","gupta2");

// accessing the properties of constructor
console.log(studd.firstname);
console.log(studd.lastname);
console.log(studd2.firstname);
console.log(studd2.lastname);

// this is protype call method
studd.hello();
studd1.hello();
studd2.hello();


// static method we can,t access through objct
// we access through class name
student.staticmethod();