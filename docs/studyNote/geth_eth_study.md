## 前期准备

### Step 1 ：客户端下载

下载geth客户端  https://geth.ethereum.org/downloads/

### Step 2：准备目录结构

随便新建个文件夹放数据，目录结构如下：

```
document
|--file_location // 这个里面放geth生成的数据啥的
|
|--genesis.json // 创世区块配置文件
```

### Step 3：准备创世区块配置文件

genesis.json
```json
{
  "config": {
        //区块链的ID，随便起
        "chainId": 21,
        "homesteadBlock": 0,
        "eip150Block": 0,
        "eip155Block": 0,
        "eip158Block": 0
    },
  // 用来预置账号以及账号内的以太币数量，应该也就是所谓的预挖
  // 我这里不需要预挖，所以给了个空对象
  // 如果需要可以这样加
  // "alloc": {
  //            "0x0000000000000000000000000000000000000001": {"balance": "111111111"},
  //            "0x0000000000000000000000000000000000000002": {"balance": "222222222"}
  //         }
  "alloc": {},
  // 币基地址，也就是默认的钱包地址，因为我没有地址，所以全0，为空
  // 后面运行Geth后创建新账户时，如果Geth发现没有币基地址，会默认将第一个账户的地址设置为币基地址
  // 也就是矿工账号
  "coinbase": "0x0000000000000000000000000000000000000000",
  // 出块/挖矿难度，你可以随便控制哦，这里设置的难度比较小，因为我喜欢钱来得快
  "difficulty": "0x4000",
  // 附加信息，随便填个文本或不填也行，类似中本聪在比特币创世块中写的报纸新闻
  "extraData": "",
  // gas最高限制，以太坊运行交易，合约等所消耗的gas最高限制，这里设置为最高
  "gasLimit": "0xffffffff",
  // 64位随机数，用于挖矿，注意他和mixhash的设置需要满足以太坊黄皮书中的要求
  // 直接用我这个也可以
  "nonce": "0x0000000000000042",
  // 与nonce共同用于挖矿，注意他和nonce的设置需要满足以太坊黄皮书中的要求
  "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  // 上一个区块的Hash值，因为是创世块，石头里蹦出来的，没有在它前面的，所以是0
  "parentHash" : "0x0000000000000000000000000000000000000000000000000000000000000000",
  // 创世块的时间戳，这里给0就好
  "timestamp": "0x00"
}
```

> 注意 genesis.json 文件里不能有注释，用的时候记得删了！

对应字段说明： 

| **key**        | **说明**                                                                                                                                                       |
|:-----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------:|
| chainId    | 网络ID，区分不同的区块链网络，值为0代表以太坊主网                                                                                                                               |
| coinbase   | 一个账户地址，挖矿收益最终归属的账户                                                                                                                                       |
| difficulty | 挖矿难度                                                                                                                                                     |
| gasLimit   | 创世块能够消耗gas的上限，即最多消耗的gas值；智能合约运行在EVM上，运行机器码指令，每个指令都会对应相应的gas消耗，gas与以太不是等价的，它们之前有换算关系，gas * gasPrice = ether， gasPrice是gas单价（单位wei），可以上下浮动（感觉跟市场油价一样会发生变动） |
| nonce      | 随机数，挖矿的时候寻找到符合条件的nonce值                                                                                                                                  |
| mixhash    | 本块的hash值，因为是创世块，所以没有hash值，初始化为0                                                                                                                          |
| parentHash | 父块hash值，因为是创世块，所以没有父块hash值，初始化为0                                                                                                                         |
| timestamp  | 时间戳，是从1970-01-01 00:00:00开始计算以秒为单位                                                                                                                       |  

## Geth常用参数说明

>可以通过 `geth -h` 帮助指令查看所以指令及对应功能说明，以下常用指令说明

