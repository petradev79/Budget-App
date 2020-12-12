import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  data: {budget: number};

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.data = this.budgetService.getData();
  }

  displayDate() {
    const now = new Date();
    const month = now.getMonth();
    return this.months[month];
  }

}
