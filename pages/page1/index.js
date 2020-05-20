//index.js
//获取应用实例

// import { page } from '../../applets-store/index';

Page({
  data: {
    title: '999'
  },
  onLoad: function () {},
  goPage2() {
    // wx.navigateBack
    wx.navigateTo({
      url: '../page2/index'
    });
  }
});
