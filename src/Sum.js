import { computed } from 'mobx'

/*
Another Interface which computes data for it's view.
*/

class Sum {
  constructor(store) {
    Object.assign(this, { store: store })
  }

  @computed get total() {
    return this.store.tick + this.store.tock
  }
}

export default Sum
