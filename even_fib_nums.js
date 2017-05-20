/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

function fibonacci( n ){

  if ( n < 2 ){
    return 1;
  } else {
    return fibonacci( n-1 ) + fibonacci( n-2 );
  }

}

function _sumFibs( maxFibValue ) {
  var sum = 0;
  // do your work here

  var counter = 0;
  var fib = 0;

  while( fibonacci(counter) =< maxFibValue ){

    fib = fibonacci(counter);

    if( fib % 2 === 0 ){
      sum += fib;
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