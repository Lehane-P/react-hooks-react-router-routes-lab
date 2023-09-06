import React from "react";
import { directors } from "../data";

function Directors() {

  const directorList= directors.map((dir)=>{
   
    const moviesList = (dir.movies).map((mov)=><li key={Math.floor(Math.random()  * (1000 - 100)) + 100}>{mov}</li>)
      return (
        <div>
           <h1>{dir.name}</h1>
           <ul>
             {moviesList}
           </ul>
        </div>)                                 
  })


  return(
   <div>
    {/*{code here}*/}
    <h1>Directors Page</h1>
        {directorList}
    </div>
  )
}

export default Directors;
