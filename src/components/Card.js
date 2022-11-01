import React from "react";
export default function Card(){

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="assets/movie.PNG" alt=""></img>
          </figure>
          <div className="card-body">
            <h2 className="card-title"> movie title</h2>
            <p>rating</p>
            <p>time</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                Watch
              </button>
            </div>
          </div>
        </div>
      );
}