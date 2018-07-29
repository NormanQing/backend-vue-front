<template>
  <div class="member">
    <el-tabs v-model="activeName">
      <el-tab-pane label="会员列表" name="list"></el-tab-pane>
      <el-tab-pane label="添加会员" name="add"></el-tab-pane>
    </el-tabs>
    <c-table
    v-if="activeName === 'list'"
    :modules="module"></c-table>

    <add-form
    v-else
    :modules="module"
    ></add-form>
    </div>
</template>

<script>
import CTable from 'components/table'
import AddForm from 'components/add-form'
import Member from 'modules/Member'
export default {
  components: { CTable, AddForm },
  data () {
    return {
      activeName: 'list',
      module: new Member()
    }
  }
}
</script>

<style>

</style>
