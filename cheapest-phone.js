const phones = [

    {
        name : "Samsung S+", price : 45000, camera: 32, stroge: 64
    },
    {
        name : "shawmi 32", price : 15000, camera: 32, stroge: 64
    },
    {
        name : "Oppo", price : 21000, camera: 32, stroge: 64
    },
    {
        name : "Real note+", price : 25000, camera: 32, stroge: 64
    },
    {
        name : "Nokia", price : 20000, camera: 32, stroge: 64
    },
    {
        name : "Walton i3", price : 9000, camera: 32, stroge: 64
    },
    {
        name : "Nokia 1200", price : 1000, camera: 2, stroge: 512
    },


]

function checkCheapestPrice( phones ){

    let cheapest = phones[0];

    for( const phone of phones){

        if( phone.price < cheapest.price ){

            cheapest = phone;
        }
    }

    return cheapest;
}

const result = checkCheapestPrice( phones );

console.log( result );


/* let cheapest = phones[0];

for( const phone of phones ){

    if( phone.price < cheapest.price ){
        
        cheapest = phone;
    }
}

console.log( cheapest ); */


// let cheapest = phones[0];

// for( const phone of phones){

//     if( phone.price < cheapest.price ){

//         cheapest = phone;
//     }

// }

// console.log( cheapest );

/* let cheapest = phones[0];

for( const phone of phones){

    if( phone.price < cheapest.price ){

        cheapest = phone;
    }
}

console.log( cheapest ); */

// let cheapest = phones[0];

// for( const phone of phones){

//     if( phone.price < cheapest.price ){
//         cheapest = phone;
//     }
// }
// console.log(cheapest)
