function MissingDigit(str) { 
  let arr = str.split('=');
  let evalResult, complete;

  // find if there is X in str 
  if(arr[0].includes('x')) {
    evalStr = arr[0];
    complete = arr[1];
  } else {
    evalStr = arr[1];
    complete = arr[0]
  }
  let x = evalStr.indexOf('x');
  let expr1 = evalStr.slice(0,x);
  let expr2 = evalStr.slice(x+1, evalStr.length);

  console.log(expr1+ " " +expr2);

  for (let i=0; i<10; i++) {
    let replacedX = expr1 + i + expr2;
    if(eval(replacedX) === eval(complete)) {
      return i;
    }
  }
  // code goes here  
  // return str; 

}


MissingDigit("4 - 2 = x");

MissingDigit("1x0 * 12 = 1200");
