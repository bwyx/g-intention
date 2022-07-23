import React, {useState} from 'react';


const TeamMenuBarButton = ({toggleActiveStyle, FilterMenu, PositionValues }) => {
    
    return ( 
        <>
            
            {
                PositionValues.map((curElem, index) => {
                    return <div className={toggleActiveStyle(index)} key={index} onClick={() => FilterMenu(curElem, index)}> <span>{curElem}</span></div>
                
                })
            }
            
        </>
     );
}
 
export default TeamMenuBarButton;