function divisibleByFifty( number ){

    let defaltValue = 1;

    for( let i = 1; i <= number; i++ ){

        if( i % 3 == 0 && i % 5 == 0){
            console.log("Fizz Buzz")
        }else if( i % 3 == 0){
            console.log( 'Fizz' );
        }else if( i % 5 == 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }

    }
    return number;

}

const givenNumber = 60;

const result = divisibleByFifty(givenNumber);