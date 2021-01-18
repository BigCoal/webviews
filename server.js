
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa()

let port = 10002;
const ENV = process.env.NODE_ENV
switch (ENV) {
  case 'pro_cs': port = 10002; break;
  case 'pro_gsc': port = 10003; break;
  case 'pro_zs': port = 10005; break;
  case 'pro_local': port = 10008; break;
}


app.use(serve('document'))

app.use(async (ctx) => {
  let htmlFile = await (new Promise(function (resolve, reject) {
    fs.readFile('./document/index.html', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  }))
  ctx.type = 'text/html'
  ctx.body = htmlFile
})

app.listen(port, function () {
  console.log('node程序已经运行，当前端口为:', port, '\n\n\n\n\n\n')
})
