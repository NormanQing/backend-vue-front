<template>
<c-table :modules="module"></c-table>
</template>

<script>
import CTable from 'components/table'
import Member from 'modules/Member'
export default {
  components: {CTable},
  data () {
    return {
      module: new Member()
    }
  }
}
</script>

<style>

</style>
