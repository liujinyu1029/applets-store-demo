import { page } from '../../applets-store/src/index';

page({
  data: {},
  $store: {
    // 设置 agreeNum 的默认值为 0
    disagreeNum: 0
  },
  addDisagree() {
    // 取值从 data.$store 中取
    let { disagreeNum } = this.data.$store;
    // 设置值的方式： 直接对 this.$store 对应属性赋值
    this.$store.disagreeNum = disagreeNum + 1;
  },
  goPage2() {
    wx.navigateBack();
  }
});
