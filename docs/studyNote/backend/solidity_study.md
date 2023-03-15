## 基本概念

### 状态变量

状态变量是被**永久地**保存在合约中的，也就是说它们被写入以太币区块链中（想象成写入一个数据库）。

```solidity
contract Example {
  // 这个无符号整数将会永久的被保存在区块链中
  uint myUnsignedInteger = 100;
}
```

### 全局变量

全局变量是全局范围工作的变量，都是`solidity`预留关键字。他们可以在函数内不声明直接使用：

下面是一些常用的全局变量，更完整的列表请看这个[链接](https://learnblockchain.cn/docs/solidity/units-and-global-variables.html#special-variables-and-functions)：

-   `blockhash(uint blockNumber)`
	- (`bytes32`)给定区块的哈希值 – 只适用于256最近区块, 不包含当前区块。
-   `block.coinbase`: (`address payable`)
	- 当前区块矿工的地址
-   `block.gaslimit`: (`uint`)
	- 当前区块的gaslimit
-   `block.number`: (`uint`)
	- 当前区块的number
-   `block.timestamp`: (`uint`)
	- 当前区块的时间戳，为unix纪元以来的秒
-   `gasleft()`: (`uint256`)
	- 剩余 gas
-   `msg.data`: (`bytes calldata`)
	- 完整call data
-   `msg.sender`: (`address payable`)
	- 消息发送者 (当前 caller)
-   `msg.sig`: (`bytes4`)
	- calldata的前四个字节 (function identifier)
-   `msg.value`: (`uint`)
	- 当前交易发送的`wei`值

#### msg.sender

`msg.sender` 指的是当前调用者（或智能合约）的 `address`。

> 注意：在 Solidity 中，功能执行始终需要从外部调用者开始。 一个合约只会在区块链上什么也不做，除非有人调用其中的函数。所以 `msg.sender`总是存在的。

以下是使用 `msg.sender` 来更新 `mapping` 的例子：

```sol
mapping (address => uint) favoriteNumber;

function setMyNumber(uint _myNumber) public {
  // 更新我们的 `favoriteNumber` 映射来将 `_myNumber`存储在 `msg.sender`名下
  favoriteNumber[msg.sender] = _myNumber;
  // 存储数据至映射的方法和将数据存储在数组相似
}

function whatIsMyNumber() public view returns (uint) {
  // 拿到存储在调用者地址名下的值
  // 若调用者还没调用 setMyNumber， 则值为 `0`
  return favoriteNumber[msg.sender];
}
```

在这个小小的例子中，任何人都可以调用 `setMyNumber` 在我们的合约中存下一个 `uint` 并且与他们的地址相绑定。 然后，他们调用 `whatIsMyNumber` 就会返回他们存储的 `uint`。

使用 `msg.sender` 很安全，因为它具有以太坊区块链的安全保障 —— 除非窃取与以太坊地址相关联的私钥，否则是没有办法修改其他人的数据的。


### 数据类型

#### 无符号整数: `uint`

`uint` 无符号数据类型， 指**其值不能是负数**，对于有符号的整数存在名为 `int` 的数据类型。

> 注: Solidity中， `uint` 实际上是 `uint256`代名词， 一个256位的无符号整数。你也可以定义位数少的uints — `uint8`， `uint16`， `uint32`， 等…… 但一般来讲你愿意使用简单的 `uint`， 除非在某些特殊情况下，这我们后面会讲。

#### 字符串: `string`

字符串用于保存任意长度的 UTF-8 编码数据。 如： `string greeting = "Hello world!"`。

> 注: Solidity中， `uint` 实际上是 `uint256`代名词， 一个256位的无符号整数。你也可以定义位数少的uints — `uint8`， `uint16`， `uint32`， 等…… 但一般来讲你愿意使用简单的 `uint`， 除非在某些特殊情况下，这我们后面会讲。


### 数学运算

在 Solidity 中，数学运算很直观明了，与其它程序设计语言相同:

-   加法: `x + y`
-   减法: `x - y`,
-   乘法: `x * y`
-   除法: `x / y`
-   取模 / 求余: `x % y` _(例如, `13 % 5` 余 `3`, 因为13除以5，余3)_

Solidity 还支持 **_乘方操作_** (如：x 的 y次方） // 例如： 5 ** 2 = 25

```
uint x = 5 ** 2; // equal to 5^2 = 25
```


### 数组

Solidity 支持两种数组: **静态**数组 和 **动态**数组

```
// 固定长度为2的静态数组:
uint[2] fixedArray;
// 固定长度为5的string类型的静态数组:
string[5] stringArray;
// 动态数组，长度不固定，可以动态添加元素:
uint[] dynamicArray;
```

你也可以建立一个 **结构体类型**的数组

```
Person[] people; // 这是动态数组，我们可以不断添加元素
```

> 记住：状态变量被==永久保存==在区块链中。所以在你的合约中创建动态数组来保存成结构的数据是非常有意义的。

#### 公共数组

你可以定义 `public` 数组, Solidity 会自动创建 **_getter_** 方法. 语法如下:

```
Person[] public people;
```

其它的合约**可以**从这个数组**读取**数据（但*不能写入*数据），所以这在合约中是一个有用的保存公共数据的模式。

### 结构体

有时你需要更复杂的数据类型，Solidity 提供了 **结构体**:

```
struct Person {
  uint age;
  string name;
}
```

结构体允许你生成一个更复杂的数据类型，它有*多个属性*。

### 使用结构体和数组

```
struct Person {
  uint age;
  string name;
}

Person[] public people;
```

现在我们创建新的 `Person` 结构，然后把它加入到名为 `people` 的数组中

```
// 创建一个新的Person:
Person satoshi = Person(172, "Satoshi");

// 将新创建的satoshi添加进people数组:
people.push(satoshi);
```

你也可以两步并一步，用一行代码更简洁:

```
people.push(Person(16, "Vitalik"));
```

> 注：`array.push()` 在数组的 **尾部** 加入新元素 ，所以元素在数组中的顺序就是我们添加的顺序（和 JS 里一样）

```
uint[] numbers;
numbers.push(5);
numbers.push(10);
numbers.push(15);
// numbers is now equal to [5, 10, 15]
```


### Addresses （地址）

以太坊区块链由 **account** (账户)组成，你可以把它想象成银行账户。一个帐户的余额是 **_以太_** （在以太坊区块链上使用的币种）。
你可以和其他帐户之间支付和接受以太币，就像你的银行帐户可以电汇资金到其他银行帐户一样。

每个帐户都有一个“地址”，你可以把它想象成银行账号。这是账户唯一的标识符，它看起来长这样：

`0x0cE446255506E92DF41614C46F1d6df9Cc969183`

（这是 CryptoZombies 团队的地址，如果你喜欢 CryptoZombies 的话，请打赏我们一些以太币！😉）

我们将在后面的课程中介绍地址的细节，现在你只需要了解**地址属于特定用户（或智能合约）的**。

所以我们可以指定“地址”作为僵尸主人的 ID。当用户通过与我们的应用程序交互来创建新的僵尸时，新僵尸的所有权被设置到调用者的以太坊地址下。

### Mapping（映射）

在前面我们看到了 *结构体 和 *数组* 。 **映射** 是另一种在 Solidity 中存储有组织数据的方法。

映射是这样定义的：

```
//对于金融应用程序，将用户的余额保存在一个 uint类型的变量中：
mapping (address => uint) public accountBalance;
//或者可以用来通过userId 存储/查找的用户名
mapping (uint => string) userIdToName;
```

映射本质上是存储和查找数据所用的键-值对。在第一个例子中，键是一个 `address`，值是一个 `uint`，在第二个例子中，键是一个`uint`，值是一个 `string`。



## 函数

### 定义函数

在 Solidity 中函数定义的句法如下:

```
function eatHamburgers(string _name, uint _amount) {
    // ...
}
```

这是一个名为 `eatHamburgers` 的函数，它接受两个参数：一个 `string`类型的 和 一个 `uint`类型的。现在函数内部还是空的。

> 注：: 习惯上函数里的**变量都是以( `_` )开头** (但不是硬性规定) 以区别全局变量。

### 私有 / 公共函数

Solidity 定义的函数的属性默认为`公共`。 这就意味着任何一方 (或其它合约) 都可以调用你合约里的函数。

显然，不是什么时候都需要这样，而且这样的合约易于受到攻击。 所以将自己的函数定义为`私有`是一个好的编程习惯，只有当你需要外部世界调用它时才将它设置为`公共`。

如何定义一个私有的函数呢？

```
uint[] numbers;

function _addToArray(uint _number) private {
  numbers.push(_number);
}
```

这意味着只有我们合约中的其它函数才能够调用这个函数，给 `numbers` 数组添加新成员。

可以看到，在函数名字后面使用关键字 `private` 即可。和函数的参数类似，私有函数的名字用( `_` )起始。


### 函数返回值

要想函数返回一个数值，按如下定义：

```
string greeting = "What's up dog";

function sayHello() public returns (string) {
  return greeting;
}
```

Solidity 里，函数的定义里可包含返回值的数据类型(如本例中 `string`)。

### 函数修饰符

#### view 和 pure

上面的函数实际上没有改变 Solidity 里的状态，即，它没有改变任何值或者写任何东西。

这种情况下我们可以把函数定义为 **_view_**, 意味着它==只能读取数据不能更改数据==

```
function sayHello() public view returns (string) {
```

Solidity 还支持 **_pure_** 函数, 表明这个函数甚至都不访问应用里的数据，例如：

```
function _multiply(uint a, uint b) private pure returns (uint) {
  return a * b;
}
```

这个函数甚至都不读取应用里的状态 — 它的返回值完全取决于它的输入参数，在这种情况下我们把函数定义为 **_pure_**.

> 注：可能很难记住何时把函数标记为 pure/view。 幸运的是， Solidity 编辑器会给出提示，提醒你使用这些修饰符。


#### internal 和 external

除 `public` 和 `private` 属性之外，Solidity 还使用了另外两个描述函数可见性的修饰词：`internal`（内部） 和 `external`（外部）。

`internal` 和 `private` 类似，不过， 如果某个合约继承自其父合约，这个合约即可以访问父合约中定义的“内部”函数。（嘿，这听起来正是我们想要的那样！）。

`external` 与`public` 类似，只不过这些函数只能在合约之外调用 - 它们不能被合约内的其他函数调用。稍后我们将讨论什么时候使用 `external` 和 `public`。

声明函数 `internal` 或 `external` 类型的语法，与声明 `private` 和 `public` 类型相同：

```
contract Sandwich {
  uint private sandwichesEaten = 0;

  function eat() internal {
    sandwichesEaten++;
  }
}

contract BLT is Sandwich {
  uint private baconSandwichesEaten = 0;

  function eatWithBacon() public returns (string) {
    baconSandwichesEaten++;
    // 因为eat() 是internal 的，所以我们能在这里调用
    eat();
  }
}
```


### Keccak256 伪随机数

如何让函数返回一个全(半) 随机的 `uint`?

Ethereum 内部有一个散列函数`keccak256`，它用了SHA3版本。一个散列函数基本上就是把一个字符串转换为一个256位的16进制数字。字符串的一个微小变化会引起散列数据极大变化。

这在 Ethereum 中有很多应用，但是现在我们只是用它造一个伪随机数。

例子:

```
//6e91ec6b618bb462a4a6ee5aa2cb0e9cf30f7a052bb467b0ba58b8748c00d2e5
keccak256("aaaab");
//b1f078126895a1424524de5321b339ab00408010b7cf0e6ed451514981e58aa9
keccak256("aaaac");
```

显而易见，输入字符串只改变了一个字母，输出就已经天壤之别了。

> 注: 在区块链中==安全地==产生一个随机数是一个很难的问题， 本例的方法不安全，但是在我们的Zombie DNA算法里不是那么重要，已经很好地满足我们的需要了。

## 类型转换

有时你需要变换数据类型。例如:

```
uint8 a = 5;
uint b = 6;
// 将会抛出错误，因为 a * b 返回 uint, 而不是 uint8:
uint8 c = a * b;
// 我们需要将 b 转换为 uint8:
uint8 c = a * uint8(b);
```

上面, `a * b` 返回类型是 `uint`, 但是当我们尝试用 `uint8` 类型接收时, 就会造成潜在的错误。如果把它的数据类型转换为 `uint8`, 就可以了，编译器也不会出错。


## 事件

我们的合约几乎就要完成了！让我们加上一个**事件**

**事件** 是合约和区块链通讯的一种机制。你的前端应用“监听”某些事件，并做出反应。

例子:

```
// 这里建立事件
event IntegersAdded(uint x, uint y, uint result);

function add(uint _x, uint _y) public {
  uint result = _x + _y;
  //触发事件，通知app
  IntegersAdded(_x, _y, result);
  return result;
}
```

你的 app 前端可以监听这个事件。JavaScript 实现如下:

```js
YourContract.IntegersAdded(function(error, result) {
  // ...
})
```


## Web3.js

我们的 Solidity 合约完工了！ 现在我们要写一段 JavaScript 前端代码来调用这个合约。

以太坊有一个 JavaScript 库，名为**Web3.js**。

在后面的课程里，我们会进一步地教你如何安装一个合约，如何设置 Web3.js 。 但是现在我们通过一段代码来了解 Web3.js 是如何和我们发布的合约交互的吧。

如果下面的代码你不能全都理解，不用担心。

```js
// 下面是调用合约的方式:
var abi = /* abi是由编译器生成的 */
var ZombieFactoryContract = web3.eth.contract(abi)
var contractAddress = /* 发布之后在以太坊上生成的合约地址 */
var ZombieFactory = ZombieFactoryContract.at(contractAddress)
// `ZombieFactory` 能访问公共的函数以及事件

// 某个监听文本输入的监听器:
$("#ourButton").click(function(e) {
  var name = $("#nameInput").val()
  //调用合约的 `createRandomZombie` 函数:
  ZombieFactory.createRandomZombie(name)
})

// 监听 `NewZombie` 事件, 并且更新UI
var event = ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  generateZombie(result.zombieId, result.name, result.dna)
})

// 获取 Zombie 的 dna, 更新图像
function generateZombie(id, name, dna) {
  let dnaStr = String(dna)
  // 如果dna少于16位,在它前面用0补上
  while (dnaStr.length < 16)
    dnaStr = "0" + dnaStr

  let zombieDetails = {
    // 前两位数构成头部.我们可能有7种头部, 所以 % 7
    // 得到的数在0-6,再加上1,数的范围变成1-7
    // 通过这样计算：
    headChoice: dnaStr.substring(0, 2) % 7 + 1，
    // 我们得到的图片名称从head1.png 到 head7.png

    // 接下来的两位数构成眼睛, 眼睛变化就对11取模:
    eyeChoice: dnaStr.substring(2, 4) % 11 + 1,
    // 再接下来的两位数构成衣服，衣服变化就对6取模:
    shirtChoice: dnaStr.substring(4, 6) % 6 + 1,
    //最后6位控制颜色. 用css选择器: hue-rotate来更新
    // 360度:
    skinColorChoice: parseInt(dnaStr.substring(6, 8) / 100 * 360),
    eyeColorChoice: parseInt(dnaStr.substring(8, 10) / 100 * 360),
    clothesColorChoice: parseInt(dnaStr.substring(10, 12) / 100 * 360),
    zombieName: name,
    zombieDescription: "A Level 1 CryptoZombie",
  }
  return zombieDetails
}
```

我们的 JavaScript 所做的就是获取由`zombieDetails` 产生的数据, 并且利用浏览器里的 JavaScript 神奇功能 (我们用 Vue.js)，置换出图像以及使用CSS过滤器。在后面的课程中，你可以看到全部的代码。



## Require

 `require`使得函数在执行过程中，当不满足某些条件时抛出错误，并停止执行：

```
function sayHiToVitalik(string _name) public returns (string) {
  // 比较 _name 是否等于 "Vitalik". 如果不成立，抛出异常并终止程序
  require(keccak256(_name) == keccak256("Vitalik"));
  // 如果返回 true, 运行如下语句
  return "Hi!";
}
```

如果你这样调用函数 `sayHiToVitalik（“Vitalik”）` ,它会返回“Hi！”。而如果调用的时候使用了其他参数，它则会抛出错误并停止执行。

因此，在调用一个函数之前，用 `require` 验证前置条件是非常有必要的。

> 注意： Solidity 并==不支持原生的字符串比较==, 我们只能通过比较两个字符串的 keccak256 哈希值来进行判断)

## 继承（Inheritance）

当代码过于冗长的时候，最好将代码和逻辑分拆到多个不同的合约中，以便于管理。

有个让 Solidity 的代码易于管理的功能，就是合约 **_inheritance_** (继承)：

```
contract Doge {
  function catchphrase() public returns (string) {
    return "So Wow CryptoDoge";
  }
}

contract BabyDoge is Doge {
  function anotherCatchphrase() public returns (string) {
    return "Such Moon BabyDoge";
  }
}
```

由于 `BabyDoge` 是从 `Doge` 那里 **_inherits_** （继承)过来的。 这意味着当你编译和部署了 `BabyDoge`，它将可以访问 `catchphrase()` 和 `anotherCatchphrase()`和其他我们在 `Doge` 中定义的其他公共函数。

