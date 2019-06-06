// pages/read/read.js
var apiKey = '85c1e973ff025d787d34cb579eceaa08';
var bgMusic = wx.createInnerAudioContext();
const app = getApp()

Page({
  data: {
    list:[],
    danci:'',
    index:0,
    src: '',
    len: app.appData.userinfo.length
  },
  onLoad: function () {
    if (app.appData.userinfo.length==0){
      wx.showToast({
        title: '请先录入单词',
        icon: 'none',
        size: '60px',
      })

      setTimeout(function () {
        wx.navigateBack({
          delta: 1
        });//要延时执行的代码
      }, 1000)
      
    }
  },
  listen:function(){
    var that = this
    bgMusic = wx.createInnerAudioContext();
    this.data.len = app.appData.userinfo.length
    this.data.index = this.data.len - 1
    this.data.src = 'http://dict.youdao.com/dictvoice?audio=' + app.appData.userinfo[this.data.index].id
    that.lis()
  },

  lis:function(e){
    var that = this;
    bgMusic = wx.createInnerAudioContext();
    bgMusic.src = this.data.src, 
    bgMusic.play(),
    bgMusic.onError((res) => {
      wx.showToast({
        title: '网络出错，稍后再试',
        icon: 'none',
        size: '40px',
      })
    })
    bgMusic.onEnded((res) => {
      if (this.data.index  == 0) {
        that.jiesu()
      } else {
        this.data.index --;
        this.setData({
          src: '',
        })
        that.s_p()
      }
    })
  },

  s_p: function () {
    var that = this
    var src = 'http://dict.youdao.com/dictvoice?audio=' + app.appData.userinfo[this.data.index].id
    this.setData({
      src: src
    })
    console.log(this.data.src)
    setTimeout(function () {
      that.lis()//要延时执行的代码
    }, app.appData.time)
  },


  jiesu:function(){
    console.log("jiesu")
  },

  setDanci: function (e) {

    this.setData({
      danci: e.detail.value
    })   
  },

  finish: function (e) {
    var newarray = [{
      id: this.data.danci
    }];
    this.data.list = newarray.concat(this.data.list);
    this.setData({
      'list': this.data.list
    });
    app.appData.input = this.data.list.concat(app.appData.input);
    console.log(app.appData.input);


    for (var i = app.appData.userinfo.length-1; i > -1; i--) {
      app.appData.text1 += app.appData.userinfo[i].id + '\n'
    }
    for (var i = app.appData.input.length-1; i >-1 ; i--) {
      app.appData.text2 += app.appData.input[i].id +  '\n'
    }
    console.log(app.appData.text2)

    wx.navigateTo({
      url: '../goal/goal'
    })
  },
  

  xiayige: function (e) {
    var newarray = [{
      id: this.data.danci
    }];
    //使用concat()来把两个数组合拼起来
    this.data.list = newarray.concat(this.data.list);
    this.setData({
      'list': this.data.list,
      danci: "",
      input_code: ""
    });
  }
})