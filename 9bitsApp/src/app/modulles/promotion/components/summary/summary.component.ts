import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SummaryDialogComponent } from '../summary-dialog/summary-dialog.component';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {


  constructor(public dialog: MatDialog) { }
  openDialog() {

    const dialogRef = this.dialog.open(SummaryDialogComponent);

    const dialogSubmitSubscription = dialogRef.componentInstance.submitClicked
    .subscribe(result => {
      console.log('Got the data!', result);

      dialogSubmitSubscription.unsubscribe();
    });

   
  }

}

