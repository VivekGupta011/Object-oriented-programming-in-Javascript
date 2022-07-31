class employee{
    constructor(){
        this.firstname='vivek',
        this.lastname="gupta"
        
    }
    // this is protype method
    greet(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

let result=new employee();
console.log(result);

class manager extends employee{

}
let result2=new employee();
result2.greet();
let result1=new manager();
console.log(result1);
