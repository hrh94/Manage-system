const router = require('koa-router')();
const Admin = require(config.__DOPath + 'Admin');

router.prefix('/a-user');

router.get('/', async (ctx,next) => {

  ctx.response.body =await new Promise(function (resolve, reject) {

    Admin.findOne({token: ctx.request.token}, function (err, user) {
      if (err) {
        console.error(err);
        return resolve({
          result:'error',
          msg:'服务器错误，请稍后再试！'
        });
      }

      if (!user) {
        return resolve({
          result:'warning',
          msg:'用户不存在！'
        });
      } else {
        return resolve({
          result:'success',
          msg:'',
          user: user
        });
      }
    });
  })
});

module.exports = router;