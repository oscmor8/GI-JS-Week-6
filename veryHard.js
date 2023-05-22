// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you.
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
const coins = [1, 2, 5];
const amount = 11;
function coinChange(coins, amount) {
  coins.sort((a, b) => b - a); // sorts the array from greatest to least number of coins. We do this to reduce the total number of coins by starting with the largest
  // console.log(coins);
  let coinCount = 0;

  for (let i = 0; i < coins.length; i++) {
    const coin = coins[i]; // sets coin to have the ith value in the array. This helps with the current index of the coin
    // console.log(coin);

    if (coin <= amount) {
      // checks to see if the coin is less than or equal to the remaining amount
      const numCoins = Math.floor(amount / coin); //finds out the number of coins needed for the current index  divides the amount by the coin index
      // console.log(numCoins);
      amount -= numCoins * coin; // changes the remaining amount by subtracting the number of coins for each index
      coinCount += numCoins; // changes the final coin count
    }
  }
  if (amount === 0) {
    // consfition that says if the amount totals 0 meaning no coins are left we return the coin count if not we return -1
    return coinCount;
  } else {
    return -1;
  }
}

console.log(coinChange(coins, amount));
