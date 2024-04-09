import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie_Detail from "../components/Movie_Detail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <div>
      {loading ? (
        <h1>Loading Movie Detail...</h1>
      ) : (
        <div>
          <Movie_Detail movie={movie} />
        </div>
      )}
    </div>
  );
}

export default Detail;