| 指令                      | 说明                                                                                |
|:------------------------|:----------------------------------------------------------------------------------|
| --datadir               | 指定之前初始化的数据目录文件（指定工作目录）                                                                    |
| --networkid             | 区分不同的区块链网络，与创世块chainId一样，0为以太坊主网                                                  |
| --port                  | 节点之间互相通信的端囗，默认是30303                                                              |
| --rpc                   | 开启远程调用服务，执行智能合约时连接的节点是借助于rpc服务                                                    |
| --rpcport               | 远程服务端囗，默认是8545                                                                    |
| --rpcapi                | <span style="white-space:pre">	</span>远程服务提供的远程服务调用函数集（db、net、eth、web3、personal等） |
| --rpccorsdomain         | 指定可以接收请求来源的域名列表（浏览器访问时必须开启），默认为 “`*`”                                             |
| --gasprice              | gas的单价，单位wei                                                                      |
| --allow-insecure-unlock | 允许在Geth命令窗囗解锁账户（新版本1.9.0+增加的选项）                                                   |
| --console               | 进入管理后台（如修改rpc端囗）                                                                  |  


## Geth常用命令


### 初始化命令

	第一次安装完Geth需要初始化，或是需要修改创世块重新设置时需要初始化，之后再不需要初始化。

cmd 进入到 file_location 文件夹(也就是 genesis.json 所在的文件夹)

```
geth --datadir file_location init genesis.json
```

`geth ...... init`：初始化区块链
参数：
- `--datadir file_location`：指定数据存放目录为 file_location 位置，file_location 为目录名
- `genesis.json` 是 `init` 的命令参数，表示使用此 json 文件进行初始化

> 初始化最后输出 `Successfully xxxxx` 就代表成功了

生成目录结构
```
├──file_location
│   ├── geth
│   │   ├── chaindata
│   │   │   ├── 000001.log
│   │   │   ├── CURRENT
│   │   │   ├── LOCK
│   │   │   ├── LOG
│   │   │   └── MANIFEST-000000
│   │   └── lightchaindata
│   │       ├── 000001.log
│   │       ├── CURRENT
│   │       ├── LOCK
│   │       ├── LOG
│   │       └── MANIFEST-000000
│   └── keystore       // 这里以后会放在此节点创建的账号文件啥的
│           ├── 
└── genesis.json
 
```

### 开启节点命令

cmd 进入到 document 文件夹(也就是 genesis.json 所在的文件夹)

```
geth --datadir file_location --networkid 1108 --http --http.addr 0.0.0.0 --http.port 8545 --http.corsdomain "*" --port 30305 --allow-insecure-unlock console
```

- `--networkid`：用于区分不同的区块链网络，与创世块chainId一样，0为以太坊主网
- `--http`
	- `.addr`
	- `.port`
	- `.corsdomain`
- `--port`
- `--allow-insecure-unlock`

连接私有链控制台（？）
geth attach ipc:http://127.0.0.1:8545

删除 filename位置的块
geth removedb --datadir filename

### 日志相关指令

在启动 Geth 的指令后加 `console` 指令就可以开启节点的同时开启 console控制台。

但是节点启动后会一直在终端打印日志，这个时候可以使用以下两种指令来停止终端打印日志。
 
如果不需要日志，将他们重定向到 `dev/null` 的位置即可；如果还需要日志，那么可以把 `dev/null` 的路径换成一个文本文件的路径，日志将会被存入其中。

日志中提供的详细程度可以通过向 `--verbosity` 标志提供一个1-6之间的值来调整，如下例所示。

```
# to mute logs
geth <other flags> console 2> /dev/null

# to save logs to file
geth <other flags> console --verbosity 3 2> geth-logs.log
```



## Geth管理后台常用命令

管理后台使用的是 js 语言。

### 查看此节点所有账户

```js
> eth.accounts
```

返回一个数组。

### 新建账户

使用 `personal` 对象来创建一个账户：

```js
> personal.newAccount()
Passphrase:   // 输入密码
Repeat passphrase:   // 再次输入密码

"0xc232e2add308136571bb8f9197ba4ae4e5ba9836"
```

输入完成后就会显示新创建的账户地址。

账户默认会保存在数据目录的 keystore 文件夹中，一个文件对应刚才创建的一个账户。
生成的是 json 格式的文本文件，可以打开查看，里面存的是私钥经过密码加密后的信息。


### 余额查询

