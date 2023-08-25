const stuff = ['html', 'css','Git','Javascript'];
let choice  = Math.floor(Math.random() * 4);
console.log(choice);

var topics = stuff[choice];

if (topics === 'html') {
    console.log("let's study html");
} else if (topics === 'css') {
    console.log("let's study css");
} else if (topics === 'Git') {
    console.log("let's study Git");
} else if (topics === 'Javascript') {
    console.log("let's study Javascript");
} else {
console.log('please try again');
}
