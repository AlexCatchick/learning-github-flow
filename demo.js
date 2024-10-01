const calc = (function (){
    const add = (a,b) => { return a+b};
    const sub = (a,b) => { return a-b};
    const mul = (a,b) => { return a*b};
    const div = (a,b) => { return b===0?undefined:(a/b)};
    return {
        add,
        sub,
        mul,
        div
    };
})();

const a=5;
const b=6;

console.log("Addition : "+calc.add(a,b));
console.log("Subtraction : "+calc.mul(a,b));
console.log("Multiplication : "+calc.sub(a,b));
console.log("Division : "+calc.div(a,b));
