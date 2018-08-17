'use strict';

const {
    BasicCard,
    Button,
} = require('actions-on-google');

const {imageDatabbase} = require('../response/imageDatabase');

const extendSupportMap = {
    'ILC': new BasicCard({
        image: {
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ 
            title: 'Erfahre mehr über das Projekt',
            url: 'https://www.stadtbuecher.de/de/about/',
        }),
        display: 'WHITE',
    }),
    'Stadtbücher': new BasicCard({
        image: { 
            url: imageDatabbase.stadtbuch,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({
            title: 'Erfahre mehr über Stadtbücher',
            url: 'https://www.stadtbuecher.de/de/staedte/',
        }),
        display: 'WHITE',
    }),
    'Archive': new BasicCard({
        image: { 
            url: imageDatabbase.archiv,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ 
            title: 'Erfahre mehr über Archive',
            url: 'https://www.stadtbuecher.de/de/archive/',
        }),
        display: 'WHITE',
    }),
    'Allgemein': new BasicCard({
        image: {
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({
            title: 'Erfahre mehr über das Projekt',
            url: 'https://www.stadtbuecher.de/de/about/',
        }),
        display: 'WHITE',
    }),
    'Ende': new BasicCard({
        image: {
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({
            title: 'Besuch uns doch mal.',
            url: 'https://www.stadtbuecher.de/',
        }),
        display: 'WHITE',
    }),
};

module.exports = { extendSupportMap, 
    /**
     * Creates a BasicCard object 
     * 
     * @param {string} city Name of the City
     * @param {string} link Link to the city on the project website
     * @returns {object}
     */
    createCard: function (city,link){
    return new BasicCard({
        image: {
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({
            title: 'Hier die Seite von '+city,
            url: link,
        }),
        display: 'WHITE',
    })
} };