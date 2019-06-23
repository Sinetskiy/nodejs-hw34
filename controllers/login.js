module.exports.get =  (req, res ) => {
    res.render('pages/login', { title: 'Login' });
};

module.exports.post = (req, res) => {

    if (!req.body.email || !req.body.password ) {
        return res.json({ msg: 'Все поля нужно заполнить!', status: 'Error' })
    }

    if (req.body.email  !== 'admin@admin.com' || req.body.password !== 'admin') {
        return res.json({ msg: 'Неверный логин или пароль', status: 'Error' })
    }

    req.session.isAdmin = true;
    res.redirect('/admin');

};
