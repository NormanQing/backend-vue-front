import Mock from 'mockjs'

Mock.mock(
  /v1\/member/,
  'get',
  {
    status_code: 0,
    message: 'SUCCESS',
    meta: {
      pagination: {
        count: 15,
        current_page: 1,
        links: {},
        per_page: 15,
        total: 80,
        total_pages: 6
      }
    },
    result: {
      'data|20': [
        {
          'id|+1': 1,
          user: '@cname',
          email: '@email',
          'sex|1': ['男', '女'],
          'hoby': ['篮球', '足球', '排球'],
          'status|1': [0, 1]
        }
      ]
    }
  }
)
