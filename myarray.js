const num=[123,32,4,5,62,8,9];
const num2=[22,33,44,5,6];
let val;
val=num.length;

val=num.indexOf(4);

// val=num.push(30);
// val=num.pop();
// val=num.unshift(22);
// val=num.shift();
// val=num.splice(1,2);
// val=num.reverse();

// val=num.concat(num2);

// //sort doesnt giving exact sort;
// val=num.sort();
// //below method gives sorted value
// val=num.sort(function(x,y){
//     return x-y;

// })

function num50(num){
    return num <50;
   
}

val=num.find(num50);

console.log(val);
console.log(num);