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

console.log(set)
console.log('当前Set集合的长度or大小', set.size)
// * 特例 元素0，+0，-0都等于0
set.add(+0)
set.add(0)
set.add(-0)
console.log(set)
console.log('当前Set集合的长度or大小', set.size)

let set2 = new Set()
let key1 = {}
let key2 = {}
set2.add(key1)
set2.add(key2)
console.log(set2)
console.log('当前Set集合的长度or大小', set2.size)
