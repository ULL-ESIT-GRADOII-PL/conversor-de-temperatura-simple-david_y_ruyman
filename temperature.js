"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^([-+]?\d+(?:\.\d*)?)\s*(?:e([-+]?\d+))?\s*(f$|fa$|fah$|fahrenheit$|c$|cel$|celsius$)/i;
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var exp = m[2];
    var type = m[3].charAt(0);
    num = parseFloat(num);
    
    // Calculamos exponente si lo hay
    if (exp) {
      exp = parseInt(exp);
      num = num * Math.pow(10, exp);
    }
    
    // Convertimos
    if (type == 'c' || type == 'C') {
        result = (num * 9/5)+32;
        result = result.toFixed(1)+" Fahrenheit"
    } else {
      result = (num - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    alert(result);
  } else {
    alert("ERROR! Try something like '-4.2C or 42e-1 C' instead");
  }
}
