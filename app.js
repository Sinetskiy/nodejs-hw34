const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const errorHandlers = require('./middleware/errors');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'loftschool',
        key: 'sessionkey',
        cookie: {
            path: '/',
            httpOnly: true,
            maxAge: 10 * 60 * 1000
        },
        saveUninitialized: false,
        resave: false
    })
)

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(errorHandlers.notFoundError);

// error handler
app.use(errorHandlers.internalServerError);

const server = app.listen(process.env.PORT || 3000, function () {
    console.log('Сервер запущен на порте: ' + server.address().port)
});
