import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import data from "./modules/data";

const state = {
  // 是否正在显示弹框
  isShowingDlg: false,
};
const store = createStore({
  strict: window.gDevEnv,
  state,
  getters,
  actions,
  mutations,
  modules: {
    data,
  },
});

// 热更新
if (module.hot) {
  module.hot.accept(
    [
      // state不支持热更新
      "./getters",
      "./actions",
      "./mutations",
      "./modules/data",
    ],
    () => {
      store.hotUpdate({
        // 获取更新后的模块。因为 babel 6 的模块编译格式问题，这里需要加上 .default
        getters: require("./getters").default,
        actions: require("./actions").default,
        mutations: require("./mutations").default,
        modules: {
          data: require("./modules/data").default,
        },
      });
    }
  );
}

export default store;
