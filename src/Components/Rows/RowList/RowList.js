import React from 'react'
import Row from '../SingleRow/Row'
import requests from '../../../utils/requests' 
const RowList = () => {
  return (
		<>
			<Row
				title="NETFLIX ORIGINAL"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow={true}
			/>
			<Row title="TopRated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row
				title="Top Rated Tv Shows"
				fetchUrl={requests.fetchTopRatedTvShow}
				isLargeRow={true}
			/>
			<Row title="Action" fetchUrl={requests.fetchActionMovies} />
			<Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
			<Row title="Thriller" fetchUrl={requests.fetchThriller} />
			<Row title="Crime" fetchUrl={requests.fetchCrime} />
			<Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Trending"
				fetchUrl={requests.fetchTrending}
				isLargeRow={true}
			/>
			<Row title="Animation" fetchUrl={requests.fetchAnimationMovies} />
			<Row title="Fantasy" fetchUrl={requests.fetchFantasyMovies} />
			<Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
		</>
	);
}

export default RowList
