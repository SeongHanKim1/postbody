const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const bodyparser = require('koa-bodyparser');
app.use(bodyparser());
const router = new Router();




router.post('/test', async ctx => {
    console.log("Ctx-> ",ctx.request.body);
    let datas=[];
    for(let i = 0; i <= 999999; i++) {
      datas.push(ctx.request.body+i);
    }
    ctx.body=datas.length;
});


/*router.post('/test', (ctx) => {
    let data = [];
    for(let i = 0; i < 4999; i++) {
        let obj = {
            name: 'name' + i,
            phone: 'phone' + i,
            address: 'address' + i,
            hobby: 'hobby' + i,
            job: 'job' + i,
            music: 'music' + i,
            food: 'food' + i,
            money: 'money' + i,
            nickname: 'nickname' + i
        }
    ctx.request.body=datas.push(obj);

    }*/




app.use(router.routes()).use(router.allowedMethods());
app.listen(4000, () => {
    console.log('listen to port 4000', '서버 가동 중');
});




