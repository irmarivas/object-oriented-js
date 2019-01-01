"use strict";
// 3 ways to make an object in javascript//

// console.log (groceries);
// 1. object literal
{
    // empty object literal
}

const groceries = {
    name:`REfrigerator`,
    list: ['banana', 'shampoo', 'bandaids', 'beef', 'milk']
};

const table = {
    name:"ikea"
};

const makeup = {
    name:"mac",
    beautify : function() {
        console.log("you are pretty");
    }
};

const school = {
    name:"Ivanhoe"  
};

const house = {
    name:"Condo"
};

const park = {
    name:"Griffith Park"
};

console.log(park.name);
console.log(school.name);
console.log(makeup.name);
console.log( makeup.beautify() );
console.log(groceries.name);
console.log(groceries.list);

// access every array item individually and log the individual list items to the console