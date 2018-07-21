<template>
<m-table :modules="module" :isShowEditBtn="false" :deleteText="deleteText"></m-table>
</template>

<script>
import MTable from 'components/table'
import Member from 'modules/Member'
export default {
  components: {MTable},
  data () {
    return {
      module: new Member(),
      deleteText: '加入黑名单'
    }
  }
}
</script>

<style>

</style>
