import { useState } from "react";

const Card=({id,image,price,name,info,removeTour})=>{
    const [readmore,setreadmore]=useState(false);
    const description= readmore?info:`${info.substring(0,200)}...`
    function readmordhandler(){
        setreadmore(!readmore);
    }
    
    
    return(
        <div className="card">
            <img src={image}  className="image"></img>
            
            <div className="tour-info">
                      <div className="tour-details">
                           <h4 className="tour-price">{price}</h4>
                           <h4 className="tour-name">{name}</h4>
                      </div>
                      <div className="description">
                           {description}
                           <span className="read-more" onClick={readmordhandler}>
                           {readmore ?`show Less`:`Readmore`}
                           </span>
                      </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
            
            
        </div>
    )


}
export default Card;