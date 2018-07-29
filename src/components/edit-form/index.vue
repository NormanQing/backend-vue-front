<template>
  <div class="c-edit-form">
    <el-dialog
    @close="close"
    title="修改"
    :visible.sync="dialogFormVisible"
    width="45%"
    >
      <el-form
      :model="formValues"
      :ref="formName"
      size="mini">
      <el-form-item
      v-for="(column,key) in columns"
      :key="key"
      :label="column.label"
      :prop="column.prop"
      :label-width="formLabelWidth">
        <!--input输入框-->
        <el-input :type="column.type" v-if="column.type === 'text' || column.type === 'password'" v-model="formValues[column.prop]"></el-input>

        <!--数字输入框-->
        <el-input :type="column.type" v-else-if="column.type === 'number'" v-model="formValues[column.prop]"></el-input>

        <!--下拉框-->
        <el-select v-else-if="column.type === 'select'" no-data-text="无数据" :placeholder="column.placeholder" v-model="formValues[column.prop]">
          <el-option v-for="(option, key) in column.options" :key="key" :label="option.label" :value="option.value">
          </el-option>
        </el-select>

        <!--文本域-->
        <el-input
        v-else-if="column.type === 'textarea'" v-model="formValues[column.prop]" type="textarea">
        </el-input>

        <!--单选-->
        <el-radio-group
        v-else-if="column.type === 'radio'"
        v-model="formValues[column.prop]">
          <el-radio
          v-for="(radio, key) of column.options" :key="key" :label="radio.value">
          {{radio.label}}
          </el-radio>
        </el-radio-group>

        <!--复选框-->
        <el-checkbox-group
        v-else-if="column.type === 'checkbox'"
        v-model="formValues[column.prop]">
          <el-checkbox
          name="column.prop"
          v-for="(checkbox, key) of column.checkboxs"
          :key="key"
          :label="checkbox.label">
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      </el-form>
      <div slot='footer' class="dialog-footer">
        <el-button @click='dialogFormVisible = false'>取 消</el-button>
        <el-button @click='submitForm' type='primary'> 确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      formName: 'form',
      formLabelWidth: '150px',
      dialogFormVisible: true,
      columns: this.modules.formColumns(),
      flag: false // 标示是否更新了表单
    }
  },
  props: {
    // 模块
    modules: {
      type: Object,
      required: true
    },
    // 添加表单输入项
    formValues: {
      type: Object
    }
  },
  methods: {
    submitForm () {
      console.log('2')
    },
    close () {
      if (this.flag === true) {
        this.flag = false
        this.$emit('refresh-table', this.formValues)
      } else {
        this.$emit('refresh-table', false)
      }
    }
  }
}
</script>

<style lang="less">

</style>
