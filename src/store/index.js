import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'

Vue.use(Vuex)

const state = {
  collapsed: false, // 导航栏折叠状态 false展开 true 折叠
  aside_width: '230px'
}

export default new Vuex.Store({
  state,
  mutations
})
