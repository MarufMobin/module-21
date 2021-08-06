// const greetings = "Hellow How are you ?";

// function stringReverse( text ){

//     let reverse = '';

//     for( const letter of text ){

//         // console.log(letter)
//         reverse = letter + reverse ;
//     }
//     return reverse;
// }

// const result = stringReverse( greetings );

// console.log( result );



// String reverse 

// const greetings = "Hellow how are You ?";

// function stringReverse( text ){

//     let reverse = '';

//     for( const letter of text ){

//         reverse = letter + reverse;
//     }

//     return reverse;

// }


// const result = stringReverse( greetings );

// console.log(result);





// using a function to reverse a string of array

/* function stringReverse( text ){

    let reverse = '';

    for( const letter of text){

        reverse = letter + reverse;
    }

    return reverse;
}


const gloryWords = "Every thing Possible to try More and More Also one day you can sine";

const result = stringReverse( gloryWords );

console.log( result ); */




// Anoter try to Reverse the string 

function reverseString( text ){
    
    let reverse = '';

    for ( const letter of text ){

        reverse = letter + reverse;
    }
    return reverse;
}

const demo = "This is Demo Perposs Writing the text try to my function properly working or not";

const result = reverseString( demo );

console.log(result);