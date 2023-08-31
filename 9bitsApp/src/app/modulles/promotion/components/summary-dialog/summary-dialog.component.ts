import { ChangeDetectorRef, Component, EventEmitter, Output, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IPromotion } from 'src/app/models/IPromotion';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-summary-dialog',
  templateUrl: './summary-dialog.component.html',
  styleUrls: ['./summary-dialog.component.scss']
})
export class SummaryDialogComponent implements OnInit {

  @Output() submitClicked = new EventEmitter<any>();


  dataSource = new MatTableDataSource<IPromotion>();

  editedRowId: number | null = null;
  displayedColumns: string[] = ['No.', 'Nazwa', 'Actions'];
  data:any = [
    { _id: '1', marketingName: 'Promocja 1', promotion: '' },
    { _id: '2', marketingName: 'Promocja 2', promotion: '' },
  ];

  id = 2;


  constructor(
    public dialogRef: MatDialogRef<SummaryDialogComponent>,
    private snackBar: MatSnackBar,
    private cdRef: ChangeDetectorRef) { }


  ngOnInit() {
    this.dataSource.data = this.data
  }


  startEditing(rowId: number) {
    this.editedRowId = rowId;
  }


  stopEditing() {
    this.editedRowId = null;
  }

  toggleEdit(rowId: number): void {
    if (this.editedRowId === rowId) {
      this.editedRowId = null;
    } else {
      this.editedRowId = rowId;
    }

    this.cdRef.detectChanges();
  }

  isEditing(rowId: number): boolean {
    return this.editedRowId === rowId;
  }

  openConfirmDeleteSnackBar(row: IPromotion): void {
    const snackBarRef = this.snackBar.open(`Czy na pewno chcesz usunąć daną promocję "${row.marketingName}"?`, 'TAK', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar']
    });

    snackBarRef.onAction().subscribe(() => {
      this.deleteRow(row);
    });
  }

  deleteRow(row: IPromotion): void {
    this.data = this.data.filter((item:any) => item._id !== row._id);
  }


  addRow() {
    this.id++;

    if (localStorage.getItem('marketingName')) {
      const keys = Object.keys(localStorage);

      const jsonObject: Record<string, string> = {};

      keys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value !== null) {
          jsonObject[key] = value;
        }
      });

      const promotion: IPromotion = {
        _id: this.id.toString(),
        marketingName: localStorage.getItem('marketingName')!,
        promotion: JSON.stringify(jsonObject)
      };

      this.data.push(promotion);
      this.dataSource.data=this.data;
      localStorage.clear();
    }



  }

  saveMessage() {
    this.submitClicked.emit('deta');
  }


  closeDialog() {
    this.dialogRef.close();
  }

}
