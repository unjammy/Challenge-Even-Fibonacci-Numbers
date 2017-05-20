/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs( maxFibValue ) {
  var sum = 0;
  // do your work here
  var fib = 0;
  function fibonacci( n ){
    if ( n < 2 ){
     return 1;
     } else {
      return fibonacci( n ) + fibonacci( n-1 );
     }
  }
  while( fibonacci(fib) < maxFibValue){

    if( fibonacci(fib) % 2 === 0 ){
      sum += fibonacci(fib);
    }
    fib++;
  }

  return sum;

}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;

  //define your base case, validate your input


  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};