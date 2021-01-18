
const fs = require('fs');
const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa()

let port = 8888;

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
