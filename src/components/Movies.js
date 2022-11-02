import React from "react";
import Card from './Card';

function Movies ({programs}){
    return (
        <div className='movies'>
            {programs.filter(program => program.programType === 'movie' ).map((movie)=> {
            return (
            <Card program={movie}/>
        )})}
        </div>
    )
}
  export default Movies;

