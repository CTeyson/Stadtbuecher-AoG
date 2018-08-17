'use strict';

const functions = require('firebase-functions');
const app = require('./app');

module.exports.ssmlExampleAction = functions.https.onRequest(app);