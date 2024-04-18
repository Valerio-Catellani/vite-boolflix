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
    showModal: false,

    formattedResults: {
        searched_movies: {
            name: 'Searched Movies',
            type: 'search',
            searchInput: '',
            results: []
        },
        searched_series: {
            name: 'Searched Series',
            type: 'search',
            searchInput: '',
            results: []
        },
    }



});




export const storeMethods = {

    formatData(data) {
        let newArray = data.map((element) => {
            return {
                id: element.id,
                adult: element.adult,
                image: element.backdrop_path ? store.imageURL + element.poster_path : null,
                description: element.overview,
                language: element.original_language,
                title: element.title ?? element.name ?? 'no title aviable',
                original_title: element.original_title ?? element.original_name ?? 'no original title aviable',
                vote_average: element.vote_average,
                vote_count: element.vote_count,
                release_date: element.release_date ?? element.first_air_date ?? 'no data infromation aviable',
                popularity: element.popularity,
                imageLarge: element.backdrop_path ? store.imageURL + element.backdrop_path : null,
            }
        });
        return newArray
    },

    searchMedia(input, arrayOfElementToSearch) {
        store.options.params.query = input;
        arrayOfElementToSearch.forEach(element => {
            store.formattedResults[`searched_${element}`].searchInput = input  //setto il valore della ricerca all'interno degli array sopra
        });
        //console.log(store.formattedResults);
        axios.get(store.apiURL + store.endPoints.movies, store.options)
            .then((result) => {
                store.formattedResults.searched_movies.results = storeMethods.formatData(result.data.results); //ottengo i risultati -> li formatto -> li metto nell'array

            }).catch((error) => {
                console.log(error);
            })
        axios.get(store.apiURL + store.endPoints.series, store.options)
            .then((result) => {
                store.formattedResults.searched_series.results = storeMethods.formatData(result.data.results);
            }).catch((error) => {
                console.log(error);
            });
    }
}
