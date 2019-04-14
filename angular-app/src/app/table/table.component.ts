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
  tableData: Row[];

  constructor(private tableService: TableService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(({ bigTable }: { bigTable: boolean }) => {
        if (bigTable) {
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
          this.tableService.getRows().subscribe((rows: TableData) => {
            this.tableData = rows.tableData;
          });
        }
      });
  }

  isString(element: any) {
    return typeof element === 'string';
  }
}
