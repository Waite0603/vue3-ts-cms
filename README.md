## 项目介绍

Vue-TS-CMS 是一个酒店管理系统，基于 Vue3.0 + TypeScript + Vite + Element Plus 开发的后台管理系统，它使用了最新的前端技术栈，实现了登录、权限管理、酒店管理、订单管理、数据统计等功能。

## 项目运行

1. 环境: Node 18.16.1 + npm 9.5.1

2. 安装依赖: `npm install`

3. 启动项目: `npm run serve`

4. 后台地址: [https://github.com/waite0603/vue3-cms-node-api](https://github.com/waite0603/vue3-cms-node-api)

5. 这个后台也是随便用的别人的, bug 也挺多的其实, 不过在本地跑跑还是可以的: https://gitee.com/liaobaofa/node_api

## 项目结构 

```
├── public              # 静态资源
│   └── favicon.ico     # favicon图标
│   └── index.html      # html模板
├── src                 # 源代码
│   ├── api             # 所有请求
│   ├── assets          # 主题、样式、字体
│   ├── components      # 全局公共组件
│   ├── config          # 全局配置
│   ├── router          # 路由
│   ├── store           # 全局store管理
│   ├── styles          # 全局样式
│   ├── utils           # 公用方法
│   ├── views           # views所有页面
│   │    └──layout     # 导航栏、侧边栏、面包屑
│   ├── env.d.ts        # 声明
│   ├── main.ts         # 入口文件
│   ├── permission.ts   # 权限管理
│   └── App.vue         # 入口页面
├── .browserlistrc      # 浏览器兼容
├── .editorconfig       # 编辑器配置
├── .eslintrc.js        # eslint配置
├── .gitignore          # git忽略项
├── .prettierignore     # prettier忽略项
├── .prettierrc         # prettier配置
├── babel.config.js     # babel配置
├── package-lock.json   # package-lock.json
├── package.json        # package.json
├── README.md           # README.md
├── tsconfig.json       # ts配置
└── types.d.ts          # ts声明文件
└── vue.config.js       # vue配置
```

## 项目截图

![202401172231306](https://github.com/waite0603/vue3-ts-cms/assets/75354124/3e09664a-048d-4aef-a3fb-5f89145179db)

![screencapture-127-0-0-1-8080-index-2024-01-17-22_40_21](https://github.com/waite0603/vue3-ts-cms/assets/75354124/260e1117-817a-4989-bbdd-f927f1f899bf)

![202401172241971](https://github.com/waite0603/vue3-ts-cms/assets/75354124/265836bc-5e32-4d2f-87fb-5a294d8bc7ab)

![202401172242456](https://github.com/waite0603/vue3-ts-cms/assets/75354124/5940a7d8-2649-4e37-a958-aad22bafb249)

![screencapture-127-0-0-1-8080-index-room-2024-01-17-22_42_23](https://github.com/waite0603/vue3-ts-cms/assets/75354124/506dee19-d1b8-4b33-a142-42d3bd14a7e8)

![202401172242917](https://github.com/waite0603/vue3-ts-cms/assets/75354124/ee29fa1f-c72b-4211-8367-2bdfd5beb045)

![screencapture-127-0-0-1-8080-index-mine-2024-01-17-22_43_02](https://github.com/waite0603/vue3-ts-cms/assets/75354124/a5eff515-cc53-406e-9365-be088d99e250)

> 以上都是响应式布局, 适配移动端

![未标题-1](https://github.com/waite0603/vue3-ts-cms/assets/75354124/a3da11eb-dc97-4ba2-9d8d-4399a64fe86a)

## 可以提高的地方

1. 一开始想的是 Ts 的项目, 后来变成 `Ts<any>` 了, 规范点的写法应该在 src 底下建一个 types 文件夹, 根据模块去写对应的类型, 然后在 api 里面引入

2. 一些重复性的代码因为只是学习项目, 就没有去做

3. 一些用户体验的东西, 比如说上传图片中的 loading 之类的没有去做的很完善
