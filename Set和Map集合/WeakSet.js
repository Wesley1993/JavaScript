/**
 * Weak Set集合和Set集合的区别
 * 1.WeakSet实例中，如果add()方法传入非对象参数会导致程序报错，has()和delete()传入非对象参数返回false
 * 2.WeakSet集合不可迭代
 * 3.Weak Set集合不暴露任何迭代器，所以无法通过程序本身来检测其中的内容
 * 4.WeakSet集合不支持forEach()方法
 * 5.WeakSet集合不支持size属性
 */
// ! Set类型
let set = new WeakSet(),
  key = {}
// set.add('value')  // 直接报错
set.add(key)
