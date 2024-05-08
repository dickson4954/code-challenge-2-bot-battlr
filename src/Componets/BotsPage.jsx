import React,{useState,useEffect} from "react";
import BotsButton from "./BotsButton";
import BotNav from "./BotNav";
import { Link } from "react-router-dom";
function BotsPage(){
    const [bots, setBots] = useState([])
    const [enlistedBots, setEnlistedBots] = useState([]);

    
    function fetchData(){
        return fetch("https://code-challeng-2-bot-battlr.onrender.com/bots/")
        .then((res) => res.json())
        .then ((data)=>{
            setBots(data)
        });
    }
    useEffect(()=>{
        fetchData();
    },[])
    
        
    
    function handleDelete(id) {
        setBots(bots.filter(bot => bot.id !== id));
    }
    function addBot(bot) {
        if (enlistedBots.length < 4 && !enlistedBots.find(b => b.id === bot.id)) {
          setEnlistedBots([...enlistedBots, bot]);
          
        }
      }
      function removeFromArmy(id) {
        setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
      }
        return(
           
<div>
<BotNav army={enlistedBots} removeFromArmy={removeFromArmy} />
        
            <div className="bg-warning text-center ">
                <h1 className="bg-primary m-2 p-2">Bot Collection</h1>
            <div className="container">
                <div className="row">
                    {bots.map(bot=>(
                        <div key={bot.id} className="col-sm-3 mb-4">
                            <div className="card">
                                <Link to={`/code-challenge-2-bot-battlr/Bots/${bot.id}`}>
                                    
                                <img src={bot.avatar_url} className="card-img-top" alt="avatar"/>                     
                                   </Link>
                               <div className="card-body">
                                    <h5 className="card-title">Name:{bot.name}</h5>
                                    <p className="card-text"> Created At: {bot.created_at}</p>
                                    {<p className="card-text">Updated At: {bot.updated_at}</p>}
                                    
                                    <BotsButton id={bot.id} onDelete={handleDelete} />
                                    <button className="btn btn-primary btn-sm m-3" onClick={() => addBot(bot)}>Enlist</button>
          
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
            </div>
            </div>
        )
    

}
export default BotsPage;