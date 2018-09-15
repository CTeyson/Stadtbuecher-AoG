const { data } = require('../data/database');

module.exports = {getCityList: function(sorter){
    var match = [];  

    for(var j=0;j<data[0].cities.city.length;j++){
        var mem = data[0].cities.city[j];
        if(mem.name.startsWith(sorter)){
            match.push(mem.name); 
        }
    }
    if(match.length>0){
        answer = "Ich habe "+match.length+" Städte mit "+sorter+" gefunden. Dazu gehören unteranderem "; 
        var k=0;
        for(var i=0; i<match.length;i++){
           if(k!=2){
               answer += match[k];
               if(k!=1){
                answer += ", "; 
               }
               else{
                   answer += ".";
               }
               k++; 
           }     
        }
    }else{
        answer = "Ich habe keine Städte mit "+sorter+" gefunden."; 
    }
    return answer;
    }
};