import React from 'react';

export default (props) => {
    return (
        <div className={props.containerStyle}>
            <a href={""}
               className={props.filterStyle}
               onClick={e => {
                   e.preventDefault();
                   props.onToggle();
               }}>
                {props.name}
            </a>
    </div>);
};
