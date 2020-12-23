// Set集合是一种无重复元素的列表
/**
 * Set集合添加元素 add，添加元素时不会对值进行强制类型转换
 * Set中添加对象时，对象之间互相独立，互不影响
 * 访问Set集合的size属性获取集合目前的元素数量
 */
// 1.创建Set集合
let set = new Set()
// 添加一个number元素
set.add(5)
// 添加一个字符串元素
set.add('5')

// console.log(set)
// console.log('当前Set集合的长度or大小', set.size)
// * 特例 元素0，+0，-0都等于0
set.add(+0)
set.add(0)
set.add(-0)
// console.log(set)
// console.log('当前Set集合的长度or大小', set.size)

let set2 = new Set()
let key1 = {}
let key2 = {}
set2.add(key1)
set2.add(key2)
// console.log(set2)
// console.log('当前Set集合的长度or大小', set2.size)

// 利用Set集合给数组去重
let arr = [1, 2, 3, 4, 5, 5, 5, 3, 2] //length 9
let set3 = new Set(arr)
// console.log(set3.size)
// console.log(set3)

// 用has()方法检测Set集合中是否存在某个值
// console.log(set3.has(5)) // true
// console.log(set3.has('5')) // false

// 移除元素 delete()移除某个元素,clear()移除集合中的所有元素
let set4 = new Set()
set4.add(5)
set4.add('5')

console.log(set4.has(5)) // true
set4.delete(5)
console.log(set4.has(5))
console.log(set4.size)
set4.clear()
console.log(set4.size) // 0

let set5 = new Set([1, '222', 3])
// Set集合forEach()方法接受三个参数:
// 1.Set集合中下一次索引的位置
// 2.与第一个参数一样的值
// 3.被遍历的Set集合本身
set5.forEach(function (value, key, ownerSet) {
  console.log(key + ' ' + value)
  console.log(ownerSet === set5)
})
console.log(set5)
