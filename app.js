const Koa = require('koa');
const app = new Koa();
const middleware = require('./middleware/main');

middleware.pug(app);

app.use(middleware.static);
app.use(middleware.session(app));
app.use(middleware.flash);
app.use(middleware.koaBody);

const router = require('./router');
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on localhost:3000')
});
