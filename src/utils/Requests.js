const API_KEY = process.env.REACT_APP_API_KEY;
const requests = {
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchTopRatedTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
	fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};
export default requests;