import { App } from 'vue'
import Theme from 'vitepress/theme'
import '../../public/css/customStyle.css' // 自定义的主题色文件
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import VcComponent from '@ipharmacare-ui/ipharmacare-components' // 上文提到的adapt层，导出vue3的组件

export default {
  ...Theme,
  enhanceApp ({ app }: {app: App}) {
    // app.use(VcComponent) // 进行组件注册，这样我们可以直接在 markdown 中使用组件啦！
  }
}