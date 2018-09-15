const { data } = require('../data/database');
const { basicResponses } = require('../response/responses');

module.exports = {
    getComparedCity: function (mycity1, mycity2) {
        answer = "Der Vergleich hat folgendes ergeben. "
        for (var j = 0; j < data[0].cities.city.length; j++) {
            if (data[0].cities.city[j].name == mycity1) {
                answer += mycity1 + " besitzt in der Datenbank";
                if (data[0].cities.city[j].num_city_books === 0) {
                    answer += "keine Stadtbücher.\n";
                } else if (data[0].cities.city[j].num_city_books == 1) {
                    answer += " ein Stadtbuch.\n";
                } else {
                    answer += data[0].cities.city[j].num_city_books + " Stadtbücher.\n";
                }
            } else if (data[0].cities.city[j].name == mycity2) {
                answer += mycity2 + " besitzt in der Datenbank ";
                if (data[0].cities.city[j].num_city_books === 0) {
                    answer += "keine Stadtbücher.\n";
                } else if (data[0].cities.city[j].num_city_books == 1) {
                    answer += " ein Stadtbuch.\n";
                } else {
                    answer += data[0].cities.city[j].num_city_books + " Stadtbücher.\n";
                }
            }
        }
        return answer;
    }
};