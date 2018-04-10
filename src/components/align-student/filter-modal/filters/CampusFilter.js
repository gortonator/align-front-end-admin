import React from 'react';
import {CAMPUSES} from "../../../../constants";
import TogglableOption from '../../../common/TogglableOption';

export default props => (
    <div>
        <div>
            Campus
        </div>
        {Object.keys(CAMPUSES).map((k,i) => (
            <TogglableOption containerStyle={"campus-option-container"}
                             filterStyle={"campus-option" + ' ' +
                             (props.isCampusChosen(CAMPUSES[k].value) ? "selected" : "")}
                             onToggle={() => {
                                 props.toggleCampusOption(CAMPUSES[k].value);
                             }}
                             name={CAMPUSES[k].displayName} key={i}/>
        ))}
    </div>
);