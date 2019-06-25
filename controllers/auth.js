exports.getLogin = async (ctx) => {
  console.log("ctx.flash", ctx.flash);
  try {
    const msgslogin = ctx.flash && ctx.flash.get() ? ctx.flash.get().msgslogin : null;

    ctx.render('login', {
      msgslogin
    });
  } catch (err) {
    console.error('err', err);
    ctx.status = 404;
  }
};

exports.postLogin = async (ctx) => {
  try {
    await auth(ctx.request.body);
    ctx.session.isAuth = true;

    ctx.redirect('admin');
  } catch (err) {
    console.error('err', err);
    ctx.flash.set({msgslogin: err});
    ctx.redirect('/login');
  }
};

const auth = ({email, password}) => new Promise(async (resolve, reject) => {
  try {
    if (!email || !password) {
      reject('Email & pass are required');
      return;
    }

    if (email !== 'admin@admin.com' || password !== 'admin') {
      reject('Unathorized');
      return;
    }

    resolve(true);
  }
  catch(err) {
    reject(err);
  }
});
