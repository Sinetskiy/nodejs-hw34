const fs = require('fs');
const path = require('path');
const formidable = require('formidable');

const productsCtrl = require('../controllers/products.js');
const countersCtrl = require('../controllers/counters.js');

module.exports.get =  (req, res) => {

    if (req.session.isAdmin) {
        res.render('pages/admin', { title: 'Admin' });
    }
    else {
        res.render('pages/login', { title: 'Login' });
    }

};

module.exports.updateCounters = (req, res) => {

    countersCtrl.update(req.body);
    res.redirect('/admin');
};

module.exports.addProduct = (req, res, next) => {
    const form = new formidable.IncomingForm();

    const upload = path.join('.','public', 'assets', 'img', 'products');

    if (!fs.existsSync(upload)) {
        fs.mkdirSync(upload);
    }

    form.uploadDir = path.join(process.cwd(), upload);

    form.parse(req, function (err, fields, files) {


        if (err) {
            return next(err)
        }

        // const valid = validation(fields, files);
        //
        // if (valid.err) {
        //     fs.unlinkSync(files.photo.path);
        //     return res.redirect(`/?msg=${valid.status}`);
        // }

        productsCtrl.add({...files, ...fields});

        res.redirect('/admin');
    });
};

const validation = (fields, files) => {
    if (files.photo.name === '' || files.photo.size === 0) {
        return { status: 'Не загружена картинка!', err: true }
    }
    if (!fields.name) {
        return { status: 'Не указано описание картинки!', err: true }
    }
    return { status: 'Ok', err: false }
};


