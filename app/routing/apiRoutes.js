var friends = require("../data/friends");

var friendScore = 0;
var scoreDifference = 25;
module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {

        friends.push(req.body);
        res.json(true);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {

            user.scores[i] = parseInt(user.scores[i]);
        }

        for (var i = 0; i < friends.length; i++) {

            var totalDifference = 0;

            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < scoreDifference) {
                friendScore = i;
                minimumDifference = totalDifference;
            }
        }

        friends.push(user);

        res.json(friends[friendScore]);
    });
};
