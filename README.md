# express_restful_api
使用express 做RESTful API,用于客户端和服务器Json数据交互


![express-green](https://img.shields.io/badge/express-4.x-green.svg) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/78ade83a09cb4808baa1dce23bbc013b)](https://www.codacy.com/app/15919854639/express_restful_api?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=BB-Code/express_restful_api&amp;utm_campaign=Badge_Grade)

## 获取

```
git clone  https://github.com/BB-Code/express_restful_api.git
```

## 安装

``` bash
cd express_restful_api
```

- 安装依赖包

`npm install`

- 修改server.js里面的MongoDB链接数据信息,启动MongoDB服务

- 服务跑在 localhost:9090

```
node server.js
或者 
superivsor server.js
```

- 安装Postman,到网上下载Postman

### 提供的API方法
- Get        http://localhost:9090/api/fruits
- Post       http://localhost:9090/api/fruits
- Put        http://localhost:9090/api/fruits/:fruit_id
- delete     http://localhost:9090/api/fruits/:fruit_id

### 测试结果

![测试API](https://github.com/BB-Code/express_restful_api/blob/master/fruit.png)

