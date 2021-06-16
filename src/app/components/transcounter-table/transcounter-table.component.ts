import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TranscounterService } from 'src/app/services/transcounter.service';
import { TranscounterTableDataSource, TranscounterTableItem } from './transcounter-table-datasource';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-transcounter-table',
  templateUrl: './transcounter-table.component.html',
  styleUrls: ['./transcounter-table.component.css']
})
export class TranscounterTableComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TranscounterTableItem>;
  dataSource!: TranscounterTableDataSource;

  displayedColumns = ['line', 'direction', 'bus', 'timeStamp', 'latitude', 'longitude', 'passengersIn', 'passengersOut', 'actions'];

  constructor(private tcs: TranscounterService, private snackBar: MatSnackBar) { }

  ngAfterViewInit(): void {
    this.tcs.getData().subscribe(data => {
      this.dataSource = new TranscounterTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;

    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.openSnackBar(`Filtro no implementado`, 'Ok');
    // TODO: arreglar filtro (MatTableDataSource)
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // TODO: implementar ventana modal para mostrar feedback
  editData(id: string): void {
    console.log(id);
    this.openSnackBar('No implementado', 'Ok');
}

  deleteData(id: string): void {
    this.tcs.deleteData(id).then(() => {
      this.openSnackBar(`Dato borrado`, 'Ok');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

}
