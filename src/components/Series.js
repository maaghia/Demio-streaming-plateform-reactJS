import React from "react";
import Card from './Card';

export async function Series (){
    
    try {
        const res = await fetch('https://raw.githubusercontent.com/codelabsacademy/react-takehome-1/main/feed/sample.json', {cache: 'no-cache'});
        const info = await res.json();
        
        let entries = info.entries;
        //console.log(entries);
        
            entries.map((entry) => {
                if(entry.programType == "series")
                     return <Card  program={entry}/>
            })
        

    
    } catch (error) {
        console.log(error);
    }
  }
  export default Series;

