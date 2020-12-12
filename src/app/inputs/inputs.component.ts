import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetService } from '../budget.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {
  defaultType = 'inc';

  constructor(private budgetService: BudgetService) { }

  ngOnInit(): void {
  }

  onAddItem(form: NgForm) {
    const id = Date.now();
    const type = form.value.type;
    const description = form.value.description;
    const value = form.value.value;
    const newItem = new Item(type, description, value, id);
    this.budgetService.addItem(newItem);
    form.controls['description'].reset();
    form.controls['value'].reset();
  }

}
