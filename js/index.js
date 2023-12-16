// document.getElementById("myForm").addEventListener('submit', function(e) {
//     e.preventDefault();

//     let el = document.getElementById('myForm');

//     let username=el.username.value;
//     let email=el.email.value;
//     let pass=el.password.value;
//     let gender=el.gender.value;

//     let error = '';
//     if(username.length < 2)
//         error = "Name is too short";
//     else if(!email.includes('@'))
//         error = "Email has to include @ sign";
//     else if(pass.length < 2)
//         error = "Pass is too short";
//     else if(gender == null || gender == '')
//         error = "Gender undifined";

//     if(error!=''){
//         document.getElementById("error").innerText = error;
//         return false;
//     }
//     document.getElementById("error").innerText = '';
//     window.location = 'https://itproger.com';

    
//     return false;
// })

// let id = setInterval(my_func, 1000);

// let counter = 0;
// function my_func(){
//     document.getElementById("timer").innerHTML=("Counter "+ counter);
//     counter++;
// }

// function stopInterval(){
//     clearInterval(id);

// }


// let inter = setInterval(function(){
//     let date = new Date();
//     let timer = ('Time is: '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
//     document.getElementById("time").innerText=timer;
// }, 1000)


// let arr = [9, 2, 5, "Some", true];
// console.log(arr.reverse());

// let user = prompt('Enter films: ');
// let films = user.split(',');
// console.log(films);
// console.log(films.join('-'));

class Person{
    name = ''
    age = ''

    constructor(name, age){
        this.name = name
        this.age = age
    }

    info(){
        console.log("Person: " + this.name + ". Age: " + this.age);
    }
}

let alex = new Person("Alex", 20);


alex.info();