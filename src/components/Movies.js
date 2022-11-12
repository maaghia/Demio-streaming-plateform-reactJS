import React, {useContext} from "react";
import { DataContext } from "../context/DataContext";
import Card from './Card';

function Movies (){ 
    const { movies } = useContext(DataContext);
    return (
        <div className='movies'>
            <Card program={movies}/>
        </div>
    )
}
  export default Movies;

