import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/",
    imageURL: "https://image.tmdb.org/t/p/original",
    endPoints: {
        movies: "search/movie",
        series: "search/tv",
    },
    options: {
        params: {
            api_key: "a777a28e1bd1eb689e9612e8f5298de8", //!required
            query: "a", //!required
        }
    },
    searchResults: {
        searchInput: '',
        movies: [],
        series: [],
        all: [],
    },
    formattedResults: [],
});




export const storeMethods = {

    formatData(data) {
        let newArray = data.map((element) => {
            return {
                id: element.id,
                adult: element.adult,
                image: store.imageURL + element.poster_path,
                description: element.overview,
                language: element.original_language,
                title: element.original_title,
                vote_average: element.vote_average,
                vote_count: element.vote_count,
                release_date: element.release_date,
                popularity: element.popularity,
                imageLarge: element.backdrop_path ? store.imageURL + element.backdrop_path : null,
            }
        });
        return newArray
    },

    searchMedia(input) {
        store.options.params.query = input;
        store.searchResults.searchInput = input;
        axios.get(store.apiURL + store.endPoints.movies, store.options)
            .then((result) => {
                store.searchResults.movies = result.data.results;
                store.searchResults.movies = storeMethods.formatData(store.searchResults.movies);
            }).catch((error) => {
                console.log(error);
            })
        axios.get(store.apiURL + store.endPoints.series, store.options)
            .then((result) => {
                store.searchResults.series = result.data.results;
                store.searchResults.series = storeMethods.formatData(store.searchResults.series);
                store.searchResults.all = store.searchResults.movies.concat(store.searchResults.series);
            }).catch((error) => {
                console.log(error);
            });
        console.log(store.searchResults.series);
        ;
    }
}