import { createStore } from 'redux'
import reducers from './app/reducers/reducers'

const store = createStore(reducers);
console.log(store.getState())

export default store