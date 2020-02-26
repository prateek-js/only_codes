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

// let p2 = printname.bind(name, "kanpur", "UP")
// p2("india");

// let p3 = printname.call(name, "lucknow" , "up1", "USA")

// let p4 = printname.apply(name, ["mumbai1", "maharshtra", "india"]);

Function.prototype.myBind = function(...args) {
  let obj = this,
  params = args.slice(1);
 return function(...args2) {
   obj.apply(args[0], [...params, ...args2]);
 }
}

Function.prototype.myCall = function(...args) {
  let obj = args[0],
  result = null,
  args2 = [];
  obj[0] = this;
  console.log(obj);
  for (let i = 1, len = args.length; i < len; i++) {
      args2.push("args[" + i + "]");
   }
  result = eval("obj[0](" + args2 + ")");
  return result;
}

Function.prototype.myCall = function(...args) {
  let obj = args[0],
  result = null,
  args2 = [];
  obj[0] = this;
  for (let i = 1, len = args.length; i < len; i++) {
      args2.push("args[" + i + "]");
   }
  result = eval("obj[0](" + args2 + ")");
  return result;
}

Function.prototype.myApply = function(...args) {
  let obj = args[0],
  result = null,
  args2 = [];
  obj[0] = this;
  for (let i = 0, len = args.length; i <= len; i++) {
      args2.push("args[1][" +i+ "]");
   }
  result = eval("obj[0](" + args2 + ")");
  return result;
}




//let p5 = printname.myBind(name, "Dehradun", "Uttarakhan", "india");
// p5()

let p6 = printname.myCall(name, "Dehradun", "Uttarakhan", "india");
let p7 = printname.myApply(name, ["Dehradun", "Uttarakhan", "india"]);
