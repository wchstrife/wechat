// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var nodemailer = require('nodemailer')
// 创建一个SMTP客户端配置
var config = {
  host: 'smtp.qq.com', //网易163邮箱 smtp.163.com
  port: 465, //网易邮箱端口 25
  auth: {
    user: '1021717079@qq.com', //邮箱账号
    pass: 'oausfjqsfumpbcie' //邮箱的授权码
  }
};
// 创建一个SMTP客户端对象
var transporter = nodemailer.createTransport(config);

// 云函数入口函数
exports.main = async(event, context) => {

  // 获取数据
  let { userInfo, var_name, var_idCard, var_phone, var_income, var_loanTime} = event

  var_content = var_name + '  先生/女士提交了贷款申请。\n' + '身份证号码: ' + var_idCard +'\n'+ '手机号码: ' + var_phone +'\n' + '年收入: ' + var_income +'\n' + '贷款时间 ' + var_loanTime +'\n'

  // 创建一个邮件对象
  var mail = {
    // 发件人
    from: '小程序测试 <1021717079@qq.com>',
    // 主题
    subject: '个人贷款申请',
    // 收件人
    to: 'wch960426@163.com',
    // 邮件内容，text或者html格式
    text: var_content
  };

  let res = await transporter.sendMail(mail);
  return res;
// exports.main = async (event, context) => {
//   const wxContext = cloud.getWXContext()

//   return {
//     event,
//     openid: wxContext.OPENID,
//     appid: wxContext.APPID,
//     unionid: wxContext.UNIONID,
//   }
}