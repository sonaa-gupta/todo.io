import React from "react";

const Comp = (props) => {
    
    return (
    <>
    <div className="TODO_List">
        <i className="fa fa-times"
        aria-hidden="true" onClick={
            () =>{
                props.onSelect(props.id);
            }}/>
    <li>{props.text} </li>
    </div>
    </>
   );
};

export default Comp;