
### 数据库操作


参考文档
- [koa+typescript](https://juejin.cn/post/7198116097320976442#heading-25)


### 项目目录

|-- .env.development    生产环境配置
|-- .env.prod           开发环境配置
|-- .gitignore
|-- app.js              主入口配置，配置中间件
|-- package-lock.json
|-- package.json
|-- readme.md
|-- bin
|   |-- www
|-- config
|-- msvc                后端的主要逻辑
|   |-- controller      定义 数据库的增删改查
|   |-- core            数据库的初始化，连接
|   |-- model           定义了数据库表的结构
|   |-- service         目前没有使用到
|-- public
|-- routes              定义访问路由(定义过的路由需要app.js中导入)
|-- util                全局公共函数
|-- views

