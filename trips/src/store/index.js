import {createStore} from 'redux'

import rootReducer from './models/routeReducer'

const store = createStore(rootReducer)

export default store