```js
> eth.getBalance("0x26eb81b7bb07a517b08833f16061cb62e061eb7d") #（1）根据账户地址查询
> eth.getBalance(eth.accounts[0])    #（2）根据账户列表索引值查询
> 
> acc0=eth.accounts[0]              #设置变量
"0x26eb81b7bb07a517b08833f16061cb62e061eb7d"
> eth.getBalance(acc0)              #（3）根据设置的变量查询
```

可以套娃查询： `eth.getBalance(eth.accounts[0])`

查询结果的单位是 `Wei`。`Wei` 是以太币的最小单位，1 个以太币 = 10 的 18 次方个 `Wei`。


### 单位转换

将返回值换算成以太币：

```
web3.fromWei()
```

套娃换算成 ETH：`web3.fromWei(eth.getBalance(eth.accounts[0]),'ether')`


### 矿工相关指令

- 启动挖矿
	miner.start(1)

其中 `start` 的参数表示挖矿使用的线程数。

第一次启动挖矿会先生成挖矿所需的 `DAG` 文件，这个过程有点慢，等进度达到 100% 后，就会开始挖矿，此时屏幕会被挖矿信息刷屏。

- 停止挖矿
	miner.stop()


### 查看 Coinbase 账户

挖到一个区块会奖励 5 个以太币，挖矿所得的奖励会进入矿工的账户，这个账户就是 `coinbase`。

默认情况下 `coinbase` 是本地账户中的第一个账户：

```js
> eth.coinbase
"0xc232e2add308136571bb8f9197ba4ae4e5ba9836"
```

### 修改 Coinbase 账户

通过 `miner.setEtherbase()` 将其他账户设置成 `coinbase` ，使挖矿奖励进入其他账户

```js
> miner.setEtherbase(eth.accounts[1])
true

> eth.coinbase
"0x814d39aa21f3eed069f2b21da7b5f857f7343afa"
```

### 发起交易

可以通过 `eth.sendTransaction()` 发送一笔交易。

```js
> let amount = web3.toWei(5,'ether')
"5000000000000000000"

> eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[1],value:amount})
```


### 解锁账户

如果发起交易后返回报错信息：

```js
Error: account is locked
    at web3.js:3119:20
    at web3.js:6023:15
    at web3.js:4995:36
    at <anonymous>:1:1
```

这里报错是因为账户每隔一段时间就会被锁住，要发送交易，必须先解锁账户。


使用 `personal.unlockAccount()` 指令解锁账户

```js
> personal.unlockAccount(eth.accounts[0])
Unlock account 0xc232e2add308136571bb8f9197ba4ae4e5ba9836
Passphrase:   // 输入密码
true
```


重新发起交易：

```js
> amount = web3.toWei(5,'ether')
"5000000000000000000"
> eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[1],value:amount})
I0322 19:39:36.300675 internal/ethapi/api.go:1047] Tx(0x0c59f431068937cbe9e230483bc79f59bd7146edc8ff5ec37fea6710adcab825) to: 0x814d39aa21f3eed069f2b21da7b5f857f7343afa
"0x0c59f431068937cbe9e230483bc79f59bd7146edc8ff5ec37fea6710adcab825"
```

此时交易已经提交到区块链，返回了交易的 hash。

### 查询交易状态

可以通过查看 `txpool` 指令来验证：

```js
> txpool.status
{
  pending: 1,
  queued: 0
}
```

其中有一条 `pending` 的交易，`pending` 表示已提交但还未被处理的交易。

要使交易被处理，必须要==挖矿==。

这里我们使用以下指令：启动挖矿，当挖到一区块后停止挖矿

```js
> miner.start(1);admin.sleepBlocks(1);miner.stop();
```

当 `miner.stop()` 返回 `true` 后，`txpool` 中 `pending` 的交易数量应该为 0 了，说明交易已经被处理了：

```js
> txpool.status
{
  pending: 0,
  queued: 0
}
```


### 查看交易信息

通过交易 hash 查看交易：

