'use strict';

const {
    dialogflow,
    Suggestions
} = require('actions-on-google');

const app = dialogflow({ debug: true });

const {
    basicResponses,
    supportResponses,
} = require('./response/responses'); 

const {
    extendSupportMap,
    createCard
} = require('./extensions/cards');

const {dataHandler} = require('./extensions/dataHandler');

function getRandom(mySpeech) {
    var randomNumber = Math.floor((Math.random() * mySpeech.length) + 0);
    return mySpeech[randomNumber];
}

const welcome = (conv) => {
    conv.ask(basicResponses.welcome);
};

const City = (conv, params) => {
    conv.ask(dataHandler(params.geocity, "records"))
};

const CityC = (conv, params) => {
    conv.ask("Hier bitte! ", createCard(params.myCity, dataHandler(params.myCity, params.CityOption)))
};

const Support = (conv, params) => {
    if (params.ProjectInformation == "ILC") {
        conv.ask(supportResponses.ilc);
    } else if (params.ProjectInformation == "Stadtbücher") {
        conv.ask(supportResponses.stadtbuecher);
    } else if (params.ProjectInformation == "Archive") {
        conv.ask(supportResponses.archive);
    } else if (params.ProjectInformation == "Allgemein") {
        conv.ask(supportResponses.allg);
        conv.ask(new Suggestions('Was sind Archive?', 'Was sind Stadtbücher?', "Was ist das ILC?"));
    }
    conv.ask(extendSupportMap[params.ProjectInformation]);
};

const socialEvent = (conv, params) => {
    if (params.socialInteraction == "nice") {
        conv.ask(getRandom(basicResponses.friendly));
    } else if (params.socialInteraction == "bad") {
        conv.ask(getRandom(basicResponses.unfriendly));
    } else {
        conv.ask(basicResponses.understanding);
    }
}

const goodbye = (conv) => {
    conv.close(getRandom(basicResponses.goodbye), extendSupportMap.Ende);
}

app.intent('Welcome', welcome);
app.intent('City', City);
app.intent('CityC', CityC);
app.intent('Support', Support);
app.intent('socialEvent', socialEvent);
app.intent('goodbye', goodbye);

module.exports = app;