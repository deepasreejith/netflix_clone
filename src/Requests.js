const key = 'dbd9f5d38446a0f9c0f746f68a0ff434'
console.log("key"+key)

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestNowPlaying :`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`
}
export default requests