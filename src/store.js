import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    apiURL: "https://api.themoviedb.org/3/",
    imageURL: "https://image.tmdb.org/t/p/original",
    endPoints: {
        movies: "search/movie",
        series: "search/tv",
        trending_movie_week: "trending/movie/week",
        series_poplar: "tv/popular"
    },
    options: {
        params: {
            api_key: "a777a28e1bd1eb689e9612e8f5298de8", //!required
            query: "", //!required
            language: "", //!required
        }
    },
    showModal: false,
    isLoading: false,
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
        trending_week_movies: {
            name: 'Movies Trending this Week',
            type: 'normal',
            results: []
        },
        popular_series: {
            name: 'Popular Series',
            type: 'normal',
            results: []
        },
        carusel: {
            name: 'Carusel',
            type: 'normal',
            results: []
        },
    },
    carusel: {
        name: 'Carusel',
        type: 'normal',
        results: []
    },


});




export const storeMethods = {
    formatData(data) {
        let newArray = data.map((element) => {
            return {
                id: element.id,
                adult: element.adult,
                video: '',
                image: element.backdrop_path ? store.imageURL + element.poster_path : null,
                description: element.overview,
                language: element.original_language,
                language_flag: storeMethods.getFlag(element.original_language),
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
        store.isLoading = true;
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
            }).finally(() => {
                setTimeout(() => {
                    store.isLoading = false
                }, 1000)
            });
        store.options.params.query = '';
    },
    findTreningWeek() {
        store.options.params.language = 'en-US';
        axios.get(store.apiURL + store.endPoints.trending_movie_week, store.options).then((result) => {
            store.formattedResults.trending_week_movies.results = storeMethods.formatData(result.data.results);
            store.options.params.language = '';
            storeMethods.createCarusel(store.formattedResults.trending_week_movies.results)
        }).catch((error) => {
            console.log(error);
        }).finally(() => {
        })
        store.options.params.language = '';
    },
    findPopularSeries() {
        axios.get(store.apiURL + store.endPoints.series_poplar, store.options).then((result) => {
            store.formattedResults.popular_series.results = storeMethods.formatData(result.data.results);
        }).catch((error) => {
            console.log(error);
        })
    },
    getFlag(language) {
        switch (language) {
            case 'en':
                return 'gb';
            case 'us':
                return 'us';
            case 'pt':
                return 'pt';
            case 'it':
                return 'it';
            case 'ja':
                return 'jp';
            case 'ko':
                return 'kr';
            case 'fr':
                return 'fr';
            case 'de':
                return 'de';
            case 'es':
                return 'es';
            case 'ru':
                return 'ru';
            case 'cr':
                return 'cr';
            case 'cs':
                return 'cz';
            case 'ar':
                return 'sa';
            case 'ta':
                return 'in';
            case 'zh':
                return 'cn';
            case 'te':
                return 'in';
            default:
                return `${language}`

        }
    },
    createCarusel(infromation) {
        store.carusel.results = infromation.slice(0, 5);
        store.carusel.results.forEach(element => {
            axios.get(store.apiURL + 'movie/' + element.id + '/videos', store.options).then((result) => {
                let video_key = result.data.results[1].key;
                let video_url = `https://www.youtube.com/embed/${video_key}?si=7WVdVnX7WPoDjXed&amp;controls=0&mute=1&autoplay=1&loop=1&playlist=${video_key}&rel=0&end=30&showinfo=0&modestbranding=1`;
                element.video = video_url
            }).catch((error) => {
                console.log(error);
            })
        })

    }
}


