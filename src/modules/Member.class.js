/**
 * 会员管理
 */

export default class Member {
  constructor () {
    this.url = 'test'
  }

  /**
   * 表单字段
   */
  form () {
    return {
      user: '',
      email: '',
      sex: [],
      hoby: [],
      status: ''
    }
  }

  /**
   * 生成表单
   */
  formColumns () {
    return [
      { prop: 'user', label: '用户名', type: 'text' },
      { prop: 'email', label: '邮箱', type: 'text' },
      {
        prop: 'sex',
        label: '性别',
        type: 'radio',
        options: [
          {value: '男', label: '男'},
          {value: '女', label: '女'}
        ]
      },
      {
        prop: 'hoby',
        label: '爱好',
        type: 'checkbox',
        checkboxs: [
          { value: '足球', label: '足球' },
          { value: '篮球', label: '篮球' }
        ]
      },
      {
        prop: 'status',
        label: '状态',
        type: 'select',
        placeholder: '请选择',
        options: [
          {value: 1, label: '正常'},
          {value: 0, label: '禁用'}
        ]
      }
    ]
  }

  /**
   * 列表数据定义
   */
  tableColumns () {
    return {
      formatter: (row, column, cellValue) => {
        if (column.property === 'status') {
          return cellValue === 1 ? '正常' : '禁用'
        }
        return cellValue
      },
      tableField: [
        {prop: 'id', label: '序号', type: 'text', sort_table: true},
        {prop: 'user', label: '用户名', type: 'text'},
        {prop: 'email', label: '邮箱', type: 'text'},
        {prop: 'sex', label: '性别', type: 'text'},
        {prop: 'hoby', label: '爱好', type: 'text'},
        {prop: 'status', label: '状态', type: 'text'}
      ]
    }
  }

  /**
     * 表单验证规则
     */
  rules () {
    return {
      user: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
      ],
      email: [
        { required: true, message: '请输入邮箱', trigger: 'blur' }
      ],
      sex: [
        { required: true, message: '请选择性别', trigger: 'blur' }
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
          prop: 'status', form: {status: ''}, label: '状态', type: 'select', options: [{value: '1', label: '正常'}, {value: '0', label: '禁用'}]
        },
        {
          prop: 'user', form: {user: ''}, label: '用户名', type: 'text', placeholder: '用户名'
        },
        {
          prop: 'email', form: {email: ''}, label: '邮箱', type: 'text', placeholder: '邮箱'
        },
        {
          prop: 'sex', form: {sex: []}, label: '性别', type: 'radio', options: [{value: 'm', label: '男'}, {value: 'f', label: '女'}]
        },
        {
          prop: 'hoby', form: {hoby: []}, label: '爱好', type: 'checkbox', options: [{value: 'foot', label: '足球'}, {value: 'basket', label: '篮球'}]
        }
      ]
    }
  }
}