```js
> eth.getTransaction("0x0c59f431068937cbe9e230483bc79f59bd7146edc8ff5ec37fea6710adcab825")

{
  blockHash: "0xf5d3da50065ce5793c9571a031ad6fe5f1af326a3c4fb7ce16458f4d909c1613",
  blockNumber: 33,
  from: "0xc232e2add308136571bb8f9197ba4ae4e5ba9836",
  gas: 90000,
  gasPrice: 20000000000,
  hash: "0x0c59f431068937cbe9e230483bc79f59bd7146edc8ff5ec37fea6710adcab825",
  input: "0x",
  nonce: 0,
  r: "0x433fe5845391b6da3d8aa0d2b53674e09fb6126f0070a600686809b57e4ef77d",
  s: "0x6b0086fb76c46024f849141074a5bc79c49d5f9a658fd0fedbbe354889c34d8d",
  to: "0x814d39aa21f3eed069f2b21da7b5f857f7343afa",
  transactionIndex: 0,
  v: "0x1b",
  value: 5000000000000000000
}
```


### 查看当前区块总数

```js
> eth.blockNumber
33
```


### 查看区块

通过区块号查看区块：

```js
> eth.getBlock(33)

{
  difficulty: 132928,
  extraData: "0xd783010506846765746887676f312e372e33856c696e7578",
  gasLimit: 3244382,
  gasUsed: 21000,
  hash: "0xf5d3da50065ce5793c9571a031ad6fe5f1af326a3c4fb7ce16458f4d909c1613",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0xc232e2add308136571bb8f9197ba4ae4e5ba9836",
  mixHash: "0x09849dff7c8b8467812fa80d1fa2a27bc61f1cf16d5b2c05a6ce1b77ee18f3f1",
  nonce: "0x5b3939449dbdbea0",
  number: 33,
  parentHash: "0xeca34637642f56f7cfe5b699031c7ddbc43aee00fb10c7f054e0a9719cf226da",
  receiptsRoot: "0xd5f5b7ee944e57cbff496f7bdda7ceffd5eedffe6d5be5320008190502adc07a",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 649,
  stateRoot: "0xc7add6b756980ab9e482766e455597ef1583e747ad62e2924a8e66c6f9170112",
  timestamp: 1490183209,
  totalDifficulty: 4358016,
  transactions: ["0x0c59f431068937cbe9e230483bc79f59bd7146edc8ff5ec37fea6710adcab825"],
  transactionsRoot: "0x7335a362b2c3925e7ba1b41bf7772aa9645a13d4f9c12edd5892b87887264232",
  uncles: []
}
```



### 连接到其他节点

通过 `admin.addPeer()` 方法连接到其他节点。

> 两个节点要想联通，必须保证网络是相通的，并且要指定相同的 networkid。

除了使用本指令，也可以在启动节点的时候指定 `--bootnodes` 选项连接到其他节点。

#### 示例

假设有两个节点：节点一和节点二，networkid 都是 1108，通过下面的步骤就可以从节点一连接到节点二。

首先要知道节点二的 `enode` 信息，在节点二的 js console 中执行下面的命令查看 `enode` 信息：

```js
> admin.nodeInfo.enode
"enode://9e86289ea859ca041f235aed87a091d0cd594b377cbe13e1c5f5a08a8a280e62d4019ac54063ed6a1d0e3c3eaedad0b73c40b99a16a176993f0373ffe92be672@[::]:30304"
```

然后在节点一的 js console 中执行 `admin.addPeer()`，就可以连接到节点二：

```js
> admin.addPeer("enode://9e86289ea859ca041f235aed87a091d0cd594b377cbe13e1c5f5a08a8a280e62d4019ac54063ed6a1d0e3c3eaedad0b73c40b99a16a176993f0373ffe92be672@127.0.0.1:30304")
```

`addPeer()` 的参数就是节点二的 `enode` 信息。

>注意要把 `enode` 中的 `[::]` 替换成节点二的 IP 地址。

连接成功后，节点二就会开始同步节点一的区块。

同步完成后，任意一个节点开始挖矿，另一个节点会自动同步区块，向任意一个节点发送交易，另一个节点也会收到该笔交易。


### 查看其他连接节点

通过 `admin.peers` 可以查看连接到的其他节点信息。

```js
> admin.peers
```

### 查看已连接节点数

通过 `admin.net.peerCount` 可以查看已连接到的节点数量。

```js
> admin.net.peerCount
```
