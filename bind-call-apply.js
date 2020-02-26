// Try edit message
const data = {
  message: 'Hello world',
}

$('#msg').html(data.message)

let name = {
fname: 'Prateek',
lname: 'Desai'
}

let printname = function(hometown, state, country) {
console.log(this.fname + " " + this.lname + " " + hometown + " " + state + " " + country );
}

let p2 = printname.bind(name, "kanpur", "UP")
p2("india");

let p3 = printname.call(name, "lucknow" , "up1", "USA")

let p4 = printname.apply(name, ["mumbai1", "maharshtra", "india"]);

Function.prototype.myBind = function(...args) {
  let obj = this,
  params = args.slice(1);
 return function(...args2) {
   obj.apply(args[0], [...params, ...args2]);
 }
}

Function.prototype.myCall = function(...args) {
  let obj = this,
  params = args.slice(1);
  console.log(args);
 return function(...args2) {
   obj.apply(args[0], [...params, ...args2]);
 }
}

let p5 = printname.myBind(name, "Dehradun", "Uttarakhan", "india");
p5()
