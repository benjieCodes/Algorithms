console.log('hello world');

// Answer to Question one:
/*- Steps to find the answer
1. Create a function = getMaxProfit()
2. Create an array in the function for the stocks = stockPricesYesterday = []
*Added step* 2.1 - Create a loop that will find the highest and lowest minutes in array
*Added step* 2.2 - Find the earliest time and latest time using Math.min and Math.max
3. Find the earliest/latest value of the stocks
4. Subtract those values together (highest - lowest) to find potential profit
*Added step* 4.1 - Find the max profit by finding the max of the potential profit using Math.max
5. Return that answer to the function
*/
var stockPricesYesterday = [12, 14, 5, 2, 4, 6, 73, 2];
// // Step 1 and 2
  var maxProfit = 0;
function getMaxProfit (stockPricesYesterday) {
// Step 2.1
  for (var earlierMinute = 0; earlierMinute < stockPricesYesterday.length; earlierMinute++ ) {
    for (var laterMinute = 0; laterMinute < stockPricesYesterday.length; laterMinute++) {
      // Step 2.2
      var earlier = Math.min(earlierMinute, laterMinute);
      var later = Math.max(earlierMinute, laterMinute);
      // Step 3
      var earliestValue = stockPricesYesterday[earlier];
      var latestValue = stockPricesYesterday[later];

      // Step 4
      var potentialProfit = latestValue - earliestValue;

      // Step 4.1
      maxProfit = Math.max(potentialProfit, maxProfit);
    }
  }
  // Step 5
  return 'Your max profit will be $' + maxProfit + '!'

}

// Better solution for Q1
function findMaxProfit(stockPricesYesterday) {
  // error handling if less than 2 values
  if (stockPricesYesterday.length < 2) {
    alert('Sorry, you need to input at least 2 values.');
  }

  // "greedy algorithm" to get first price and first possible profit
  var minPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  // loop starts at index 1 to avoid error of not having
  // the possibilty for a negative profit as an answer
  for (var i = 1; i < stockPricesYesterday.length; i++) {
    var currentPrice = stockPricesYesterday[i];

    // create a var to find profit by subtracting minPrice with currentPrice
    var potentialProfit = currentPrice - minPrice;

    // continually update the profit until it becomes maxProfit
    var maxProfit = Math.max(maxProfit, potentialProfit);

    // continually update the price until it becomes minPrice
    var minPrice = Math.min(currentPrice, minPrice);
  }
  return 'According to these stocks, your maximum profit will be $' + maxProfit + '.';
}