这可以用于逻辑继承（比如表达子类的时候，`Cat` 是一种 `Animal`）。 但也可以简单地将类似的逻辑组合到不同的合约中以组织代码。

## 导入（Import）

在 Solidity 中，当你有多个文件并且想把一个文件导入另一个文件时，可以使用 `import` 语句：

```
import "./someothercontract.sol";

contract newContract is SomeOtherContract {
	// ...
}
```



## 变量存储

在 Solidity 中，有两个地方可以存储变量 —— `storage` 或 `memory`。

**_Storage_** 变量是指==永久存储==在区块链中的变量。 **_Memory_** 变量则是临时的，当外部函数对某合约调用完成时，内存型变量即被移除。 你可以把它想象成存储在你电脑的硬盘或是RAM中数据的关系。

大多数时候你都用不到这些关键字，默认情况下 Solidity 会自动处理它们。 

*状态变量*（在函数之外声明的变量）默认为“存储”形式，并永久写入区块链；而在函数内部声明的变量是“内存”型的，它们函数调用结束后消失。

> 然而也有一些情况下，你需要手动声明存储类型，主要用于处理函数内的 **结构体** 和 **数组** 时：

```
contract SandwichFactory {
  struct Sandwich {
    string name;
    string status;
  }

  Sandwich[] sandwiches;

  function eatSandwich(uint _index) public {
    // Sandwich mySandwich = sandwiches[_index];
    // ^ 看上去很直接，不过 Solidity 将会给出警告
    // 告诉你应该明确在这里定义 `storage` 或者 `memory`。

    // 所以你应该明确定义 `storage`:
    Sandwich storage mySandwich = sandwiches[_index];
    // ...这里 `mySandwich` 是指向 `sandwiches[_index]`的指针
    mySandwich.status = "Eaten!";
    // ^这将永久把 `sandwiches[_index]` 变为区块链上的存储

    // 如果你只想要一个副本，可以使用`memory`:
    Sandwich memory anotherSandwich = sandwiches[_index + 1];
    // ...这样 `anotherSandwich` 就仅仅是一个内存里的副本了
    anotherSandwich.status = "Eaten!";
    // ^这将仅仅修改临时变量，对 `sandwiches[_index + 1]` 没有任何影响
    // 不过你可以这样做:
    sandwiches[_index + 1] = anotherSandwich;
    // ...如果你想把副本的改动保存回区块链存储
  }
}
```

