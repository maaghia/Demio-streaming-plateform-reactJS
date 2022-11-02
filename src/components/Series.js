import React from "react";
import Card from './Card';

function Series ({programs}){
    return (
        <div className='series'>
            {programs.filter(program => program.programType === 'series' ).map((series)=> {
            return (
            <Card program={series}/>
        )})}
        </div>
    )
}
  export default Series;