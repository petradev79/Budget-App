import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  data: {lists};

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
    this.data = this.budgetService.getData();
  }
}
