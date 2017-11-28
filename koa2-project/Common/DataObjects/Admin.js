const mongoose = require('mongoose');

let adminSchema = new mongoose.Schema({
  "ano": Number,//管理员编号
  "name": String,//管理员名
  "password": String,//管理员密码
  "power": [Number],//管理员权限
  "avatar":  {type: String, default: "default_avatar.png"},//管理员头像
  "phone":String,//联系号码
  "token":String//token
});

let Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;