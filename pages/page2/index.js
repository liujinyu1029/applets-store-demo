import { page } from '../../applets-store/src/index';

page({
  data: {},
  $store: {
    agreeNum: {
      default: 0
    },
    disagreeNum: {
      default: 0
    }
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
    wx.navigateBack();
  }
});
