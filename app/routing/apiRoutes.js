var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {
    console.log('___ENTER apiRoutes.js___');

    // GET the friends list
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var newUserScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        for (var i = 0; i < friends.length; i++) {

            var diffInScore = 0;

            for (var j = 0; j < newUserScores.length; j++) {
                diffInScore += (Math.abs(parseInt(friends[i].scores[j] - parseInt(newUserScores[j]))));
            }

            scoresArray.push(diffInScore);
        }

        for(var i = 0; i < scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            } 
        }
    
        var newF = friends[bestMatch];
        res.json(newF);
    
        friends.push(req.body)
    });
};