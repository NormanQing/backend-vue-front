<template>
  <div class="c-table">
    <div class="search">
      <el-form v-if="searchForm" :inline="true" size="mini">
        <el-form-item v-for="(search, key) in searchForm" :key="key">
          <!-- input输入框 -->
          <el-input v-if="search.type === 'text' || search.type === 'password'" :type="search.type" v-model="search.form[search.prop]" :placeholder="search.placeholder"></el-input>
          <!--数字输入框-->
          <el-input v-else-if="search.type === 'number'" :type="search.type" v-model.number="search.form[search.prop]" :placeholder="search.placeholder"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>搜索</el-button>
          <el-button>清除</el-button>
        </el-form-item>
      </el-form>
      <!--table-->
      <el-table style="100%" :data="tableData">
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
          :formatter="columns.formatter"
          :prop="field.prop"
          :label="field.label"
        >
        </el-table-column>
        <el-table-column
          v-else
          v-for="(field, key) in columns.tableField" :key="key"
          :prop="field.prop"
          :label="field.label"
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

      // table 显示字段标题
      columns: this.modules.tableColumns(),

      // 搜索使用表单 默认不使用
      searchForm: false,
      // 保存搜索对象
      searchAllForm: {},
      // 保存搜索数据
      searchData: {},

      // table数据
      tableData: []
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
        this.tableData = res.result.data
        res.meta !== undefined && (this.pagination = res.meta.pagination)
      })
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
