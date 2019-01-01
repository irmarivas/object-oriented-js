"use strict";
// 3 ways to make an object in javascript//
var groceries;
var list;
var table;
var house;
var makeup;
var school;
var park;

// console.log (groceries);
// 1. object literal
{
    // empty object literal
}

groceries = {
    name:`REfrigerator`,
    list: []
};

table = {
    name:"ikea"
};

makeup = {
    name:"mac",
    beautify : function() {
        console.log("you are pretty");
    }
};

school = {
    name:"Ivanhoe"  
};

house = {
    name:"Condo"
};

park = {
    name:"Griffith Park"
};

console.log(park.name);
console.log(school.name);
console.log(makeup.name);
console.log( makeup.beautify() );
console.log(groceries.name);
console.log(groceries.list);

