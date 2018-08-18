'use strict';

const basicResponses = {
  welcome: 'Willkommen bei den Stadtbüchern. Du kannst mich verschiedene Dinge über das ILC oder zu Städten fragen. Wie kann ich dir weiterhelfen?', 
  returning: 'Willkommen zurück. Wie kann ich dir heute helfen?',
  goodbye: ['Tschüss', 'Auf Wiedersehen', 'Bis bald!'],
  understanding: "Tut mir leid, dass habe ich wohl nicht verstanden.",
  friendly: ['Kein Problem', 'Jederzeit!', "Gerne doch", 'Ich freue mich, dass ich helfen konnte', 'Für dich doch immer', "Bitte sehr!"], 
  unfriendly: ['Aber, aber...', 'Ich bin zu schlau um darauf zu antworten.', 'Bleiben wir sachlich.', 'So spricht man aber nicht mit seinem Assistenten.'], 
};

const supportResponses = {
    allg: 'Du kannst mich nach Städten fragen und ich schaue nach, ob wir Informationen in der Datenbank haben. Außerdem kannst du mich danach Fragen worum es beim ILC geht und was Stadtbücher und Archive sind.',
    ilc: 'Der Index Librorum Civitatum ist ein Instrument der historischen Grundlagenforschung. Auf dem ILC kannst du auf den größten Index für deutschsprachige Stadtbücher zugreifen. Betreut wird das Projekt von der Universität Halle und dem CCeH.',
    stadtbuecher: 'Stadtbücher sind Kodizes, die seit dem dreizehnten Jahrhundert in städtischen Kanzleien zu Verwaltungszwecken geführt wurden. Stadtbücher ermöglichen einen der ergiebigsten Einblicke in das Leben mittelalterlicher und frühneuzeitlicher Städte. Die Überlieferung ist aber extrem breit gestreut und dadurch für die Forschung schwer zugänglich und schlecht zu überblicken. Der ILC soll dabei helfen einen Überblick zu erhalten.', 
    archive: 'Um die 500 Archive, Bibliotheken und andere Institutionen, die Stadtbücher verwahren beinhaltet die Datenbank des ILC-Projekts. Dabei reicht das Spektrum von kleinen ehrenamtlich betreuten Stadtarchiven bis zu Landes- und Staatsarchiven.',
}

module.exports = {basicResponses, supportResponses};