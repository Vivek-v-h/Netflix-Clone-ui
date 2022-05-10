import React,{useEffect,useState} from 'react'
import "./Banner.css"
import {Api_key , imageUrl} from "../../constants/constants"
import axios from "../../axios"

function Banner() {
    const [movie, setMovie] = useState( )
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${Api_key}&language=en-US`).then(Response=>{
            setMovie(Response.data.results[0])
            //console.log(Response.data.results)
        })
        
}, [])
    return (
        <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:"movie"})`}}
        className="Banner">
            <div className="Content">
                <h1 className="title">{movie?movie.title:""}</h1>
                <div className="Banner_Button">
                    <button className="Button">Play</button>
                    <button className="Button">My List</button>
                </div>
                <h1 className="description">{movie?movie.overview:""}</h1>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner;
