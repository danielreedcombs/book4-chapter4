
// Create an object that represents you. It should have the following properties on it.

// First name
// Last name
// Date of birth
// Place of birth
// Current city of residence
// Current state of residence
// Only the city and the state of residence should be able to be modified by other code in the application. The other properties should be read only (i.e. non-writable).

// Once those are defined, create a method on your object named toString().

const me = Object.create(null,{
    name:{
    value: "Daniel"
    },    
    lastName:{
        value:"Combs"
    },
    dOb:{
        value:"1/24/1992"
    },
    pOb:{
        value:"Watauga Medical"
    },
    currentCity:{
        value:"Nashville",
        writable: true
    },
    currentState:{
        value:"TN", 
        writeable: true
    },
    toString: {
        value: function () {
           return `${me.name} ${me.lastName} was born in ${me.currentCity}, ${me.currentState}. 
            He was born on ${me.dOb}. He currently lives in ${me.currentCity}, ${me.currentState}.`
        }
    }
})
    me.currentCity= "del"

console.log(me.toString())

for(x in me){
    console.log(x)
}
console.log(me.currentCity)
console.log(me.dOb)

