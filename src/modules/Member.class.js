/**
 * 会员管理
 */

export default class Member {
  constructor () {
    this.url = 'member'
  }

  /**
   * 列表数据定义
   */
  tableColumns () {
    return {
      tableField: [
        {prop: 'id', label: '序号', type: 'text'},
        {prop: 'user', label: '用户名', type: 'text'},
        {prop: 'email', label: '邮箱', type: 'text'},
        {prop: 'sex', label: '性别', type: 'text'},
        {prop: 'hoby', label: '爱好', type: 'text'}
      ]
    }
  }

  searchForm () {
    return {
      search: [
        {
          prop: 'id', form: {id: ''}, label: 'id', type: 'number', placeholder: 'id'
        },
        {
          prop: 'user', form: {user: ''}, label: '用户名', type: 'text', placeholder: '用户名'
        },
        {
          prop: 'email', form: {email: ''}, label: '邮箱', type: 'text', placeholder: '邮箱'
        },
        {
          prop: 'sex', form: {sex: ''}, label: '性别', type: 'radio', options: [{value: 'm', label: '男'}, {value: 'f', label: '女'}]
        },
        {
          prop: 'hoby', form: {hoby: ''}, label: '爱好', type: 'checkbox', options: [{value: 'foot', label: '足球'}, {value: 'basket', label: '篮球'}]
        }
      ]
    }
  }
}
