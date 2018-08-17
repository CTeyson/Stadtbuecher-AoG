'use strict';

const {
    BasicCard,
    Button,
} = require('actions-on-google');

const {imageDatabbase} = require('../response/imageDatabase');

const extendSupportMap = {
    'ILC': new BasicCard({
        image: { // Mostly, you can provide just the raw API objects
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ // Wrapper for complex sub Objects
            title: 'Erfahre mehr über das Projekt',
            url: 'https://www.stadtbuecher.de/de/about/',
        }),
        display: 'WHITE',
    }),
    'Stadtbücher': new BasicCard({
        image: { // Mostly, you can provide just the raw API objects
            url: imageDatabbase.stadtbuch,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ // Wrapper for complex sub Objects
            title: 'Erfahre mehr über Stadtbücher',
            url: 'https://www.stadtbuecher.de/de/staedte/',
        }),
        display: 'WHITE',
    }),
    'Archive': new BasicCard({
        image: { // Mostly, you can provide just the raw API objects
            url: imageDatabbase.archiv,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ // Wrapper for complex sub Objects
            title: 'Erfahre mehr über Archive',
            url: 'https://www.stadtbuecher.de/de/archive/',
        }),
        display: 'WHITE',
    }),
    'Allgemein': new BasicCard({
        image: { // Mostly, you can provide just the raw API objects
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ // Wrapper for complex sub Objects
            title: 'Erfahre mehr über das Projekt',
            url: 'https://www.stadtbuecher.de/de/about/',
        }),
        display: 'WHITE',
    }),
    'Ende': new BasicCard({
        image: { // Mostly, you can provide just the raw API objects
            url: imageDatabbase.default,
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ // Wrapper for complex sub Objects
            title: 'Besuch uns doch mal.',
            url: 'https://www.stadtbuecher.de/',
        }),
        display: 'WHITE',
    }),
};

module.exports = { extendSupportMap, createCard: function (city,link){
    return new BasicCard({
        image: { // Mostly, you can provide just the raw API objects
            url: 'https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/23331040_247860109077843_3960963222186317817_o.jpg?_nc_cat=0&oh=a8b42e30f54f472bece1dc9fbecee88f&oe=5BCC4DEE',
            accessibilityText: 'ILC Logo',
        },
        buttons: new Button({ // Wrapper for complex sub Objects
            title: 'Hier die Seite von '+city,
            url: link,
        }),
        display: 'WHITE',
    })
} };