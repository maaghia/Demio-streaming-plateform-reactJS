import React from "react";
export default function Card({program}){

    return (
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img className="card-figure" src={program.images['Poster Art'].url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{program.title}</h2>
          <p>{program.releaseYear}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
   );
}