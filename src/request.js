const APIKEY = "3563002fd19d30c5f0b2eb655f709000";
const requests = {

    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}`,
    fetchTrending: `/trending/all/week?api_key=${APIKEY}`,
    fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumenntaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
export default requests