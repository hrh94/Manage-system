const router = require('koa-router')();
const Admin = require(config.__DOPath + 'Admin');

router.prefix('/initData');

router.get('/', async (ctx,next) => {
  ctx.body = "插入数据";
});

router.get('/addAdmin', async (ctx) => {

  //向数据库插入一条admin数据
  let temp = new Admin({
    "ano": 0,
    "name": "admin",
    "password": md5(md5("123456").substr(4, 7) + md5("123456")),
    "power": [-1],
    "phone": "18826252375",
  });

  ctx.body =await new Promise(function (resolve, reject) {
    temp.save(function (err) {
      if (err) {
        return resolve("数据插入失败");
      }
     return resolve("数据插入成功");
    });
  });

  //查找admin管理信息
  // ctx.response.body = await new Promise(function (resolve, reject) {
  //
  //   return Admin.find({}, function (err, result) {
  //
  //     if (err) {
  //       ctx.response.status = 404;
  //       return resolve(404);
  //     } else {
  //       return resolve(result);
  //     }
  //
  //   });

    //删除admin管理员
    // Admin.remove({ano: "0"}, function (err, result) {
    //
    //   if (err) {
    //     ctx.response.status = 404;
    //     return resolve(404);
    //   }
    //
    //   console.log(result.result.ok);
    //
    //   return resolve("管理员删除成功！");
    //
    // });
  // });

});

module.exports = router;