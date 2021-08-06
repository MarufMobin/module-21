/* const names = ['Maruf', 'Mobin', 'Hassan', 'Kayum', 'shuieb', 'Meer', 'Rocky','Mukit','Hassan', 'Firoj', 'Rocky','Meer','Hassan','Mukit','Mobin','Maruf','Shuieb','Firoj','Rocky'];

function findDublicateNames( names ){

    let unique = [];

    for( let i = 0; i < names.length; i++){

        let elements = names[i];

        if( unique.indexOf(elements) == -1 ){

            unique.push(elements);
        }
    }
    return unique;
}


const result = findDublicateNames( names );

console.log( result ); */

// One More time find a uniqe data in array

/* const names = ['Maruf', 'Mobin', 'Hassan', 'Kayum', 'shuieb', 'Meer', 'Rocky','Mukit','Hassan', 'Firoj', 'Rocky','Meer','Hassan','Mukit','Mobin','Maruf','Shuieb','Firoj','Rocky','Hamid','Ruku'];

function findUnicqDataArray( names ){

    let unicq = [];

    for( let i = 0; i < names.length; i++ ){

        let elements = names[i];
        if( unicq.indexOf(elements) == -1 ){
            unicq.push(elements);
        }
    }
    
    return unicq;
}

const givenArrayData = findUnicqDataArray( names );

console.log( givenArrayData ); */



// find out a unicq Names of A particular array

/* const names = ['Maruf', 'Mobin', 'Hassan', 'Kayum', 'shuieb', 'Meer', 'Rocky','Mukit','Hassan', 'Firoj', 'Rocky','Meer','Hassan','Mukit','Mobin','Maruf','Shuieb','Firoj','Rocky','Hamid','Ruku','sabbir', 'sakib','showmow'];

function findOutNameInArray( names ){

    let unicq = [];

    for( const elements of names ){                                             
        if( unicq.indexOf(elements) == -1 ){
            unicq.push( elements );
        }
    }
    return unicq;
}


const result = findOutNameInArray(names);

console.log(result); */




// using Function to define Array with using for Of loop



/* const names = ['Maruf', 'Mobin', 'Hassan', 'Kayum', 'shuieb', 'Meer', 'Rocky','Mukit','Hassan', 'Firoj', 'Rocky','Meer','Hassan','Mukit','Mobin','Maruf','Shuieb','Firoj','Rocky','Hamid','Ruku','sabbir', 'sakib','showmow','Biki'];


function findDublicateValues( names ){

    let uniqe = [];

    for ( const element of names ){

        if( uniqe.indexOf( element ) == -1 ){

            uniqe.push( element );
        }
    }  

    return uniqe;
}



const result = findDublicateValues( names );

console.log(result); */