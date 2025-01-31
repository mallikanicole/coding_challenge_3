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
//Task 3: Employee Performance Tracking Scenario
let employee= {
    name:"Lilac Silver",
    role:"Sales",
    performanceScore:57,
    isActive:true
}//declare employee
console.log("Employee:",employee);
employee.performanceScore=97;//updating score
console.log("Update 1 Employee:",employee);
employee.promotionEligible=true;
if (employee.performanceScore>80) {
    console.log("Promotion Eligible=True")
    
} else {
    console.log("Promotion Eligible=False")
};//adding promotion eligibility
console.log("Update 2 Employee:",employee)
//Task 4:Customer Feedback Records Scenario
let feedback=[
    {customerName:"Nancy Drew",feedbackText:"Wonderful product.",rating:9},
    {customerName:"Bess Marvin",feedbackText:"Will purchase again.",rating:8},
    {customerName:"George Fayne",feedbackText:"Hard to use.",rating:4}
];//creating feedback list
console.log("Feedback:",feedback)
feedback.push({customerName:"Ned Nickerson",feedbackText:"Broke easily",rating:2});//adding new customer feedback
console.log("Updated Feedback:",feedback)
//Task 5:Inventory Management System Scenario
let Inventory={itemName:"Tennis Bracelet",stockCount:233,price:100}
console.log("Inventory:",Inventory)
const stockCount=233
const price=100
const calculateTotalValue=(stockCount*price);//calculate total value of inventory
console.log("Total Value:",calculateTotalValue)





