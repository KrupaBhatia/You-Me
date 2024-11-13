import axios from "axios";
import React, { useState, useEffect } from "react";
import MoviePage from "../Pages/moviePage";

const MovieData = () => {
  const [data, setData] = useState({
    currentPage: 1,
    totalPages: 1,
    totalResults: 0,
    results: []
  });



  const fetchData = async (page = 1) => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie?api_key=81a5499013451ffd894029835478e7b1&language=en-US&sort_by=popularity.desc"
      );
      setData((prevData) =>  ({
        currentPage: response.data.page,
        totalPages: response.data.total_pages,
        totalResults: response.data.total_results,
        results: page === 1 ? response.data.results  : [...prevData.results, ...response.data.results]  }));
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onPageChange = () => {
    if(data.currentPage < data.totalPages){
      fetchData(data.currentPage + 1);
    } 
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MoviePage 
        movies={data} 
        onPageChange={onPageChange}
      />
    </>
  );
};

export default MovieData;
