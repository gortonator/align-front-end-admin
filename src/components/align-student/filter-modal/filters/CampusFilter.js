import React from 'react';
import {CAMPUSES} from "../../../../reducers/align-students";
import TogglableOption from '../../../common/TogglableOption';

export default props => (
    <div>
        <div>
            Campus
        </div>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUSES.BOSTON.value) ? "selected" : "")}
                         onToggle={props.onOptionToggle(CAMPUSES.BOSTON.value)}
                         name={CAMPUSES.BOSTON.displayName}/>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUSES.CHARLOTTE.value) ? "selected" : "")}
                         onToggle={props.onOptionToggle(CAMPUSES.CHARLOTTE.value)}
                         name={CAMPUSES.CHARLOTTE.displayName}/>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUSES.SEATTLE.value) ? "selected" : "")}
                         onToggle={props.onOptionToggle(CAMPUSES.SEATTLE.value)}
                         name={CAMPUSES.SEATTLE.displayName}/>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUSES.SILICONVALLEY.value) ? "selected" : "")}
                         onToggle={props.onOptionToggle(CAMPUSES.SILICONVALLEY.value)}
                         name={CAMPUSES.SILICONVALLEY.displayName}/>
    </div>
);