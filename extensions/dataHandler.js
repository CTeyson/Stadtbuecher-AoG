const {data} = require('../data/database'); 

module.exports = {
    dataHandler: function (searchIntent, searchType) {
        var len1 = data.length;
        var answer;

        for (var j = 0; j < data[0].cities.city.length; j++) {
            var mem = data[0].cities.city[j];
            if (mem.name == searchIntent) {
                answer = mem.name;
                if (searchType == "records") {
                    if (mem.num_city_books === 0) {
                        answer += " besitzt in der Datenbank keine Stadtbücher.\n";
                    } else if (mem.num_city_books == 1) {
                        answer += " besitzt in der Datenbank ein Stadtbuch.\n";
                    } else {
                        answer += " besitzt in der Datenbank " + mem.num_city_books + " Stadtbücher.\n";
                    }
                    answer += " Wie kann ich dir jetzt weiterhelfen? Brauchst du den Link zur Stadt oder Infos über die Geschichte.";
                    return answer;
                } else if (searchType == "Geschichte") {
                    answer = "Okay hier ist die Geschichte von " + mem.name + ":\n" + mem.history;
                    return answer;
                } else if (searchType == "Link") {
                    answer = mem.link;
                    return answer;
                }
            } else {
                answer = "Ich konnte " + searchIntent + " in der Datenbank leider nicht finden.";
            }
        }
        return answer;
    }
};