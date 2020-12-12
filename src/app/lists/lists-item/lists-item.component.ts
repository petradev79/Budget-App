import { Component, Input, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/budget.service';

@Component({
  selector: 'app-lists-item',
  templateUrl: './lists-item.component.html',
  styleUrls: ['./lists-item.component.scss']
})
export class ListsItemComponent implements OnInit {
  @Input() item;

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  onDeleteItem(type:string, id: number) {
    this.budgetService.deleteItem(type, id);
  }

}