如果你还没有完全理解究竟应该使用哪一个，也不用担心 —— 在本教程中，我们将告诉你何时使用 `storage` 或是 `memory`，并且当你不得不使用到这些关键字的时候，Solidity 编译器也发警示提醒你的。

现在，只要知道在某些场合下也需要你显式地声明 `storage` 或 `memory`就够了！

还有一个 **_Calldata_** 类型,也是存在内存里面。与`memory`的不同点在于`calldata`变量不能修改（`immutable`），一般用于函数的参数。

例子：

```
function fCalldata(uint[] calldata _x) public pure returns(uint[] calldata){        
	//参数为calldata数组，不能被修改        
	// _x[0] = 0 //这样修改会报错        
	return(_x);    
}
```


在不同存储类型相互赋值时候，有时会产生独立的副本（修改新变量不会影响原变量），有时会产生引用（修改新变量会影响原变量）。规则如下：

1.  `storage`（合约的状态变量）赋值给本地 `storage`（函数里的）时候，会创建引用，改变新变量会影响原变量。

2.  `storage` 赋值给 `memory` ，会创建独立的复本，修改其中一个不会影响另一个；反之亦然。

3.  `memory` 赋值给 `memory` ，会创建引用，改变新变量会影响原变量。

4.  其他情况，变量赋值给 `storage` ，会创建独立的复本，修改其中一个不会影响另一个。


## 与其他合约的交互

如果我们的合约需要和区块链上的其他的合约会话，则需先定义一个 **_interface_** (接口)。

