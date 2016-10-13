import { action, computed } from 'mobx'

/*
TickTock is an Interface store which exposes data via @computed functions and
provides a few @actions to mutate the Database data.
*/

class TickTock {
  constructor(store) {
    Object.assign(this, { store: store })
  }

  @computed get tick() {
    return this.store.tick
  }

  @computed get tock() {
    return this.store.tock
  }

  @computed get resetting() {
    return this.store.resetting
  }

  @action incrementTick() {
    this.store.tick = this.store.tick + 1
  }

  @action incrementTock() {
    this.store.tock = this.store.tock + 1
  }

  @action reset() {
    this.store.resetting = 'Yes'

    setTimeout(() => {
      this.store.tick = 1
      this.store.tock = 1
      this.store.resetting = 'No'
    }, 3000)
  }
}

export default TickTock
