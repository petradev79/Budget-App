import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent implements OnInit {
  data: {totals};

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.data = this.budgetService.getData();
  }

}
