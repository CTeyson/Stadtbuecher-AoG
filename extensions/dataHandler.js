const { data } = require('../data/database');
const { basicResponses } = require('../response/responses');

const SEARCH_RECORDS = "records";
const SEARCH_HISTORY = "Geschichte";
const SEARCH_MORE = "Mehr";
const SEARCH_LITERATUR = "Literatur";
const SEARCH_STADTBUCH = "Stadtbücher";
const SEARCH_ARCHIVE = "Archive";

module.exports = {
    /**
     * Search through the database
     * 
     * @param {string} searchIntent Name of the city 
     * @param {string} searchType What Information the user requested
     * @returns {string}
     */
    dataHandler: function (searchIntent, searchType) {
        var answer;

        for (var j = 0; j < data[0].cities.city.length; j++) {
            var mem = data[0].cities.city[j];
            if (mem.name == searchIntent) {
                if (searchType == SEARCH_RECORDS) {
                    answer = mem.name;
                    if (mem.num_city_books === 0) {
                        answer += " besitzt in der Datenbank keine Stadtbücher.\n";
                    } else if (mem.num_city_books == 1) {
                        answer += " besitzt in der Datenbank ein Stadtbuch.\n";
                    } else {
                        answer += " besitzt in der Datenbank " + mem.num_city_books + " Stadtbücher.\n";
                    }
                    answer += " Wie kann ich dir jetzt weiterhelfen? Brauchst du den Link zur Stadt oder Infos über die Geschichte.";
                    return answer;
                } else if (searchType == SEARCH_HISTORY) {
                    answer = "<speak>Okay hier ist die Geschichte von " + mem.name + ":\n <break time='300ms'/>" + mem.history+"</speak>";
                    return answer;
                } else if (searchType == SEARCH_MORE) {
                    answer = mem.link;
                    return answer;
                } else if (searchType == SEARCH_LITERATUR) {
                    answer = mem.literature.item[0];
                    return answer;
                } else if (searchType == SEARCH_STADTBUCH) {
                    var len1 = mem.city_books.city_book_series.length;
                    if (len1 > 3 && len1 != 0) {
                        answer = '<speak><p><s>Hier sind Auszüge der Stadtbücher von ' + mem.name + ':<break time="300ms"/></s></p>';
                        len1 = 3;
                        for (k = 0; k < len1; k++) {
                            answer += "<p><s>"+mem.city_books.city_book_series[k].description + '<break time="300ms"/>\n\n</s></p>';
                        }
                        answer += '</speak>';
                    } else if (len1 == 0) {
                        answer = mem.name + " hat keine Stadtbücher.";
                    }
                    return answer;
                } else if (searchType == SEARCH_ARCHIVE) {
                    answer = "Folgende Archive sind hinterlegt: \n" + mem.archive.name;
                    return answer;
                } else {
                    return basicResponses.understanding;
                }
            } else {
                answer = "Ich konnte " + searchIntent + " in der Datenbank leider nicht finden.";
            }
        }
        return answer;
    }
};