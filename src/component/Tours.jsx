
import Card from "./Card";


const Tours=({tours,removeTour})=>{
    return(
        <div className="contaner">
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>
            <div className="cards">
            
              {
                tours.map((tour)=>{
                    return <Card {...tour} removeTour={removeTour}/>
                })
              }

            </div>
           
           
        </div>
    )

}
export default Tours;