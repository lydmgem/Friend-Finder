var path = require("path");
var friends = require("../data/friends");

module.exports = function (app) {


    // grabs friends list displays json
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        // grabs users score to compare with simpson friends
        var newUserScores = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;

        for (var i = 0; i < friends.length; i++) {

            var diffInScore = 0;

            for (var j = 0; j < newUserScores.length; j++) {
                diffInScore += (Math.abs(parseInt(friends[i].scores[j] - parseInt(newUserScores[j]))));
            }

            // push results into "scoresArray var"
            scoresArray.push(diffInScore);
        }

        for(var i = 0; i < scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
                bestMatch = i;
            } 
        }
    
        var newFriend = friends[bestMatch];
        res.json(newFriend);
    
    });

};