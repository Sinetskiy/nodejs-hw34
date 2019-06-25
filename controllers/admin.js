exports.get = async (ctx) => {
    console.log("ctx.session", ctx.session);
    try {
        if (ctx.session.isAuth) {
            ctx.render('admin');
        } else {
            ctx.redirect('/login');
        }
    } catch (err) {
        console.error('err', err);
        ctx.status = 404;
    }
};

exports.upload = async (ctx) => {
    try {
        await productsCtrl.add({...ctx.request.files, ...ctx.request.body})
            .then(() => {
                if (ctx.session.isAuth) {
                    ctx.redirect('/admin');
                } else {
                    ctx.redirect('/login');
                }
            });
    } catch (err) {
        console.error('err', err);
        ctx.status = 404;
    }
};

exports.skills = async (ctx) => {
    try {
        await skillsCtrl.update({...ctx.request.body})
            .then(() => {
                if (ctx.session.isAuth) {
                    ctx.redirect('/admin');
                } else {
                    ctx.redirect('/login');
                }
            });
    } catch (err) {
        console.error('err', err);
        ctx.status = 404;
    }
};
