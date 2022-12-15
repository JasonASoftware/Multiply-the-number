function multiply(number){
  //added a string constructor to create the exponent and use math.abs because if the value is a negative or a postitve it would return its value
  return number * 5 ** String(Math.abs(number)).length
}
