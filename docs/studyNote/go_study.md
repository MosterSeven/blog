## go

自学视频参考[b 站](https://www.bilibili.com/video/BV1gf4y1r79E?p=4&vd_source=01a876ac89abd5ecb285dfd401b48a89)

go 是一种*编译型*、具有*静态类型*和*类 c 风格*语法的语言，并*具备垃圾回收机制*

go 是一个先编译后执行的语言，go 可以在编译阶段就发现问题而不需要等到运行到问题所在处才报错

### 基础的基础

#### 初见 main 函数

hello.go

```go
package main // 程序的包名

// 导包的方式1
import "fmt"
import "time"
// 导包的方式2 (推荐)
import (
	"fmt"
	"time"
)

// main函数
func main() { //函数的 { 一定是和函数名在同一行的,否则编译错误
	//golang中的表达式加不加分号都行,官方教程里没加分号
	fmt.Println("hello Go!")
	// 这个是睡眠程序,设定程序睡眠多久;这里是睡眠5s后执行结束
	//其中time.Second就是一个Duration类型，表示1s的时间间隔，乘系数5就得到5s的时间间隔
	time.Sleep(5 * time.Second)
}

```

把程序跑起来的话使用命令 `go run 文件名`即可

通过运行以下命令你可以看见这个零临时文件的位置：
`go run --work main.go`

如果你只想编译代码，使用`go build`：`go build main.go`
这会生成一个可执行文件`main`，你可以直接运行它。

> go 编译出来的内容最终都会变成机器码，也就是 01010101........

::: warning Caution 
    go在导入包的时候是比较严格的，如果导入的包没有被使用，那么程序不能被编译。
:::

#### 常见的四种变量声明方式

::: details info
    需要注意的是，go里面声明了的变量就需要使用，否则会报错
:::

test_var.go

```go
package main // 程序的包名

import (
	"fmt"
)

func main() {
	// 以下程序代码是写在省略号部分的
	.....
}
```

##### 方法一：声明一个变量 默认值为 0

```go
// var 关键字声明变量,a是变量名,int是数据类型
var a int

// 打印a的值
fmt.Println("a = ",a)
// 打印a的数据类型
fmt.Printf("type of a = %T\n",a)

-----结果-----------
a = 0
type of a = int
```

##### 方法二：声明一个变量 初始化一个值

```go
// var 关键字声明变量,b是变量名,int是数据类型,100是初始值
var b int = 100

// 打印b的值
fmt.Println("b = ",b)
// 打印b的数据类型
fmt.Printf("type of b = %T\n",b)

-----结果-----------
b = 100
type of b = int
```

##### 方法三：初始化省略数据类型

go 可以通过值自动匹配当前的变量的数据类型

```go
// var 关键字声明变量,c是变量名,200是初始值
var c = 200

// 打印c的值
fmt.Println("c = ",c)
// 打印c的数据类型
fmt.Printf("type of c = %T\n",c)

-----结果-----------
c = 200
type of c = int
```

##### 方法四：省略 var，使用`:=`直接自动匹配(常用)

```go
// d是变量名,200是初始值
d := 300
e := "abcde"

// 打印d的值
fmt.Println("d = ",d)
// 打印d的数据类型
fmt.Printf("type of d = %T\n",d)

// 打印e的值
fmt.Println("e = ",e)
// 打印e的数据类型
fmt.Printf("type of e = %T\n",e)

-----结果-----------
d = 300
type of d = int
e = abcde
type of e = string
```

#### 声明全局变量

```go
package main

import (
	"fmt"
)

// 方法一声明
var gA int
gA = 1000
// 方法二声明
var gB int = 2000
// 方法三声明
var gC = 3000

func main() {
	fmt.Println("gA = ",gA)
	fmt.Println("gB = ",gB)
	fmt.Println("gC = ",gC)
}
```

::: warning Caution 
    需要注意的是，使用方法四来声明全局变量的时候与使用方法一二三不同
    **方法四不支持声明全局变量！**
:::

如果直接使用`gD := 4000`来声明一个全局变量，报错：
`syntax error:non-declaration statement outside function body`

- 这是因为`:=`只能够用在**函数体内**来声明

#### 声明多个变量

##### 方式一：直接声明

```go
func main() {
	var xx,yy int = 100, 200
	fmt.Println("xx = ",xx,", yy = ",yy)
	var kk,ll = 100, "Aceld"
	fmt.Printin("kk = ",kk,", ll = ",ll)
}

------结果----------
xx = 100, yy = 200
kk = 100, ll = Aceld
```

##### 方式二：多行的多变量声明

```go
func main() {
	var (
	    vv int = 100
	    jj bool = true
	)
	fmt.Println("vv = ", vv, ", jj = ",jj)
}

------结果----------
vv = 100, jj = true
```

#### 声明函数

下面 3 个函数：一个没有返回值，一个返回一个值，一个返回 2 个值。

```go
func log(message string) {
}

func add(a int, b int) int {
}

func power(name string) (int, bool) {
}
```

我们常常这样使用最后一种函数：

```go
value, exists := power("goku")
if exists == false {
    ......
}
```

如果你只想获得返回值中的某个值，这种情况下，你可以将另外一个返回值赋给`_`:

```go
_, exists := power("goku")
    if exists == false {
    ......
}
```

这不仅仅是一种约定。`_`是一个空白标识符，尤其在用在返回值时它没有真正的赋值。
**你可以一直使用`_`，无论返回值是什么类型。**

如果函数的参数都是相同的类型，那么可以使用以下的简洁方式定义：

```go
func add(a, b int) int {

}
```

可以给函数返回值形参名，例如

```go
func foo(a string, b int) (r1 int, r2 int){
	...
}
```

#### const 常量

声明方式和一般的变量声明没区别，就是换了个关键字，跟 js 里的 const 含义一样（只读属性）

##### 关键字 iota

可以在`const()`里添加一个关键字`iota`，每行的 iota 都会累加 1，第一行的 iota 默认值是 0

> _注意一：_ `iota`的自增 1，是按**行**，**不是按照 iota 出现的次数** >_注意二：_ `iota`只能够配合`const()`一起便用，`iota`只有在 const 进行累加效果

###### 示例一：无任何处理

```go
const (
    BEIJING = 10*iota   // iota = 0
    SHANGHAI             // iota = 1
    SHENZHEN            // iota = 2
)

func main() {
	fmt.Println("BEIJING = ",BEIJING)
	fmt.Println("SHANGHAI = ",SHANGHAI)
	fmt.Println("SHENZHEN = ",SHENZHEN)
}

------结果----------
BEIJING = 0
SHANGHAI = 1
SHENZHEN = 2
```

###### 示例二：一行出现多个 iota

```go
const (
    a,b = iota+1, iota+2   // iota = 0
    c,d             // iota = 1
    e,f            // iota = 2
)

func main() {
	fmt.Println("a = ",a)
	fmt.Println("b = ",b)
	fmt.Println("c = ",c)
	fmt.Println("d = ",d)
	fmt.Println("e = ",e)
	fmt.Println("f = ",f)
}

------结果----------
a = 1
b = 2

c = 2
d = 3

e = 3
f = 4
```

###### 示例三：中途修改 iota 计算方法

```go
const (
    a,b = iota+1, iota+2      // iota = 0
    c,d                       // iota = 1
    e,f                       // iota = 2

	g,h = iota * 2, iota * 3  // iota = 3
	i,k                       // iota = 4
)

func main() {
	fmt.Println("a = ",a)
	fmt.Println("b = ",b)
	fmt.Println("c = ",c)
	fmt.Println("d = ",d)
	fmt.Println("e = ",e)
	fmt.Println("f = ",f)

	fmt.Println("g = ",g)
	fmt.Println("h = ",h)
	fmt.Println("i = ",i)
	fmt.Println("k = ",k)
}

------结果----------
a = 1
b = 2

c = 2
d = 3

e = 3
f = 4

g = 6
h = 9

i = 8
k = 12
```

#### if

`if`里可以不用把条件语句用`()`括起来

示例：

```go
if name == "Leto" {
    print("the spice must flow")
}

------------或--------------
if (name == "Goku" && power > 9000) || (name == "gohan" && power < 4000) {
    print("super Saiyan")
}
```
