import React from "react";

import { useNavigate } from "react-router-dom";

export default function Card({program}){
  let navigate = useNavigate();
    return (
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className="card-figure" src={program.images['Poster Art'].url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{program.title}</h2>
          <p>{program.releaseYear}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>{navigate('/Spinner')}}>Watch</button>
          </div>
        </div>
      </div>
   );
}