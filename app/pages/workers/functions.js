import React from 'react';
import getRandomInt from '../../global/functions.js';

import names from './names.json';
import skills from './../../global/skills.json';

export default addWorker = function () {

    // Selecting random name

    var gerner = "male";
    var firstName = names["first"][gender][getRandomInt(0,names["first"][gender].length)];
    var lastName = names["last"][gender][getRandomInt(0,names["last"].length)];

    // Selecting skills
    var initSkills = 2; //number of skills to select at first init
    var chosen = [];
    var skills = [];
    for (var index = 0; index < initSkills; index++) {
        var rnd = getRandomInt(0,initSkills);
        while (chosen[rnd]  != undefined) {
             rnd = getRandomInt(0,initSkills);
        }
        chosen[rnd] = 'c';
        skills[index] = {
            "name": skills[rnd]["name"],
            "rank": getRandomInt(skills[rnd]["startingPointsMin"],skills[rnd]["startingPointsMax"])
        };
    }
}