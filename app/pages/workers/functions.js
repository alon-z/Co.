import React from 'react';

import names from './names.json';

export default addWorker = function () {
    var gerner = "male";

    var numOfNames = toString(Math.floor(names["first"][gender].length)).length * 10;
    var firstName = names["first"][gender][Math.round(Math.random()*numOfNames)];

    var numOfNames = toString(Math.floor(names["last"].length)).length * 10;
    var lastName = names["last"][gender][Math.round(Math.random()*numOfNames)];

     // Create a rundom name
}