import React from 'react';

function Country(props) {
    return ( 
        <>
       
       <li>{props.data.name}, <img src={props.data.flag} ></img>{props.data.capital} </li>
       </>
    );
}


export default Country;