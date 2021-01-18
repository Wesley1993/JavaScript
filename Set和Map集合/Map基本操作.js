const actions = new Map([
  [
    {
      type: 'default',
      status: 1
    },
    () => {
      console.log('default')
    }
  ],
  [
    {
      identity: 'guest',
      status: 2
    },
    () => {
      console.log('guest_2')
    }
  ]
])

function demo (identity, status) {
  let action = [...actions].filter(([key, value]) => key.identity == identity && key.status == status)
  action.forEach(([key, value]) => value.call(this))
}
// demo('guest', 2)

// 判断跳转到那里

function jump (url, type) {
  // 分隔
  let temp = url.split('?')[0]
  const map = new Map([
    [
      {
        type: 'default',
        jump: 'cxt://home'
      },
      () => {
        console.log('home')
      }
    ],
    [
      {
        type: 'default',
        jump: 'cxt://mine'
      },
      () => {
        console.log('mine')
      }
    ]
  ])
  let action = [...map].filter(([key, value]) => key.type == type && key.jump == temp)
  action.forEach(([key, value]) => value.call(this))
}
jump('cxt://home', 'default')
