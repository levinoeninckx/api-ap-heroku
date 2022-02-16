const express = require('express');
const app = express();
var cors = require('cors');

app.use(
    cors({
        credentials: true,
        origin: 'https://levi-heroku-api.herokuapp.com'
    })
);
app.use(function (req, res; next) {
	res.header('Access-Control-Allow-Origin', "https://levi/heroku-api.herokuapp.com");
	res.header('Access-Control-Allow-Headers',true);
app.options('*', cors());

app.get('/', (req, res) => res.send('I modified this api.'));

app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port 3000', '');
});
