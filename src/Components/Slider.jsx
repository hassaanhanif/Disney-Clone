import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import GlobalAPI from '../Services/GlobalAPI'   
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';


const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";   
const screenWidth = window.innerWidth;




function Slider() {

    const [movieList , setMovieList] = useState ([]);
    const elementRef = useRef();


    useEffect(() => {

        getTrendingMovies();

    }, [] );

    const getTrendingMovies = () => {
        GlobalAPI.getTrendingMovies.then((response) => {
            console.log(response.data.results);
            setMovieList(response.data.results);
        }).catch((error) => {
            console.log("Error fetching trending movies:", error);
        }       
        );
    
    }

      const sliderRight = () => {
      elementRef.current.scrollLeft += screenWidth-110;
      }

      const sliderLeft = () => {
      elementRef.current.scrollLeft -= screenWidth-110 ;
      }



  return (
    
    <div>


        <HiChevronLeft  className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer' onClick={()=>sliderLeft(elementRef.current)}/>
        <HiChevronRight className='hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>

   
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth' ref={elementRef}>
      
      {movieList.map((item,index) => (
        <img src={IMAGE_BASE_URL+item.backdrop_path}
        
           className='min-w-full md:h-[310px] object-cover
           object-left-top scrollbar-hide mr-5 rounded-lg hover:border-[4px] border-gray-400 transition-all duration-100 ease-in cursor-pointer' 



        />
      ))}

    </div>
    </div>
  )
}

export default Slider
