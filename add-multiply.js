let tableQuentity = 1;
let bedQuentity = 4;
let chairQuentity = 1;

function woodCalculator( tableQuentity, bedQuentity, chairQuentity ){

    const tableWood = 5;
    const chairWood = 3;
    const bedWood   = 10;

    const totalTableWood = tableWood * tableQuentity;
    const totalChairWood = chairWood * chairQuentity;
    const totalbedWood   = bedWood * bedQuentity;

    const totalWood = totalTableWood + totalbedWood + totalChairWood;

    return totalWood;
}

const totalWood = woodCalculator(  tableQuentity, bedQuentity, chairQuentity );

console.log( totalWood );