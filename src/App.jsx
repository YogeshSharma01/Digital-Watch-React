import React, { useState } from 'react';
 



const App= () =>{
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);
    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(updateTime, 1000);
    return(<>
        <p className="main-text">
        <span className="slogan">The  
        <b className="spch"> २</b> most <br/>  powerful warriors are <br/> 
        <b className="spch">PATIENCE</b> and <b className="spch">TIME</b></span>
        </p>
        <h1>{ctime}</h1>
        </>)
}
export default App;