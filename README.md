[React全家桶 + TS - 全栈实战（一）](https://juejin.cn/post/7214472421113872442)

[React全家桶 + TS + Koa Server + MySQL - 全栈实战（二）](https://juejin.cn/post/7215213377094287416)

[Vue3全家桶 + TS + Koa Server + MySQL - 全栈实战（三）](https://juejin.cn/post/7216635223533535291)

[React SSR + TS + Koa Server + MySQL - 全栈实战（四）](https://juejin.cn/post/7218564871831339064)

[Vue3 SSR + TS + Koa Server + MongoDB - 全栈实战（五）]()

[React SSR + TS + Java SSM + MySQL - 全栈实战（六）]()

[React SSR + BFF + TS + Golang + MySQL - 全栈实战（七）]()

[React SSR + TS + Java SpringBoot + MySQL - 全栈实战（八）]()

[React SSR + BFF + TS + Python + MongoDB - 全栈实战（九）]()

[Vue3 SSR + BFF + TS + Python + MongoDB - 全栈实战（十）]()


# 需求
```
开发一个在线文档任务管理工具
```

> 纯手工从0到1编码，没有使用脚手架 <br/>
> 
> [项目GitHub地址](https://github.com/su-rm-rf/fe-step1)

> 运行: npm run dev <br/>
>
> 访问: http://localhost:8421/offline-todo

# 技术栈
```
前端：
  编辑器：VSCode
  源码管理：Git
  包管理器：Pnpm
  编译构建：Babel、Webpack
  语言：TypeScript
  框架：React
  路由：React-Router
  状态管理：Redux
  CSS处理器：Sass、Less、PostCSS
  UI框架：AntDesign
  单元测试：Jest
```

# 组织结构
```
build                       --- 构建脚本
dist                        --- 打包生成
public                      --- 公共资源
src
  components                --- UI组件
  containers                --- 容器组件
  constants                 --- 常量
  router                    --- 路由
  store                     
    actions                 --- action creators
    reducers                --- reducer
  styles                    --- 样式
  utils                     --- 工具
  App.tsx
  main.tsx
test                        --- 测试
.eslintrc
package.json
tsconfig.json
```

> component, container, store/action, store/reducer 都按照业务功能模块划分

# 技术拆解
```
响应式布局
使用localStorage实现本地任务管理
```

# TypeScript配置
```
{
  "compilerOptions": {
    "target": "ES5",
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": false,
    "skipLibCheck": true
  }
}
```

# 依赖项
```
webpack打包构建
  webpack webpack-cli webpack-dev-server webpack-merge
html
  html-webpack-plugin
css
  style-loader css-loader sass sass-loader less less-loader postcss postcss-loader postcss-preset-env mini-css-extract-plugin
typescript
react
  react react-dom react-router react-router-dom redux react-redux redux-thunk redux-logger
thread-loader
babel
  @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/preset-typescript
axios
UI
  ant-design echarts
test
  jest
eslint
@types/react @types/react-dom
cross-env nodemon ts-node
```

# 常见错误
```
Q: 找不到名称“div”。ts(2304)
Q: “App”表示值，但在此处用作类型。是否指“类型 App”?ts(2749)
A: 使用.tsx格式，而非.ts格式

无法使用 JSX，除非提供了 "--jsx" 标志。ts(17004)
```

# 性能优化
```
cacheDirectory 把转译结果缓存到文件系统中
@babel/plugin-transform-runtime 避免重复引入babel-runtime
```
