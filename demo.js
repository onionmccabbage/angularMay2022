// ways to write functions in JavaScript (ECMAScript)
const fnA = (x)=>{return x*x}
const fnB = x =>{return x*x} // if there is ONE parameter we do not need the brackets
const fnC = x => x*x // if there is ONE line of code, we do not need the braces or RETURN
// NB ints files x? means the x parameter is optional
const fnD = (a=1, b, ...rest)=>{
    // a takes the default value unlesss overridden
    // the second parameter will populate b
    // any other parameters will be in the 'rest' operator
}

class DemoClass {
    classMethod(){
        // this is a function that belongs to a class
    }
}

// old-skool
function fnZ(){ // avoid where possible - the lexical scoping is different in old-style functions
    // do stuff here
}

try {
    // code that might throw an error
}
catch(err){
    console.log(err)
}
finally {
    // always runs - even if there was an error
}

