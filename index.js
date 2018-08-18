'use strict';

const functions = require('firebase-functions');
const app = require('./core/app');

module.exports.stadtbuecher = functions.https.onRequest(app);