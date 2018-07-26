<template>
  <div class="c-table">
    <div class="search">
      <el-form v-if="searchForm" :inline="true" size="mini">
        <el-form-item v-for="(search, key) in searchForm" :key="key" :label="search.label">
          <!-- input输入框 -->
          <el-input v-if="search.type === 'text' || search.type === 'password'" :type="search.type" v-model="search.form[search.prop]" :placeholder="search.placeholder"></el-input>
          <!--数字输入框-->
          <el-input v-else-if="search.type === 'number'" :type="search.type" v-model.number="search.form[search.prop]" :placeholder="search.placeholder"></el-input>
          <!--email输入框-->
          <!--下拉框值改变执行回调-->
          <el-select v-else-if="search.type === 'select' && search.change" v-model="search.from[search.prop]" @change="search.change">
            <el-option v-for="(option, key) in search.options" :key="key" :label="option.label" :value="option.value"></el-option>
          </el-select>
          <!--下拉框-->
          <el-select v-else-if="search.type === 'select'" v-model="search.form[search.prop]">
            <el-option v-for="(option, key) in search.options" :key="key" :label="option.label" :value="option.value"></el-option>
          </el-select>
          <!--文本域-->
          <el-input v-else-if="search.type === 'textarea'" :type="textarea" v-model="search.form[search.prop]" placeholder="search.placeholder"></el-input>
          <!--单选框-->
          <el-radio-group v-else-if="search.type === 'radio'" v-model="search.form[search.prop]">
            <el-radio v-for="(option, key) in search.options" :key="key" :label="option.value">
              {{option.label}}
            </el-radio>
          </el-radio-group>
          <!--复选框-->
          <el-checkbox-group v-else-if="search.type === 'checkbox'" v-model="search.form[search.prop]">
            <el-checkbox name="search.prop" v-for="(option, key) in search.options" :key="key" :label="option.label"></el-checkbox>
          </el-checkbox-group>
          <!--开始时间-->
          <el-date-picker v-if="search.prop === 'startDate'" type="date" v-model="search.form[search.prop]" :value-format="search.valueFormart" :picker-options="search.options">
          </el-date-picker>
          <!--结束时间-->
          <el-date-picker v-if="search.prop === 'startDate'" type="date" v-model="search.form[search.prop]" :value-format="search.valueFormart" :picker-options="search.options">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button>清除</el-button>
        </el-form-item>
      </el-form>
      <!--table-->
      <el-table
      style="100%"
      :data="tableData"
      :default-sort="{prop: (columns.sortField != undefined ? columns.sortField : 'id'), order: (columns.orderBy ? columns.orderBy : 'ascending')}">
        <!--多选功能-->
        <el-table-column v-if="columns.selection === true" width="55" type="selection"></el-table-column>
        <!--开启展开功能-->
        <el-table-column v-else-if="columns.expand === true" type="expand">
          <template slot-scope="props" class="table-expand">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item v-for="(field, key) in columns.tableField" :key="key" label="field.label">
                <span>{{ props.row[field.prop] }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <!--字段名必须要和datas字段相匹配-->
        <el-table-column
          v-else-if="columns.formatter"
          v-for="(field, key) in columns.tableField" :key="key"
          :sortable="field.sort_table"
          :formatter="columns.formatter"
          :prop="field.prop"
          :label="field.label"
          align="center"
        >
        </el-table-column>
        <el-table-column
          v-else
          v-for="(field, key) in columns.tableField" :key="key"
          :sortable="field.sort_table"
          :prop="field.prop"
          :label="field.label"
          align="center"
        >
        </el-table-column>
        <!--其它操作-->
        <el-table-column v-if="otherOperating === true" label="操作">
          <template slot-scope="scope">
            <!-- el-popover 删除提示框-->
            <el-popover
            v-if="isShowDeleteBtn"
            placement="right"
            width="200"
            trigger="focus"
            >
              <div>
                <p>是否确定删除</p>
                <el-button>确定</el-button>
              </div>
              <el-button type="danger" slot="reference">{{deleteText}}</el-button>
            </el-popover>
            <el-button
            v-if="isShowEditBtn"
            size="mini"
            >编辑</el-button>
          </template>
      </el-table-column>
      </el-table>
      <el-pagination
      v-if="JSON.stringify(pagination) !== '{}'"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.current_page"
      :page-sizes="pagesize"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import * as constants from '@/constants'
export default {
  data () {
    return {
      /**
        * @description 分页数据
        * example
        * pagination : {
        *     "total": 25,
        *      "count": 10,
        *      "per_page": 10,
        *      "current_page": 1,
        *      "total_pages": 3,
        *      "links": {
        *          "next": "http://domain/v1/resource?page=2"
        *      }
        *   }
        */
      // 保存分页信息
      pagination: {},
      // 当前页 默认第一页
      page: 1,
      // 每页显示数量
      pagesize: constants.PAGE_SIZE,

      // 10条/页, 20条/页
      pageSizes: constants.PAGE_SIZES,

      // table数据
      tableData: [],

      // table 显示字段标题
      columns: this.modules.tableColumns(),

      // 搜索使用表单 默认不使用
      searchForm: false,
      // 保存搜索对象
      searchAllForm: {},
      // 保存搜索数据
      searchData: {},
      // 是否选择了搜索条件
      searchCondition: false
    }
  },
  props: {
    // 当前模块(数据类型)
    modules: {
      type: Object,
      required: true
    },
    // 是否显示其它操作(数据类型)
    otherOperating: {
      type: Boolean,
      default: false
    },
    // 是否显示删除按钮(数据类型)
    isShowDeleteBtn: {
      type: Boolean,
      default: true
    },
    // 是否显示编辑按钮(数据类型)
    isShowEditBtn: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this._initData()
  },
  methods: {
    _initData () {
      // 如果存在searchForm方法，说明需要表单搜索
      if ('searchForm' in this.modules) {
        this.searchData = {}
        this.searchAllForm = this.modules.searchForm()
        this.searchForm = this.modules.searchForm().search
      }
      this.loadData()
    },
    loadData () {
      this.searchData.page = this.page
      this.searchData.pagesize = this.pagesize

      this.$http.get(this.modules.url, { params: this.searchData }).then((res) => {
        console.log(res)
        this.tableData = res.data.result.data
        res.meta !== undefined && (this.pagination = res.meta.pagination)
      })
    },

    /**
     * 带搜索条件加载数据
     */
    seachLoadData (searchData) {
      searchData.page = this.page
      searchData.pagesize = this.pagesize

      this.$http.get(this.modules.url, { params: searchData }).then((res) => {
        console.log(res)
        this.tableData = res.data.result.data
        res.meta !== undefined && (this.pagination = res.meta.pagination)
      })
    },

    /**
     * 搜索
     */
    search () {
      console.info('this.searchForm', this.searchForm)
      this.searchForm.forEach(element => {
        if (element.form[element.prop] !== '' && element.form[element.prop].length !== 0) {
          // console.log(typeof element.form[element.prop])
          this.searchData[element.prop] = element.form[element.prop]
          this.searchCondition = true
        }
      })

      // console.log(this.searchCondition)
      // console.log(this.searchData)
      if (this.searchCondition) {
        this.searchCondition = false
        this.seachLoadData(this.searchData)
      } else {
        console.log('no search')
        this.$message({
          type: 'info',
          message: '搜索条件不能为空'
        })
      }
    },

    /*
     * @description
     * pageSize 当前页条数改变时
     * */
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pagesize = val
      this.loadData()
    },

    /*
     * @description
     * CurrentChange 当前页改变时
     * */
    handleCurrentChange (val) {
      // console.log(`当前页: ${val}`)
      this.page = val
      this.loadData()
    }
  }
}
</script>

<style lang="less">
.c-table {
    background-color: #fff;
    .el-table th {
        text-align: center
    }
    .el-table td {
        padding: 4px;
    }
    .el-pagination {
        padding: 30px 5px;
        text-align: center;
    }
    .table-expand {
        font-size: 0;
        padding: 12px 0px 12px 10%;
    }
    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 30%;
    }
    .search {
        border: 1px solid #ebeef6;
        padding: 20px 15px 10px 15px;
    }
}
.table-el-popover {
    text-align: center;
    // color: #f56b6c;
    font-size: 12px;
    .el-popover__title {
        color: red;
        font-weight: bold;
    }
}
</style>
