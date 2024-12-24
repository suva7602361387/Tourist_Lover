import data from'./data'
import { useState } from 'react'
import Tours from './component/Tours'


function App() {
  const[tours,settours]=useState(data);
  function removeTour(id){
    const newTours=tours.filter(tour=>tour.id!==id);
    settours(newTours); 
  }

  if(tours.length===0){
    return(
      <div className='refresh'>
        
        <h2>No Tours Lefts</h2>
        <button className='btn-white' onClick={()=>settours(data)}>Refresh</button>
      </div>
    )
  }

  return(
    <div>
      
      
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )

  
  

  
  
  
}

export default App
