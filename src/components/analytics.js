import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getAnalytics } from '../actions';
import Chart from 'chart.js';


class AdminAnalytics extends Component {

    constructor(props) {
        super(props);

        //Gender Ratio
        this.toggleGenderRatio = this.toggleGenderRatio.bind(this);
        this.getGenderRatioChart = this.getGenderRatioChart.bind(this);


        //Student Company
        this.toggleCompany=this.toggleCompany.bind(this);
        this.getCompanyChart=this.getCompanyChart.bind(this)

        //top 10 employers
        this.toggleTop10Employers = this.toggleTop10Employers.bind(this);

       //Common
        this.createTableContent=this.createTableContent.bind(this);
        this.getAnalyticsCallback=this.getAnalyticsCallback.bind(this);
        this.onCompanyChange=this.onCompanyChange.bind(this);
        this.getYears=this.getYears.bind(this);
        this.onYearChange=this.onYearChange.bind(this);

        this.state = {
            top10EmployersFlag:"hidden-xs-up",
           genderRatioFlag: "hidden-xs-up",
           campus:"",
            company:"",
            year:"",
           validationError:false ,
           isApiCalled: false,
           initialLoadChart:"hidden-xs-up",
            initialLoadTable:"hidden-xs-up",
           chartSelected: "",
           companyFlag: "hidden-xs-up"
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
        if(this.props.analytics && this.state.chartSelected=="company"){
            const listOfStudent= this.props.analytics.students.map((student)=>{
                return <tr key={student.nuid}><td>{student.nuid}</td><td>{student.name}</td></tr>
            });
            return (<table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">Nuid</th>
                    <th className="text-align-center">Student Name</th>
                </tr>
                </thead>
                <tbody>
                {listOfStudent}
                </tbody>
            </table>);
        }
    }

    collapseAllQueires(){
        this.setState({
            top10EmployersFlag:"hidden-xs-up",
            genderRatioFlag:"hidden-xs-up",
            companyFlag:"hidden-xs-up",
            isApiCalled: false});
    }

    toggleGenderRatio(){
      this.collapseAllQueires();
      if(this.state.genderRatioFlag=="hidden-xs-up")
        this.setState({genderRatioFlag:""});
      else
        this.setState({genderRatioFlag:"hidden-xs-up"});
    }

    toggleCompany(){
        this.collapseAllQueires();
        if(this.state.companyFlag=="hidden-xs-up")
            this.setState({companyFlag:""});
        else
            this.setState({companyFlag:"hidden-xs-up"});
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

    getCompanyChart(){
        if (this.state.campus == "" || this.state.company=="" || this.state.year=="") {
            this.setState({validationError: true}, function(){

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true,chartSelected:"company"}, function(){
                const chartRequest={url:"company",body: {campus:this.state.campus,year:this.state.year,company:this.state.company}};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }




    onCampusChange(campus){
        this.setState({campus:campus, isApiCalled: false});
    }

    getAnalyticsCallback(chartType){
        if(chartType=="gender-ratio") {
            this.setState({initialLoadChart: "",initialLoadTable:""});
        }else if(chartType=="company"){
            this.setState({initialLoadChart: "hidden-xs-up",initialLoadTable:""},function(){
            });
        }
    }

    getYears(years){
            const list = years.map((year)=> {
                return <option key={year.label} value={year.value}>{year.label}</option>
            })
        return list;
}

    onCompanyChange(company){
        this.setState({company});
    }

    onYearChange(year){
        this.setState({year});
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

            if(this.props.analytics && this.state.chartSelected=="company"){

                var studentList=this.props.analytics.students;

            }


        }
    }
    render () {
        const degreeYearOptions=[{label:"Select Year",value:""},
            {label:"2018",value:"2018"},
            {label:"2017",value:"2017"},
            {label:"2016",value:"2016"},
            {label:"2015",value:"2015"},
            {label:"2014",value:"2014"}];

        if(this.props.analytics && this.state.isApiCalled){
            this.showChart(this.props.analytics);
        }
      return (
        <div>
            <div className="analytics-body col-sm-12">
                <div className="analytics-filter">

                      <div className="analytics-query col-sm-12" onClick={this.toggleGenderRatio}>Gender Ratio</div>
                      <div className={this.state.genderRatioFlag+" analytics-options col-sm-12"}>
                              <div>
                                  <label>Choose Campus:</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="boston"
                                                onChange={ e => this.onCampusChange(e.target.value)}/>Boston</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="seattle"
                                                onChange={ e => this.onCampusChange(e.target.value)}/>Seattle</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="silicon_valley"
                                                onChange={ e => this.onCampusChange(e.target.value)}/>Silicon Valley</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio" value="charlotte"
                                                onChange={ e => this.onCampusChange(e.target.value)}/>Charlotte</label>
                              </div>
                          <button type="Submit" onClick={this.getGenderRatioChart}>Submit</button>
                      </div>

                    <div className="analytics-query col-sm-12" onClick={this.toggleCompany}>Filter students by company</div>
                    <div className={this.state.companyFlag+" analytics-options col-sm-12"}>
                        <div>
                            <label>Choose Campus:</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" value="boston"
                                          onChange={ e => this.onCampusChange(e.target.value)}/>Boston</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" value="seattle"
                                          onChange={ e => this.onCampusChange(e.target.value)}/>Seattle</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" value="silicon_valley"
                                          onChange={ e => this.onCampusChange(e.target.value)}/>Silicon Valley</label>
                        </div>
                        <div className="radio">
                            <label><input type="radio" name="optradio" value="charlotte"
                                          onChange={ e => this.onCampusChange(e.target.value)}/>Charlotte</label>
                        </div>
                        <hr />
                        <div>
                        <label>Enter Company Name</label>
                        <input type="text" placeholder="Company Name" onChange={ e => this.onCompanyChange(e.target.value)}/>
                        </div>
                        <hr />
                        <div className="form-group">
                            <label>Select Year</label>
                            <select className="form-control custom-select" type="text" onChange={ e => this.onYearChange(e.target.value)}>
                                {this.getYears(degreeYearOptions)}
                            </select>
                        </div>
                        <button type="Submit" onClick={this.getCompanyChart}>Submit</button>
                    </div>


                      <div className="analytics-query col-sm-12" onClick={this.toggleTop10Employers}>Top 10 Employers</div>
                      <div className={"analytics-options col-sm-12 "+this.state.top10EmployersFlag}>
                          Best employers
                      </div>
                </div>
                <div className="analytics-charts">

                    <div>
                        <div className={this.state.initialLoadChart!="" && this.state.initialLoadTable!=""?"":"hidden-xs-up"}>
                           Please select an option to begin
                        </div>
                        <div className={"analytics-body text-align-center col-sm-12 hidden-xs-down "}>
                            <div>
                                <div className={"chart-container "+this.state.initialLoadChart} style={{display: "inline-block", position: "relative", height:"300px", width:"400px"}}>
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                            <div className={this.state.initialLoadTable}>
                                {this.createTableContent()}
                            </div>
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
