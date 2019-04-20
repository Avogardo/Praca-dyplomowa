import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import TableComponent from './table.component';
import FormWithBindingComponent from '../form/form-with-binding';
import FormWithReferencesComponent from '../form/form-with-references';
import AppRoutingModule from '../app-routing.module';
import TableService from './table.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
      ],
      declarations: [
        TableComponent,
        FormWithBindingComponent,
        FormWithReferencesComponent,
      ],
      providers: [
        TableService,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.tableData = tableData;
    fixture.detectChanges();
  });

  it('should create without crashing with server data', () => {
    component.tableData = [];
    expect(component).toBeTruthy();
  });

  it('renders without crashing with big static data', () => {
    expect(component).toBeTruthy();
  });

  it('always renders a table element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('table')).toBeDefined();
  });

  it('always renders a table wrapper element', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.table-wrapper')).toBeDefined();
  });

  it('always renders a 6 functional button elements', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('button').length).toBe(6);
  });

  it('replace first row with the second one', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[0];
    const firstRowText = compiled
      .querySelector('tr')
      .querySelector('td')
      .textContent;
    const secondRowText = compiled
      .querySelectorAll('tr')[1]
      .querySelector('td')
      .textContent;

    button.click();
    fixture.detectChanges();

    const newFirstRowText = compiled
      .querySelector('tr')
      .querySelector('td')
      .textContent;
    const newSecondRowText = compiled
      .querySelectorAll('tr')[1]
      .querySelector('td')
      .textContent;
    expect(newFirstRowText).toBe(secondRowText);
    expect(newSecondRowText).toBe(firstRowText);
  });

  it('remove all rows on click hide rows button', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[1];
    let rows = compiled.querySelectorAll('tr').length;
    expect(rows).toBe(300);

    button.click();
    fixture.detectChanges();

    rows = compiled.querySelectorAll('tr').length;
    expect(rows).toBe(0);
  });

  it('change texts in all rows', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[2];
    const texts = [];
    for (const row of compiled.querySelectorAll('tr')) {
      texts.push(row.querySelector('td').textContent);
    }

    button.click();
    fixture.detectChanges();

    const newTexts = [];
    for (const row of compiled.querySelectorAll('tr')) {
      newTexts.push(row.querySelector('td').textContent);
    }
    const areNotEqual = newTexts.every((newText, index) => newText !== texts[index]);
    expect(areNotEqual).toBe(true);
  });

  it('change texts in every 10 rows', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[3];
    const texts = [];
    for (const row of compiled.querySelectorAll('tr')) {
      texts.push(row.querySelector('td').textContent);
    }

    button.click();
    fixture.detectChanges();

    const newTexts = [];
    for (const row of compiled.querySelectorAll('tr')) {
      newTexts.push(row.querySelector('td').textContent);
    }
    const areEqual = newTexts.every((newText, index) => {
      if (index % 10 === 0) {
        return newText !== texts[index];
      }
      return newText === texts[index];
    });
    expect(areEqual).toBe(true);
  });

  it('remove one row on click remove row button', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[4];
    const rowsLength = compiled.querySelectorAll('tr').length;

    button.click();
    fixture.detectChanges();

    const newRowsLength = compiled.querySelectorAll('tr').length;
    expect(newRowsLength).toBe(rowsLength - 1);
  });

  it('add one row on click add row button', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const button = compiled.querySelectorAll('button')[5];
    const rowsLength = compiled.querySelectorAll('tr').length;

    button.click();
    fixture.detectChanges();

    const newRowsLength = compiled.querySelectorAll('tr').length;
    expect(newRowsLength).toBe(rowsLength + 1);
  });
});
