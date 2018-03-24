import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getAnalytics, sortAnalytics} from '../actions';
import Chart from 'chart.js';
import AnalyticsFilter from './analytics_filter';
import AnalyticsTable from './analytics_table';


class AdminAnalytics extends Component {

    constructor(props) {
        super(props);

        //Gender Ratio
        this.toggleGenderRatio = this.toggleGenderRatio.bind(this);
        this.getGenderRatioChart = this.getGenderRatioChart.bind(this);


        //Student Company
        this.toggleCompany = this.toggleCompany.bind(this);
        this.getCompanyChart = this.getCompanyChart.bind(this);

        //top 10 employers
        this.toggleTop10Employers = this.toggleTop10Employers.bind(this);
        this.getTop10EmployersChart = this.getTop10EmployersChart.bind(this);

        //top 10 Electives
        this.toggleTop10Electives=this.toggleTop10Electives.bind(this);
        this.getTop10ElectivesChart=this.getTop10ElectivesChart.bind(this);

        //Co-op students
        this.toggleCoopStudents = this.toggleCoopStudents.bind(this);
        this.getCoopStudentChart = this.getCoopStudentChart.bind(this);

        //Working
        this.toggleWorking =this.toggleWorking.bind(this);
        this.getWorkingChart = this.getWorkingChart.bind(this);

        //Undergrad Institutions
        this.toggleUndergradInstitutions=this.toggleUndergradInstitutions.bind(this);
        this.getUndergradInstitutionsChart=this.getUndergradInstitutionsChart.bind(this);

        //Common
        this.createSortFunction = this.createSortFunction.bind(this);
        this.createTableContent = this.createTableContent.bind(this);
        this.getAnalyticsCallback = this.getAnalyticsCallback.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.getYears = this.getYears.bind(this);
        this.getCampusOptions = this.getCampusOptions.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.compareValues = this.compareValues.bind(this);
        this.sortTable = this.sortTable.bind(this);
        this.orderTable = this.orderTable.bind(this);

        this.state = {
            top10EmployersFlag: "hidden-xs-up",
            top10ElectivesFlag: "hidden-xs-up",
            UndergradInstitutionsFlag: "hidden-xs-up",
            coopStudentsFlag: "hidden-xs-up",
            genderRatioFlag: "hidden-xs-up",
            workingFlag:"hidden-xs-up",
            campus: "",
            company: "",
            year: "",
            validationError: false,
            isApiCalled: false,
            initialLoadChart: "hidden-xs-up",
            initialLoadTable: "hidden-xs-up",
            chartSelected: "",
            companyFlag: "hidden-xs-up",
            sortBy: "",
            orderBy: ""
        };
    }

