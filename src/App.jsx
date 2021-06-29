import React, { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader"; 



const App= () =>{
    const[loading, setLoading] = useState(false);
    useEffect(()=>{
         setLoading(true)
         setTimeout(()=>{
            setLoading(false)
         },5000);
    },[])
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);
    return(<>
     {
         loading ?
         <HashLoader 
         color={"#333333"} 
         loading={loading}  
         size={150} />

         :
         <div className="Main">
         <p className="main-text">
        <span className="slogan">The  
        <b className="spch"> २</b> most <br/>  powerful warriors are <br/> 
        <b className="spch">PATIENCE</b> and <b className="spch">TIME</b></span>
        </p>
        <h1>{ctime}</h1>
        </div>
     }
     </>
        )
}
export default App;