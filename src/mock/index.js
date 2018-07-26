import Mock from 'mockjs'

Mock.mock(
  /v1\/member/,
  'get',
  {
    status_code: 0,
    message: 'SUCCESS',
    result: {
      data: [
        {
          id: 1,
          user: 'zhangsan',
          email: '132@qq.com',
          sex: 'm',
          hoby: '篮球'
        },
        {
          id: 2,
          user: 'lisi',
          email: '189@qq.com',
          sex: 'f',
          hoby: '足球'
        }
      ]
    }
  }
)
