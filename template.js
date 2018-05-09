const name='sam';
const age =34;
const city='velacity';
let html;

//below syntax used in ES5 templates
html='<ul>' +
     '<li>Name: ' + name + '</li>' +
     '<li>Age :  ' + age + '</li>' +
     '<li>City: ' + city + '</li>' +        
     '</ul>'; 

//below used in ES6

function hello(){
    return "hello world";
}

html=`
    <ul>
    <li> Name : ${name} </li>
    <li> Age : ${age} </li>
    <li> City : ${city} </li>
    <li> function: ${hello()}</li>
    <li> random add: ${2+2} </li>
    
    </ul>
`

document.body.innerHTML=html;   