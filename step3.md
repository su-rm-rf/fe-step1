> 纯手工从0到1编码，没有使用脚手架 <br/>
> 
> [前端GitHub地址](https://github.com/su-rm-rf/fe-step1) <br/>
> [后端GitHub地址](https://github.com/su-rm-rf/node_server)

# 需求
```
开发一个TodoList任务管理工具
```

# 技术栈
```
前端：
  保留step2的全部代码，对项目组织结构进行重构
  在step2的基础上，对前端和后端分别进行重构
    使用Redux新写法
    
后端：
  Koa2
  TypeORM
  Mysql

```

# 后端组织结构
```
src
  constants            --- 常量
  controllers          --- 控制器
  db                   --- 数据库
  router               --- 路由
  utils                --- 工具
  server.ts
test
```