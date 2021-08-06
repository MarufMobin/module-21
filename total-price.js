const produts = [

    { name: "Laptop core i5", price: 1000, quantity: 1},
    { name: "Shirt", price: 500, quantity: 3},
    { name: "Phone", price: 2000, quantity: 1},
    { name: "Watch", price: 50, quantity: 3},
    { name: "Books", price: 60, quantity: 6},
    { name: "Showes", price: 80, quantity: 3}

];

let totalBill = 0;

for( const product of produts){

    productBill = product.price * product.quantity;

    totalBill = totalBill + productBill;
}

console.log( totalBill );



// Using function for cart items

const cart = [

    { name: "Laptop core i5", price: 1000, quantity: 1},
    { name: "Shirt", price: 500, quantity: 3},
    { name: "Phone", price: 2000, quantity: 1},
    { name: "Watch", price: 50, quantity: 3},
    { name: "Books", price: 60, quantity: 6},
    { name: "Showes", price: 80, quantity: 3}

];

function cartTotalBills( cart ){

    let totalBill = 0;

    for( const cartProduct of cart ){

        let productTotalBills = cartProduct.price * cartProduct.quantity;

        totalBill = totalBill + productTotalBills;
    }

    return totalBill;
}

const result = cartTotalBills( cart );

console.log(result, "Your Total Bill Here");

