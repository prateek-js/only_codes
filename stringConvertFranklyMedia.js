var passCount = 1;
var timeToLoop = 0;
var main_str = "Heeeeellooo howwww areee yoouuu";

loopStr(main_str.split(' '));
function loopStr(str) {
  // console.log(str);
  var strArray = str;
  strCharCount = [];
  for(let j=0; j<strArray.length; j++) {
    var result = "";
    result = unique_str(strArray[j]);
    replaceString(strArray[j], result);
    strCharCount.push(result);
  }
  console.log(strCharCount);
  passCount++;
  if (timeToLoop > passCount) {
    loopStr(main_str.split(' '))
  }
  
}
function unique_str(str) {
 	let count = {};
  for (i in str) {
    count[str[i]] = 1;
  }
  for(let i=0; i < str.length; i++) {
   var char = str.charAt(i);
	  if(str.charAt(i) === str.charAt(i+1)) {
      count[char] += 1;
    }
	}
  var resultStr = replaceString(str,count);
  return resultStr;
}
 function replaceString(str, dataCount) {
  var tempStr = [];
   for (var key in dataCount) {
     if(dataCount[key] > 1 && dataCount[key] <= passCount+1 ) {
        tempStr.push(dataCount[key])
     }
     else {
       for (k=0; k < dataCount[key]; k++) {
          tempStr.push(key);
       }
     }

     if (timeToLoop < dataCount[key]) {
       timeToLoop = dataCount[key];
     }
   }
   return tempStr.join('');
 }
