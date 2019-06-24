module.exports.get =  (req, res) => {

    if (req.session.isAdmin) {
        res.render('pages/admin', { title: 'Admin' });
    }
    else {
        res.render('pages/login', { title: 'Login' });
    }

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


