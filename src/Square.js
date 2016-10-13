import { computed } from 'mobx'

/*
Another Interface which computes data for it's view.
*/

class Square {
  constructor(store) {
    Object.assign(this, { store: store })
  }

  @computed get tick() {
    return this.store.tick * this.store.tick
  }

  @computed get tock() {
    return this.store.tock * this.store.tock
  }
}

export default Square
