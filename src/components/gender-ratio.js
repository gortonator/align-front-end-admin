import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { getAnalytics } from '../actions';
import Chart from 'chart.js';


class GenderRatio extends Component {


  componentDidMount(){
    console.log(this.props.students);
    if(this.props.students){
      var ctx = document.getElementById("myChart");
      if(ctx){
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["2012", "2013", "2014", "2015"],
          datasets: [ {
            label: "Boys",
            backgroundColor: "#3e95cd",
            data: [421,520,550,580]
          }, {
            label: "Girls",
            backgroundColor: "#8e5ea2",
            data: [408,480,550,600]
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

      //small Chart
      var ctx = document.getElementById("myChartSmall");
      if(ctx){
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["2012", "2013", "2014", "2015"],
          datasets: [ {
            label: "Boys",
            backgroundColor: "#3e95cd",
            data: [421,520,550,580]
          }, {
            label: "Girls",
            backgroundColor: "#8e5ea2",
            data: [408,480,550,600]
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

  createOptions(options){
    return options.map((x)=>{
      if(x.value=="all_campus"){
        return (<option key={x.value} value={x.value} >{x.label}</option>);
      }
      return (<option key={x.value} value={x.value}>{x.label}</option>);
    });
  }

  renderField(field){
    const CSS="form-control "+field.css;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className={CSS}
          placeholder={field.placeholder}
          type='text'
          {...field.input}
        />
      </div>
    );
  }

  renderDropDownField(field){
    const CSS="form-control custom-select "+field.css;
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <select
          type='text'
          className={CSS}
          {...field.input}
        >
          {field.options}
        </select>
      </div>
    );
  }

  showChart(data){
    if(data){
      var dataLabels=[];
      var dataMale=[];
      var dataFemale=[];
      var yearlyratioList=data.yearlyratio;
      for(var i=0;i<yearlyratioList.length;i++){
        dataLabels.push(yearlyratioList[i].year);
        dataMale.push(yearlyratioList[i].male);
        dataFemale.push(yearlyratioList[i].female);
      }
      console.log(dataLabels);
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

      //small Chart
      var ctx = document.getElementById("myChartSmall");
      if(ctx){
        var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["2012", "2013", "2014", "2015"],
          datasets: [ {
            label: "Boys",
            backgroundColor: "#3e95cd",
            data: [421,520,550,580]
          }, {
            label: "Girls",
            backgroundColor: "#8e5ea2",
            data: [408,480,550,600]
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

  onSubmit(campus){
    // console.log(campus);
    const chartRequest={url:"gender-ratio",body:campus}
    this.props.getAnalytics(chartRequest);
  }

  render () {
    const {handleSubmit}=this.props;
    const campusOptions=[{label:"Select campus",value:""},
                          {label:"All Campus",value:"all_campus"},
                          {label:"Boston",value:"boston"},
                          {label:"Charlotte",value:"charlotte"},
                          {label:"Silicon Valley",value:"silicon_valley"},
                          {label:"Seattle",value:"seattle"}];

    if(this.props.chart){
      console.log(this.props.chart);
      this.showChart(this.props.chart);
    }

    return (
      <div>
      <div className="analytics-body text-align-center col-sm-12 hidden-xs-down">
        Analytics Page

        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Search Campus:"
            name="campus"
            css="form-control-sm"
            options={this.createOptions(campusOptions)}
            component={this.renderDropDownField}
          />
          <button type="submit" className="btn btn-danger">Submit</button>
        </form>
        <div>
          <div className="chart-container" style={{display: "inline-block", position: "relative", height:"300px", width:"400px"}}>
            <canvas id="myChart"></canvas>
          </div>
        </div>
      </div>
      <div className="text-align-center col-xs-12 hidden-sm-up">
        Analytics Page
        <div>
          <div className="chart-container" style={{display: "inline-block",position: "relative", height:"200px", width:"300px"}}>
            <canvas id="myChartSmall"></canvas>
          </div>
        </div>
      </div>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {chart:state.chart};
}

export default reduxForm({
  form:'GetGenderRatio'
})(
  connect(mapStateToProps,{getAnalytics})(GenderRatio)
);
