import { GET_MOVIE_DETAILS } from "../types";

const initialState = {
    movieDeatils: []
}

const MovieDeatilsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIE_DETAILS:
            return {...state, movieDeatils: action.payload}
        default:
            return {...state}
    }
}

export default MovieDeatilsReducer