    sortTable(header) {
        if (this.props.analytics) {
            if (this.state.chartSelected == "gender-ratio") {
                var list = {};
                list.yearlyratio = this.props.analytics.yearlyratio.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-employers") {
                var list = {};
                list.employers = this.props.analytics.employers.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "coop-students") {
                var list = {};
                list.studentList = this.props.analytics.studentList.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

            if (this.state.chartSelected == "company") {
                var list = {};
                list.students = this.props.analytics.students.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

            if (this.state.chartSelected == "working") {
                var list = {};
                list.studentList = this.props.analytics.studentList.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

            if (this.state.chartSelected == "top-electives") {
                var list = {};
                list.electives = this.props.analytics.electives.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "undergrad-institutions") {
                var list = {};
                list.institutionlist = this.props.analytics.institutionlist.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

        }

    }

    orderTable(order) {
        if (this.props.analytics) {
            if (this.state.chartSelected == "gender-ratio") {
                var list = {};
                list.yearlyratio = this.props.analytics.yearlyratio.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-employers") {
                var list = {};
                list.employers = this.props.analytics.employers.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "coop-students") {
                var list = {};
                list.studentList = this.props.analytics.studentList.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "company") {
                var list = {};
                list.students = this.props.analytics.students.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "working") {
                var list = {};
                list.studentList = this.props.analytics.studentList.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-electives") {
                var list = {};
                list.electives = this.props.analytics.electives.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "undergrad-institutions") {
                var list = {};
                list.institutionlist = this.props.analytics.institutionlist.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
        }
    }

    createSortFunction(sortOptions) {
        if (this.props.analytics && this.state.chartSelected) {
            var sortOptionsFields = sortOptions[this.state.chartSelected].map((head) => {
                return <option key={head.value} value={head.value}>{head.label}</option>
            });
            return <div className="row text-align-center">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <select className="form-control custom-select" type="text" value={this.state.orderBy}
                            onChange={e => this.orderTable(e.target.value)}>
                        <option key="default" value="">Order By</option>
                        {sortOptionsFields}
                    </select>
                </div>
                <div className="col-sm-4">
                    <select className="form-control custom-select" type="text" value={this.state.sortBy}
                            onChange={e => this.sortTable(e.target.value)}>
                        <option key="default" value="">Sort By</option>
                        <option key="asc" value="asc">Asc</option>
                        <option key="desc" value="desc">Desc</option>
                    </select>
                </div>
                <div className="col-sm-2"></div>
            </div>;
        }
    }


    compareValues(key, order = 'asc') {
        return function (a, b) {
            if (!a.hasOwnProperty(key) ||
                !b.hasOwnProperty(key)) {
                return 0;
            }

            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return (
                (order == 'desc') ?
                    (comparison * -1) : comparison
            );
        };
    }

    createTableContent(headerOptions) {
        if (this.props.analytics && this.state.chartSelected) {
            return <AnalyticsTable analytics={this.props.analytics} chartSelected={this.state.chartSelected}
                                   chartHeaders={headerOptions[this.state.chartSelected]}/>;
        }
    }

    collapseAllQueires() {
        this.setState({
            top10EmployersFlag: "hidden-xs-up",
            UndergradInstitutionsFlag: "hidden-xs-up",
            top10ElectivesFlag: "hidden-xs-up",
            coopStudentsFlag: "hidden-xs-up",
            genderRatioFlag: "hidden-xs-up",
            companyFlag: "hidden-xs-up",
            workingFlag: "hidden-xs-up",
            isApiCalled: false
        });
    }

    toggleGenderRatio() {
        this.collapseAllQueires();
        if (this.state.genderRatioFlag == "hidden-xs-up")
            this.setState({genderRatioFlag: ""});
        else
            this.setState({genderRatioFlag: "hidden-xs-up"});
    }

    toggleCompany() {
        this.collapseAllQueires();
        if (this.state.companyFlag == "hidden-xs-up")
            this.setState({companyFlag: ""});
        else
            this.setState({companyFlag: "hidden-xs-up"});
    }

    toggleTop10Employers() {
        this.collapseAllQueires();
        if (this.state.top10EmployersFlag == "hidden-xs-up")
            this.setState({top10EmployersFlag: ""});
        else
            this.setState({top10EmployersFlag: "hidden-xs-up"});
    }

    toggleUndergradInstitutions(){
        this.collapseAllQueires();
        if (this.state.UndergradInstitutionsFlag == "hidden-xs-up")
            this.setState({UndergradInstitutionsFlag: ""});
        else
            this.setState({UndergradInstitutionsFlag: "hidden-xs-up"});
    }

    toggleTop10Electives(){
        this.collapseAllQueires();
        if (this.state.top10ElectivesFlag == "hidden-xs-up")
            this.setState({top10ElectivesFlag: ""});
        else
            this.setState({top10ElectivesFlag: "hidden-xs-up"});
    }

    toggleCoopStudents() {
        this.collapseAllQueires();
        if (this.state.coopStudentsFlag == "hidden-xs-up")
            this.setState({coopStudentsFlag: ""});
        else
            this.setState({coopStudentsFlag: "hidden-xs-up"});
    }

    toggleWorking(){
        this.collapseAllQueires();
        if(this.state.workingFlag=="hidden-xs-up")
            this.setState({workingFlag: ""});
        else
            this.setState({workingFlag: "hidden-xs-up"});
    }

    getGenderRatioChart() {

        if (this.state.campus == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "gender-ratio"}, function () {
                const chartRequest = {url: "gender-ratio", body: this.state.campus};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    getCompanyChart() {
        if (this.state.campus == "" || this.state.company == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "company"}, function () {
                const chartRequest = {
                    url: "company",
                    body: {campus: this.state.campus, year: this.state.year, company: this.state.company}
                };
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    getWorkingChart(){
        if (this.state.campus == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "working"}, function () {
                const chartRequest = {
                    url: "working",
                    body: {campus: this.state.campus, year: this.state.year}
                };
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    getCoopStudentChart() {
        if (this.state.campus == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "coop-students"}, function () {
                const chartRequest = {url: "coop-students", body: {campus: this.state.campus, year: this.state.year}};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    getTop10EmployersChart() {
        if (this.state.campus == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "top-employers"}, function () {
                const chartRequest = {url: "top-employers", body: {campus: this.state.campus, year: this.state.year}};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    getUndergradInstitutionsChart(){
        if (this.state.campus == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "undergrad-institutions"}, function () {
                const chartRequest = {url: "undergrad-institutions", body: {campus: this.state.campus, year: this.state.year}};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    getTop10ElectivesChart(){
        if (this.state.campus == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {

            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "top-electives"}, function () {
                const chartRequest = {url: "top-electives", body: {campus: this.state.campus, year: this.state.year}};
                this.props.getAnalytics(chartRequest, this.getAnalyticsCallback);
            });

        }
    }

    onCampusChange(campus) {
        this.setState({campus: campus, isApiCalled: false});
    }

    getAnalyticsCallback(chartType) {
        if (chartType == "gender-ratio") {
            this.setState({initialLoadChart: "", initialLoadTable: ""});
        }
        if (chartType == "company") {
            this.setState({initialLoadChart: "hidden-xs-up", initialLoadTable: ""}, function () {
            });
        }
        if (chartType == "top-employers") {
            this.setState({initialLoadChart: "", initialLoadTable: ""}, function () {
            });
        }
        if (chartType == "coop-students") {
            this.setState({initialLoadChart: "hidden-xs-up", initialLoadTable: ""}, function () {
            });
        }
        if (chartType == "working") {
            this.setState({initialLoadChart: "hidden-xs-up", initialLoadTable: ""}, function () {
            });
        }
        if(chartType=="top-electives"){
            this.setState({initialLoadChart: "", initialLoadTable: ""}, function () {
            });
        }
        if(chartType=="undergrad-institutions"){
            this.setState({initialLoadChart: "", initialLoadTable: ""}, function () {
            });
        }
    }

    getYears(years) {
        const list = years.map((year) => {
            return <option key={year.label} value={year.value}>{year.label}</option>
        })
        return list;
    }

    getCampusOptions(options) {
        const list = options.map((option) => {
            return <div key={option.label} className="radio">
                <label><input type="radio" name="optradio" value={option.value}
                              onChange={e => this.onCampusChange(e.target.value)}/>{option.label}</label>
            </div>
        })
        return list;
    }

    onCompanyChange(company) {
        this.setState({company});
    }

    onYearChange(year) {
        this.setState({year});
    }

    randomColorGenerator() {
        return Math.floor((Math.random() * 100) + (Math.random() * 100) + (Math.random() * 50) + 1);
    }

    showChart(data) {
        if (data) {
            if (data) {
                if (this.state.chartSelected == "gender-ratio") {
                    var dataLabels = [];
                    var dataMale = [];
                    var dataFemale = [];
                    var yearlyratioList = data.yearlyratio;
                    for (var i = 0; i < yearlyratioList.length; i++) {
                        var r=this.randomColorGenerator();
                        var g=this.randomColorGenerator();
                        var b=this.randomColorGenerator();
                        var color1="rgba("+r+","+g+","+b+",1)";
                        r=this.randomColorGenerator();
                        g=this.randomColorGenerator();
                        b=this.randomColorGenerator();
                        var color2="rgba("+r+","+g+","+b+",0.9)";
                        dataLabels.push(yearlyratioList[i].year);
                        dataMale.push(yearlyratioList[i].male);
                        dataFemale.push(yearlyratioList[i].female);
                    }
                    var ctxContainer = document.getElementById("myChartContainer");
                    ctxContainer.innerHTML = '<div className={"chart-container ' + this.state.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
                        '<canvas id="myChart"></canvas>' +
                        '</div>';
                    var ctx = document.getElementById("myChart");
                    if (ctx) {
                        var myChart = new Chart(ctx, {
                            type: 'bar',
                            data: {
                                labels: dataLabels,
                                datasets: [ {
                                    label: "Boys",
                                    backgroundColor: color1,
                                    data: dataMale
                                }, {
                                    label: "Girls",
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
                        // var myChart = new Chart(ctx, {
                        //     type: 'bar',
                        //     data: {
                        //         labels: dataLabels,
                        //         datasets: [{
                        //             label: "Boys",
                        //             backgroundColor: "#3e95cd",
                        //             data: dataMale
                        //         }, {
                        //             label: "Girls",
                        //             backgroundColor: "#8e5ea2",
                        //             data: dataFemale
                        //         }]
                        //     },
                        //     options: {
                        //         title: {
                        //             display: true,
                        //             text: 'Gender count per year'
                        //         },
                        //         scales: {
                        //             yAxes: [{
                        //                 ticks: {
                        //                     beginAtZero: true
                        //                 }
                        //             }]
                        //         }
                        //     }
                        // });
                    }
                }

                if (this.state.chartSelected == "top-employers") {
                    var listOfCompanies = this.props.analytics.employers;
                    var labelsList = [];
                    var backgroundColorList = [];
                    var dataList = [];
                    for (var i = 0; i < listOfCompanies.length; i++) {
                        var r = this.randomColorGenerator();
                        var g = this.randomColorGenerator();
                        var b = this.randomColorGenerator();
                        labelsList.push(listOfCompanies[i].name);
                        backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
                        dataList.push(listOfCompanies[i].students);
                    }
                    var ctxContainer = document.getElementById("myChartContainer");
                    ctxContainer.innerHTML = '<div className={"chart-container ' + this.state.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
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

                if (this.state.chartSelected == "undergrad-institutions") {
                    var listOfInstitutions = this.props.analytics.institutionlist;
                    var labelsList = [];
                    var backgroundColorList = [];
                    var dataList = [];
                    for (var i = 0; i < listOfInstitutions.length; i++) {
                        var r = this.randomColorGenerator();
                        var g = this.randomColorGenerator();
                        var b = this.randomColorGenerator();
                        labelsList.push(listOfInstitutions[i].name);
                        backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
                        dataList.push(listOfInstitutions[i].count);
                    }
                    var ctxContainer = document.getElementById("myChartContainer");
                    ctxContainer.innerHTML = '<div className={"chart-container ' + this.state.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
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
                if (this.state.chartSelected == "top-electives") {
                    var listOfElectives = this.props.analytics.electives;
                    var labelsList = [];
                    var backgroundColorList = [];
                    var dataList = [];
                    for (var i = 0; i < listOfElectives.length; i++) {
                        var r = this.randomColorGenerator();
                        var g = this.randomColorGenerator();
                        var b = this.randomColorGenerator();
                        labelsList.push(listOfElectives[i].elective);
                        backgroundColorList.push("rgba(" + r + "," + g + "," + b + ",0.9)");
                        dataList.push(listOfElectives[i].students);
                    }
                    var ctxContainer = document.getElementById("myChartContainer");
                    ctxContainer.innerHTML = '<div className={"chart-container ' + this.state.initialLoadChart + '"} style={{display: "inline-block", position: "relative", height:"350px", width:"600px"}}>' +
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

            }
        }
    }

    render() {
        const degreeYearOptions = [{label: "Select Year", value: ""},
            {label: "2018", value: "2018"},
            {label: "2017", value: "2017"},
            {label: "2016", value: "2016"},
            {label: "2015", value: "2015"},
            {label: "2014", value: "2014"}];
        const campusOptions = [{label: "All Campus", value: "all_campus"},
            {label: "Boston", value: "boston"},
            {label: "Charlotte", value: "charlotte"},
            {label: "Silicon Valley", value: "silicon_valley"},
            {label: "Seattle", value: "seattle"}];
        const sortOptions = {
            "gender-ratio": [{label: "Year", value: "year"},
                {label: "Male", value: "male"},
                {label: "Female", value: "female"}],
            "company": [{label: "NUID", value: "nuid"},
                {label: "Student Name", value: "name"}],
            "top-employers": [{label: "Company Name", value: "name"},
                {label: "Students Count", value: "students"}],
            "coop-students": [{label: "NUID", value: "nuid"},
                {label: "Student Name", value: "name"}],
            "working":[{label: "NUID", value: "nuid"},
                {label: "Student Name", value: "name"},
                {label: "Company Name", value: "company"}],
            "top-electives": [{label: "Elective Name", value: "elective"},
            {label: "Students Count", value: "students"}],
            "undergrad-institutions": [{label: "Institution Name", value: "name"},
                {label: "Students Count", value: "count"}],
        };

        const headerOptions = {
            "gender-ratio": [{label: "Year", value: "year"},
                {label: "Male", value: "male"},
                {label: "Female", value: "female"}],
            "company": [{label: "NUID", value: "nuid"},
                {label: "Student Name", value: "name"}],
            "top-employers": [{label: "Company Name", value: "name"},
                {label: "Students Count", value: "students"}],
            "coop-students": [{label: "NUID", value: "nuid"},
                {label: "Student Name", value: "name"},
                {label: "Companies", value: "companies"}],
            "working":[{label: "NUID", value: "nuid"},
                {label: "Student Name", value: "name"},
                {label: "Company Name", value: "company"}],
            "top-electives": [{label: "Elective Name", value: "elective"},
                {label: "Students Count", value: "students"}],
            "undergrad-institutions": [{label: "Institution Name", value: "name"},
                {label: "Students Count", value: "count"}]
        };


        if (this.props.analytics && this.state.isApiCalled) {
            // console.log(this.state.chartSelected);
            this.showChart(this.props.analytics);
        }
        return (
            <div>
                <div className="analytics-body col-sm-12">
                    <AnalyticsFilter
                        toggleGenderRatio={this.toggleGenderRatio}
                        genderRatioFlag={this.state.genderRatioFlag}
                        campusOptions={campusOptions}
                        getCampusOptions={this.getCampusOptions}
                        getGenderRatioChart={this.getGenderRatioChart}
                        toggleCompany={this.toggleCompany}
                        companyFlag={this.state.companyFlag}
                        onCompanyChange={this.onCompanyChange}
                        onYearChange={this.onYearChange}
                        getYears={this.getYears}
                        degreeYearOptions={degreeYearOptions}
                        getCompanyChart={this.getCompanyChart}
                        toggleTop10Employers={this.toggleTop10Employers}
                        top10EmployersFlag={this.state.top10EmployersFlag}
                        getTop10EmployersChart={this.getTop10EmployersChart}
                        coopStudentsFlag={this.state.coopStudentsFlag}
                        toggleCoopStudents={this.toggleCoopStudents}
                        getCoopStudentChart={this.getCoopStudentChart}
                        workingFlag={this.state.workingFlag}
                        toggleWorking={this.toggleWorking}
                        getWorkingChart={this.getWorkingChart}
                        toggleTop10Electives={this.toggleTop10Electives}
                        top10ElectivesFlag={this.state.top10ElectivesFlag}
                        getTop10ElectivesChart={this.getTop10ElectivesChart}
                        UndergradInstitutionsFlag={this.state.UndergradInstitutionsFlag}
                        toggleUndergradInstitutions={this.toggleUndergradInstitutions}
                        getUndergradInstitutionsChart={this.getUndergradInstitutionsChart}
                    />
                    <div className="analytics-charts">
                        <div>
                            <div
                                className={this.state.initialLoadChart != "" && this.state.initialLoadTable != "" ? "initial-load text-align-center larger-font" : "hidden-xs-up"}>
                                <img className="pull-left" height='50px' src="/res/images/left-arrow.PNG"/>
                                Please select an option to begin
                            </div>
                            <div className={"analytics-body text-align-center col-sm-12 hidden-xs-down "}>
                                <div>
                                    <div id="myChartContainer">
                                        <div id="actualChartContainer"
                                             className={"chart-container " + this.state.initialLoadChart} style={{
                                            display: "inline-block",
                                            position: "relative",
                                            height: "350px",
                                            width: "600px"
                                        }}>
                                            <canvas id="myChart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div className={this.state.initialLoadTable}>
                                    <br/>
                                    {this.createSortFunction(sortOptions)}
                                    <br/>
                                    {this.createTableContent(headerOptions)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {analytics: state.analytics};
}


export default connect(mapStateToProps, {getAnalytics, sortAnalytics})(AdminAnalytics);
