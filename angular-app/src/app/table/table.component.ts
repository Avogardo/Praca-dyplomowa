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

        } else {
          this.tableService.getRows().subscribe((rows: TableData) => {
            this.tableData = rows.tableData;
            console.log(this.tableData);
          });
        }
      });
  }
}
