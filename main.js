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
let stockPricesYesterday = [12,14,5,2,4,6,73,2];
// Step 1 and 2

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
      var potentialProfit = earliestValue - latestValue;

      // Step 4.1
      var maxProfit = Math.max(potentialProfit, maxProfit);
    }
  }
  // Step 5
  return maxProfit;
  console.log(maxProfit);
}