先举一个简单的栗子。 假设在区块链上有这么一个合约：

```
contract LuckyNumber {
  mapping(address => uint) numbers;

  function setNum(uint _num) public {
    numbers[msg.sender] = _num;
  }

  function getNum(address _myAddress) public view returns (uint) {
    return numbers[_myAddress];
  }
}
```

这是个很简单的合约，您可以用它存储自己的幸运号码，并将其与您的以太坊地址关联。 这样其他人就可以通过您的地址查找您的幸运号码了。

现在假设我们有一个外部合约，使用 `getNum` 函数可读取其中的数据。

首先，我们定义 `LuckyNumber` 合约的 **_interface_** ：

```
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}
```

请注意，这个过程虽然看起来像在定义一个合约，但其实内里不同：

首先，我们只声明了要与之交互的函数 —— 在本例中为 `getNum` —— 在其中我们没有使用到任何其他的函数或状态变量。

其次，我们并没有使用大括号（`{` 和 `}`）定义函数体，我们单单用分号（`;`）结束了函数声明。这使它看起来像一个合约框架。

编译器就是靠这些特征认出它是一个接口的。

在我们的 app 代码中使用这个接口，合约就知道其他合约的函数是怎样的，应该如何调用，以及可期待什么类型的返回值。

在下一课中，我们将真正调用其他合约的函数。目前我们只要声明一个接口，用于调用 CryptoKitties 合约就行了。

## 使用接口

继续前面 `NumberInterface` 的例子，我们既然将接口定义为：

```
contract NumberInterface {
  function getNum(address _myAddress) public view returns (uint);
}
```

我们可以在合约中这样使用：

```
contract MyContract {
  address NumberInterfaceAddress = 0xab38...;
  // ^ 这是FavoriteNumber合约在以太坊上的地址
  NumberInterface numberContract = NumberInterface(NumberInterfaceAddress);
  // 现在变量 `numberContract` 指向另一个合约对象
  // (即: 使用 NumberInterfaceAddress 初始化)

  function someFunction() public {
    // 现在我们可以调用在那个合约中声明的 `getNum`函数:
    uint num = numberContract.getNum(msg.sender);
    // ...在这儿使用 `num`变量做些什么
  }
}
```

通过这种方式，只要将您合约的可见性设置为`public`(公共)或`external`(外部)，它们就可以与以太坊区块链上的任何其他合约进行交互。

## 处理多返回值

`getKitty`
```
contract KittyInterface {
	function getKitty(uint256 _id) external view returns (
		bool isGestating,
		bool isReady,
		uint256 cooldownIndex,
		uint256 nextActionAt,
		uint256 siringWithId,
		uint256 birthTime,
		uint256 matronId,
		uint256 sireId,
		uint256 generation,
		uint256 genes
	);
}
```

`getKitty` 是我们所看到的第一个返回多个值的函数。我们来看看是如何处理的：

```
function multipleReturns() internal returns(uint a, uint b, uint c) {
  return (1, 2, 3);
}

function processMultipleReturns() external {
  uint a;
  uint b;
  uint c;
  // 这样来做批量赋值:
  (a, b, c) = multipleReturns();
}

// 或者如果我们只想返回其中一个变量:
function getLastReturnValue() external {
  uint c;
  // 可以对其他字段留空:
  // 感觉这里有点类似解构赋值那种
  (,,c) = multipleReturns();
}
```

## if 语句

if语句的语法在 Solidity 中，与在 JavaScript 中差不多：

```
function eatBLT(string sandwich) public {
  // 看清楚了，当我们比较字符串的时候，需要比较他们的 keccak256 哈希码
  if (keccak256(sandwich) == keccak256("BLT")) {
    eat();
  }
}
```

## JavaScript 实现

我们只用编译和部署 `ZombieFeeding`，就可以将这个合约部署到以太坊了。我们最终完成的这个合约继承自 `ZombieFactory`，因此它可以访问自己和父辈合约中的所有 public 方法。

我们来看一个与我们的刚部署的合约进行交互的例子， 这个例子使用了 JavaScript 和 web3.js：

```
var abi = /* abi generated by the compiler */
var ZombieFeedingContract = web3.eth.contract(abi)
var contractAddress = /* our contract address on Ethereum after deploying */
var ZombieFeeding = ZombieFeedingContract.at(contractAddress)

// 假设我们有我们的僵尸ID和要攻击的猫咪ID
let zombieId = 1;
let kittyId = 1;

// 要拿到猫咪的DNA，我们需要调用它的API。这些数据保存在它们的服务器上而不是区块链上。
// 如果一切都在区块链上，我们就不用担心它们的服务器挂了，或者它们修改了API，
// 或者因为不喜欢我们的僵尸游戏而封杀了我们
let apiUrl = "https://api.cryptokitties.co/kitties/" + kittyId
$.get(apiUrl, function(data) {
  let imgUrl = data.image_url
  // 一些显示图片的代码
})

// 当用户点击一只猫咪的时候:
$(".kittyImage").click(function(e) {
  // 调用我们合约的 `feedOnKitty` 函数
  ZombieFeeding.feedOnKitty(zombieId, kittyId)
})

// 侦听来自我们合约的新僵尸事件好来处理
ZombieFactory.NewZombie(function(error, result) {
  if (error) return
  // 这个函数用来显示僵尸:
  generateZombie(result.zombieId, result.name, result.dna)
})
```


## 第1章: 智能协议的永固性

到现在为止，我们讲的 Solidity 和其他语言没有质的区别，它长得也很像 JavaScript。

但是，在有几点以太坊上的 DApp 跟普通的应用程序有着天壤之别。

第一个例子，在你把智能协议传上以太坊之后，它就变得**_不可更改_**, 这种永固性意味着你的代码永远不能被调整或更新。

你编译的程序会一直，永久的，不可更改的，存在以太坊上。这就是 Solidity 代码的安全性如此重要的一个原因。如果你的智能协议有任何漏洞，即使你发现了也无法补救。你只能让你的用户们放弃这个智能协议，然后转移到一个新的修复后的合约上。

但这恰好也是智能合约的一大优势。代码说明一切。如果你去读智能合约的代码，并验证它，你会发现，一旦函数被定义下来，每一次的运行，程序都会严格遵照函数中原有的代码逻辑一丝不苟地执行，完全不用担心函数被人篡改而得到意外的结果。

## 外部依赖关系

在第2课中，我们将加密小猫（CryptoKitties）合约的地址硬编码到 DApp 中去了。有没有想过，如果加密小猫出了点问题，比方说，集体消失了会怎么样？ 虽然这种事情几乎不可能发生，但是，如果小猫没了，我们的 DApp 也会随之失效 -- 因为我们在 DApp 的代码中用“硬编码”的方式指定了加密小猫的地址，如果这个根据地址找不到小猫，我们的僵尸也就吃不到小猫了，而按照前面的描述，我们却没法修改合约去应付这个变化！

因此，我们不能硬编码，而要采用“函数”，以便于 DApp 的关键部分可以以参数形式修改。

