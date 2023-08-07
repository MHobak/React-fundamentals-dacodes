import Title from "../../components/atoms/Text/Title/Title"
import Subtitle from "../../components/atoms/Text/Subtitle/SubTitle"
import MoviesTemplate from "../../templates/MoviesTemplate/MoviesTemplate"
import MoviesGallery from "../../components/organisms/MoviesGallery/MoviesGallery"
import Pagination from "../../components/molecules/Pagination/Pagination"
import ButtonBar from "../../components/molecules/ButtonBar/ButtonBar"
import { useState, useEffect } from 'react';
import axios from "axios"
import { MovieI } from "../../components/molecules/MovieCard/MovieCard"


const hanldeMovieRequest = (setData,SetError,setLoading, page: number) => {
    setLoading(true);
    const options = {
        headers: {
            accept: "application/json",
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTExY2U2ZTBjNGUxZjQ4M2E3NDIxMDNjMDJmYjZmOSIsInN1YiI6IjY0MTM3ZDEyYTZjMTA0MDA3OTA3MTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhXW1F90EvMAP_AMkFrEfMJdyuswuVnBY6_KlyVMkO0",
        },
    };

    axios
    .get<ApiResponse>(`https://api.themoviedb.org/3/movie/now_playing?language=es-MX&page=${page}`, options)
    .then(function (response) {
        const movies = response.data.results.map((movie) => { 
            return {...movie, poster_path: "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + movie.poster_path }
        });
        response.data.results = movies;
        setData(response.data);
        setLoading(false);
    })
    .catch(function (error) {
        console.error(error);
        SetError(error);
        setLoading(false);
    });
}


interface ApiResponse {
    page: number
    total_pages: number
    results: Array<MovieI>
}

const Movies = () => {
    const [data, setData] = useState<ApiResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        hanldeMovieRequest(setData,setError,setLoading,1);
      }, []);

    return (
        <MoviesTemplate>
        <ButtonBar/>
        <Title>Latest</Title>
        <Subtitle>Ultimas peliculas</Subtitle>
        <MoviesGallery list={data?.results ?? []} />
        <Pagination 
        page={data?.page??0} 
        total={data?.total_pages??0}
        onPrevious={() => console.log("previous")}
        onNext={() => console.log("previous")}
        />
            
        </MoviesTemplate>
    )
}

Movies.displayName = "Movies"
export default Movies