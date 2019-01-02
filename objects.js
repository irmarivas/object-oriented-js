"use strict";
// 3 ways to make an object in javascript//

// console.log (groceries);
// 1. object literal
{
    // empty object literal
}

const groceries = {
    produce: ['banana', 'oranges', 'broccolli', 'apples', 'onions'],
    dairy: ['milk', 'icecream', 'cheese', 'yoghurt'],
    protein: ['beef', 'chicken', 'fish', 'ground turkey', 'ham', 'sausage']

   // list: ['banana', 'shampoo', 'bandaids', 'beef', 'milk', 'oatmeal', 'staples', 'icecream', 'eggs', 'toothpaste', 'pads']
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

// console.log(park.name);
// console.log(school.name);
// console.log(makeup.name);
// console.log( makeup.beautify() );
// access every array item individually and log the individual list items to the console
//console.log(groceries.list[0]);
// console.log(groceries.list[1]);
// console.log(groceries.list[2]);
// console.log(groceries.list[3]);
// console.log(groceries.list[4]);

const refrigerator = {
    freezer: [],
    crisper: [],
    meat_drawer: [],
    dairy_drawer: [],
    milk_rack: [],
    condiments_rack:[]
};

//map the groceries to the refrigerator object

function putAwayGroceries(groceries, target_refrigerator) {
    //iterate through sll the categories in the groceries object 
        //get the keys in the object 
    const keys = Object.keys(groceries);
    // console.log (keys.length);

    const produce = groceries.produce;
    //if the category is produce put the produce in the crisper
    for(let produce_iterator = 0; produce_iterator < produce.length; produce_iterator++) {
        console.log(produce[produce_iterator]);
    
    }
    const dairy = groceries.dairy;
    //if the category is dairy,
    for (let dairy_iterator = 0; dairy_iterator < dairy.length; dairy_iterator++) {
        console.log( dairy[dairy_iterator] );
        
    } 
        //if the dairy product belongs in the freezer put it in the freezer
        //if the dairy belongs in the milk rack put it in the milk rack
        //if the dairy product belongs in the dairy drawer put it in the dairy drawer
        //if the dairy product is a condiment, place it in condiments rack
    const protein = groceries.protein;
    //if the category is protein
    for (let protein_iterator = 0; protein_iterator < protein.length; protein_iterator++) {
        console.log ( protein[protein_iterator] );
        
    }

        //if the protein product belongs in the freezer put it in freezer
        //if protein product belongs in the meat drawer put it in the meat drawer
}

putAwayGroceries(groceries, refrigerator);
