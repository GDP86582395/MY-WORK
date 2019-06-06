// pages/choice/choice.js
Page({

  addItem: function (event) {
    console.log("添加条目！");
    wx.navigateBack();

    // 往上一级页面传参
    var pages = getCurrentPages();
    var currPage = pages[pages.length - 1]; // 当前页面
    var prevPage = pages[pages.length - 2]; // 上一级页面

    // 直接调用上一级页面Page对象，存储数据到上一级页面中
    var str = event.detail.value;
    prevPage.setData({
      'addItemContent': str,
    });
  },

  data: {

  },
  clickButton1: function (e) {
    wx.navigateTo({
      url: '../new/new'
    })
  },

  clickButton2: function (e) {
    wx.navigateTo({
      url: '../read/read'
    })
  },

  clickButton3: function (e) {
    wx.navigateTo({
      url: '../help/help'
    })
  },
  
  clickButton4: function(e){
    wx.navigateTo({
      url: '../she/she'
    })
  }
})