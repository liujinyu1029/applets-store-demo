//index.js
//获取应用实例

import { page as storePage } from '../../applets-store/src/index';

storePage({
  data: {},
  $store: {
    agreeNum: {
      observer: 'onChange_agreeNum',
      default: 0
    },
    disagreeNum: {
      default: 0
    }
  },
  onChange_agreeNum(newVal) {
    console.log('page onChange_agreeNum', newVal);
  },
  addAgree() {
    // 取值从 data.$store 中取
    let { $store } = this.data;
    // 设置值的方式： 直接对 this.$store 对应属性赋值
    $store.agreeNum += 1;
  },
  addDisagree() {
    // 取值从 data.$store 中取
    let { $store } = this.data;
    // 设置值的方式： 直接对 this.$store 对应属性赋值
    $store.disagreeNum += 1;
  },
  goPage2() {
    // wx.navigateBack
    wx.navigateTo({
      url: '../page2/index'
    });
  }
});
