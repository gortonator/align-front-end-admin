import React from 'react';
import {overviewDeepReportModalStatus} from "../../actions/align-students-actions";

export default (props) => {
    function onCloserClick(e){
        e.preventDefault();
        props.closeOverviewDeepReportModal();
    }
    return (
        props.overviewDeepReport !== overviewDeepReportModalStatus.CLOSED &&
        <div className={"overview-deep-report-modal"} style={{height: window.innerHeight,width: "100%"}}>
            <div className={"overview-deep-report"}>
                <div>
                    <div style={{width: '40%',display: 'inline-block', float: 'left'}}>
                        Company
                    </div>
                    <div style={{width: '30%',display: 'inline-block', float: 'left'}}>
                        Number of Interns
                    </div>
                    <div style={{width: '30%',display: 'inline-block', float: 'left'}}>
                        Average Salary
                    </div>
                </div>
                <div>
                    <div style={{width: '40%',display: 'inline-block', float: 'left'}}>
                        Northeastern University
                    </div>
                    <div style={{width: '30%',display: 'inline-block', float: 'left'}}>
                        100
                    </div>
                    <div style={{width: '30%',display: 'inline-block', float: 'left'}}>
                        1000
                    </div>
                </div>
                <a className={"glyphicon glyphicon-remove overview-deep-report-modal-closer"}
                   href={""}
                   onClick={onCloserClick}>
                </a>
            </div>
        </div>
    );
}

function reportToDisplay(type){
    switch (type){
        case overviewDeepReportModalStatus.SHOW_UNDERGRAD_PROPORTION:
            return ;
        case overviewDeepReportModalStatus.SHOW_ALUMNI_JOBS:
            return ;
        case overviewDeepReportModalStatus.SHOW_COOPS:
            return ;
    }
}