import React, {useEffect, useState} from 'react'
import './Row.css'
import axios from "../../../utils/axios"
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const Row = ({title, fetchUrl, isLargeRow}) => {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailer] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original";
    useEffect(() =>{
        (async() =>{
            try{console.log(fetchUrl) 
            const request = await axios.get(fetchUrl)
        console.log(request)
    setMovie(request.data.results);
}catch(error) {
    console.log("error", error);
}
        })()
    }, [fetchUrl]);
    const handleClick =(movie) =>{
        if(trailerUrl){
            setTrailer('')
        }else{
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
							.then((url) => {
								console.log("Trailer URL:", url);
								const urlParams = new URLSearchParams(new URL(url).search);
								const videoId = urlParams.get("v");
								setTrailer(videoId);
							})
							.catch((error) => {
								console.error("Error finding trailer:", error);
								setTrailer("Oops!");
							});
        }
    }
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: true,
        },

    }
  return (
		<div className="row">
			<h3>{title}</h3>
			<div className="row-posters">
				{movies?.map((movie, index) => (
					<img
						onClick={() => handleClick(movie)}
						key={index}
						src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} className={`row_poster ${isLargeRow && "row_posterLarge"}`}
					/>
				))}
			</div>
            <div style={{padding : '15px'}}>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>} 
            </div>
		</div>
	);
}

export default Row
