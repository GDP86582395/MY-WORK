// pages/new/new.js
var app = getApp();
var i = 0;

Page({
  data: {
    danci:"",
    list:[],
    input_code: "",
    temp:""
  },
  onLoad: function () {
    this.data.danci= "",
    this.data.list=[],
    this.data.input_code= "",
    this.data.temp= "",
    app.appData.userinfo = []
  },

  xiayige: function (e) {
    var newarray = [{
      id: this.data.danci
    }];
    //使用concat()来把两个数组合拼起来
    this.data.list = newarray.concat(this.data.list);
    this.setData({
      'list': this.data.list,
      danci:"",
       input_code: ""
    });
  },

  finish: function (e) {
    var newarray = [{
      id: this.data.danci
    }];
    this.data.list = newarray.concat(this.data.list);
    this.setData({
      'list': this.data.list
    });
    app.appData.userinfo = this.data.list.concat(app.appData.userinfo);
    //console.log(this.data.danci);
    //console.log(app.appData.userinfo);
    wx.navigateBack({
      delta: 1
    });
    app.appData.userinfo = this.data.list;
    console.log(app.appData.userinfo);
  },

  setDanci: function (e) {
    
    this.setData({
      danci: e.detail.value
    })
    
   console.log(this.data.danci);
  }
})