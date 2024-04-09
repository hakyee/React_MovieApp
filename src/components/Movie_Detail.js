import PropTypes from "prop-types";

function Movie_Detail({ movie }) {
  return (
    <div>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h1>Title: {movie.title_long}</h1>
      <div>
        <span style={{ marginRight: "20px" }}>Rating: {movie.rating}</span>
        <span style={{ marginRight: "20px" }}>
          Runtime: {movie.runtime} min
        </span>
        <span>Like: {movie.like_count}</span>
      </div>
      <p>{movie.description_full}</p>
    </div>
  );
}

Movie_Detail.propTypes = {
  movie: PropTypes.array.isRequired,
};

export default Movie_Detail;
