import { reactive } from "vue";

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
    rawResults: [{
        "adult": false,
        "backdrop_path": "/qSc5JzPvSm6KxVv54nrn7SNXFtk.jpg",
        "genre_ids": [
            16,
            10402,
            35
        ],
        "id": 1192209,
        "original_language": "pt",
        "original_title": "Arca de Noé",
        "overview": "A pair of mice attempt to board Noah's Ark: Vini, a charismatic poet with terrible stage fright, and Tito, a talented and charming guitarist. When the rains come, only one male and one female of each species is allowed on Noah's Ark. With the help of an ingenious cockroach and fate's good luck, Vini and Tito sneak their way onto the Ark and together avert a showdown among the ships carnivores and plant eaters. All the while, the animals perform a series of classic songs inspired by world renowned poet, Vinicius de Moraes. Can these talented stowaways use music to break the tension and help these cooped up creatures survive the 40 days and 40 nights together?",
        "popularity": 235.089,
        "poster_path": "/j1Rjw6a62UwrbTNT0I3JzZnnCmr.jpg",
        "release_date": "2024-01-05",
        "title": "Noah's Ark",
        "video": false,
        "vote_average": 7,
        "vote_count": 41
    },
    {
        "adult": false,
        "backdrop_path": "/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg",
        "genre_ids": [
            878,
            28,
            14,
            12
        ],
        "id": 601796,
        "original_language": "ko",
        "original_title": "외계+인 1부",
        "overview": "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up. movie HD QUALITY, open this link leakedcinema.com",
        "popularity": 1306,
        "poster_path": "/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg",
        "release_date": "2022-07-20",
        "title": "Alienoid",
        "video": false,
        "vote_average": 7,
        "vote_count": 268
    },
    {
        "adult": false,
        "backdrop_path": "/jZXvRmQTAFmNaHSyN8DQqS5IIaM.jpg",
        "genre_ids": [
            27
        ],
        "id": 860867,
        "original_language": "en",
        "original_title": "The Accursed",
        "overview": "Hana spends twenty years suppressing a maleficent curse that was placed upon her bloodline, only to have a family member knowingly release it forcing her to kill or to be killed.",
        "popularity": 42.905,
        "poster_path": "/dEEXkhekQd7W1S9gZ9EawXNkaEF.jpg",
        "release_date": "2021-11-12",
        "title": "The Accursed",
        "video": false,
        "vote_average": 6,
        "vote_count": 51
    },
    {
        "adult": false,
        "backdrop_path": "/ba9TgAO4I8RyA2LljzR3MspHaM9.jpg",
        "genre_ids": [
            28,
            878,
            53
        ],
        "id": 799155,
        "original_language": "hi",
        "original_title": "Attack",
        "overview": "With the Parliament under siege, India’s first super soldier Arjun Shergill is tasked to get hold of the terrorists in the nick of time, save the Prime Minister from their clutches and stop a dirty bomb from exploding and destroying Delhi. Will Arjun succeed in his mission?",
        "popularity": 142.003,
        "poster_path": "/5jGKbYuZtdxSNOocI6ZziQeiY4n.jpg",
        "release_date": "2022-04-01",
        "title": "Attack",
        "video": false,
        "vote_average": 6.674,
        "vote_count": 184
    },
    {
        "adult": false,
        "backdrop_path": "/9c0lHTXRqDBxeOToVzRu0GArSne.jpg",
        "genre_ids": [
            878,
            28
        ],
        "id": 935271,
        "original_language": "en",
        "original_title": "After the Pandemic",
        "overview": "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers. movie HD QUALITY, open this link leakedcinema.com",
        "popularity": 739.155,
        "poster_path": "/p1LbrdJ53dGfEhRopG71akfzOVu.jpg",
        "release_date": "2022-03-01",
        "title": "After the Pandemic",
        "video": false,
        "vote_average": 4.9,
        "vote_count": 52
    },
    {
        "adult": false,
        "backdrop_path": "/sxmazOtNWi6IiZ1QqG0wkliHzgA.jpg",
        "genre_ids": [
            27,
            53,
            18
        ],
        "id": 762079,
        "original_language": "fr",
        "original_title": "Le Calendrier",
        "overview": "Eva, an ex-dancer, is now living in a wheelchair, unable to walk. When her friend Sophie gives her an old wooden antique advent calendar before Christmas, she realizes each window contains a surprise that triggers repercussions in real life: some of them good, but most of them bad... Now Eva will have to choose between getting rid of the calendar or walking again… even if it causes death around her.",
        "popularity": 31.226,
        "poster_path": "/psaYUHDotafhVNAE1pZN2GkRXJY.jpg",
        "release_date": "2021-12-01",
        "title": "The Advent Calendar",
        "video": false,
        "vote_average": 6.66,
        "vote_count": 297
    },
    {
        "adult": false,
        "backdrop_path": "/9RIp2idEKHRAnB2MqqfatIuBkko.jpg",
        "genre_ids": [
            35
        ],
        "id": 1074049,
        "original_language": "es",
        "original_title": "Ocho apellidos marroquís",
        "overview": "Follows the Díaz-Aguirre family, whose perfect universe turns upside down after the death of the patriarch, who in his will asks his wife to recover the 'Sardinete', his first fishing boat which is rusting in a Moroccan port.",
        "popularity": 98.818,
        "poster_path": "/g5nUFZUekNT6Wo2ZiSQmnM6yWMy.jpg",
        "release_date": "2023-12-01",
        "title": "A Moroccan Affair",
        "video": false,
        "vote_average": 5.987,
        "vote_count": 38
    },
    {
        "adult": false,
        "backdrop_path": "/9xvBGz7wYjK5faoeXDIaBB9EYDx.jpg",
        "genre_ids": [
            10749,
            18,
            35
        ],
        "id": 1139566,
        "original_language": "es",
        "original_title": "A través de mi ventana 3: A través de tu mirada",
        "overview": "After the events of the summer, Ares and Raquel they don't see a way forward in their relationship and decide to go separate ways. But when they meet again in the winter in Barcelona, the love and desire they feel for each other is undeniable. Will they be able to find a way to get back together?",
        "popularity": 149.8,
        "poster_path": "/gwpTgtwVAwmvivBN8rAQABpx9Am.jpg",
        "release_date": "2024-02-23",
        "title": "Through My Window 3: Looking at You",
        "video": false,
        "vote_average": 6.955,
        "vote_count": 370
    },
    {
        "adult": false,
        "backdrop_path": null,
        "genre_ids": [
            18,
            10402
        ],
        "id": 461191,
        "original_language": "en",
        "original_title": "A",
        "overview": "A young alcoholic ambient musician locks himself in his apartment on a dangerous seven day bender as he attempts to finish his upcoming album.",
        "popularity": 11.315,
        "poster_path": "/4uOKZzRB615cIxcVi31pcsdFtSS.jpg",
        "release_date": "2017-09-13",
        "title": "A",
        "video": false,
        "vote_average": 7.324,
        "vote_count": 88
    },
    {
        "adult": false,
        "backdrop_path": "/mOQV573Tr0WxI2VVOLKwtfaRGZH.jpg",
        "genre_ids": [
            10749,
            35,
            12
        ],
        "id": 949429,
        "original_language": "th",
        "original_title": "ผจญภัยล่าขุมทรัพย์หมื่นลี้",
        "overview": "Joy, a secretary at a large multinational company, has an online shopping problem, likes to read adventure novels and watch travel and adventure shows. She daydreams about living a life of adventure.",
        "popularity": 124.46,
        "poster_path": "/z3SeS4wjKQ3TjHSvRidovGJbHYb.jpg",
        "release_date": "2023-12-22",
        "title": "The Adventures",
        "video": false,
        "vote_average": 6.526,
        "vote_count": 19
    },
    {
        "adult": false,
        "backdrop_path": "/ltpW5exyTdqL5twV8zRMajf1VgU.jpg",
        "genre_ids": [
            99
        ],
        "id": 24791,
        "original_language": "ja",
        "original_title": "A",
        "overview": "Roughly chronological, from 3/96 to 11/96, with a coda in spring of 1997: inside compounds of Aum Shinrikyo, a Buddhist sect led by Shoko Asahara. (Members confessed to a murderous sarin attack in the Tokyo subway in 1995.) We see what they eat, where they sleep, and how they respond to media scrutiny, on-going trials, the shrinking of their fortunes, and the criticism of society. Central focus is placed on Hiroshi Araki, a young man who finds himself elevated to chief spokesman for Aum after its leaders are arrested. Araki faces extreme hostility from the Japanese public, who find it hard to believe that most followers of the cult had no idea of the attacks and even harder to understand why these followers remain devoted to the religion, if not the violence.",
        "popularity": 3.509,
        "poster_path": "/hqWZfGdwPrYQYTAm84Mw9nxnvHA.jpg",
        "release_date": "1998-09-09",
        "title": "A",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 72
    },
    {
        "adult": false,
        "backdrop_path": "/G56AzECyTDp63sE7CbJ6AEBKhF.jpg",
        "genre_ids": [
            37,
            28
        ],
        "id": 851925,
        "original_language": "en",
        "original_title": "Death Alley",
        "overview": "In 1892, the Dalton Gang set out to become the most famous outlaws in America. That dream would become a nightmare.",
        "popularity": 119.649,
        "poster_path": "/iIKYK9mdapWlJ21YNRGB57WKErK.jpg",
        "release_date": "2021-03-11",
        "title": "Death Alley",
        "video": false,
        "vote_average": 5.4,
        "vote_count": 32
    },
    {
        "adult": false,
        "backdrop_path": "/fGe1ej335XbqN1j9teoDpofpbLX.jpg",
        "genre_ids": [
            53,
            9648,
            80
        ],
        "id": 915935,
        "original_language": "fr",
        "original_title": "Anatomie d'une chute",
        "overview": "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the sole witness.",
        "popularity": 137.033,
        "poster_path": "/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
        "release_date": "2023-08-23",
        "title": "Anatomy of a Fall",
        "video": false,
        "vote_average": 7.632,
        "vote_count": 1789
    },
    {
        "adult": false,
        "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
        "genre_ids": [
            28,
            12,
            35
        ],
        "id": 848538,
        "original_language": "en",
        "original_title": "Argylle",
        "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
        "popularity": 388.394,
        "poster_path": "/siduVKgOnABO4WH4lOwPQwaGwJp.jpg",
        "release_date": "2024-01-31",
        "title": "Argylle",
        "video": false,
        "vote_average": 6.183,
        "vote_count": 879
    },
    {
        "adult": false,
        "backdrop_path": "/a2K8ak4pGCHR3O0hMualcokXXpa.jpg",
        "genre_ids": [
            10749,
            53
        ],
        "id": 210763,
        "original_language": "kn",
        "original_title": "A",
        "overview": "A film director fades away from the industry after the failed love with the heroine of his movie. After being rehabilitated, he learns that some people conspired his fall and decides to take revenge.",
        "popularity": 3.573,
        "poster_path": "/y3DH68oWOGMZ637tqYHfTGU4Bif.jpg",
        "release_date": "1998-02-12",
        "title": "A",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 52
    },
    {
        "adult": false,
        "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
        "genre_ids": [
            10749,
            35
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 307.137,
        "poster_path": "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
        "release_date": "2023-12-21",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 7.085,
        "vote_count": 1323
    },
    {
        "adult": false,
        "backdrop_path": "/u0P5drNyTrZoGyJONPcZGbv1mNP.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 1124127,
        "original_language": "en",
        "original_title": "Air Force One Down",
        "overview": "On her first assignment aboard Air Force One, a rookie Secret Service agent faces the ultimate test when terrorists hijack the plane, intent on derailing a pivotal energy deal. With the President's life on the line and a global crisis at stake, her bravery and skills are pushed to the limit in a relentless battle that could change the course of history.",
        "popularity": 230.087,
        "poster_path": "/nKPoSD4pZ3s3CJ9g3cqWRcQ41TC.jpg",
        "release_date": "2024-02-09",
        "title": "Air Force One Down",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 68
    },
    {
        "adult": false,
        "backdrop_path": "/rNP32TLwnUky6uuUyCIDatGCd6x.jpg",
        "genre_ids": [
            10751,
            14,
            35
        ],
        "id": 1027604,
        "original_language": "cs",
        "original_title": "Princezna zakletá v čase 2",
        "overview": "It follows young alchemist Amélie as she acquires a magical power: partially influencing the flow of time. But she is split in time, and Amélie from the present meets Améliw from the past, who accompanies her every step of the way.",
        "popularity": 221.928,
        "poster_path": "/ywzbF5YSBfZ7XqcGO9YR6Gy4VFt.jpg",
        "release_date": "2022-11-17",
        "title": "Princess Cursed in Time: Alchemist's Quest",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 12
    },
    {
        "adult": false,
        "backdrop_path": "/fqv8v6AycXKsivp1T5yKtLbGXce.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 653346,
        "original_language": "en",
        "original_title": "Kingdom of the Planet of the Apes",
        "overview": "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
        "popularity": 298.264,
        "poster_path": "/fAjyUDKABSehK6pHWvh9ket5X3z.jpg",
        "release_date": "2024-05-08",
        "title": "Kingdom of the Planet of the Apes",
        "video": false,
        "vote_average": 0,
        "vote_count": 0
    },
    {
        "adult": false,
        "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
        "genre_ids": [
            28,
            12,
            878,
            14,
            18
        ],
        "id": 624091,
        "original_language": "id",
        "original_title": "Sri Asih",
        "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
        "popularity": 336.371,
        "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
        "release_date": "2022-11-17",
        "title": "Sri Asih",
        "video": false,
        "vote_average": 6.297,
        "vote_count": 79
    }],
    formattedResults: [],
});




export const storeMethods = {

    formatData(data) {
        console.log(data);
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
    }
}