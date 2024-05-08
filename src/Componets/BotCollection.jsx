import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"




function BotCollection(){
 const {id} = useParams()
const [bot,setBots] = useState({})

useEffect(()=>{
    fetch(`https://code-challeng-2-bot-battlr.onrender.com/bots/${id}`)
    .then((res)=>res.json())
    .then(data=>{
        setBots(data)
    })
},[id])
    

    


    return(
         <div>
              <div key={bot.id} className="col-sm-3 mb-4">
                            <div className="card">
                                
                                    
                                <img src={bot.avatar_url} className="card-img-top" alt="avatar"/>  
                                                   
                                   
                               
                                 
                               
                                
                                <div className="card-body">
                               
                                    <h5 className="card-title">Name: {bot.name}</h5>
                                    <h5 className="card-text"> {bot.bot_class}</h5>
                                    
                                  <p className="card-text"><span className="icon health-icon">❤️</span>health: {bot.health}</p>
                                  <p className="card-text"><span className="icon damage-icon">💥</span>damage: {bot.damage}</p>
                                  <p className="card-text"><span className="icon armor-icon">🛡️</span>armor: {bot.armor}</p>
                                  <p className="card-text">Created At: {bot.created_at}</p>
                                  <p className="card-text">Updated At: {bot.updated_at}</p>
                                  
                                  
                                  
                                        <Link to="/code-challenge-2-bot-battlr">
                                              <button className="btn btn-primary btn-sm m-2">Go Back</button>
                                              
                                        </Link>
                                       
                                        
                                 </div>
                                    
                                 
                                </div>

                            </div>
                        </div>
         
    )
}
export default BotCollection;