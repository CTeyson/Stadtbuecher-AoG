const { data } = require('../data/database');
const { basicResponses } = require('../response/responses');

module.exports = {
getDailyCity: function(){
    var today =  new Date();
    var requestedInfo = (today.getDate()-1 < data[0].cities.city.length) ? today.getDate()-1 : 0;

    answer = "Die Stadt des Tages ist ";
    answer +=data[0].cities.city[requestedInfo].name; 
    answer += " und besitzt in der Datenbank "
    if (data[0].cities.city[requestedInfo].num_city_books === 0) {
        answer += "keine Stadtbücher.\n";
    } else if (data[0].cities.city[requestedInfo].num_city_books == 1) {
        answer += " ein Stadtbuch.\n";
    } else {
        answer +=  mem.num_city_books + " Stadtbücher.\n";
    }
    return answer; 
}
};