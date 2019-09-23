import React from 'react';

const Weather = (props) => {              
        return(        
        <div className="infoWeath">   
            {props.city ?  
                <div>
                     <table className="weatherTable">
                       <tbody>      
                        <tr>
                            <td>Location:</td>
                            <td>{props.city}, {props.country}</td>                        
                        </tr>
                        <tr>
                            <td>Temperature: </td>
                            <td>{props.temp} °C</td>
                        </tr>
                        <tr>
                            <td>Sunrise:</td>
                            <td>{props.sunrise}</td>                        
                        </tr>
                        <tr>
                            <td>Sunset: </td>
                            <td>{props.sunset}</td>                        
                        </tr>
                        <tr>
                            <td>Pressure</td>
                            <td>{props.pressure} hpa</td>                        
                        </tr>
                       </tbody>
                      </table>
                </div> : 
                <div className="error">{props.error}</div>}
        </div>
        )    
}


export default Weather; 