/**
 * 注册全局组件
 * 命名规则：所有组件名称开头字母大写，驼峰标识
 * 所注册的组件会加一个“his-”前缀，与element-ui（“el-”开头）区分开
 */
import SessionTitle from './SessionTitle/index.vue'
import Select from './Select/index.vue'
import Table from './Table/index.vue'
import Flex from './Flex/index.vue'

const components = [
  SessionTitle,
  Select,
  Table,
  Flex
]

export default {
  install(Vue, opts = {}) {
    components.map(component => {
      Vue.component('his' + component.name, component)
    })
  }
}
