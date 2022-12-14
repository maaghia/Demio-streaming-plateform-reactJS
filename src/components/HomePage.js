import React from "react";
import Movies from './Movies';
import Series from './Series';
import Card from './Card'
import { Link, useNavigate } from "react-router-dom";



export default function Home(){
    let navigate = useNavigate();
    return (
        <div className="home">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-figure">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                    </svg>
                </div>
                <h2 className="card-title">movies</h2>
                <div className="card-actions justify-end">
                <button className="btn btn-primary" onClick={()=>{navigate('/Movies')}} >
                    <Link to="/Movies" id="link">Select</Link>
                </button>
                </div>
            
            </div>
            <div className="card w-96 bg-base-100">
            <div className="card-figure">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-film" viewBox="0 0 16 16">
                    <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"/>
                    </svg>
            </div>
            <h2 className="card-title">series </h2>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">
                <Link to="/Series" id="link">Select</Link>
                </button>
            </div>

        </div>
        </div>
      );
}

