import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from './table.service';
import Row from './row.model';
import TableData from './table-data';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export default class TableComponent implements OnInit {
  private tableData: Row[];
  private isVisible: boolean = true;

  constructor(private tableService: TableService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(({ bigTable }: { bigTable: boolean }) => {
        if (bigTable) {
          this.tableData = this.tableService.getBigTable();
        } else {
          this.tableService.getRows().subscribe((rows: TableData) => {
            this.tableData = rows.tableData;
          });
        }
      });
  }

  moveTableElement(): void {
    const { tableData }: TableComponent = this;
    const firstRow = tableData.shift();
    tableData.splice(1, 0, firstRow);
    this.tableData = tableData;
  }

  toggleTable(): void {
    this.isVisible = !this.isVisible;
  }

  changeTexts(changeAll: boolean = false): void {
    const { tableData }: TableComponent = this;
    if (changeAll) {
      tableData.forEach(row => {
        row[0] = String(Math.random());
      });
    } else {
      for (let i = 0; i < tableData.length - 1; i += 10) {
        tableData[i][0] = String(Math.random());
      }
    }
    this.tableData = tableData;
  }

  isString(element: any) {
    return typeof element === 'string';
  }
}