比方说，我们不再一开始就把猎物地址给写入代码，而是写个函数 `setKittyContractAddress`, 运行时再设定猎物的地址，这样我们就可以随时去锁定新的猎物，也不用担心加密小猫集体消失了。


如果一个函数的可见性申明为“外部的”（`external`），任何人都可以调用它！ 也就是说，任何调用该函数的人都可以更改 CryptoKitties 合约的地址，使得其他人都没法再运行我们的程序了。

我们确实是希望这个地址能够在合约中修改，但我可没说让每个人去改它呀。

要对付这样的情况，通常的做法是指定合约的“所有权” - 就是说，给它指定一个主人（没错，就是您），只有主人对它享有特权。

## OpenZeppelin库的`Ownable` 合约

下面是一个 `Ownable` 合约的例子： 来自 **_ OpenZeppelin _** Solidity 库的 `Ownable` 合约。 OpenZeppelin 是主打安保和社区审查的智能合约库，您可以在自己的 DApps中引用。等把这一课学完，您不要催我们发布下一课，最好利用这个时间把 OpenZeppelin 的网站看看，保管您会学到很多东西！

把楼下这个合约读读通，是不是还有些没见过代码？别担心，我们随后会解释。

```
/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
  address public owner;
  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  function Ownable() public {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }
}
```

下面有没有您没学过的东东？

-   构造函数：`function Ownable()`是一个 **_ constructor_** (构造函数)，构造函数不是必须的，它与合约同名，构造函数一生中唯一的一次执行，就是在合约最初被创建的时候。
    
-   函数修饰符：`modifier onlyOwner()`。 修饰符跟函数很类似，不过是用来修饰其他已有函数用的， 在其他语句执行前，为它检查下先验条件。 在这个例子中，我们就可以写个修饰符 `onlyOwner` 检查下调用者，确保只有合约的主人才能运行本函数。我们下一章中会详细讲述修饰符，以及那个奇怪的`_;`。
    
-   `indexed` 关键字：别担心，我们还用不到它。
    

所以`Ownable` 合约基本都会这么干：

1.  合约创建，构造函数先行，将其 `owner` 设置为`msg.sender`（其部署者）
    
2.  为它加上一个修饰符 `onlyOwner`，它会限制陌生人的访问，将访问某些函数的权限锁定在 `owner` 上。
    
3.  允许将合约所有权转让给他人。

`onlyOwner` 简直人见人爱，大多数人开发自己的 Solidity DApps，都是从复制/粘贴 `Ownable` 开始的，从它再继承出的子类，并在之上进行功能开发。

既然我们想把 `setKittyContractAddress` 限制为 `onlyOwner` ，我们也要做同样的事情。

## 函数修饰符

函数修饰符看起来跟函数没什么不同，不过关键字`modifier` 告诉编译器，这是个`modifier(修饰符)`，而不是个`function(函数)`。它不能像函数那样被直接调用，只能被添加到函数定义的末尾，用以改变函数的行为。

咱们仔细读读 `onlyOwner`:

```
/**
 * @dev 调用者不是‘主人’，就会抛出异常
 */
modifier onlyOwner() {
  require(msg.sender == owner);
  _;
}
```

`onlyOwner` 函数修饰符是这么用的：

```
contract MyContract is Ownable {
  event LaughManiacally(string laughter);

  //注意！ `onlyOwner`上场 :
  function likeABoss() external onlyOwner {
    LaughManiacally("Muahahahaha");
  }
}
```

注意 `likeABoss` 函数上的 `onlyOwner` 修饰符。 当你调用 `likeABoss` 时，**首先执行** `onlyOwner` 中的代码， 执行到 `onlyOwner` 中的 `_;` 语句时，程序再返回并执行 `likeABoss` 中的代码。

可见，尽管函数修饰符也可以应用到各种场合，但最常见的还是放在函数执行之前添加快速的 `require`检查。

因为给函数添加了修饰符 `onlyOwner`，使得**唯有合约的主人**（也就是部署者）才能调用它。

> 注意：主人对合约享有的特权当然是正当的，不过也可能被恶意使用。比如，万一，主人添加了个后门，允许他偷走别人的僵尸呢？

> 所以非常重要的是，部署在以太坊上的 DApp，并不能保证它真正做到去中心，你需要阅读并理解它的源代码，才能防止其中没有被部署者恶意植入后门；作为开发人员，如何做到既要给自己留下修复 bug 的余地，又要尽量地放权给使用者，以便让他们放心你，从而愿意把数据放在你的 DApp 中，这确实需要个微妙的平衡。


## 第4章: Gas

厉害！现在我们懂了如何在禁止第三方修改我们的合约的同时，留个后门给咱们自己去修改。

让我们来看另一种使得 Solidity 编程语言与众不同的特征：

### Gas - 驱动以太坊DApps的能源

在 Solidity 中，你的用户想要每次执行你的 DApp 都需要支付一定的 **_gas_**，gas 可以用以太币购买，因此，用户每次跑 DApp 都得花费以太币。

一个 DApp 收取多少 gas 取决于功能逻辑的复杂程度。每个操作背后，都在计算完成这个操作所需要的计算资源，（比如，存储数据就比做个加法运算贵得多）， 一次操作所需要花费的 **_gas_** 等于这个操作背后的所有运算花销的总和。

由于运行你的程序需要花费用户的真金白银，在以太坊中代码的编程语言，比其他任何编程语言都更强调优化。同样的功能，使用笨拙的代码开发的程序，比起经过精巧优化的代码来，运行花费更高，这显然会给成千上万的用户带来大量不必要的开销。

### 为什么要用 **_gas_** 来驱动？

以太坊就像一个巨大、缓慢、但非常安全的电脑。当你运行一个程序的时候，网络上的每一个节点都在进行相同的运算，以验证它的输出 —— 这就是所谓的“去中心化” 由于数以千计的节点同时在验证着每个功能的运行，这可以确保它的数据不会被被监控，或者被刻意修改。

可能会有用户用无限循环堵塞网络，抑或用密集运算来占用大量的网络资源，为了防止这种事情的发生，以太坊的创建者为以太坊上的资源制定了价格，想要在以太坊上运算或者存储，你需要先付费。

> 注意：如果你使用侧链，倒是不一定需要付费，比如咱们在 Loom Network 上构建的 CryptoZombies 就免费。你不会想要在以太坊主网上玩儿“魔兽世界”吧？ - 所需要的 gas 可能会买到你破产。但是你可以找个算法理念不同的侧链来玩它。我们将在以后的课程中咱们会讨论到，什么样的 DApp 应该部署在太坊主链上，什么又最好放在侧链。

### 省 gas 的招数：结构封装 （Struct packing）

在第1课中，我们提到除了基本版的 `uint` 外，还有其他变种 `uint`：`uint8`，`uint16`，`uint32`等。

通常情况下我们不会考虑使用 `uint` 变种，因为无论如何定义 `uint`的大小，Solidity 为它保留256位的存储空间。例如，使用 `uint8` 而不是`uint`（`uint256`）不会为你节省任何 gas。

除非，把 `uint` 绑定到 `struct` 里面。

如果一个 `struct` 中有多个 `uint`，则尽可能使用较小的 `uint`, Solidity 会将这些 `uint` 打包在一起，从而占用较少的存储空间。例如：

