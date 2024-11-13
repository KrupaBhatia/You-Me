import React, {useEffect, useState} from 'react';


const Theme =({theme , themeChange}) => {

    if(theme === true){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }

    return (
        <>
 <div>
            <button onClick={() => themeChange()} > Apply Theme </button>
            </div> 
        </>
    )
}
 export default  Theme;