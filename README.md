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

![](https://qiniu.waite.wang/202401172231306.png)

![](https://qiniu.waite.wang/202401172241004.png)

![](https://qiniu.waite.wang/202401172241971.png)

![](https://qiniu.waite.wang/202401172242456.png)

![](https://qiniu.waite.wang/202401172242665.png)

![](https://qiniu.waite.wang/202401172242917.png)

![](https://qiniu.waite.wang/202401172243347.png)

> 以上都是响应式布局, 适配移动端

## 可以提高的地方

1. 一开始想的是 Ts 的项目, 后来变成 `Ts<any>` 了, 规范点的写法应该在 src 底下建一个 types 文件夹, 根据模块去写对应的类型, 然后在 api 里面引入

2. 一些重复性的代码因为只是学习项目, 就没有去做

3. 一些用户体验的东西, 比如说上传图片中的 loading 之类的没有去做的很完善
