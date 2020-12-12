import { Item } from './item.model';

export class BudgetService {
  private data = {
    lists: {
      inc: [],
      exp: []
    },
    totals: {
      inc: 0,
      exp: 0
    },
    budget: 0
  }

  addItem(item: Item) {
    if (item.type === 'inc') {
      this.data.lists.inc.push(item);
    } else if (item.type === 'exp') {
      this.data.lists.exp.push(item);
    }

    this.calculateBudget();
  }

  deleteItem(type: string, id: number) {
    const ids = this.data.lists[type]
      .map((current: Item) => current.id);
    const index = ids.indexOf(id);
    this.data.lists[type].splice(index, 1);
    
    this.calculateBudget();
  }

  calculateTotal(type) {
    let sum = 0;
    this.data.lists[type].forEach(function(cur) {
        sum += cur.value;
    });
    this.data.totals[type] = sum;
  }

  calculateBudget() {
    this.calculateTotal('exp');
    this.calculateTotal('inc');

    this.data.budget = this.data.totals.inc - this.data.totals.exp;
  }

  getData() {
    return this.data;
  }
  
}