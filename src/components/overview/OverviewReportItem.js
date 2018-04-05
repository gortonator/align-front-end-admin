import React from 'react';

export default (props) => {
    function onDeeperReportClick(e){
        e.preventDefault();
        props.onDeeperReportRequest();
    }
    return (
        <div className={"overview-report-item"}>
            <div className={"overview-report-number-container"}>
            <span className={"overview-report-number"}>
                {props.number}
            </span>
            </div>
            <div className={"overview-report-explanation-container"}>
                <div className={"overview-report-issue"}>
                    {props.issue}
                </div>
                <div className={"overview-report-explanation"}>
                    {props.explanation}
                    <a href={""} onClick={onDeeperReportClick}>
                        {props.deeperReportDesc}
                    </a>
                </div>
            </div>
        </div>
    );
};
