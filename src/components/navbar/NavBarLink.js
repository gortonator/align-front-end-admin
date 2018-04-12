import React from 'react';

export default props => (
    <div className={'nav-bar-link'}>
        <a onClick={e => {
            e.preventDefault();
            props.getSelectedPage(props.link);
        }} href={''}>
            {props.name}
        </a>
        <div className={'nav-bar-link-underline'}/>
    </div>
);