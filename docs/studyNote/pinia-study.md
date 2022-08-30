# Pinia

也可以叫做 vux5,对 vue3 和 ts 的支持更好。
[官网链接](https://pinia.vuejs.org/)
</br>
以下学习笔记基于[b 站 Pinia 学习视频](https://www.bilibili.com/video/BV11Y411b7nb?p=1&vd_source=01a876ac89abd5ecb285dfd401b48a89)

## Pinia 的使用

> 1.定义并导出容器 </br>2.使用容器中的 state </br>3.修改 state </br>4.容器中的 action 的使用

### 定义并导出容器

文件最好放在"store/index.js"(.ts 也可以)

```js
import { definestore } from "pinia";
// 参数1：容器的ID,必须唯一，将来Pinia会把所有的容器挂载到根容器
// 参数2：选项对象
// 返回值：一个函数，调用得到容器实例
export const useMainstore = defineStore("main", {
  /**
   *类以于组件的data,用来存储全局状态的
   *1.必须是函数：这样是为了在服务端渲染的时候免交叉清求导致的数据状态污染
   *2,必须是箭头函数，这是为了更好的TS类型推导
   */
  state: () => {
    return {
      count: 100,
      foo: "hi",
    };
  },
  /**
   *类以于组件的computed,归来封装计算写性，有缓存的功能
   */
  getters: {},
  /**
   *类以于组件的methods,封装业务逻辑，修改state
   */
  actions: {},
});
```

### 组件里 state 的使用

#### 方法 1 : 正常使用

```vue
<template>
  <p>{{ mainStore.count }}</p>
</template>

<script setup>
// 导入pinia容器,因为是函数所以记得要用{}包起来
import { useMainstore } from "../store/index.js";
// 用一个变量接一下
const mainstore = useMainStore();
// 正常使用即可
console.log(mainStore.count);
</script>
```

#### 方法 2 : 直接导出使用

> 注意 : 此方法会使 store 里的变量失去响应性,如果 store 里的变量发生了变化,直接导出使用的变量并不会发生相应的变化(例 : store 里的 foo 变成 100,但页面里的 foo 还是 99)

```vue
<template>
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
</template>

<script setup>
// 也可以导出使用,但拿到的数据是一次性的
// 因为Pinia其实帮你把state数都做了reactive处理了,所以解构赋值会破坏响应性
const { count, foo } = mainStore;
</script>
```

#### 方法 3 : 使用官方方法导出使用

> 不会损失响应性

```vue
<template>
  <p>{{ count }}</p>
  <p>{{ foo }}</p>
</template>

<script setup>
import { storeToRefs } from "pinia";
const { count, foo } = storeToRefs(mainStore);
</script>
```

### 修改 state 和使用 actions

```vue
<script setup>
...
	state:() => {
		return {
			count:100,
			foo:'hi',
			arr:[1,2,3]
		}
	},

	/**
	*类以于组件的methods,封装业务逻辑，修改state
	*/
	actions:{
		changeState(num){
			this.count += num;
			this.foo="hello";
			this.arr.push(4);
			// 如果需要的操作比较多,建议使用$patch
			this.$patch({
				count:mainStore.count + num,
				foo:'hello',
				arr:[...mainStore.arr,4]
			});
			this.$patch(state=>{
				state.count+=num
				state.foo = 'hello'
				state.arr.push(4)
			})
		}
	},
...
</script>
```

#### 方法 1 : 正常修改(最简单的方式就是这样)

```js
mainStore.count++;
mainStore.foo = "hello";
```

#### 方法 2 : 如果需要修改多个数据，建议使用\$patch 批量更新

```js
mainStore.$patch({
  count: mainStore.count + 1,
  foo: "hello",
  arr: [...mainStore.arr, 4],
});
```

#### 方法 3：更好的批量更新的方式：\$patch 一个函数

```js
mainStore.$patch((state) => {
  state.count++;
  state.foo = "hello";
  state.arr.push(4);
});
```

#### 方法 4：逻辑比较多的时候可以封装到 actions 里做处理

```js
mainStore.changeState(10);
```

> 注意 : 不能使用箭头函数定义 actions , 因为箭头函数**没有 this**!!

### 组件里 getters 的使用

```js
getters:{
	// 函数接受一个可选参数:state状态对象
	count10(state){
		console.log('count10 被使用了');
		return state.count + 10;
	},
	// ------也可以写成下面这种形式:
	// 这种形式需要注意的是在ts里必须手动指定返回值的类型,因为此时类型无法自动推导出来
	count10(){
		console.log('count10 被使用了');
		return this.count + 10;
	}
}
```

如果在文件里输出以下 :

```vue
<template>
  <p>{{ mainStore.count10 }}</p>
  <p>{{ mainStore.count10 }}</p>
  <p>{{ mainStore.count10 }}</p>
</template>
```

那么结果是 :

```txt
110
110
110
```
