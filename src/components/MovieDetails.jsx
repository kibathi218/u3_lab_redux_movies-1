import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { LoadMovieDetails } from "../store/actions/MovieActions"

const mapStateToProps = ({ movieDetailsState }) => {
    return { movieDetailsState }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMovieDetails: (id) => dispatch(LoadMovieDetails(id))
    }
}

const MovieDetails = (props) => {
    let { id } = useParams()

    useEffect(() => {
        props.fetchMovieDetails(id)
    }, [])

    return (
        <div className="movie-details-container">
           <p>{ props.movieDetailsState.movieDetails.title }</p>
           <p>Release Date: {props.movieDetailsState.movieDetails.release_date }</p>
           <p>Runtime: {props.movieDetailsState.movieDetails.runtime} minutes</p>
           <p>Average Rating: {props.movieDetailsState.movieDetails.vote_average}/10</p>
           <p>{props.movieDetailsState.movieDetails.overview}</p>
        </div>
    )

}

export default connect(mapStateToProps, mapDispatchToProps) (MovieDetails)