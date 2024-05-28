

/*
document.write("<h1>me BASIC javascript</h1>");
*/


function showdate(){
    document.getElementById('datep').innerHTML = Date();
}



/*
let a = 2;
 let b =5;
 let sum = a+b;
 let mul = a*b;
 let dive = a/b;
 let mod = a%b;

 document.write(sum);
 alert("i am hacker");

 console.log(area);
 */ 


/*
const pi =3.14;
let r = 45;

let area = pi * r*r;

document.write(area.toFixed(3));
*/

/*
let fname = "Praasis";
let lname = "Dhakal";
document.write(fname +" "+lname);
*/

/*
let myage = 17;
 
if(myage > 18)
    {
    document.write("you are voter");
}
else
{
    document.write(" you are not voter")
}
*/


/*
let myage = 18;
 
if(myage > 18)
    {
    document.write("you are voter");
}else if(myage == 18)
    {
        document.write("Age Is Equal To 18");
    }
else
{
    document.write(" you are not voter");
}
*/


//looping practice

//for loop

/*
for(let i=1; i<=100; i++){
    document.write("<br>"+i);
}

for(let i=1; i<=100; i++){
    document.write("prasis<br>");
}
*/

//while loop
/*
let i =0;
while(i<=100){
        document.write("<br>"+i);
        i++;
}
*/


/*
//do while loop
let a =0;
do{
    document.write(+a);
    a++
}while(a<=100);
*/


/*
//array
const days =['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

/*
days.forEach(function(abc){document.write(" "+abc)})
    days.shift();

    document.write("<br>");
    days.forEach(function(abc){document.write(" "+abc)})
*/

    /*
document.write(days[0]);
console.log(days);
*/

/*
days.forEach(function(abc){document.write(abc+" ")})
    days.unshift("prasis");

    document.write("<br>");
    days.forEach(function(abc){document.write(abc+" ")})
*/
 /*
days.forEach(function(abc){document.write(" "+abc)})
    days.pop();

    document.write("<br>");
    days.forEach(function(abc){document.write(" "+abc)})
*/

/*
    days.forEach(function(abc){document.write(" "+abc)})
    days.push("sunday");

    document.write("<br>");
    days.forEach(function(abc){document.write(" "+abc)})
*/


/*  
days.forEach(function(abc){document.write(" "+abc)})
    days.splice(1,1,"prasis");

    document.write("<br>");
    days.forEach(function(abc){document.write(" "+abc)})
    */


    //function 
    function printname(){
        document.getElementById('info').innerHTML = "prasis";
    }



    function calculate (){
        let principal = document.getElementById('p').value;
        let time = document.getElementById('t').value;
        let rate = document.getElementById('r').value;

        let si = principal * time * rate / 100;

        document.getElementById('info2').innerHTML = si;
    }


    let person = {
        fname: "prasis",
        lname: "dhakal",
        location: "chitwan",
        age: 18,
        fullname: function(){
          return this.fname+ " "+this.lname;
        }

    };
document.write(person.fullname());

/*
let a = Math.PI;
document.write(a);


let value = 2.6;
let b = Math.round(value);
document.write(b);



let c= Math.sqrt(25);
document.write(c);

*/

let x = Math.random()*6; 
document.write(x.toFixed(0));