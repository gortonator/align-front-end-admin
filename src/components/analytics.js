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
        this.getTop10EmployersChart= this.getTop10EmployersChart.bind(this);

       //Common
        this.createTableContent=this.createTableContent.bind(this);
        this.getAnalyticsCallback=this.getAnalyticsCallback.bind(this);
        this.onCompanyChange=this.onCompanyChange.bind(this);
        this.getYears=this.getYears.bind(this);
        this.getCampusOptions=this.getCampusOptions.bind(this);
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
        if(this.props.analytics && this.state.chartSelected=="top-employers"){
            const listOfCompanies= this.props.analytics.employers.map((company)=>{
                return <tr key={company.name}><td>{company.name}</td><td>{company.students}</td></tr>
            });
            return (<table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">Company Name</th>
                    <th className="text-align-center">Students Count</th>
                </tr>
                </thead>
                <tbody>
                {listOfCompanies}
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

    getTop10EmployersChart(){
        if (this.state.campus == "" || this.state.year=="") {
            this.setState({validationError: true}, function(){

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true,chartSelected:"top-employers"}, function(){
                const chartRequest={url:"top-employers",body: {campus:this.state.campus,year:this.state.year}};
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
        }
        if(chartType=="company"){
            this.setState({initialLoadChart: "hidden-xs-up",initialLoadTable:""},function(){
            });
        }
        if(chartType=="top-employers"){
            this.setState({initialLoadChart: "",initialLoadTable:""},function(){
            });
        }
    }

    getYears(years){
          const list = years.map((year)=> {
              return <option key={year.label} value={year.value}>{year.label}</option>
          })
      return list;
    }

    getCampusOptions(options){
          const list = options.map((option)=> {
              return <div key={option.label} className="radio">
                  <label><input type="radio" name="optradio" value={option.value}
                                onChange={ e => this.onCampusChange(e.target.value)}/>{option.label}</label>
              </div>
          })
      return list;
    }

    onCompanyChange(company){
        this.setState({company});
    }

    onYearChange(year){
        this.setState({year});
    }

    randomColorGenerator(){
      return Math.floor((Math.random() * 100)+(Math.random() * 100)+(Math.random() * 50) + 1);
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

            if(this.props.analytics && this.state.chartSelected=="top-employers"){
              var listOfCompanies=this.props.analytics.employers;
              var labelsList=[];
              var backgroundColorList=[];
              var dataList=[];
              for(var i=0;i<listOfCompanies.length;i++){
                var r=this.randomColorGenerator();
                var g=this.randomColorGenerator();
                var b=this.randomColorGenerator();
                labelsList.push(listOfCompanies[i].name);
                backgroundColorList.push("rgba("+r+","+g+","+b+",0.9)");
                dataList.push(listOfCompanies[i].students);
              }
              var ctx = document.getElementById("myChart");
              if(ctx){
                new Chart(ctx, {
                    type: 'polarArea',
                    data: {
                      labels: labelsList,
                      datasets: [
                        {
                          label: "Top Employers",
                          backgroundColor: backgroundColorList,
                          data: dataList
                        }
                      ]
                    },
                    options: {
                      title: {
                        display: true,
                        text: 'Top Employers'
                      }
                    }
                });
              }
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
        const campusOptions=[
                              {label:"All Campus",value:"all_campus"},
                              {label:"Boston",value:"boston"},
                              {label:"Charlotte",value:"charlotte"},
                              {label:"Silicon Valley",value:"silicon_valley"},
                              {label:"Seattle",value:"seattle"}];

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
                              {this.getCampusOptions(campusOptions)}
                          <button type="Submit" onClick={this.getGenderRatioChart}>Submit</button>
                      </div>

                    <div className="analytics-query col-sm-12" onClick={this.toggleCompany}>Filter students by company</div>
                    <div className={this.state.companyFlag+" analytics-options col-sm-12"}>
                        <div>
                            <label>Choose Campus:</label>
                        </div>
                        {this.getCampusOptions(campusOptions)}
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
                        <div>
                            <label>Choose Campus:</label>
                        </div>
                        {this.getCampusOptions(campusOptions)}
                        <hr />
                        <div className="form-group">
                            <label>Select Year</label>
                            <select className="form-control custom-select" type="text" onChange={ e => this.onYearChange(e.target.value)}>
                                {this.getYears(degreeYearOptions)}
                            </select>
                        </div>
                          <button type="Submit" onClick={this.getTop10EmployersChart}>Submit</button>
                      </div>
                </div>
                <div className="analytics-charts">
                    <div>
                        <div className={this.state.initialLoadChart!="" && this.state.initialLoadTable!=""?"":"hidden-xs-up"}>
                           Please select an option to begin
                        </div>
                        <div className={"analytics-body text-align-center col-sm-12 hidden-xs-down "}>
                            <div>
                                <div className={"chart-container "+this.state.initialLoadChart} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>
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
