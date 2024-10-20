import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import { MatListModule } from '@angular/material/list'

@Component({
  selector: 'app-multiplication-table',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatListModule],
  templateUrl: './multiplication-table.component.html',
  styleUrl: './multiplication-table.component.scss'
})
export class MultiplicationTableComponent {

  showTable: boolean = false;
  showTables: boolean = false;

  multiplicatorValue: number = 0;

  items: number[] = [0,1,2,3,4,5,6,7,8,9]

  public generateTable() {
    this.showTable = !this.showTable
  }

  public getValue(item: number, subItem?: number): number {
    if(this.showTables) {
      return subItem!*item
    } 
    return this.multiplicatorValue*item
    
  }

  public generateAllTables() {
    this.showTable = false;
    this.multiplicatorValue = 0;
    this.showTables = !this.showTables
  }

}
