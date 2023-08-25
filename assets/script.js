
const stuff = ['html', 'css','Git','Javascript'];
for(var i = 0; i < stuff.length; i++) {
    console.log(stuff[i]);

}
let choice  = Math.floor(Math.random() * 4);
console.log(choice);

var topics = stuff[choice];
function topicselect(){
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
}

topicselect(topics);