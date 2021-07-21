const APIKEY = "3563002fd19d30c5f0b2eb655f709000";
const URL= "https://api.themoviesdb.org/3"
const requests = {

    fetchTrending: `/trending/all/week?api_key = ${APIKEY}&language=en-US`,
    fetchNetflixOriginals: `${URL}/discover/tv?api_key = ${APIKEY}`,
    fetchTopRated: `/movies/top_rated?api_key = ${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movies?api_key = ${APIKEY}&with_genrus=28`,
    fetchComedyMovies:`/discover/movies?api_key = ${APIKEY}&with_genrus=35`,
    fetchHorrorMovies:`/discover/movies?api_key = ${APIKEY}&with_genrus=27`,
    fetchRomanceMovies:`/discover/movies?api_key = ${APIKEY}&with_genrus=10749`,
    fetchDocumentaryMovies:`/discover/movies?api_key = ${APIKEY}&with_genrus=99`,

}
export default requests