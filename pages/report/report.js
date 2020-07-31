var app = getApp()
var cun
var huo
// pages/report/report.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name: '',
      idCard: 0,
      phone: 0,
      income: 0,
      loanTime: 0,
      loanValue: 0
  },

    //事件处理函数
    bindViewTap: function () {
      wx.navigateTo({
        url: '../logs/logs'
      })
    },

  // 获取姓名
  nameKeyInput: function(e){
    this.setData({
      name: e.detail.value
    })
  },

   // 获取身份证号
   idCardInput: function(e){
    this.setData({
      idCard: e.detail.value
    })
  },

    // 获取手机号
    phoneInput: function(e){
      this.setData({
        phone: e.detail.value
      })
    },

    // 获取年收入
    incomeKeyInput: function(e){
      this.setData({
        income: e.detail.value
      })
    },

    // 获取贷款时间
    loanTimeInput: function(e){
      this.setData({
        loanTime: e.detail.value
      })
    },

  // 校验结果
  loanSubmit: function () {
    var that = this;
    var idCardReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  // 身份证号校验正则表达式
    var phoneReg = /^1(3|4|5|7|8)\d{9}$/;

    if (that.data.name == '') {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入姓名',
      })
    }
  else if (that.data.idCard == 0 || !idCardReg.test(that.data.idCard)) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '身份证号有误',
      })
    }
    else if (that.data.phone == 0 || !phoneReg.test(that.data.phone)) {
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '手机号有误',
      })
    }else if (that.data.income == 0){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入年收入',
      })
    }else if(that.data.loanTime == 0){
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: '请输入贷款时间',
      })
    }
    else{
      that.calLoanVal(that.data.name, that.data.idCard, that.data.phone, that.data.income, that.data.loanTime)
    }
    
  },

  /** 
   * 发送邮件，计算可申请贷款金额
   */
  calLoanVal: function (name, idCard, phone, income, loanTime) {
  
    var var_name = name
    var var_idCard = parseInt(idCard)
    var var_phone = parseInt(phone)
    var var_income = parseFloat(income)
    var var_loanTime = parseInt(loanTime)
    //var timeSpan = lendTime * 1 / 12;
    // var allLixi = Math.round((lendMoney / 100 * lendTime * cun_lixi) * 100) / 100

    var allSum = Math.round(var_income) / 10  // 计算可贷款数额

    this.setData({
      loanValue : allSum
    })

  }

  

  

  
})