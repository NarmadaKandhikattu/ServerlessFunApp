var fs = require("fs");
var orders = fs.readFileSync("order.json");
var jsonContent = JSON.parse(orders);
console.log("Order Id :", jsonContent.orderId);
console.log("orderStatus:", jsonContent.orderStatus);
 