/**
 * 会员管理
 */

export default class Member {
  constructor () {
    this.url = '/member'
  }

  /**
   * 列表数据定义
   */
  tableColumns () {
    return {
      tableField: [
        {prop: 'id', label: '序号', type: 'text'},
        {prop: 'user', label: '用户名', type: 'text'}
      ]
    }
  }

  searchForm () {
    return {
      search: [
        {
          prop: 'user', form: {user: ''}, label: '用户名', type: 'text'
        }
      ]
    }
  }
}
