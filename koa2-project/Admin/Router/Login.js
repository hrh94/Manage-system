const router = require('koa-router')();
const Admin=require(config.__DOPath + 'Admin');

let global_code = '0000';

router.prefix('/a-login');

router.post('/cl',async (ctx)=>{

  ctx.response.body =await new Promise(function (resolve, reject) {

      let code=ctx.request.body.code;
      let username=ctx.request.body.username;
      let password=ctx.request.body.password;

      if(code===global_code){
        Admin.findOne({name:username},function (err,user) {
          if(err){
            console.error(err);
            return resolve({
              result:'error',
              msg:'服务器错误，请稍后再试！'
            });
          }

          if(!user){
            return resolve({
              result:'warning',
              msg:'用户名错误！'
            });
          }else{
            password=md5(md5(password).substr(4,7)+md5(password));

            Admin.findOne({name:username,password:password},function (err,user) {

              if(err){
                console.error(err);
                return resolve({
                  result:'error',
                  msg:'服务器错误，请稍后再试！'
                });
              }

              if(!user){
                return resolve({
                  result:'warning',
                  msg:'密码错误'
                });
              }else{
                user.token='';

                let token = jwt.sign({
                  exp:Math.floor(Date.now()/1000)+60*60*24,
                  data:user
                },'secret');

                Admin.update({
                  name:username,
                  password:password
                },{
                  $set:{token:token}
                },function (err,result) {

                  if(err){
                    console.error(err);
                    return resolve({
                      result:'error',
                      msg:'服务器错误，请稍后再试！'
                    });
                  }

                  user.token=token;

                  let userCopy={
                    name:user.name,
                    avatar:user.avatar,
                    power:user.power,
                    token:user.token
                  };

                  return resolve({
                    result:'success',
                    msg:'登录成功，正在跳转...',
                    user:userCopy
                  });
                });
              }
            });
          }
        });
      }else{
        return resolve({
          result:'warning',
          msg:'验证码错误！'
        });
      }
  });
});

module.exports=router;