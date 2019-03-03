var path = require('path');

module.exports = function(app) {
    console.log('___ENTER htmlRoutes.js___');

    // Route to the Home page
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    // Route to the Survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
};