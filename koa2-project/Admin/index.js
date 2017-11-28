const Login=require('./Router/Login');
const InitData=require('./Router/InitData');
const UserInfo=require('./Router/UserInfo');

module.exports=(app)=>{
  app.use(InitData.routes(),InitData.allowedMethods());
  app.use(Login.routes(), Login.allowedMethods());
  app.use(async (ctx,next) => {
    if(ctx.request.header['authorization']){
      let token = ctx.request.header['authorization'].split(' ')[1];
      let decoded = jwt.decode(token, 'secret');
      if(token && decoded.exp <= new Date()/1000){
        ctx.status = 401;
        ctx.body = {
          result:'warning',
          msg: '会话过期，请重新登录'
        };
      }else{
        ctx.request.token=token;
        return next();
      }
    }else{
      ctx.status = 401;
      ctx.body = {
        result:'warning',
        msg: '请登录之后再重新访问'
      }
    }
  });
  app.use(UserInfo.routes(),UserInfo.allowedMethods());
};