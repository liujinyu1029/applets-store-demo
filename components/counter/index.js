import { component } from '../../applets-store/src/index';

component({
  data: {},
  // $store 属性，用了指定当前组件中，可以使用的 全局store变量 【待定】
  $store: {
    agreeNum: {
      observer: 'onChange_agreeNum',
      value: 0
    },
    disagreeNum: {
      observer: 'onChange_disagreeNum',
      value: 0
    }
  },
  methods: {
    onChange_agreeNum(newVal) {
      console.log('$store.agreeNum:', newVal);
    },
    onChange_disagreeNum(newVal) {
      console.log('$store.disagreeNum:', newVal);
    },
    addAgree() {
      // 取值从 data.$store 中取
      let { agreeNum } = this.data.$store;
      // 设置值的方式： 直接对 this.$store 对应属性赋值
      this.$store.agreeNum = agreeNum + 1;
    },
    addDisagree() {
      // 取值从 data.$store 中取
      let { disagreeNum } = this.data.$store;
      // 设置值的方式： 直接对 this.$store 对应属性赋值
      this.$store.disagreeNum = disagreeNum + 1;
    }
  }
});
