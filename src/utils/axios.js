import axios from 'axios'

const Ax = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default Ax;
