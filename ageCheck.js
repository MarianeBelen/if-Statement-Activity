
let ageCheck = prompt('Please enter you currennt age. ');

if (ageCheck < 13){
    console.log('You are a child,');
} else if (ageCheck >= 13 && ageCheck <= 19){
    console.log('You are a teenager.');
} else {
    console.log('You are an adult');
}