'use strict';

const {
    dialogflow,
    Suggestions
} = require('actions-on-google');

const app = dialogflow({ debug: true });

const {
    basicResponses,
    supportResponses,
} = require('../response/responses'); 

const {
    extendSupportMap,
    createCard
} = require('../extensions/cards');

const {getDailyCity} = require('../extensions/dailyCity');
const {getCityList} = require('../extensions/cityList'); 
const {getComparedCity} = require('../extensions/compareCity');

const {dataHandler} = require('../extensions/dataHandler');

/**
 * Picks a random entry out of an array
 * 
 * @param {array} mySpeech Array of statements
 * @returns {string}
 */
function getRandom(mySpeech) {
    var randomNumber = Math.floor((Math.random() * mySpeech.length) + 0);
    return mySpeech[randomNumber];
}

/**
 * Welcomes the user to the action
 */
const welcome = (conv) => {
    if (conv.user.last.seen) {
        conv.ask(basicResponses.returning);
      } else{
        conv.ask(basicResponses.welcome);
      }
};

/**
 * Asks the user about the city he wants to hear information about
 * 
 * @param {string} geocity Name of a city 
 */
const City = (conv, params) => {
    conv.ask(dataHandler(params.geocity, "records"))
    conv.ask(new Suggestions('Geschichte','Link','Archive','Stadtbücher', 'Literatur'));
};

/**
 * Asks the user, if he wants to hear more information about the previous asked city
 * 
 * @param {string} myCity Name of a city 
 * @param {string} CityOption Type of requested information 
 */
const CityC = (conv, params) => {
    if(params.CityOption=="Mehr"){
        conv.ask("Hier bitte! ", createCard(params.myCity, dataHandler(params.myCity, params.CityOption)))
    }else if(params.CityOption){
        conv.ask(dataHandler(params.myCity, params.CityOption));
    }else{
        conv.ask("Error Handling: "+params.CityOption);
    }
};

/**
 * Helps the user to get to know the action and more about the project
 * 
 * @param {string} supportResponses Type of requested information  
 */
const Support = (conv, params) => {
    if (params.ProjectInformation == "ILC") {
        conv.ask(supportResponses.ilc);
        conv.ask(new Suggestions('Was sind Archive?', 'Was sind Stadtbücher?'));
    } else if (params.ProjectInformation == "Stadtbücher") {
        conv.ask(supportResponses.stadtbuecher);
        conv.ask(new Suggestions('Was sind Archive?', "Was ist das ILC?"));
    } else if (params.ProjectInformation == "Archive") {
        conv.ask(supportResponses.archive);
        conv.ask(new Suggestions('Was sind Stadtbücher?', "Was ist das ILC?"));
    } else if (params.ProjectInformation == "Allgemein") {
        conv.ask(supportResponses.allg);
        conv.ask(new Suggestions('Was sind Archive?', 'Was sind Stadtbücher?', 'Was ist das ILC?'));
    } else if(params.ProjectInformation == "Assistent") {
        conv.ask(supportResponses.assistent); 
    }
    conv.ask(extendSupportMap[params.ProjectInformation]);
};

/**
 * Triggered when the user is interacting on a small talk level
 * 
 * @param {string} socialInteraction Message from user valued to nice or bad 
 */
const socialEvent = (conv, params) => {
    if (params.socialInteraction == "nice") {
        conv.ask(getRandom(basicResponses.friendly));
    } else if (params.socialInteraction == "bad") {
        conv.ask(getRandom(basicResponses.unfriendly));
    }else if(params.socialInteraction == "condition"){
        conv.ask(basicResponses.condition);
    }else {
        conv.ask(basicResponses.understanding);
    }
}

/**
 * Presents the city of the day
 */
const DailyCity = (conv) => {
    conv.ask(getDailyCity()); 
}

/**
 * Overview of the different cities, sorted by alphabet
 * 
 * @param {string} Letters Letter who defines search
 */
const CityList = (conv, param) => {
    conv.ask(getCityList(param.Letters)); 
}

/**
 * Compares City1 with City2 based on the amount of citybooks
 * 
 * @param {string} city1 First City 
 * @param {string} city2 Second City 
 */
const CompareCity = (conv, param) => {
    //conv.ask(param.geoCity+":"+param.geoCity2);
    conv.ask(getComparedCity(param.geoCity, param.geoCity2));
}

/**
 * Saying goodbye to the user, when leaving the action
 */
const goodbye = (conv) => {
    conv.close(getRandom(basicResponses.goodbye), extendSupportMap.Ende);
}

app.intent('Welcome', welcome);
app.intent('City', City);
app.intent('CityC', CityC);
app.intent('DailyCity', DailyCity);
app.intent('CityList', CityList);
app.intent('CompareCity', CompareCity);
app.intent('Support', Support);
app.intent('socialEvent', socialEvent);
app.intent('goodbye', goodbye);

module.exports = app;