# 需求
```
开发一个在线文档任务管理工具
```

> 纯手工从0到1编码，没有使用脚手架 <br/>
> 
> [前端项目GitHub地址](https://github.com/su-rm-rf/fe-step1) <br/>
> [后端项目GitHub地址](https://github.com/su-rm-rf/node_server)

> 前端运行: npm run dev <br/>
> 后端运行: npm run server <br/>
>
> 访问: http://localhost:8421/todo

# 技术栈
```
前端：
  对项目结构进行重构
  直连Nodejs后端服务
    
后端：
  框架：Koa
  对象关系映射：TypeORM
  数据库：MySQL
```

# 后端组织结构
```
src
  constants             --- 常量
  controller            --- 控制器
  entity                --- 实体类
  router                --- 路由
  utils                 --- 工具
  data-source.ts        --- ORM配置
  server.ts             --- 入口文件
test
.env                    --- 环境变量
.eslintrc
package.json
tsconfig.json
```