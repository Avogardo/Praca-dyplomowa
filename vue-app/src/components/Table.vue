<template>
    <p>table is working</p>
</template>

<style lang="scss">

</style>

<script>
import TableService from "../services/TableService";

export default {
  name: 'Table',
  props: ['bigTable'],
  data: function() {
    return {
      tableData: [],
    };
  },
  mounted: async function() {
    if (this.bigTable) {
      const tableData = [];
      for (let i = 0; i < 300; i++) { // 30000 is fine
        if (i === 0) {
          tableData.push([
            'This is first item',
            false,
            1,
            'https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png',
          ]);
        } else {
          tableData.push([
            'title',
            false,
            54,
            'https://referralrock.com/wp-content/uploads/2018/08/javascript-logo_small.png',
          ]);
        }
      }
      this.tableData = tableData;
    } else {
      const reponse = await TableService.fetchTableData();
      this.tableData = reponse.data.tableData;
    }
  },
}
</script>
