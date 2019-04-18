<template>
    <div v-if="tableData" class="table-wrapper">
        <button :key="button.key" v-for="button in buttons" v-on:click="button.event()">{{ button.text }}</button>
        <table v-if="isVisible">
            <tbody>
                <tr v-for="(row, rowIndex) in tableData">
                    <td v-for="(cell, cellIndex) in row">
                        <div v-if="cell === true || cell === false">
                            <input type="checkbox" v-model="tableData[rowIndex][cellIndex]" />
                        </div>
                        <div v-else-if="typeof cell === 'string' && cell.includes('.png')">
                            <img :src="cell" alt="js logo">
                        </div>
                        <div v-else="!(isString(cell) && cell.includes('.png')) && !(cell === true || cell === false)">
                            {{ cell }}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss">
    .table-wrapper {
        max-height: 500px;
        overflow: auto;
    }

    table {
        font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }

    td {
        border: 1px solid #ddd;
        padding: 8px;

        &:last-child {
            padding: 0;
        }
    }

    tr {
        &:nth-child(even){
            background-color: #f2f2f2;
        }

        &:hover {
            background-color: #dddddd;
        }
    }

    img {
        height: 32px;
        width: 32px;
    }
</style>

<script>
import TableService from '../services/TableService';
import ButtonModel from './buttonModel';

export default {
  name: 'Table',
  props: ['bigTable'],
  data: function() {
    return {
      tableData: [],
      isVisible: true,
      buttons: [],
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
      const response = await TableService.fetchTableData();
      this.tableData = response.data.tableData;
    }
    this.buttons = [
      // new ButtonModel('moveRow', this.moveTableElement, 'Move row'),
      new ButtonModel('showHideTableButton', this.toggleTable, `${this.isVisible ? 'Hide' : 'Show'} table`),
      // new ButtonModel('changeTextsButton', this.changeTexts(true), 'Change all texts'),
      // new ButtonModel('changePartiallyTextsButton', this.changeTexts(), 'Change partially text'),
      // new ButtonModel('removeRow', this.removeOrAddRow(true), 'Remove row'),
      // new ButtonModel('addRow', this.removeOrAddRow(), 'Add row'),
    ];
  },
  methods: {
    toggleTable: function () {
      this.isVisible = !this.isVisible;
    }
  },
}
</script>
