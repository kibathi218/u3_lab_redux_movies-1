import { GET_MOVIES_LIST, GET_MOVIE_DETAIL } from '../types'
import { GetMoviesList, GetMovieDetail } from '../../services/MovieService'

export const LoadMoviesData = () => {
  return async (dispatch) => {
    try {
      const movies = await GetMoviesList()
      //console.log()
      dispatch({
        type: GET_MOVIES_LIST,
        payload: movies
      })
    } catch (error) {
      throw error
    }
  }
}

export const LoadMovieDetail = (id) => {
  return async (dispatch) => {
    try {
      const details = await GetMovieDetail(id)

      dispatch({
        type: GET_MOVIE_DETAIL,
        payload: details
      })
    } catch (error) {
      throw error
    }
  }
}
