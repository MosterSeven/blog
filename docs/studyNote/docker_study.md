#### 学习物料

学习文档参考：[b 站 up 主-广州云科](https://docker.easydoc.net/)
学习视频参考：[Docker 1 小时快速上手教程，无废话纯干货](https://www.bilibili.com/video/BV11L411g7U1)

#### 从官方镜像安装软件

从 Docker 官方镜像仓库[https://hub.docker.com/](https://hub.docker.com/)安装 Redis
`docker run -d -p 6379:6379 --name redis redis:latest`

::: tip Note
   `docker run` - 表示 Docker 运行一个软件

    `-d`
    - 表示在后台运行

    `-p`
    - 端口映射：表示端口的暴露（把docker文件里的端口【容器的端口】6379暴露到宿主机6379）

    `--name redis`
    - 给容器命名为 redis

    `redis：latest`
    - 使用的是Redis的最新版本
:::

#### 自己 Build 镜像和运行

##### images 镜像打包

`docker build -t test:v1 .`


::: tip Note
   `docker build` - 表示 Docker 根据当前目录下的 Dockerfile 文件打包

    `-t test：v1`
    - 设置镜像名字为 `test` ，设置镜像版本号为v1

    `.`
    - 是 `./` 的省略写法，表示当前目录
:::

##### 运行 image 镜像

`docker run -p 8080:8080 --name test-hello test:v1`

> `-p`  映射容器内端口到宿主机  
> `--name`  容器名字  
> `-d`  后台运行  
> 命令参考文档：[https://docs.docker.com/engine/reference/run/](https://docs.docker.com/engine/reference/run/)

##### 更多相关命令

`docker ps`  查看当前运行中的容器

`docker images`  查看镜像列表

`docker rm container-id`  删除指定 id 的容器

`docker stop/start container-id`  停止/启动指定 id 的容器

`docker rmi image-id`  删除指定 id 的镜像

`docker volume ls`  查看 volume 列表

`docker network ls`  查看网络列表

#### Dockerfile 的编写

示例

```dockerfile
# 基于node11
FROM node:11
# 该指令设置生成的镜像的作者字段，可以换成更便捷的`LABEL`指令
MAINTAINER easydoc.net

# 复制代码，把当前文件目录下的所有文件复制到/app里
ADD . /app

# 设置容器启动后的默认运行目录（设置工作目录）
WORKDIR /app

# 运行命令，安装依赖
# RUN 命令可以有多个，但是可以用 && 连接多个命令来减少层级。
# 例如 RUN npm install && cd /app && mkdir logs
RUN npm install --registry=https://registry.npm.taobao.org

# CMD 指令只能一个，是容器启动后执行的命令，算是程序的入口。
# 如果还需要运行其他命令可以用 && 连接，也可以写成一个shell脚本去执行。
# 例如 CMD cd /app && ./start.sh
CMD node app.js

```

::: warning Caution 
   - 指令是不区分大小写的，不过习惯上他们是大写，以便于区分指令和参数 
   - Docker 按顺序运行 Dockerfile 中的指令 
   - 一个 Dockerfile 必须以 FROM 指令开始，这可能是在解析器指令、注释和全局范围的 ARG 之后 
   - FROM 指令指定了你要构建的父镜像 - FROM 前面只能有一个或多个 ARG 指令，这些指令声明了 Dockerfile 中 FROM 行使用的参数。 
   - Docker 将以#开头的行视为注释，除非该行是一个有效的分析器指令。一行中其他地方的#标记被视为参数。 
   - 这允许像这样的语句 `RUN echo 'we are running some # of cool things'`
:::

##### 实用小技巧

如果你写 Dockerfile 时经常遇到一些运行错误，依赖错误等，你可以直接运行一个**依赖的底**，然后进入终端进行配置环境，
成功后再把做过的步骤命令写道 Dockerfile 文件中，这样编写调试会快很多。

例如上面的底是`node:11`，
我们可以运行`docker run -it -d node:11 bash`，
跑起来后进入容器终端配置依赖的软件，然后尝试跑起来自己的软件，
最后把所有做过的步骤写入到 Dockerfile 就好了。

掌握好这个技巧，你的 Dockerfile 文件编写起来就非常的得心应手了。

#### 目录挂载

###### 现存问题

- 使用 Docker 运行后，我们改了项目代码不会立刻生效，需要重新`build`和`run`，很是麻烦。
- 容器里面产生的数据，例如 log 文件，数据库备份文件，容器删除后就丢失了。

> 使用目录挂载解决以上问题

##### 几种挂载方式

1.  `bind mount`  直接把宿主机目录映射到容器内，适合挂代码目录和配置文件。可挂到多个容器上
2.  `volume`  由容器创建和管理，创建在宿主机，所以删除容器不会丢失，官方推荐，更高效，Linux 文件系统，适合存储数据库数据。可挂到多个容器上
3.  `tmpfs mount`  适合存储临时文件，存宿主机内存中。不可多容器共享。

文档参考：[https://docs.docker.com/storage/](https://docs.docker.com/storage/)

![image.png](https://sjwx.easydoc.xyz/46901064/files/kv96dc4q.png)

##### 挂载演示

这里演示第一种和第二种挂载目录的方式

- `bind mount`  方式用绝对路径  `-v D:/code:/app`

`volume`  方式，只需要一个名字  `-v db-data:/app`

示例：  
`docker run -p 8080:8080 --name test-hello -v 绝对路径:/app -d test:v1`

::: tip Note
   `-v` - 把项目代码挂载到容器 `text-hello` 里的 `/app` 目录下
:::

#### 多容器通信

项目往往都不是独立运行的，需要数据库、缓存这些东西配合运作。

##### 创建虚拟网络

要想多容器之间互通，例如从一个 Web 容器访问一个 Redis 容器，我们只需要把他们放到同个网络中就可以了。

文档参考：[https://docs.docker.com/engine/reference/commandline/network/](https://docs.docker.com/engine/reference/commandline/network/)

###### 演示

1. 创建一个名为`test-net`的网络：

   - `docker network create test-net`

2. 在  `test-net`  网络中，使用最新的 redis 镜像运行名称为 redis 的容器，并指定该容器在 test-net 网络中的别名为`redis`

   - `docker run -d --name redis --network test-net --network-alias redis redis:latest`

3. 修改代码中访问`redis`的地址为网络别名
   ![image.png](https://sjwx.easydoc.xyz/46901064/files/kv98rfvb.png)

> 这个地方目前纯前端不太用得到，这个应该是写在后端的？这个测试项目应该是用 nodejs 写的后端

4. 运行 Web 项目，使用同个网络

   - `docker run -p 8080:8080 --name test -v D:/test:/app --network test-net -d test:v1`

5. 查看数据
   `http://localhost:8080/redis`  
   容器终端查看数据是否一致

##### 更多相关命令

`docker ps`  查看当前运行中的容器

- 后面加一个`-a`可以查看所有容器

`docker images`  查看镜像列表

`docker rm container-id`  删除指定 id 的容器

`docker stop/start container-id`  停止/启动指定 id 的容器

`docker rmi image-id`  删除指定 id 的镜像

`docker volume ls`  查看 volume 列表

`docker network ls`  查看网络列表

#### Docker-Compose

##### 现存问题

在上节，我们运行了两个容器：Web 项目 + Redis  
如果项目依赖更多的第三方软件，我们需要管理的容器就更加多，每个都要单独配置运行，指定网络。  
这节，我们使用 docker-compose 把项目的多个服务集合到一起，一键运行。

##### 安装 Docker Compose

- 如果你是安装的桌面版 Docker，不需要额外安装，已经包含了。
- 如果是没图形界面的服务器版 Docker，你需要单独安装  [安装文档](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)
- 运行`docker-compose`检查是否安装成功

##### 编写脚本

要把项目依赖的多个服务集合到一起，我们需要编写一个`docker-compose.yml`文件，描述依赖哪些服务。

参考文档：[https://docs.docker.com/compose/](https://docs.docker.com/compose/)

```yml
# 版本号
version: "3.7"
# 需要依赖的服务
services:
	# web项目
	app:
		build: ./
		# 从容器里暴露一个端口出来
		ports:
			- 80:8080
		# 把当前目录挂载到app目录下
		volumes:
			- ./:/app
		# 设置时区（默认时区不是北京时间）
		environment:
			- TZ=Asia/Shanghai
	# redis
	redis:
		# 直接使用redis镜像，就不需要build了
		image: redis:5.0.13
		# 把redis目录挂载到app目录下（？这个没看懂）
		volumes:
			- redis:/data
		environment:
			- TZ=Asia/Shanghai
	volumes:
		redis:
```

> 容器默认时间不是北京时间，增加 TZ=Asia/Shanghai 可以改为北京时间

##### 运行脚本

在`docker-compose.yml`  文件所在目录，执行：`docker-compose up`就可以跑起来了。  
命令参考：[https://docs.docker.com/compose/reference/up/](https://docs.docker.com/compose/reference/up/)

在后台运行只需要加一个 -d 参数`docker-compose up -d`

##### 更多相关命令

查看运行状态：`docker-compose ps`

停止运行：`docker-compose stop`

重启：`docker-compose restart`

重启单个服务：`docker-compose restart service-name`

进入容器命令行：`docker-compose exec service-name sh`

查看容器运行 log：`docker-compose logs [service-name]`

#### 发布和部署镜像

##### 镜像仓库介绍

镜像仓库用来存储我们 build 出来的“安装包”，Docker 官方提供了一个  [镜像库](https://hub.docker.com/)，里面包含了大量镜像，基本各种软件所需依赖都有，要什么直接上去搜索。

我们也可以把自己 build 出来的镜像上传到 docker 提供的镜像库中，方便传播。  
当然你也可以搭建自己的私有镜像库，或者使用国内各种大厂提供的镜像托管服务，例如：阿里云、腾讯云

> 这个地方我就不过多了解了，这个就是教你怎么把自己打好的镜像放到镜像仓库里并从仓库中部署，需要的话自己看[文档](https://docker.easydoc.net/doc/81170005/cCewZWoN/UlEl1cy7)

#### 备份和迁移数据

##### 迁移方式介绍

容器中的数据，如果没有用挂载目录，删除容器后就会丢失数据。  
前面我们已经讲解了如何  [挂载目录](doc:kze7f0ZR)

如果使用`bind mount`直接把宿主机的目录挂进去容器，那迁移数据很方便，直接复制目录就好了

如果使用`volume`方式挂载的，由于数据是由容器创建和管理的，需要用特殊的方式把数据弄出来。

##### 备份和导入 Volume 的流程

备份：

- 运行一个 ubuntu 的容器，挂载需要备份的 volume 到容器，并且挂载宿主机目录到容器里的备份目录。
- 运行 tar 命令把数据压缩为一个文件
- 把备份文件复制到需要导入的机器

导入：

- 运行 ubuntu 容器，挂载容器的 volume，并且挂载宿主机备份文件所在目录到容器里
- 运行 tar 命令解压备份文件到指定目录

##### 演示：备份 MongoDB 数据

- 运行一个 mongodb，创建一个名叫`mongo-data`的 volume 指向容器的 /data 目录  
  `docker run -p 27018:27017 --name mongo -v mongo-data:/data -d mongo:4.4`

- 运行一个 Ubuntu 的容器，挂载`mongo`容器的所有 volume，映射宿主机的 backup 目录到容器里面的 /backup 目录，然后运行 tar 命令把数据压缩打包  
  `docker run --rm --volumes-from mongo -v d:/backup:/backup ubuntu tar cvf /backup/backup.tar /data/`

::: tip Note
    `--rm` - 表示如果存在同名容器,那么会先把这个同名容器删除

    `--volumes-from mongo`
    - 表示从名为 `mongo` 的容器里挂载volume

    `-v d:/backup:/backup`
    - 表示指定一个绝对路径 `d:/backup` ，把宿主机的此目录指向容器里的 `/backup` 目录

    `ubuntu`
    - 使用Ubuntu镜像

    `tar cvf /backup/backup.tar /data/`
    - 使用 `tar` 命令把 `/data/` 这个目录压缩，放在 `/backup/backup.tar` 位置并命名压缩包为 `backup.tar`
:::

最后你就可以拿着这个 backup.tar 文件去其他地方导入了。

##### 演示：恢复 Volume 数据

- 运行一个 ubuntu 容器，挂载 mongo 容器的所有 volumes，然后读取 /backup 目录中的备份文件，解压到 /data/ 目录  
  `docker run --rm --volumes-from mongo -v d:/backup:/backup ubuntu bash -c "cd /data/ && tar xvf /backup/backup.tar --strip 1"`

> 注意，volumes-from 指定的是容器名字  
> strip 1 表示解压时去掉前面 1 层目录，因为压缩时包含了绝对路径

::: tip Note
   `bash -c`
   - 表示执行“”里的脚本命令

   `&&`
   - 是多个命令之间的连接符

   `tar xvf /backup/backup.tar --strip 1`
   - 表示解压目录在 `/backup/backup.tar` 的文件
   - `tar xvf` 可以解压缩任何格式（？）的压缩包
   - `--strip 1` 表示解压的时候改变目录结构
:::

### gva 后台的 Dockerfile 解读

```sh
# 阶段一：搭建构建环境

# 声明镜像来源为node:16-----------【tag1】
FROM node:16

# 声明工作目录
WORKDIR /gva_web/

# 拷贝整个web项目到当前工作目录
COPY . .

# 使用yarn进行安装依赖
RUN yarn && yarn build
# 如果是npm就换成下面这个命令
RUN npm i && npm run build


# 阶段二：搭建最小运行环境

# 声明镜像来源为nginx:alpine, alpine 镜像小
FROM nginx:alpine

# 表明镜像编写者及邮箱（不重要）
LABEL MAINTAINER="SliverHorn@sliver_horn@qq.com"

# 从gva自带的.docker-compose/nginx/conf.d/目录拷贝my.conf到容器内的/etc/nginx/conf.d/my.conf目录下
COPY .docker-compose/nginx/conf.d/my.conf /etc/nginx/conf.d/my.conf

# 从第一阶段进行拷贝文件
COPY --from=0 /gva_web/dist /usr/share/nginx/html

# 查看/etc/nginx/nginx.conf文件-----------【tag2】
RUN cat /etc/nginx/nginx.conf

# 查看 /etc/nginx/conf.d/my.conf-----------【tag2】
RUN cat /etc/nginx/conf.d/my.conf

# 查看 文件是否拷贝成功-----------【tag2】
RUN ls -al /usr/share/nginx/html
```

###### TAG1：FROM...AS 构建阶段命名

`FROM` 指令后面可以增加一个 `AS` 参数，可为该构建阶段命名，便于后续构建阶段引用

```sh
FROM image[:tag | @digest] AS stage-name
```

###### TAG2：多行 RUN 命令合并

```sh
RUN cat /etc/nginx/nginx.conf  \
    && cat /etc/nginx/conf.d/my.conf  \
    && ls -al /usr/share/nginx/html
```

###### TAG3：`COPY` 指令后参数

在后续阶段的 COPY 指令后面增加了--from 参数，指明引用前面哪一个构建阶段的成果，格式如下：

```sh
COPY --from=stage-name ...
```

##### 多阶段构建

在应用了容器技术的软件开发过程中，控制容器镜像的大小可是一件费时费力的事情。

如果我们构建的镜像既是编译软件的环境，又是软件最终的运行环境，这是很难控制镜像大小的。
所以常见的配置模式为：分别为软件的编译环境和运行环境提供不同的容器镜像。

比如为编译环境提供一个 Dockerfile.build，用它构建的镜像包含了编译软件需要的所有内容，比如代码、SDK、工具等等。
同时为软件的运行环境提供另外一个单独的 Dockerfile，它从 Dockerfile.build 中获得编译好的软件，用它构建的镜像只包含运行软件所必须的内容。
这种情况被称为构造者模式(builder pattern)，

在编写 Dockerfile 构建 docker 镜像时，常遇到以下问题：

RUN 命令会让镜像新增 layer，导致镜像变大，虽然通过&&连接多个命令能缓解此问题，但如果命令之间用到 docker 指令例如 COPY、WORKDIR 等，依然会导致多个 layer；

有些工具在构建过程中会用到，但是最终的镜像是不需要的（例如用 maven 编译构建 java 工程），这要求 Dockerfile 的编写者花更多精力来清理这些工具，清理的过程又可能导致新的 layer；

为了解决上述问题，从 17.05 版本开始 Docker 在构建镜像时增加了新特性：多阶段构建(multi-stage builds)，将构建过程分为多个阶段，每个阶段都可以指定一个基础镜像，这样在一个 Dockerfile 就能将多个镜像的特性同时用到。

##### 问题合集

Q：为什么使用 `docker build -t 镜像名 .` 命令打包后会出现两个 docker image？

A：因为使用了多阶段构建。Dockerfile 中以 `FROM` 行开头的每个块都会创建一个新镜像。如果使用 `docker build -t` 选项，则只有最后一个阶段会使用您指定的名称进行标记；其余块将在 `<none>` 输出之类的地方显示为 `docker images` 。
