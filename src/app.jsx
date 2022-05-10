import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar/NavBar";
import "./components/App.css"
import Banner from "./components/Banner/Banner"
import RowPost from "./components/RowPost/RowPost";
import {Originals,ActionMovies,HorrorMovies,ComedyMovies,RomanceMovies,Documentaries} from "./Url";

function app(){
    return(
        <div>
            <NavBar/>
            <Banner/>
            <RowPost url={Originals} title="Originals"/>
            <RowPost isSmall url={ComedyMovies} title="Action"/>
            <RowPost isSmall url={HorrorMovies} title="Comedy"/>
            <RowPost isSmall url={ActionMovies} title="Action"/>
            <RowPost isSmall url={RomanceMovies} title="Romance"/>
            <RowPost isSmall url={Documentaries} title="Documentry"/>
        </div>
    )
}
export default app;
