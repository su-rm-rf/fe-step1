# 需求
```
开发一个单机网页版的TodoList任务管理工具
```

# 技术栈
```
编辑器：VSCode
源码管理：Git
包管理器：Pnpm
构建：Babel、Webpack
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
build
public
src
  actions
  components
  containers
  constants
  reducers
  router
  store
  style
  utils
test
```

# 技术拆解
```
使用localStorage进行本地存储管理
<!-- 做一个简易的Node.js服务端 -->
响应式布局
```

# 依赖项
```
webpack webpack-cli webpack-dev-server
html-webpack-plugin
style-loader css-loader sass sass-loader less less-loader postcss postcss-loader postcss-preset-env
typescript
react react-dom react-router react-router-dom redux react-redux redux-thunk redux-logger
thread-loader
@babel/core babel-loader @babel/preset-env @babel/preset-react @babel/plugin-transform-runtime @babel/preset-typescript
ant-design
axios
jest
@types/react @types/react-dom
cross-env nodemon ts-node
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

[GitHub地址](https://github.com/su-rm-rf/fe-step1)
