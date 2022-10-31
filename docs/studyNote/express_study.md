# Express



## 1、后端框架



## 2、express
- 创建项目目录
```cmd
mkdir hello
```

- 初始化项目
首先确保进入到新创建的项目目录中:
```cmd
cd hello
```

初始化项目:
```cmd
npm init --yes
```

项目初始化后，在项目目录下会产生一个 `package.json` 文件，该文件就是当前项目的描述文件。

- 安装`express`
确保已经进入到项目目录中，随后执行:
```cmd
npm install --save express
```
或
```cmd
npm install -S express
```
或
```
npm install express
```

这里的 `--save` 、`-S` 都表示将依赖安装到 `dependencies` 中。
新版的 npm 默认就是将依赖安装到  `dependencies` 中，因此可以省略 `--save` 、`-S`

- 创建 `app.js`
其中内容如下:
```js
// 导入 express 模块
const express = require('express');

const port = 3000;
// 通过调用 express 函数创建一个应用实例
const app = express();


// 当采用 GET 方式访问 / 时就调用第二个参数表示的函数
app.get( '/' , (req,resp) => {
    let content = `<h3>Hello,Express.</h3>`;
    resp.send( content );
});


// 监听指定的端口
app.listen( port );
```

- 创建脚本

在 `package.json` 中找到 `scripts` 节点，并在其中添加 `start` 脚本:
```json
  "scripts": {
    "start": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```
这里的 `nodemon` 是用来运行 `app.js` 的一个组件。
nodemon 是全局安装的一个组件:
```cmd
npm install -g nodemon
```
或者也可以通过以下方式安装:
```cmd
npm install --global nodemon
```

- 启动服务
可以通过运行 `start` 脚本来启动服务:
```cmd
npm run start
```
或者使用以下方式:
```cmd
npm start
```

## 3、配置

### 3.1、处理静态资源

通过 `express.static` 返回的中间件来处理静态资源:
```js
// 根据指定的目录名解析为绝对路径，并以此为静态资源根目录
const assets = path.resolve('public');
// 通过调用 express 的 static 函数来得到用于处理 静态资源的 中间件(middleware)
const staticMiddleware = express.static(assets);
// 在整个应用中启用 中间件(middleware)
app.use( staticMiddleware );
```

### 3.2、处理表单数据


#### 3.2.1、表单的提交方式

在浏览器中表单的提交方式可以是 GET 、POST :

```html
<form action="/register" method="post"></form>
<form action="/login" method="get"></form>
```


#### 3.2.2、表单的编码方式

因为通过 GET 方式提交表单时，表单中的数据是附着在 URL 中，通过 query string 形式传递的，所以不涉及 这里的 `enctype` 属性。

当通过 POST 方式提交表单时，enctype 属性值才有效。
- [菜鸟教程](https://www.runoob.com/tags/att-form-enctype.html)
- [w3school](https://www.w3school.com.cn/tags/att_form_enctype.asp)

#### 3.2.3、用中间件处理表单数据

##### 1、处理 `application/x-www-form-urlencoded` 编码
```js
// 获得可以处理 "application/x-www-form-urlencoded" 编码的请求体
const urlencodedMiddleware = express.urlencoded( { extended: true } );
// 在整个应用中启用 中间件(middleware)
app.use( urlencodedMiddleware );
```

##### 2、处理 `text/plain` 编码
```js
// 获得可以处理 "text/plain" 编码的请求体的中间件
const textPlainMiddleware = express.text();
app.use( textPlainMiddleware );
```

##### 3、处理 `multipart/form-data` 编码
下载multer组件`npm install multer`
真的不知道咋写笔记了。。看看这个链接里面的内容[韩老师上课内容](https://gitee.com/mozicoding/frameworks/blob/master/req/routes/explore.js)


## 4、路由
通过 客户端的 `请求方式` 和 `请求路径` 来确定应该调用哪个函数。

- 请求方式
在 HTTP 协议中，请求方式也称作 HTTP 动作 ( HTTP Action ) 。
在 HTTP 1.0 中，请求方式包括 GET 、POST、HEAD 。
在 HTTP 1.1 中，新增了 OPTIONS、PUT、DELETE、TRACE、CONNECT 
在中间件函数中可以通过 `req.method` 来获取请求方式。

- 请求路径
即用户发送请求时使用的地址，比如 `/login` 、`/register`

- 获取请求参数:
若要从POST表单中获取请求数据则可以通过 `req.body` 来实现
若要从`query string` 中获取请求数据则可以通过 `req.query` 来获取

`response.end()`跟`response.send()`作用类似，可以结束请求，括号里可以写想要显示在页面上的返回内容。
>注意：需要设置请求头(?)，不然返回内容会乱码。

`request.params`可以获得 通过 请求路径 传递的 参数 。返回字符串类型。
`response.redirect(路径)`可以重新定向到指定的路径

#### 获得请求内容

- `request.method`获得请求方式
- `request.url`获得请求路径
- `request.protocol` 获得http协议
- `req.httpVersion`获得http版本
- `request.head`获得请求头
- `request.body`获得请求体

#### 创建路由容器
创建一个路由容器 `let router = express.Router()`

## 5、文件管理
使用multer组件[csdn介绍](https://blog.csdn.net/heal_l/article/details/120074195)
[[files文件管理系统.js]]


### express-session模块原理

浏览器首次采用get方式访问`user/sign/in`时，因为get(user/sign/in)中使用了req.session，所以get(user/sign/in)除了渲染`views/user/sign-in.njk`页面外，还会将与session对应的一个cookie通过响应头发送到客户端
	相当于`resp.setHeader('set-cookie','cookie内容');`
浏览器在接收到服务端的响应后，首先将cookie保存至本地（浏览器端），然后将响应正文呈现在用户面前

当浏览器再次访问同一个站点时，就会通过请求头将已经保存的cookie回传给服务器
服务器如果接收到名称是SESSIONID（自己设置的cookie名称）的cookie，则寻找与之对应的session对象：
- 如果找到与SESSIONID对应的session对象，则认为该session对象就是当前浏览器端对应的 会话对象，此后与该浏览器端对应的所有请求都可以访问该session对象中的数据。
- 如果未找到与SESSIONID对应的session对象，则重新创建一个会话对象（session），并伴随本次响应重新向浏览器发送cookie。浏览器在接收到cookie后会保存至本地。