```
struct NormalStruct {
  uint a;
  uint b;
  uint c;
}

struct MiniMe {
  uint32 a;
  uint32 b;
  uint c;
}

// 因为使用了结构打包，`mini` 比 `normal` 占用的空间更少
NormalStruct normal = NormalStruct(10, 20, 30);
MiniMe mini = MiniMe(10, 20, 30); 
```

所以，当 `uint` 定义在一个 `struct` 中的时候，尽量使用最小的整数子类型以节约空间。 并且把同样类型的变量放一起（即在 struct 中将把变量按照类型依次放置），这样 Solidity 可以将存储空间最小化。例如，有两个 `struct`：

`uint c; uint32 a; uint32 b;` 和 `uint32 a; uint c; uint32 b;`

前者比后者需要的gas更少，因为前者把`uint32`放一起了。

## 第5章: 时间单位

`level` 属性表示僵尸的级别。以后，在我们创建的战斗系统中，打胜仗的僵尸会逐渐升级并获得更多的能力。

`readyTime` 稍微复杂点。我们希望增加一个“冷却周期”，表示僵尸在两次猎食或攻击之之间必须等待的时间。如果没有它，僵尸每天可能会攻击和繁殖1,000次，这样游戏就太简单了。

为了记录僵尸在下一次进击前需要等待的时间，我们使用了 Solidity 的时间单位。

### 时间单位

Solidity 使用自己的本地时间单位。

变量 `now` 将返回当前的unix时间戳（自1970年1月1日以来经过的秒数）， `now` 返回类型是 `uint256` 。
> 注意：Unix时间传统用一个32位的整数进行存储。这会导致“2038年”问题，当这个32位的unix时间戳不够用，产生溢出，使用这个时间的遗留系统就麻烦了。所以，如果我们想让我们的 DApp 跑够20年，我们可以使用64位整数表示时间，但为此我们的用户又得支付更多的 gas。真是个两难的设计啊！

Solidity 还包含`秒(seconds)`，`分钟(minutes)`，`小时(hours)`，`天(days)`，`周(weeks)` 和 `年(years)` 等时间单位。它们都会转换成对应的秒数放入 `uint` 中。所以 `1分钟` 就是 `60`，`1小时`是 `3600`（60秒×60分钟），`1天`是`86400`（24小时×60分钟×60秒），以此类推。

下面是一些使用时间单位的实用案例：

```
uint lastUpdated;

// 将‘上次更新时间’ 设置为 ‘现在’
function updateTimestamp() public {
  lastUpdated = now;
}

// 如果到上次`updateTimestamp` 超过5分钟，返回 'true'
// 不到5分钟返回 'false'
function fiveMinutesHavePassed() public view returns (bool) {
  return (now >= (lastUpdated + 5 minutes));
}
```

有了这些工具，我们可以为僵尸设定“冷静时间”功能。

## 将结构体作为参数传入

由于结构体的存储指针可以以参数的方式传递给一个 `private` 或 `internal` 的函数，因此结构体可以在多个函数之间相互传递。

遵循这样的语法：

```
function _doStuff(Zombie storage _zombie) internal {
  // do stuff with _zombie
}
```

这样我们可以将某僵尸的引用直接传递给一个函数，而不用是通过参数传入僵尸ID后，函数再依据ID去查找。

## 第7章: 公有函数和安全性

现在来修改 `feedAndMultiply` ，实现冷却周期。

回顾一下这个函数，前一课上我们将其可见性设置为`public`。你必须仔细地检查所有声明为 `public` 和 `external`的函数，一个个排除用户滥用它们的可能，谨防安全漏洞。请记住，如果这些函数没有类似 `onlyOwner` 这样的函数修饰符，用户能利用各种可能的参数去调用它们。

检查完这个函数，用户就可以直接调用这个它，并传入他们所希望的 `_targetDna` 或 `species` 。打个游戏还得遵循这么多的规则，还能不能愉快地玩耍啊！

仔细观察，这个函数只需被 `feedOnKitty()` 调用，因此，想要防止漏洞，最简单的方法就是设其可见性为 `internal`。

### 带参数的函数修饰符

之前我们已经读过一个简单的函数修饰符了：`onlyOwner`。函数修饰符也可以带参数。例如：

```
// 存储用户年龄的映射
mapping (uint => uint) public age;

// 限定用户年龄的修饰符
modifier olderThan(uint _age, uint _userId) {
  require(age[_userId] >= _age);
  _;
}

// 必须年满16周岁才允许开车 (至少在美国是这样的).
// 我们可以用如下参数调用`olderThan` 修饰符:
function driveCar(uint _userId) public olderThan(16, _userId) {
  // 其余的程序逻辑
}
```

看到了吧， `olderThan` 修饰符可以像函数一样接收参数，是“宿主”函数 `driveCar` 把参数传递给它的修饰符的。

来，我们自己生产一个修饰符，通过传入的`level`参数来限制僵尸使用某些特殊功能。

### “view” 函数不花 “gas”

当玩家从外部调用一个`view`函数，是不需要支付一分 gas 的。

这是因为 `view` 函数不会真正改变区块链上的任何数据 - 它们只是读取。因此用 `view` 标记一个函数，意味着告诉 `web3.js`，运行这个函数只需要查询你的本地以太坊节点，而不需要在区块链上创建一个事务（事务需要运行在每个节点上，因此花费 gas）。

稍后我们将介绍如何在自己的节点上设置 web3.js。但现在，你关键是要记住，在所能只读的函数上标记上表示“只读”的“`external view` 声明，就能为你的玩家减少在 DApp 中 gas 用量。

> 注意：如果一个 `view` 函数在另一个函数的内部被调用，而调用函数与 `view` 函数的不属于同一个合约，也会产生调用成本。这是因为如果主调函数在以太坊创建了一个事务，它仍然需要逐个节点去验证。所以标记为 `view` 的函数只有在外部调用时才是免费的。


## 第11章: 存储非常昂贵

Solidity 使用`storage`(存储)是相当昂贵的，”写入“操作尤其贵。

这是因为，无论是写入还是更改一段数据， 这都将永久性地写入区块链。”永久性“啊！需要在全球数千个节点的硬盘上存入这些数据，随着区块链的增长，拷贝份数更多，存储量也就越大。这是需要成本的！

为了降低成本，不到万不得已，避免将数据写入存储。这也会导致效率低下的编程逻辑 - 比如每次调用一个函数，都需要在 `memory`(内存) 中重建一个数组，而不是简单地将上次计算的数组给存储下来以便快速查找。

在大多数编程语言中，遍历大数据集合都是昂贵的。但是在 Solidity 中，使用一个标记了`external view`的函数，遍历比 `storage` 要便宜太多，因为 `view` 函数不会产生任何花销。 （gas可是真金白银啊！）。

我们将在下一章讨论`for`循环，现在我们来看一下看如何如何在内存中声明数组。

### 在内存中声明数组

