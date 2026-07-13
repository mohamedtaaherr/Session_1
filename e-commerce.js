let customerName = prompt("Enter customer name:");
let productCategory = prompt("Enter product category:");
let productPrice = Number(prompt("Enter product price:"));
let quantity = Number(prompt("Enter quantity:"));
let couponCode = prompt("Enter coupon code:");
let paymentMethod = prompt("Enter payment method:");

let subtotal = productPrice * quantity;
let discount = 0;

if (productCategory.toLowerCase() === "electronics") {
    discount += subtotal * 0.10;
} else if (productCategory.toLowerCase() === "clothing") {
    discount += subtotal * 0.15;
} else if (productCategory.toLowerCase() === "food") {
    discount += subtotal * 0.05;
}

if (couponCode === "SAVE10") {
    discount += subtotal * 0.10;
}

let afterDiscount = subtotal - discount;

if (paymentMethod.toLowerCase() === "credit card") {
    discount += afterDiscount * 0.05;
}

let finalPrice = subtotal - discount;

let vat = finalPrice * 0.14;

let totalBill = finalPrice + vat;

console.log("----- Invoice -----");
console.log(`Customer Name: ${customerName}`);
console.log(`Product Category: ${productCategory}`);
console.log(`Product Price: $${productPrice}`);
console.log(`Quantity: ${quantity}`);
console.log(`Subtotal: $${subtotal}`);
console.log(`Discount: $${discount}`);
console.log(`VAT: $${vat}`);
console.log(`Payment Method: ${paymentMethod}`);
console.log(`Final Total: $${totalBill}`);
console.log("-------------------");