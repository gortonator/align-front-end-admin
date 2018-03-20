import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getAnalytics } from '../actions';
import Chart from 'chart.js';


class AdminAnalytics extends Component {

    constructor(props) {
        super(props);
        this.toggleGenderRatio = this.toggleGenderRatio.bind(this);
        this.toggleTop10Employers = this.toggleTop10Employers.bind(this);
        this.getGenderRatioChart = this.getGenderRatioChart.bind(this);
        this.getAnalyticsCallback=this.getAnalyticsCallback.bind(this);
        this.createTableContent=this.createTableContent.bind(this);
        this.state = { top10EmployersFlag:"hidden-xs-up",
                       genderRatioFlag: "hidden-xs-up",
                       campus:"",
                       validationError:false ,
                       isApiCalled: false,
                        initialLoad:"hidden-xs-up",
                       chartSelected: ""
                       };
    }

    createTableContent(){
        if(this.props.analytics && this.state.chartSelected=="gender-ratio"){

            const listOfYears= this.props.analytics.yearlyratio.map((year)=>{
                return <tr key={year.year}><td>{year.year}</td><td>{year.male}</td><td>{year.female}</td></tr>
            });
            return (<table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">Year</th>
                    <th className="text-align-center">Male</th>
                    <th className="text-align-center">Female</th>
                </tr>
                </thead>
                <tbody>
                    {listOfYears}
                </tbody>
            </table>);
        }
    }

    collapseAllQueires(){
        this.setState({top10EmployersFlag:"hidden-xs-up",genderRatioFlag:"hidden-xs-up", isApiCalled: false});
    }

    toggleGenderRatio(){
      this.collapseAllQueires();
      if(this.state.genderRatioFlag=="hidden-xs-up")
        this.setState({genderRatioFlag:""});
      else
        this.setState({genderRatioFlag:"hidden-xs-up"});
    }

    toggleTop10Employers(){
      this.collapseAllQueires();
      if(this.state.top10EmployersFlag=="hidden-xs-up")
          this.setState({top10EmployersFlag:""});
      else
          this.setState({top10EmployersFlag:"hidden-xs-up"});
    }

    getGenderRatioChart() {

        if (this.state.campus == "") {
            this.setState({validationError: true}, function(){

                });
        }
        else {
            this.setState({validationError: false, isApiCalled: true,chartSelected:"gender-ratio"}, function(){
                const chartRequest={url:"gender-ratio",body: this.state.campus};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }
    onInputChange(campus){
        this.setState({campus:campus, isApiCalled: false});
    }

    getAnalyticsCallback(){
        this.setState({initialLoad: ""});
    }



    showChart(data){
        if(data){
            if(this.props.analytics && this.state.chartSelected=="gender-ratio"){
                var dataLabels=[];
                var dataMale=[];
                var dataFemale=[];
                var yearlyratioList=data.yearlyratio;
                for(var i=0;i<yearlyratioList.length;i++){
                    dataLabels.push(yearlyratioList[i].year);
                    dataMale.push(yearlyratioList[i].male);
                    dataFemale.push(yearlyratioList[i].female);
                }
                var ctx = document.getElementById("myChart");
                if(ctx){
                    var myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: dataLabels,
                            datasets: [ {
                                label: "Boys",
                                backgroundColor: "#3e95cd",
                                data: dataMale
                            }, {
                                label: "Girls",
                                backgroundColor: "#8e5ea2",
                                data: dataFemale
                            }]
                        },
                        options: {
                            title: {
                                display: true,
                                text: 'World population per region (in millions)'
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }
                    });
                }
            }
        }
    }
    render () {
        if(this.props.analytics && this.state.isApiCalled){
            this.showChart(this.props.analytics);
        }
      return (
        <div>
            <div className="analytics-body col-sm-12">
                <div className="analytics-filter">

                      <div className="analytics-query col-sm-12" onClick={this.toggleGenderRatio}>Gender Ratio</div>
                      <div className={this.state.genderRatioFlag+" analytics-options col-sm-12"}>
                          <div className="">
                              <div className="radio">
                                  <label>Choose Campus:</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="boston"
                                                onChange={ e => this.onInputChange(e.target.value)}/>Boston</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="seattle"
                                                onChange={ e => this.onInputChange(e.target.value)}/>Seattle</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="silicon_valley"
                                                onChange={ e => this.onInputChange(e.target.value)}/>Silicon Valley</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="charlotte"
                                                onChange={ e => this.onInputChange(e.target.value)}/>Charlotte</label>
                              </div>
                          </div>
                          <button type="Submit" onClick={this.getGenderRatioChart}>Submit</button>
                      </div>

                      <div className="analytics-query col-sm-12" onClick={this.toggleTop10Employers}>Top 10 Employers</div>
                      <div className={"analytics-options col-sm-12 "+this.state.top10EmployersFlag}>
                          Best employers
                      </div>


                </div>
                <div className="analytics-charts">

                    <div>
                        <div className={this.state.initialLoad!=""?"":"hidden-xs-up"}>
                           Please select an option to begin
                        </div>
                        <div className={"analytics-body text-align-center col-sm-12 hidden-xs-down "+this.state.initialLoad}>
                            Analytics Page
                            <div>
                                <div className="chart-container" style={{display: "inline-block", position: "relative", height:"300px", width:"400px"}}>
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                            {this.createTableContent()}
                        </div>
                    </div>

                </div>
            </div>
        </div>
      );
    };
}

function mapStateToProps(state){
  return {analytics:state.analytics};
}



export default connect(mapStateToProps, {getAnalytics} )(AdminAnalytics);