在数组后面加上 `memory`关键字， 表明这个数组是仅仅在内存中创建，不需要写入外部存储，并且在函数调用结束时它就解散了。与在程序结束时把数据保存进 `storage` 的做法相比，内存运算可以大大节省gas开销 -- 把这数组放在`view`里用，完全不用花钱。

以下是申明一个内存数组的例子：

```
function getArray() external pure returns(uint[]) {
  // 初始化一个长度为3的内存数组
  uint[] memory values = new uint[](3);
  // 赋值
  values.push(1);
  values.push(2);
  values.push(3);
  // 返回数组
  return values;
}
```

这个小例子展示了一些语法规则，下一章中，我们将通过一个实际用例，展示它和 `for` 循环结合的做法。

> 注意：内存数组 **必须** 用长度参数（在本例中为`3`）创建。目前不支持 `array.push()`之类的方法调整数组大小，在未来的版本可能会支持长度修改。

## 第12章: For 循环

在之前的章节中，我们提到过，函数中使用的数组是运行时在内存中通过 `for` 循环实时构建，而不是预先建立在存储中的。

为什么要这样做呢？

为了实现 `getZombiesByOwner` 函数，一种“无脑式”的解决方案是在 `ZombieFactory` 中存入”主人“和”僵尸军团“的映射。

```
mapping (address => uint[]) public ownerToZombies
```

然后我们每次创建新僵尸时，执行 `ownerToZombies [owner] .push（zombieId）` 将其添加到主人的僵尸数组中。而 `getZombiesByOwner` 函数也非常简单：

```
function getZombiesByOwner(address _owner) external view returns (uint[]) {
  return ownerToZombies[_owner];
}
```

### 这个做法有问题

做法倒是简单。可是如果我们需要一个函数来把一头僵尸转移到另一个主人名下（我们一定会在后面的课程中实现的），又会发生什么？

这个“换主”函数要做到：

1.将僵尸push到新主人的 `ownerToZombies` 数组中， 2.从旧主的 `ownerToZombies` 数组中移除僵尸， 3.将旧主僵尸数组中“换主僵尸”之后的的每头僵尸都往前挪一位，把挪走“换主僵尸”后留下的“空槽”填上， 4.将数组长度减1。

但是第三步实在是太贵了！因为每挪动一头僵尸，我们都要执行一次写操作。如果一个主人有20头僵尸，而第一头被挪走了，那为了保持数组的顺序，我们得做19个写操作。

由于写入存储是 Solidity 中最费 gas 的操作之一，使得换主函数的每次调用都非常昂贵。更糟糕的是，每次调用的时候花费的 gas 都不同！具体还取决于用户在原主军团中的僵尸头数，以及移走的僵尸所在的位置。以至于用户都不知道应该支付多少 gas。

> 注意：当然，我们也可以把数组中最后一个僵尸往前挪来填补空槽，并将数组长度减少一。但这样每做一笔交易，都会改变僵尸军团的秩序。

由于从外部调用一个 `view` 函数是免费的，我们也可以在 `getZombiesByOwner` 函数中用一个for循环遍历整个僵尸数组，把属于某个主人的僵尸挑出来构建出僵尸数组。那么我们的 `transfer` 函数将会便宜得多，因为我们不需要挪动存储里的僵尸数组重新排序，总体上这个方法会更便宜，虽然有点反直觉。

### 使用 `for` 循环

`for`循环的语法在 Solidity 和 JavaScript 中类似。

来看一个创建偶数数组的例子：

```
function getEvens() pure external returns(uint[]) {
  uint[] memory evens = new uint[](5);
  // 在新数组中记录序列号
  uint counter = 0;
  // 在循环从1迭代到10：
  for (uint i = 1; i <= 10; i++) {
    // 如果 `i` 是偶数...
    if (i % 2 == 0) {
      // 把它加入偶数数组
      evens[counter] = i;
      //索引加一， 指向下一个空的‘even’
      counter++;
    }
  }
  return evens;
}
```

这个函数将返回一个形为 `[2,4,6,8,10]` 的数组。


## 第1章: 可支付

截至目前，我们只接触到很少的 **_函数修饰符_**。 要记住所有的东西很难，所以我们来个概览：

1.  我们有决定函数何时和被谁调用的可见性修饰符: `private` 意味着它只能被合约内部调用； `internal` 就像 `private` 但是也能被继承的合约调用； `external` 只能从合约外部调用；最后 `public` 可以在任何地方调用，不管是内部还是外部。
    
2.  我们也有状态修饰符， 告诉我们函数如何和区块链交互: `view` 告诉我们运行这个函数不会更改和保存任何数据； `pure` 告诉我们这个函数不但不会往区块链写数据，它甚至不从区块链读取数据。这两种在被从合约外部调用的时候都不花费任何gas（但是它们在被内部其他函数调用的时候将会耗费gas）。
    
3.  然后我们有了自定义的 `modifiers`，例如在第三课学习的: `onlyOwner` 和 `aboveLevel`。 对于这些修饰符我们可以自定义其对函数的约束逻辑。
    

这些修饰符可以同时作用于一个函数定义上：

```
function test() external view onlyOwner anotherModifier { /* ... */ }
```

在这一章，我们来学习一个新的修饰符 `payable`.

### `payable` 修饰符

`payable` 方法是让 Solidity 和以太坊变得如此酷的一部分 —— 它们是一种可以接收以太的特殊函数。

先放一下。当你在调用一个普通网站服务器上的API函数的时候，你无法用你的函数传送美元——你也不能传送比特币。

但是在以太坊中， 因为钱 (_以太_), 数据 (_事务负载_)， 以及合约代码本身都存在于以太坊。你可以在同时调用函数 **并**付钱给另外一个合约。

这就允许出现很多有趣的逻辑， 比如向一个合约要求支付一定的钱来运行一个函数。

### 例子

```
contract OnlineStore {
  function buySomething() external payable {
    // 检查以确定0.001以太发送出去来运行函数:
    require(msg.value == 0.001 ether);
    // 如果为真，一些用来向函数调用者发送数字内容的逻辑
    transferThing(msg.sender);
  }
}
```

在这里，`msg.value` 是一种可以查看向合约发送了多少以太的方法，另外 `ether` 是一个內建单元。

这里发生的事是，一些人会从 web3.js 调用这个函数 (从DApp的前端)， 像这样 :

```
// 假设 `OnlineStore` 在以太坊上指向你的合约:
OnlineStore.buySomething().send(from: web3.eth.defaultAccount, value: web3.utils.toWei(0.001))
```

注意这个 `value` 字段， JavaScript 调用来指定发送多少(0.001)`以太`。如果把事务想象成一个信封，你发送到函数的参数就是信的内容。 添加一个 `value` 很像在信封里面放钱 —— 信件内容和钱同时发送给了接收者。

> 注意： 如果一个函数没标记为`payable`， 而你尝试利用上面的方法发送以太，函数将拒绝你的事务。


## 第2章: 提现

在上一章，我们学习了如何向合约发送以太，那么在发送之后会发生什么呢？

在你发送以太之后，它将被存储进以合约的以太坊账户中， 并冻结在哪里 —— 除非你添加一个函数来从合约中把以太提现。

你可以写一个函数来从合约中提现以太，类似这样：

