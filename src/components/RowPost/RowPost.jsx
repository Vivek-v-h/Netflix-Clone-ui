import React, {useState,useEffect} from 'react';
import "./RowPost.css"
import axios from 'axios';
import {Api_key, imageUrl} from "../../constants/constants"


function RowPost(props) {
    const [movies,setMovies]=useState([])
    useEffect(() => {
        axios.get(props.url).then(Response=>{
            //console.log(Response.data)
            setMovies(Response.data.results)
        })
        
    }, [])
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
            {movies.map((obj)=>
                <img className={props.isSmall ?"smallposter" : "poster"} alt="" src={`${imageUrl+obj.backdrop_path}`}></img>
            
            )}
            
            </div>
        </div>
        
    )
}

export default RowPost
