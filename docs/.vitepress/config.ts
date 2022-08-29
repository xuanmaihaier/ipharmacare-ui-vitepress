import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'
import footer from './config/footer'
export default defineConfig({
  title: " ",
  titleTemplate:false,
  description: '',
  // base,
  head: [
    [
      'link',
      {
        rel: 'icon',
        // href: '/public/image/logo.png'
      }
    ]
  ],
  themeConfig: {
    logo: '/public/image/logo.png',
    nav, // 配置导航栏
    sidebar, // 配置侧边菜单栏
    footer // 配置页脚
  }
})
