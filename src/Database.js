import { observable } from 'mobx'

/*
The Database stores all application data. Any data which changes over time belongs here as a stored @observable.
*/

class Database {
  @observable tick = 1;
  @observable tock = 1;
  @observable resetting = 'No';

  constructor(state) {
    Object.assign(this, state)
  }
}

export default Database
