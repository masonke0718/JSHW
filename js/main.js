let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names= ["Max","HAS","PuRple","dog"]


function findWords(){
    for(let i = 0; i < dog_names.toString().length; i++){
        if(dog_string[i].search(dog_names.toString() = True)
            return 'Matched dog_name'
        } else {
            return 'No Matches'
        }
    }
}
console.log(findWords())

// Exercise #2

let given_arr = ['Max','Baseball','Reboot','Goku','Trucks','Rodger']

function replaceEvens(arr){
    for(let i = 0; i < given_arr.length; i++){
        if(i % 2 == 0){given_arr.splice(i,1,'even index')
        }
    }
    return given_arr
}

console.log(replaceEvens())

/*  JS Codewars REDO #1: You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.
*/

function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}

console.log(validate('djI38D55'))

/* JS Codewars REDO #2: This code does not execute properly. Try to figure out why.
function multiply(a, b){
  a * b
}
*/

function multiply(a, b){
    return(a * b);
  }

console.log(multiply(2,6))
