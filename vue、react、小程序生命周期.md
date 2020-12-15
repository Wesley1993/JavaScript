
# vue、react和小程序的生命周期

## vue2.x的生命周期

### 常用钩子函数执行顺序

1.创建前(beforeCreate):实例初始化阶段，数据观察和事件配置都没准备好，data和el都不可用
2.成功创建(Created):data已经准备好，DOM结构还没生成，el的值也没有
3.挂载之前(beforeMount): DOM已生成，但数据还未渲染到DOM结构上
4.成功挂载(mounted): 数据成功渲染到DOM节点
5.更新之前(beforeUpdate):此阶段视图未重新渲染
6.成功更新(updated):视图已更新
7.销毁之前(beforeDestroy):销毁组件前触发此钩子函数
8.成功销毁(destroyed):实例与视图关系已经解耦，修改data值无效
9.激活阶段(actived): keep-alive组件被激活时调用
10.停用阶段(deactivated): keep-alive组件停用时调用

## vue3.x的生命周期

1.setup: 等价于 beforeCreated和created
2.onBeforeMount === beforeMount
3.onMounted === mounted
4.onBeforeUpdate === beforeUpdate
5.onUpdated === updated
6.onBeforeUnmount === beforeDestroy
7.onUnmounted === destroyed

## react的生命周期

1.挂载卸载过程
1.1 constructor: 完成了React数据的初始化，接受两个参数props和context，当想在函数内部使用这个两个参数时，
    需使用super()传入这两个参数，使用constructor就必须写super()否则会导致this指向错误
1.2 componentWillMount: 一般用的比较少，更多在服务端渲染时使用。此阶段是constructor初始化数据后，但还未渲染DOM
1.3 componentDidMount: 组件第一次渲染完成，DOM节点已生成，在此处可请求接口，返回数据setState后组件重新渲染
1.4 componentWillUnmount:在此处完成组件的卸载和数据的销毁。clear你在组建中所有的setTimeout,setInterval；
    移除所有组建中的监听 removeEventListener；

2.更新过程
2.1 componentWillReceiveProps(nextProps):
    1.在接受父组件改变后的props需要重新渲染组件时用到的比较多
    2.接受一个参数nextProps
    3.通过对比nextProps和this.props，将nextProps的state为当前组件的state，从而重新渲染组件
2.2 shouldComponentUpdate(nextProps,nextState):
    1.主要用于性能优化(部分更新)
    2.唯一用于控制组件重新渲染的生命周期(return false 可以阻止组件更新)
    3.因为react父组件的重新渲染会导致其所有子组件的重新渲染，这个时候其实我们是不需要所有子组件都跟着重新渲染的，
      因此需要在子组件的该生命周期中做判断
2.3 componentWillUpdate(nextProps,nextState):shouldComponentUpdate返回true以后，组件进入重新渲染的流程，
    进入componentWillUpdate,这里同样可以拿到nextProps和nextState。
2.4 componentDidUpdate(prevProps,prevState):组件更新完毕后，react只会在第一次初始化成功会进入componentDidMount,
    之后每次重新渲染后都会进入这个生命周期，这里可以拿到prevProps和prevState，即更新前的props和state。
2.5 render()

3.React新增的生命周期
3.1 getDerivedStateFromProps(nextProps, prevState):代替componentWillReceiveProps()
3.2 getSnapshotBeforeUpdate(prevProps, prevState):代替componentWillUpdate

## 微信小程序生命周期

1.应用生命周期
  App() 必须在 app.js 中调用，必须调用且只能调用一次，app.js中定义了一些应用的生命周期函数
  (1) onLunch:初始化小程序是触发，全局只触发一次
  (2) onShow:小程序初始化完成或用户从后台切到前台显示时触发
  (3) onHide:用户从前台切换到后台隐藏时触发
  (4) onError:小程序发送脚本错误或者api调用失败时触发
2.页面生命周期
  (1) onLoad：首次进入页面加载时触发，可以在 onLoad 的参数中获取打开当前页面路径中的参数。
  (2) onShow：加载完成后、后台切到前台或重新进入页面时触发
  (3) onReady：页面首次渲染完成时触发
  (4) onHide：从前台切到后台或进入其他页面触发
  (5) onUnload：页面卸载时触发
