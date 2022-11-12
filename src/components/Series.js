import React, {useContext} from "react";
import { DataContext } from "../context/DataContext";
import Card from './Card';

export default function Series (){
    const { series } = useContext(DataContext);
    return (
        <div className='series'>
            <Card program={series}/>
        </div>
    )
}
