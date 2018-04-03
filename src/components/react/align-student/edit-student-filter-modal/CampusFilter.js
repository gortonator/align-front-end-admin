import React from 'react';
import {CAMPUS_NAMES} from "../../../reducers/align-students";
import TogglableOption from '../TogglableOption';

export default props => (
    <div>
        <div>
            Campus
        </div>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUS_NAMES.boston) ? "campus-option-selected" : "campus-option-unselected")}
                         onToggle={props.onOptionToggle(CAMPUS_NAMES.boston)}
                         name={'Boston'}/>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUS_NAMES.charlotte) ? "campus-option-selected" : "campus-option-unselected")}
                         onToggle={props.onOptionToggle(CAMPUS_NAMES.charlotte)}
                         name={'Charlotte'}/>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUS_NAMES.seattle) ? "campus-option-selected" : "campus-option-unselected")}
                         onToggle={props.onOptionToggle(CAMPUS_NAMES.seattle)}
                         name={'Seattle'}/>
        <TogglableOption containerStyle={"campus-option-container"}
                         filterStyle={"campus-option" + ' ' +
                         (props.optionChecker(CAMPUS_NAMES.siliconValley) ? "campus-option-selected" : "campus-option-unselected")}
                         onToggle={props.onOptionToggle(CAMPUS_NAMES.siliconValley)}
                         name={'Silicon Valley'}/>
    </div>
);