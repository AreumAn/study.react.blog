const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// Set router
router.get('/', (ctx) => {
    ctx.body = 'Home';
});

router.get('/about/:name?', (ctx) => {
    const { name } = ctx.params;
    ctx.body = name ? `About ${name}` : 'About';
});

router.get('/posts', (ctx) => {
    const { id } = ctx.query;
    ctx.body = id ? `POST  ##${id}` : 'No Post ID';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('listening to port 4000');
});
