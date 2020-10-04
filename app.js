const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(8000, () => {
    console.log("Server is running on port 8000");
})

app.route('/')
.get((req, res) => {
    res.render('index');
})
.post((req, res) => {
    var txt = req.body.pwd;
    console.log(txt);
    res.send('It works!!');
})

app.route('/login')
.get((req, res) => {
    res.render('login');
})
.post((req, res) => {
    var usr = req.body;
    console.log(usr);
    res.send('Username and Password works!');
})