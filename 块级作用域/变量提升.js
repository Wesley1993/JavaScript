/**
 * 通过var关键字声明的变量，无论在什么地方声明的，都会被当成当前作用域顶部声明的变量----变量提升 
 * 
*/
let condition = false
function getValue () {
  if (condition) {
    var value = 'blue'
    // code
    console.log('变量声明区域访问变量value', value)
    return value
  } else {
    //此处访问变量value，其值为undefined
    console.log('其他作用域访问变量value', value)
    return null
  }
  //此处访问变量value，其值为undefined,此处访问不到是因为return中断了，若没有return结果为undefined
  console.log('最外层访问变量value', value)
}
getValue()
