import React from 'react';
import getRandomInt from '../../global/functions.js';

import names from './names.json';
//import skills from './../../global/skills.json';

// Reqa: A worker, a callBack function
export var removeWorker = function (worker, callBack) {
    var workers = [];
    storage.load({
            key: 'Workers',
            autoSync: false,
            syncInBackground: false
        }).then(ret => {
            workers = ret.workers;
        }).catch(err => {
            console.error(err.message);
        })
    console.log("!!!!!!!!!!!!!!!!!!1" + workers)
    workers.splice(worker.id,1);
    storage.save({
      key: 'Workers',
      rawData: { 
          workers: workers
      },
      expires: null
    });

    callBack();
}

var AddWorker = function () {

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