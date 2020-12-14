// 1.函数形参的默认值

function es5Func (url, timeout, callback) {
  // es5 常用处理默认参数
  // timeout = timeout || 2000
  // callback = callback || function () {}

  // es5 安全性处理默认参数
  timeout = typeof timeout !== 'undefined' ? timeout : 2000
  callback = typeof callback !== 'undefined' ? callback : function () {}

  //函数其他部分
}

function es6Func (url, timeout = 2000, callback = function () {}) {}

// 2.默认参数对arguments的影响

function mixArgs (first, second) {
  console.log(first === arguments[0])
  console.log(second === arguments[1])
  first = 'c'
  second = 'd'
  console.log(first === arguments[0])
  console.log(second === arguments[1])
}
// mixArgs('a', 'b')
//输出 true true true true
// ？函数内默认参数赋值 改变了arguments里面的值
// 在严格模式下 没有这个问题

// 3.不定参数及展开运算符

function pick (object, ...keys) {
  let result = Object.create(null)

  for (let i = 0, len = keys.length; i < len; i++) {
    result[keys[i]] = object[keys[i]]
  }
  return result
}
let book = {
  title: 'Understanding ECMAScript 6',
  author: 'Nicholas C',
  year: 2016
}
let bookData = pick(book, 'author', 'year')
console.log(bookData)
console.log(bookData.author)
console.log(bookData.year)

//展开运算符
let values = [25, 50, 6, 100] //找出数组中最大值
//es5
console.log(Math.max.apply(Math, values)) // 100
// es6
console.log(Math.max(...values)) //100
console.log(Math.max(...values, 1000)) //1000
let result = values.sort(function (a, b) {
  return a - b // 递增排序
  // return b - a // 递减排序
})
console.log(result)

/** 
 * 箭头函数的特性
 * a.没有this、super、arguments和new.target绑定
 * b.不能通过new关键字调用
 * c.没有原型
 * d.你咯改变this的绑定
 * e.不支持arguments对象
 * f.不支持重复的命名参数
 * 
*/
