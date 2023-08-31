import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  selectedCircle: number | null = 1;


  reason = '';

  close(reason: string) { 
  }


  selectCircle(circleNumber: number): void {
    this.selectedCircle = circleNumber;
  }
}
