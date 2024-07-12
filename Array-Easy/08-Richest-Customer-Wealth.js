// https://leetcode.com/problems/richest-customer-wealth/description/

var maximumWealth = function (accounts) {
  //   let max = 0;
  //   const arr = [];
  //   for (let i = 0; i < accounts.length; i++) {
  //     arr.push(accounts[i].reduce((a, b) => a + b, 0));
  //   }
  //   return Math.max(...arr);

  //   (2)
  let rich = 0;
  accounts.forEach((customer) => {
    let money = 0;
    customer.forEach((banks) => {
      money += banks;
    });
    if (money > rich) {
      rich = money;
    }
  });
  return rich;
};

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); //6
console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); //10
