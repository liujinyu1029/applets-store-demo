import globalStore from './util/globalStore';

export default (config, _page = Page) => {
  const { $store } = config;
  const targetConf = {
    ...config,
    onLoad(options = {}) {
      this.$store = globalStore;
      // 遍历$store中定义的属性集
      if ($store && typeof $store === 'object') {
        Object.keys($store).forEach(key => {
          // 监听属性的set事件
          globalStore.$watch(key, val => {
            // 触发对应的observer响应
            let fun = this[$store[key].observer];
            fun && fun.call(this, val);
          });
        });
      }
      config.onLoad && config.onLoad.call(this, options);
    }
  };
  _page(targetConf);
};
