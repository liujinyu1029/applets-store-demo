import globalStore from './util/globalStore';

export default (config, _component = Component) => {
  const { $store } = config;
  const targetConf = {
    ...config,
    created() {
      this.$store = globalStore;
      this.$watchFunList = []; // 存储 监听的回调事件

      if ($store && typeof $store === 'object') {
        // 遍历$store中定义的属性集
        Object.keys($store).forEach(key => {
          // 初始化 $store下 属性的默认值
          if (globalStore[key] === undefined) {
            globalStore[key] = $store[key].value;
          }
          // 事件监听的回调函数
          let watchFun = val => {
            setInterval(() => {
              this.setData({
                $store: globalStore
              });
            });
            console.log('globalStore', globalStore, val);
            // 触发对应的observer响应
            let fun = this[$store[key].observer];
            fun && fun.call(this, val);
          };
          // 监听属性的set事件
          globalStore.$watch(key, watchFun);
          // 存储 监听的回调事件 用于后续注销
          this.$watchFunList.push([key, watchFun]);
        });
      }
      config.created && config.created.call(this);
    },
    attached() {
      this.setData({
        $store: globalStore
      });
    },
    detached() {
      // 组件移除后，清空globalStore中对应的属性监听事件
      this.$watchFunList.forEach(args => globalStore.$off.apply(globalStore, args));
    }
  };
  _component(targetConf);
};
