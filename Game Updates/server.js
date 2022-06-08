var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 
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
app.set('views', __dirname + '/html')
app.use(express.static(__dirname + '/'));


app.get('/', (req, res) => res.render('login'));
app.get('/register', (req, res) => res.render('register'));

app.post('/register', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var insert_statement = "INSERT INTO users(username, password, email, firstName, lastName) VALUES('" + username + "', '" + password + "', '" + email + "', '" + firstName + "', '" + lastName + "');"; 
    
    db.task('get-everything', task => {
            return task.batch([
                task.any(insert_statement)
            ]);
        })
        .then(info => {
        res.render('pages/register',{
    my_title: "Registration Page",
    data: info[1],
    user: username, 
    pass: password,
    email: email,
    first: firstName,
    last: lastName
    })
        })
        .catch(err => {
                console.log('error', err);
                res.render('pages/register', {
                    my_title: 'Registration Page',
                    data: '',
                    user: '',
                    pass: '',
                    email: '',
                    first: '',
                    last: ''
                })
        });
    });


app.post('/login_Pluto', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var user = "SELECT id FROM users WHERE username = '" + username + "' AND WHERE password = '" + password + "';";

    if(user != null && pass != null){
        if(user == pass){

        }
    }

    db.task('get-everything', task => {
        return task.batch([
            task.any(user),
            task.any(pass)
        ]);
    })
    .then(info => {
        if(info[0] != NULL){
            res.render('pages/login_Pluto',{
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
            res.render('pages/login_Pluto', {
                my_title: 'Login Page',
                data: '',
                this_username: '',
                this_password: ''
            })
        });
 });

app.listen(3000);
console.log('8000 is the magic port');
