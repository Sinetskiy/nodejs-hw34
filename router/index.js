const Router = require('koa-router');
const router = new Router();

const productsCtrl = require('../controllers/products.js');
const skillsCtrl = require('../controllers/skills.js');
const authCtrl = require('../controllers/auth.js');
const adminCtrl = require('../controllers/admin.js');

const getIndex = async (ctx) => {
    try {
        const products = await productsCtrl.get();
        const skills = await skillsCtrl.get();
        ctx.render('index', {
            products,
            skills
        });
    } catch (err) {
        console.error('err', err);
        ctx.status = 404;
    }
};

router.get('/', getIndex);
router.get('/admin', adminCtrl.get);
router.post('/admin/upload',  adminCtrl.upload);
router.post('/admin/skills', adminCtrl.skills);
router.get('/login', authCtrl.getLogin);
router.post('/login', authCtrl.postLogin);

module.exports = router;
