

//compare usernames to password use a post
//create level id, username, date created, keeping track of layout (text file)
app.post('/register', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var insert_statement = "INSERT INTO registrationPage(username, password, email, firstName, lastName) VALUES('" + username + "', '" + password + "', '" + email + "', '" + firstName + "', '" + lastName + "');"; 
    
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
    var user = "SELECT username FROM loginPage WHERE username = '" + username + "';";
    var pass = "SELECT password FROM loginPage WHERE password = '" + password + "';";


    db.task('get-everything', task => {
        return task.batch([
            task.any(user),
            task.any(pass)
        ]);
    })
    .then(info => {
    res.render('pages/login_Pluto',{
        my_title: "Login Page",
        data: info[1],
        this_username: username,
        this_password: password
    })
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