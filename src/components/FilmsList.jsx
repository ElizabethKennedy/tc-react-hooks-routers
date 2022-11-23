import { response } from 'express';
import React, { useState, useEffect } from 'react';
import './FilmsList.css';

function FilmsList (props){

    let [list, setList] = useState([]);

function getFilms (){
    fetch('https://ghibliapi.herokuapp.com/films');
    .then((resonse) => response.json())
    .then((films => setList(films))
    .catch ((error) => console.error(error));
    
}

useEffect(() => {
    getFilms();
}, []);

    
        return (
        <ul>
            {list.map((ele) => {
               return <li key={ele.id}><h2>{ele.title}</h2> <br /> 
               <img src={ele.image} alt="Movie Poster" className="FilmsList-img" /> 
               <br /> <span className='light-text'><i>{ele.description}</i></span> 
               </li>  
            })};
            
        </ul>
        ); 
}
export default FilmsList;