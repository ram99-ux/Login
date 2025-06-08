// //hover.js(normal ==<calling purpose)  update(arrtirbute,function,css, props)


import React from 'react';
import Update from './Updatehoc';

function Hover(props) {
    const{count,INC,R,name}=props
    return (
        <div>
           <h1 onMouseOver={INC}  style={R}> count:{count} {name}</h1> 
        </div>
    );
}

export default Update(Hover);