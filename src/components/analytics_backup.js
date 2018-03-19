import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { openAnalytics } from '../actions';
import Chart from 'chart.js';


class AdminAnalytics extends Component {


  componentDidMount(){
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
    var lineChart =document.getElementById("lineChart");
    if(lineChart){
      var myLineChart = new Chart(lineChart, {
        type: 'line',
        data:{
          labels:[1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets:[{
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }]
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)'
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
    var lineChart =document.getElementById("lineChartSmall");
    if(lineChart){
      var myLineChart = new Chart(lineChart, {
        type: 'line',
        data:{
          labels:[1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
          datasets:[{
            data: [86,114,106,106,107,111,133,221,783,2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
          }]
        },
        options: {
          title: {
            display: true,
            text: 'World population per region (in millions)'
          }
        }
      });
    }
  }

  render () {
    return (
      <div>
      <div className="analytics-body text-align-center col-sm-12 hidden-xs-down">
        Analytics Page
        <div>
          <div className="chart-container" style={{display: "inline-block", position: "relative", height:"300px", width:"400px"}}>
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className="chart-container" style={{display: "inline-block",position: "relative", height:"300px", width:"400px"}}>
          <canvas id="lineChart"></canvas>
        </div>
      </div>
      <div className="text-align-center col-xs-12 hidden-sm-up">
        Analytics Page
        <div>
          <div className="chart-container" style={{display: "inline-block",position: "relative", height:"200px", width:"300px"}}>
            <canvas id="myChartSmall"></canvas>
          </div>
        </div>
        <div className="chart-container" style={{display: "inline-block",position: "relative", height:"200px", width:"300px"}}>
          <canvas id="lineChartSmall"></canvas>
        </div>
      </div>
      </div>
    );
  };
}

function mapStateToProps(state){
  return {analytics:state.analytics};
}

export default connect(mapStateToProps, openAnalytics )(AdminAnalytics);
