--- 
layout: home

hero:
  name: ipharmacare-ui
  text: 逸曜ui业务组件库
  tagline: 
  actions:
    - theme: brand
      text: Vue2:基于element-ui进行的拓展
      link: http://10.1.1.161:9999/element-ui
    - theme: brand
      text: Angular
      link: http://10.1.1.161:9999/web-angular
    - theme: brand
      text: Vue3:基于element-plus进行的拓展
      link: http://10.1.1.161:9999/website-dist

features:
  - title: 一致性
    details: 在使用多个ui组件库时，存在组件库样式不统一的情况，应最大程度减少样式的不统一。
  - title: 兼容性
    details: 在封装业务层组件时，应保证原有组件功能的保留，只额外增加新的配置，对于大变动的组件，应单独配置新的出口名。
  - title: 高性能
    details: 抛弃webpack，使用vite进行打包，element-ui项目启动时间需要几分钟，但是element-plus使用vite，只需要几秒。
  - title: 可维护性
    details: 保持代码的整洁，应该依照原组件代码风格进行二次封装，并书写可扩展的代码。
---
