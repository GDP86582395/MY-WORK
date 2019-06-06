const app = getApp()
Page({
  data:{
    text1:'',
    text2: ''
  },
  check:function(){
    this.setData({
      text1: '正确答案:'+'\n'+app.appData.text1,
      text2: '你的答案:' + '\n' +app.appData.text2
    })
  }
})