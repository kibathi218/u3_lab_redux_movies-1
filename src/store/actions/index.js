import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redx-devtool-extension'
import thunk from 'redux-thunk'
import MovieDeatilsReducer from '../reducers/MovieDetailsReducer'
import MovieReducer from '../reducers/MovieReducer'

const store = createStore(
    combineReducers({
       movieState: MovieDeatilsReducer,
       movieDetailsState: MovieReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store