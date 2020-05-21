//index.js
//获取应用实例

import { page } from '../../applets-store/src/index';

page({
  data: {},
  $store: {
    // 设置 agreeNum 的默认值为 0
    agreeNum: 0
  },
  addAgree() {
    // 取值从 data.$store 中取
    let { agreeNum } = this.data.$store;
    // 设置值的方式： 直接对 this.$store 对应属性赋值
    this.$store.agreeNum = agreeNum + 1;
  },
  goPage2() {
    // wx.navigateBack
    wx.navigateTo({
      url: '../page2/index'
    });
  }
});
