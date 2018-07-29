<template>
  <div class="c-form">
    <el-form :model="form" :rules="rules" size="mini" :ref="fromName" label-width="160px">
      <el-row v-for="(column, key) in fromColumns" :key="key">
        <el-col>
          <el-form-item :label="column.label" :prop="column.prop">
            <!--input输入框-->
            <el-input :type="column.type" v-if="column.type === 'text' || column.type === 'password'" v-model="form[column.prop]"></el-input>

            <!--数字输入框-->
            <el-input :type="column.type" v-else-if="column.type === 'number'" v-model="form[column.prop]"></el-input>

            <!--下拉框-->
            <el-select v-else-if="column.type === 'select'" no-data-text="无数据" :placeholder="column.placeholder" v-model="form[column.prop]">
            <el-option v-for="(option, key) in column.options" :key="key" :label="option.label" :value="option.value">
            </el-option>
            </el-select>

            <!--文本域-->
            <el-input
            v-else-if="column.type === 'textarea'" v-model="form[column.prop]" type="textarea">
            </el-input>

            <!--单选-->
            <el-radio-group
            v-else-if="column.type === 'radio'"
            v-model="form[column.prop]">
            <el-radio
            v-for="(radio, key) of column.options" :key="key" :label="radio.value">
            {{radio.label}}
            </el-radio>
            </el-radio-group>

            <!--复选框-->
            <el-checkbox-group
            v-else-if="column.type === 'checkbox'"
            v-model="form[column.prop]">
            <el-checkbox
            name="column.prop"
            v-for="(checkbox, key) of column.checkboxs"
            :key="key"
            :label="checkbox.label">
            </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :push="leftColumn" :span="11">
        <el-form-item>
          <el-button>立即创建</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fromName: 'form',
      leftColumn: 0,
      fromColumns: this.modules.formColumns(),
      form: this.modules.form(),
      rules: this.modules.rules()
    }
  },
  props: {
    modules: {
      type: Object
    }
  }
}
</script>

<style>

</style>
