import React from 'react';
import {Radar,defaults} from 'react-chartjs-2';
import {REQUIRED_COURSE_WORK} from "../../../../constants";

class AcademicChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chart: null
        };
        this.getChartData = this.getChartData.bind(this);
    }

    getChartData(){
        var dataList=this.props.courses.map(k=>3.0);
        return {
                labels: Object.keys(this.props.courses).map(k => this.props.courses[k].courseId),
                datasets:
                    [
                        {
                            data: this.props.courses.map(k => convertLetterGradeToNumericalGrade(k.gpa)),
                            label: 'Actual Performance',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            fill: 'origin',
                            borderColor: '#36A2EB',
                        },
                        {
                            data:dataList,
                            label: 'Desired Performance',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            fill: 'origin',
                            borderColor: '#FF6384'
                        }]
            };
    }

    render(){
        return (
            <div >
                <Radar data={this.getChartData()}
                       width={'500px'}
                       height={'500px'}
                       options={{
                           title: {
                               display: true,
                               text: 'Required Course Work performance',
                               position: 'top',
                               fontSize: 20
                           },
                           scale: {
                               ticks: {
                                   suggestedMin: 1,
                                   suggestedMax: 4
                               }
                           }
                       }}/>
            </div>
        );
    }
}

export default AcademicChart;

function getGPAByCategory(courses,category){
    var count = 0;
    var totalGrade = 0;
    courses.forEach(c => {
            count += 1;
            totalGrade += convertLetterGradeToNumericalGrade(c.gpa);
    });

    return count === 0 ? 0 : totalGrade/count;
}

function convertLetterGradeToNumericalGrade(lg){
    switch (lg){
        case 'A':
            return 4.000;
        case 'A-':
            return 3.667;
        case 'B+':
            return 3.333;
        case 'B':
            return 3.000;
        case 'B-':
            return 2.667;
        case 'C+':
            return 2.333;
        case 'C':
            return 2.000;
        case 'C-':
            return 1.667;
        case 'D+':
            return 1.333;
        case 'D':
            return 1.000;
        case 'D-':
            return 0.667;
        case 'F':
            return 0.000;
        default:
            return 0.000;
    }
}

// ***************8
// Reference: http://catalog.northeastern.edu/professional-studies/academic-policies-procedures/grading-system/
