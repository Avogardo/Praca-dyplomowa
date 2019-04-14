import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import TableData from './table-data';
import Row from './row.model';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {
  }

  getRows(): Observable<TableData> {
    return this.http.get<TableData>('http://localhost:3001/table');
  }

  getBigTable(): Row[] {
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
    return tableData;
  }
}

