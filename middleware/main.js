const Pug = require('koa-pug');
const static = require('koa-static');
const session = require('koa-session');
const flash = require('koa-flash-simple');
const koaBody = require('koa-body');

exports.pug = (app) => new Pug({
    viewPath: './views/pages',
    basedir: './views',
    pretty: true,
    noCache: true,
    app: app
});

exports.static = static('./public');

exports.session = (app) => session({
    key: 'koa:sess',
    maxAge: 'session',
    overwrite: true,
    httpOnly: true,
    signed: false,
    rolling: false,
    renew: false
}, app);

exports.flash = flash();

exports.koaBody = koaBody({
    formidable: {
        uploadDir: './public/assets/img/products/'
    },
    multipart: true
});


