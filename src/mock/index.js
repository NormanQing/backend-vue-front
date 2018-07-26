import Mock from 'mockjs'

Mock.mock(
  /v1\/member/,
  'get',
  {
    status_code: 0,
    message: 'SUCCESS',
    result: {
      'data|20': [
        {
          'id|+1': 1,
          user: '@cname',
          email: '@email',
          'sex|1': ['男', '女'],
          'hoby|1': ['篮球', '足球', '排球']
        }
      ]
    }
  }
)
