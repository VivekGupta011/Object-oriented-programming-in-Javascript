// const result={}
// result.firstname="vivek";
// result.lastname="gupta";
// result.id="15";

// // we can access object two ways
// // 1
// console.log(result.firstname);
// // 2
// console.log(result["lastname"]);

// careating consructor

function constructorr(firstname1,lastname1){
    this.firstname1=firstname1;
    this.lastname1=lastname1;
    this.fullname1=function(){
        console.log(`${this.firstname1} ${this.lastname1}`)
    }

}

constructorr.prototype.info=function(){
    console.log(`${this.lastname1} ${this.firstname1} ${this.fullname1()}`);
}
let resut=new constructorr("vivek1","gupta1");
console.log(this.firstname);
resut.info();