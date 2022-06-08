var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 
const { response } = require('express');
app.use(bodyParser.json());           
app.use(bodyParser.urlencoded({ extended: true })); 

var pgp = require('pg-promise')();

const dbConfig = {
    host: 'db',
    port: 5432,
    database: 'users',
    user: 'postgres',
    password: 'pwd'
};

var db = pgp(dbConfig);

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/ejs');
app.use(express.static(__dirname + '/'));


app.get('/', (req, res) => {res.render('register')});
app.get('/register', (req, res) => res.render('register'));
app.get('/login_Pluto', (req, res) => res.render('login_Pluto'));
app.get('/home', (req, res) => res.render('home'));
app.get('/gameTesting', (req, res) => res.render('gameTesting'));
app.get('/game', (req, res) => res.render('game'));
app.get('/about_the_team', (req, res) => res.render('about_the_team'));

app.get('/test',function(req,res){
    console.log("testing");
    res.send("hello world");
});

app.post('/register', function(req, res) {
    var username = req.body.UserName;
    var email = req.body.emailAddress;
    var password = req.body.passwordFirst;
    var insert_statement = "INSERT INTO users(username, email, password) VALUES('" + username + "', '" + email + "', '" + password + "');"; 
    
    db.task('get-everything', task => {
            return task.batch([
                task.any(insert_statement)
            ]);
        })
        .then(info => {
        res.render('register',{
    my_title: "Registration Page",
    data: info[0],
    user: username, 
    pass: password,
    email: email
    })
        })
        .catch(err => {
                console.log('error', err);
                res.render('register', {
                    my_title: 'Registration Page',
                    data: '',
                    user: '',
                    pass: '',
                    email: ''
                })
        });
    });


app.post('/login_Pluto', function(req, res) {
    var username = req.body.inputEmail;
    var password = req.body.inputPassword;
    var user = "SELECT id FROM users WHERE username = '" + username + "' AND WHERE password = '" + password + "';";


    db.task('get-everything', task => {
        return task.batch([
            task.any(user)
        ]);
    })
    .then(info => {
        if(info[0] != NULL){
            res.render('login_Pluto',{
                my_title: "Login Page",
                data: info[0],
                this_username: username,
                this_password: password
            })
        }else{
            err
        }

       })
       .catch(err => {
            console.log('error', err);
            res.render('login_Pluto', {
                my_title: 'Login Page',
                data: '',
                this_username: '',
                this_password: ''
            })
        });
 });

app.listen(3000);
console.log('3000 is the magic port');
