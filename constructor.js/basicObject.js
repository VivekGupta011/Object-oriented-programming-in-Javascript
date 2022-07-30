// basically object can be created with two ways
// 1.using object literal
// 2.using constructor
// this is using object literal
let result={
    firstname:"vivek",
    lastname:"gupta",
    fullname:function(){
        let name=`${this.firstname} ${this.lastname}`;
        console.log(name);
    },data:{
        stud1:'vivek1',
        studd2:'vivek2',
        arr:['name','vivek'],
        student_data:function(){
            console.log(`${this.stud1} ${this.studd2}`)
        }

    }
}
// accessing an array element
console.log(result.data.arr[0]);
console.log(result.firstname);
console.log(result.fullname());
console.log(result.lastname);
// accessing an object inside object
console.log(result.data.studd2);

// accesing an function inside of object
console.log("this is function inside of object:"+result.data.student_data());

// this is using constructor

function person(fname,lname){
    this.firstname=fname,
    this.lastname=lname,
    fullname=function(){
        console.log(`${fname} ${lname}`);
    }
  
}

//creating new instance of person object
let stud=new person("vivek","gupta");
let stud1=new person("vivek1","gupta1");
console.log(stud.firstname);
console.log(stud1);
// calling function inside of object
console.log(person.fullname());