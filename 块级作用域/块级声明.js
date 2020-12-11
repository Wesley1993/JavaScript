/* 
块级声明用于声明在指定块的作用域之外无法访问的变量

块级作用域存在于：
      函数内部；
      块中的'{}'之间的区域
*/

// let condition = false
// function getValue () {
//   if (condition) {
//     let value = 'blue'
//     // code
//     console.log('变量声明区域访问变量value', value)
//     return value
//   } else {
//     //此处访问变量value，其值为undefined
//     console.log('其他作用域访问变量value', value) //直接报错 value is not defined
//     return null
//   }
// }
// getValue()

// 禁止重复声明变量
// function demo () {
//   let count = 3

//   let count = 4 // 运行时报错  SyntaxError: Identifier 'count' has already been declared
// }
// demo()

// function demo2 () {
//   var count = 3
//   let count = 4 // 运行时报错  SyntaxError: Identifier 'count' has already been declared
// }
// demo2()
function demo3 () {
  var count = 3
  if (true) {
    // 这是另一个作用域了所以不报错
    let count = 4
  }
}
demo3()
