//asynchronous function 
setTimeout(function(name){
    console.log(`hey i am ${name}`)
}, 3000, 'gaurav')
console.log('asynchronous function')

//Making HTTP request from javascript : fetch API
//fetch(url, {options})
fetch("https://pokeapi.co/api/v2/pokemon")
.then(function (response) {
        return console.log(response);
    })
.catch(function (error) {
        return console.log(error);
    });
