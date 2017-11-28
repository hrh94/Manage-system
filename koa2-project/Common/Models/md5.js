var crypto = require('crypto');
module.exports = function md5(ipassword) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(ipassword).digest('base64');
  return password;
}