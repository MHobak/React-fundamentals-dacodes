import Title from "../../components/atoms/Text/Title/Title"
import Subtitle from "../../components/atoms/Text/Subtitle/SubTitle"
import MoviesTemplate from "../../templates/MoviesTemplate/MoviesTemplate"
import MoviesGallery from "../../components/organisms/MoviesGallery/MoviesGallery"
import Pagination from "../../components/molecules/Pagination/Pagination"
import { ButtonBar, MenuActions } from "../../components/molecules/ButtonBar/ButtonBar"
import { useState, useEffect } from 'react';
import axios from "axios"
import { MovieI } from "../../components/molecules/MovieCard/MovieCard"
import Loading from "../../components/molecules/Loading/Loading"

interface ApiResponse {
    page: number
    total_pages: number
    results: Array<MovieI>
}

interface PageDescriptionI {
    title: string
    description: string
}

const getDescriptions = (action:MenuActions):PageDescriptionI => {
    const descriptions : PageDescriptionI = {
        title: "",
        description: ""
    }

    switch (action) {
        case MenuActions.NowPlaying:
            descriptions.title = "Now Playing"
            descriptions.description = "Lista de películas que están actualmente en los cines."
            break;
    
        case MenuActions.Popular:
            descriptions.title = "Popular"
            descriptions.description = "Lista de películas ordenadas por popularidad."
            break;

        case MenuActions.TopRated:
            descriptions.title = "Top Rated"
            descriptions.description = "Lista de películas ordenadas por clasificación."
            break;

        case MenuActions.Upcoming:
            descriptions.title = "Upcoming"
            descriptions.description = "Lista de películas que se estrenarán próximamente."
            break;

        }

    return descriptions;
}

const hanldeMovieRequest = (setData,SetError,setLoading,setPage, page: number, route:string) => {
    setLoading(true);
    const options = {
        headers: {
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTExY2U2ZTBjNGUxZjQ4M2E3NDIxMDNjMDJmYjZmOSIsInN1YiI6IjY0MTM3ZDEyYTZjMTA0MDA3OTA3MTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhXW1F90EvMAP_AMkFrEfMJdyuswuVnBY6_KlyVMkO0",
        },
    };

    axios
    .get<ApiResponse>(`https://api.themoviedb.org/3/movie/${route}?language=es-MX&page=${page}`, options)
    .then(function (response) {
        const movies = response.data.results.map((movie) => { 
            return {...movie, poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path }
        });
        response.data.results = movies;
        setData(response.data);
        setLoading(false);
        setPage(response.data.page);
    })
    .catch(function (error) {
        console.error(error);
        SetError(error);
        setLoading(false);
    });
}



const Movies = () => {
    const [data, setData] = useState<ApiResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(0);
    const [route, setRoute] = useState(MenuActions.NowPlaying);
    const [descriptions, setDescriptions] = useState(getDescriptions(MenuActions.NowPlaying));

    const handlePagination = (forward:boolean) =>{
        let pageNum = page;
        if (forward) {
            if (pageNum >= (data?.total_pages??1)) {
                pageNum = data?.total_pages??1
            } else {
                pageNum++;
                setPage(pageNum)
                hanldeMovieRequest(setData,setError,setLoading,setPage,pageNum, route);
            }
        } else {
            if (pageNum <= 1) {
                pageNum = 1
            } else {
                pageNum--;
                setPage(pageNum)
                hanldeMovieRequest(setData,setError,setLoading,setPage,pageNum, route);
            }
        }
    }

   const handleRoute = (route: MenuActions) => {
        setRoute(route);
        hanldeMovieRequest(setData,setError,setLoading,setPage,1, route);
        setDescriptions(getDescriptions(route));
   }

    useEffect(() => {
        hanldeMovieRequest(setData,setError,setLoading,setPage,1,route);
      }, []);

    if (loading) {
        return <Loading/>
    }

    return (
        <MoviesTemplate>
        <ButtonBar selected={route} action={handleRoute}/>
        <Title>{descriptions.title}</Title>
        <Subtitle>{descriptions.description}</Subtitle>
        <MoviesGallery list={data?.results ?? []} />
        <Pagination 
        page={page} 
        total={data?.total_pages??0}
        onPrevious={() => handlePagination(false)}
        onNext={() => handlePagination(true)}
        />
            
        </MoviesTemplate>
    )
}

Movies.displayName = "Movies"
export default Movies