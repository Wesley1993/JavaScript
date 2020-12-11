/* 
  const 声明常量 指向的是内存中引用的地址
  声明变量后必须初始化
*/

// const num = 1
// const num = 2 // 报错 SyntaxError: Identifier 'num' has already been declared

// const str = 'string'
// const str = 'sss' // 报错 SyntaxError: Identifier 'num' has already been declared

// const str2; // SyntaxError: Missing initializer in const declaration

// 循环中的变量声明
// for (var index = 0; index < 5; index++) {
//   console.log(index)
// }
// console.log(index) // index 用var声明的 为全局变量

var funcs = []
for (var index = 0; index < 10; index++) {
  funcs.push(function () {
    console.log(index)
  })
}
funcs.forEach(function (func) {
  func()
})
// 输出了10次 10
