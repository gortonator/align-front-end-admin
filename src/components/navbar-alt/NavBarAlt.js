import React from 'react';
import NavBarBrand from './NavBarBrand';
import {Link} from 'react-router-dom';

export default props => (
    <div className={'al-navbar'}>

        <NavBarBrand />

        <div className={'navbar-links'}>

            <Link to={'/students'} className={'navbar-link'}>
                Align Students
            </Link>

            <Link to={'/analytics'} className={'navbar-link'}>
                Analytics
            </Link>

            <a className={'logout-link'}>
                Log Out
            </a>
        </div>
        <div className={'navbar-border'}>

        </div>
    </div>
);