```
contract GetPaid is Ownable {
  function withdraw() external onlyOwner {
    owner.transfer(this.balance);
  }
}
```

注意我们使用 `Ownable` 合约中的 `owner` 和 `onlyOwner`，假定它已经被引入了。

你可以通过 `transfer` 函数向一个地址发送以太， 然后 `this.balance` 将返回当前合约存储了多少以太。 所以如果100个用户每人向我们支付1以太， `this.balance` 将是100以太。

你可以通过 `transfer` 向任何以太坊地址付钱。 比如，你可以有一个函数在 `msg.sender` 超额付款的时候给他们退钱：

```
uint itemFee = 0.001 ether;
msg.sender.transfer(msg.value - itemFee);
```

或者在一个有卖家和卖家的合约中， 你可以把卖家的地址存储起来， 当有人买了它的东西的时候，把买家支付的钱发送给它 `seller.transfer(msg.value)`。

有很多例子来展示什么让以太坊编程如此之酷 —— 你可以拥有一个不被任何人控制的去中心化市场。


## 用 `keccak256` 来制造随机数。

Solidity 中最好的随机数生成器是 `keccak256` 哈希函数.

我们可以这样来生成一些随机数

```
// 生成一个0到100的随机数:
uint randNonce = 0;
uint random = uint(keccak256(now, msg.sender, randNonce)) % 100;
randNonce++;
uint random2 = uint(keccak256(now, msg.sender, randNonce)) % 100;
```

这个方法首先拿到 `now` 的时间戳、 `msg.sender`、 以及一个自增数 `nonce` （一个仅会被使用一次的数，这样我们就不会对相同的输入值调用一次以上哈希函数了）。

然后利用 `keccak` 把输入的值转变为一个哈希值, 再将哈希值转换为 `uint`, 然后利用 `% 100` 来取最后两位, 就生成了一个0到100之间随机数了。

### 这个方法很容易被不诚实的节点攻击

在以太坊上, 当你在和一个合约上调用函数的时候, 你会把它广播给一个节点或者在网络上的 **_transaction_** 节点们。 网络上的节点将收集很多事务, 试着成为第一个解决计算密集型数学问题的人，作为“工作证明”，然后将“工作证明”(Proof of Work, PoW)和事务一起作为一个 **_block_** 发布在网络上。

一旦一个节点解决了一个PoW, 其他节点就会停止尝试解决这个 PoW, 并验证其他节点的事务列表是有效的，然后接受这个节点转而尝试解决下一个节点。

**这就让我们的随机数函数变得可利用了**

我们假设我们有一个硬币翻转合约——正面你赢双倍钱，反面你输掉所有的钱。假如它使用上面的方法来决定是正面还是反面 (`random >= 50` 算正面, `random < 50` 算反面)。

如果我正运行一个节点，我可以 **只对我自己的节点** 发布一个事务，且不分享它。 我可以运行硬币翻转方法来偷窥我的输赢 — 如果我输了，我就不把这个事务包含进我要解决的下一个区块中去。我可以一直运行这个方法，直到我赢得了硬币翻转并解决了下一个区块，然后获利。

### 如何在以太坊上安全地生成随机数

因为区块链的全部内容对所有参与者来说是透明的， 这就让这个问题变得很难，它的解决方法不在本课程讨论范围，你可以阅读 [这个 StackOverflow 上的讨论](https://ethereum.stackexchange.com/questions/191/how-can-i-securely-generate-a-random-number-in-my-smart-contract) 来获得一些主意。 一个方法是利用 **_oracle_** 来访问以太坊区块链之外的随机数函数。

当然， 因为网络上成千上万的以太坊节点都在竞争解决下一个区块，我能成功解决下一个区块的几率非常之低。 这将花费我们巨大的计算资源来开发这个获利方法 — 但是如果奖励异常地高(比如我可以在硬币翻转函数中赢得 1个亿)， 那就很值得去攻击了。

所以尽管这个方法在以太坊上不安全，在实际中，除非我们的随机函数有一大笔钱在上面，你游戏的用户一般是没有足够的资源去攻击的。

因为在这个教程中，我们只是在编写一个简单的游戏来做演示，也没有真正的钱在里面，所以我们决定接受这个不足之处，使用这个简单的随机数生成函数。但是要谨记它是不安全的。


# 第1章: 以太坊上的代币

让我们来聊聊 **代币**

如果你对以太坊的世界有一些了解，你很可能听过人们聊到代币——尤其是 **_ERC20 代币_**.

一个 **代币** 在以太坊基本上就是一个遵循一些共同规则的智能合约——即它实现了所有其他代币合约共享的一组标准函数，例如 `transfer(address _to, uint256 _value)` 和 `balanceOf(address _owner)`.

在智能合约内部，通常有一个映射， `mapping(address => uint256) balances`，用于追踪每个地址还有多少余额。

所以基本上一个代币只是一个追踪谁拥有多少该代币的合约，和一些可以让那些用户将他们的代币转移到其他地址的函数。

### 它为什么重要呢？

由于所有 ERC20 代币共享具有相同名称的同一组函数，它们都可以以相同的方式进行交互。

这意味着如果你构建的应用程序能够与一个 ERC20 代币进行交互，那么它就也能够与任何 ERC20 代币进行交互。 这样一来，将来你就可以轻松地将更多的代币添加到你的应用中，而无需进行自定义编码。 你可以简单地插入新的代币合约地址，然后哗啦，你的应用程序有另一个它可以使用的代币了。

其中一个例子就是交易所。 当交易所添加一个新的 ERC20 代币时，实际上它只需要添加与之对话的另一个智能合约。 用户可以让那个合约将代币发送到交易所的钱包地址，然后交易所可以让合约在用户要求取款时将代币发送回给他们。

交易所只需要实现这种转移逻辑一次，然后当它想要添加一个新的 ERC20 代币时，只需将新的合约地址添加到它的数据库即可。

### 其他代币标准

对于像货币一样的代币来说，ERC20 代币非常酷。 但是要在我们僵尸游戏中代表僵尸就并不是特别有用。

首先，僵尸不像货币可以分割 —— 我可以发给你 0.237 以太，但是转移给你 0.237 的僵尸听起来就有些搞笑。

其次，并不是所有僵尸都是平等的。 你的2级僵尸"**Steve**"完全不能等同于我732级的僵尸"**H4XF13LD MORRIS 💯💯😎💯💯**"。（你差得远呢，_Steve_）。

有另一个代币标准更适合如 CryptoZombies 这样的加密收藏品——它们被称为**_ERC721 代币._**

**ERC721 代币**是**不能互换**的，因为每个代币都被认为是唯一且不可分割的。 你只能以整个单位交易它们，并且每个单位都有唯一的 ID。

> 请注意，使用像 ERC721 这样的标准的优势就是，我们不必在我们的合约中实现拍卖或托管逻辑，这决定了玩家能够如何交易／出售我们的僵尸。 如果我们符合规范，其他人可以为加密可交易的 ERC721 资产搭建一个交易所平台，我们的 ERC721 僵尸将可以在该平台上使用。 所以使用代币标准相较于使用你自己的交易逻辑有明显的好处。
