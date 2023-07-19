import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    // makeObservable(this, {
    //   count: observable,
    //   increment: action,
    //   decrement: action,
    //   total: computed,
    // });
    makeAutoObservable(this);
  }

  get total() {
    return this.count * 2;
  }

  increment = (value: number) => {
    this.count += value;
  };

  decrement = (value: number) => {
    this.count -= value;
  };
}

export default CounterStore;
