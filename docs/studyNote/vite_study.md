## 使用 Vite

#### 创建项目

```sh
npm init vite@latest 项目名称
```

支持的框架选 vue

> 当然除了 vue，vite 还支持 react 等其他框架，还可以选择有 js 还是 ts 语法进行开发

特点：创建速度很快，但是项目所依赖的包全部都没有下载

#### 启动项目

```
npm run dev
```

## 环境变量[¶](https://cn.vitejs.dev/config/#environment-variables)

环境变量通常可以从  `process.env`  获得。

::: caution
  Vite 默认是不加载  `.env`  文件的，因为这些文件需要在执行完 Vite 配置后才能确定加载哪一个。
  举个例子，`root`  和  `envDir`  选项会影响加载行为。不过当你的确需要时，你可以使用 Vite 导出的  `loadEnv`  函数来加载指定的  `.env`  文件。
:::


```js
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite 配置
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})
````

## 更改配置文件

通过 vite 创建的项目，可以在`vite.config.js`里面更改设置

### 开发服务器选项

以下代码来自 gva-admin 项目:

```js
server: {
      // 在开发服务器启动时自动在浏览器中打开应用程序。当此值为字符串时，会被用作 URL 的路径名。
      // 如果使用docker-compose开发模式，设置为false
      open: true,

      // 指定开发服务器端口,默认端口 5173 。
      // 注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是开发服务器最终监听的实际端口。
      port: process.env.VITE_CLI_PORT,

      // 为开发服务器配置自定义代理规则。
      proxy: {
        // 把key的路径代理到target位置
        // detail: https://cli.vuejs.org/config/#devserver-proxy
        [process.env.VITE_BASE_API]: {

          // 需要代理的路径   例如 '/api'
          target: `${process.env.VITE_BASE_PATH}:${process.env.VITE_SERVER_PORT}/`, // 代理到 目标路径

          changeOrigin: true, // 改变请求来源(欺骗后台你的请求是从 target里的目标路径 发出的)

          rewrite: (path) => path.replace(new RegExp("^" + process.env.VITE_BASE_API), ""),
        },
      },

    },
```

::: caution
  在 vite 原本的写法里是不支持想上面那样直接不写任何东西就从 .env.development 文件里读取环境变量的。

  gva-admin 项目里使用了 **dotenv** 模块，它可以将环境变量从 .env 文件加载到 process.env 中。
:::

#### dotenv

以下内容参考[知乎文章](https://zhuanlan.zhihu.com/p/520510298)

##### 使用

创建一个 Node.js 项目，在项目根目录创建.env 文件并添加下面内容：

```genshitext
S3_BUCKET="YOURS3BUCKET"
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

如果要在运行时通过  `process.env`获取 .env 文件中的值，就需要 dotenv 库在启动项目时来加载和解析 .env 文件内容并挂载到`process.env`对象上。

```js
require("dotenv").config(); // 调用 dotenv 里的 config 方法
console.log(process.env.S3_BUCKET); // YOURS3BUCKET
console.log(process.env.SECRET_KEY); // YOURSECRETKEYGOESHERE
```

##### 自定义解析内容

如果手动解析.env 文件内容，使用 dotenv 提供的核心函数 parse。

```js
const dotenv = require("dotenv");
// 或者使用 import 导入
// import * as dotenv from 'dotenv'

const envConfig = dotenv.parse('S3_BUCKET="YOURS3BUCKET"'); // 将返回一个对象
console.log(typeof envConfig, envConfig); // object { S3_BUCKET: 'YOURS3BUCKET' }

// 快速把对应的环境变量读取出来
for (const k in envConfig) {
  process.env[k] = envConfig[k];
}
```
