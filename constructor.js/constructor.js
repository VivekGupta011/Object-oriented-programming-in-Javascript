//first type of constructor
// when we use 'class' then we can call multiple time if dont use

// function constructor(fname,lname,num){
//     let result={
//         firsname:fname,
//         lastname:lname,
//         id:num,
//         detail:function(){
//             console.log(`${this.firsname} ${this.lastname} ${this.id}`);
//             console.log(this.lastname);
//             // console.log(this.num);
//             // console.log(this.detail());

//         }
//     }
//     // console.log(result.detail());
//     return result.detail();
// }
// let student1=constructor('vivek','gupta',232423342);
// console.log(student1);

//second type of constructor

class constructor1 {
  constructor2(fname1, lname1, id1) {
    (this.firstname1 = fname1),
      (this.lastname1 = lname1),
      (this.id1 = id1);
  }
  hello(){
    console.log(`${this.firstname1} ${this.lastname1} ${this.id1}`);

  }
}

let stu = new constructor1("vivek", "gupta", 23325);
let stu1 = new constructor1("vive2k", "gupta1", 2332225);
let stu2 = new constructor1("vivek1", "gupta2", 233125);
console.log(stu.hello());
// console.log(stu);
