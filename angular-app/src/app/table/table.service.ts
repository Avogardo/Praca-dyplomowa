import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import TableData from './table-data';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {
  }

  getRows(): Observable<TableData> {
    return this.http.get<TableData>('http://localhost:3001/table');
  }
}

