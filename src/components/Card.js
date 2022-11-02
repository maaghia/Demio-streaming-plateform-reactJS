import React from "react";
export default function Card(program){

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={program.images.PosterArt.url} alt=""></img>
          </figure>
          <div className="card-body">
            <h2 className="card-title">{program.title} </h2>
            <p>{program.releaseYear}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Watch
              </button>
            </div>
          </div>
        </div>
      );
}