///Task 1: Product Price Management
let Prices=[24,76,33,68,32];//setting prices
console.log("Prices:",Prices)
Prices.push(81);//adding new price
console.log("With Added Price:",Prices)
let removedItem=Prices.shift();//removing first price
console.log("Removed Price:",removedItem);
console.log("Updated Prices:",Prices)
//Task 2: Modifying Customer Orders
let Orders=[101,102,103,104,105];
console.log("Orders:",Orders)
Orders[2]=103+5;//adding 5 to order 3
console.log("Orders Updated:",Orders)
let totalOrders=Orders.reduce((sum,amount)=>sum+amount,0);//sum of orders
console.log("Total Orders:",totalOrders)



