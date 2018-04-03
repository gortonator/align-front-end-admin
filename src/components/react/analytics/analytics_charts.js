import React from 'react';
import Chart from '../../../../node_modules/chart.js/src/chart';

export default function (props) {

  var randomColorGenerator=function(){
    return Math.floor((Math.random() * 100) + (Math.random() * 100) + (Math.random() * 50) + 1);
  };

  if (props.chartSelected == "gender-ratio") {
      var dataLabels = [];
      var dataMale = [];
      var dataFemale = [];
      var yearlyratioList = props.data.yearlyratio;
      for (var i = 0; i < yearlyratioList.length; i++) {
          var r=randomColorGenerator();
          var g=randomColorGenerator();
          var b=randomColorGenerator();
          var color1="rgba("+r+","+g+","+b+",1)";
          r=randomColorGenerator();
          g=randomColorGenerator();
          b=randomColorGenerator();
          var color2="rgba("+r+","+g+","+b+",0.9)";
          dataLabels.push(yearlyratioList[i].year);
          dataMale.push(yearlyratioList[i].male);
          dataFemale.push(yearlyratioList[i].female);
      }
      props.ctxContainer.innerHTML = '<div className={"chart-container ' + props.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
          '<canvas id="myChart"></canvas>' +
          '</div>';
      var ctx = document.getElementById("myChart");
      if (ctx) {
          var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                  labels: dataLabels,
                  datasets: [ {
                      label: "Male",
                      backgroundColor: color1,
                      data: dataMale
                  }, {
                      label: "Female",
                      backgroundColor: color2,
                      data: dataFemale
                  }]
              },
              options: {
                  title: {
                      display: true,
                      text: 'Gender count per year'
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
  if (props.chartSelected == "top-employers") {
      var listOfCompanies = props.data.employers;
      var labelsList = [];
      var backgroundColorList = [];
      var dataList = [];
      for (var i = 0; i < listOfCompanies.length; i++) {
          var r = randomColorGenerator();
          var g = randomColorGenerator();
          var b = randomColorGenerator();
          labelsList.push(listOfCompanies[i].name);
          backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
          dataList.push(listOfCompanies[i].students);
      }
      props.ctxContainer.innerHTML = '<div className={"chart-container ' + props.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
          '<canvas id="myChart"></canvas>' +
          '</div>';
      var ctx = document.getElementById("myChart");
      if (ctx) {
          var myChart = new Chart(ctx, {
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

  if (props.chartSelected == "top-bachelor-degrees") {
      var listOfDegrees = props.data.degrees;
      var labelsList = [];
      var backgroundColorList = [];
      var dataList = [];
      for (var i = 0; i < listOfDegrees.length; i++) {
          var r = randomColorGenerator();
          var g = randomColorGenerator();
          var b = randomColorGenerator();
          labelsList.push(listOfDegrees[i].degree);
          backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
          dataList.push(listOfDegrees[i].students);
      }
      props.ctxContainer.innerHTML = '<div className={"chart-container ' + props.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
          '<canvas id="myChart"></canvas>' +
          '</div>';
      var ctx = document.getElementById("myChart");
      if (ctx) {
          var myChart = new Chart(ctx, {
              type: 'polarArea',
              data: {
                  labels: labelsList,
                  datasets: [
                      {
                          label: "Top Bachelors Degree",
                          backgroundColor: backgroundColorList,
                          data: dataList
                      }
                  ]
              },
              options: {
                  title: {
                      display: true,
                      text: 'Top Bachelors Degree'
                  }
              }
          });

      }
  }

  if (props.chartSelected == "undergrad-institutions") {
      var listOfInstitutions = props.data.institutionlist;
      var labelsList = [];
      var backgroundColorList = [];
      var dataList = [];
      for (var i = 0; i < listOfInstitutions.length; i++) {
          var r = randomColorGenerator();
          var g = randomColorGenerator();
          var b = randomColorGenerator();
          labelsList.push(listOfInstitutions[i].name);
          backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
          dataList.push(listOfInstitutions[i].count);
      }
      props.ctxContainer.innerHTML = '<div className={"chart-container ' + props.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
          '<canvas id="myChart"></canvas>' +
          '</div>';
      var ctx = document.getElementById("myChart");
      if (ctx) {
          var myChart = new Chart(ctx, {
              type: 'pie',
              data: {
                  labels: labelsList,
                  datasets: [
                      {
                          label: "Undergrad Institutions",
                          backgroundColor: backgroundColorList,
                          data: dataList
                      }
                  ]
              },
              options: {
                  title: {
                      display: true,
                      text: 'Undergrad Institutions'
                  }
              }
          });

      }
  }
  if (props.chartSelected == "top-electives") {
      var listOfElectives = props.data.electives;
      var labelsList = [];
      var backgroundColorList = [];
      var dataList = [];
      for (var i = 0; i < listOfElectives.length; i++) {
          var r = randomColorGenerator();
          var g = randomColorGenerator();
          var b = randomColorGenerator();
          labelsList.push(listOfElectives[i].elective);
          backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
          dataList.push(listOfElectives[i].students);
      }
      props.ctxContainer.innerHTML = '<div className={"chart-container ' + props.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
          '<canvas id="myChart"></canvas>' +
          '</div>';
      var ctx = document.getElementById("myChart");
      if (ctx) {
          var myChart = new Chart(ctx, {
              type: 'polarArea',
              data: {
                  labels: labelsList,
                  datasets: [
                      {
                          label: "Top Electives",
                          backgroundColor: backgroundColorList,
                          data: dataList
                      }
                  ]
              },
              options: {
                  title: {
                      display: true,
                      text: 'Top Electives'
                  }
              }
          });

      }
  }

  // console.log(props)
  return;
}
