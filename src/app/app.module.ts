import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BudgetComponent } from './budget/budget.component';
import { TotalsComponent } from './totals/totals.component';
import { InputsComponent } from './inputs/inputs.component';
import { ListsComponent } from './lists/lists.component';
import { BudgetService } from './budget.service';
import { ListsItemComponent } from './lists/lists-item/lists-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetComponent,
    TotalsComponent,
    InputsComponent,
    ListsComponent,
    ListsItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BudgetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
