
import {configureStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from '.'

const store = configureStore(reducer, compose(applyMiddleware(thunk)))

export default store