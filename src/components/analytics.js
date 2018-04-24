import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {getAnalytics, sortAnalytics} from '../actions/index';
import AnalyticsFilter from './analytics_filter';
import AnalyticsTable from './analytics_table';
import AnalyticsCharts from './analytics_charts';
import left_arrow from '../images/left_arrow.png';
class AdminAnalytics extends Component {
    constructor(props) {
        super(props);
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

        //top Bachelors degree
        this.toggleTop10BachelorsDegree = this.toggleTop10BachelorsDegree.bind(this);
        this.getTop10BachelorsDegreeChart=this.getTop10BachelorsDegreeChart.bind(this);

        //Common
        this.createSortFunction = this.createSortFunction.bind(this);
        this.createTableContent = this.createTableContent.bind(this);
        // this.getAnalyticsCallback = this.getAnalyticsCallback.bind(this);
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
            top10BachelorsDegreeFlag: "hidden-xs-up",
            UndergradInstitutionsFlag: "hidden-xs-up",
            coopStudentsFlag: "hidden-xs-up",
            genderRatioFlag: "hidden-xs-up",
            workingFlag:"hidden-xs-up",
            campus: [],
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
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-employers") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "coop-students") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

            if (this.state.chartSelected == "company") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

            if (this.state.chartSelected == "working") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }

            if (this.state.chartSelected == "top-electives") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "undergrad-institutions") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
                this.setState({isApiCalled: true, sortBy: header}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-bachelor-degrees") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(this.state.orderBy, header));
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
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-employers") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "coop-students") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "company") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "working") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-electives") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "undergrad-institutions") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
                this.setState({isApiCalled: true, orderBy: order}, () => {
                    this.props.sortAnalytics(list);
                });
            }
            if (this.state.chartSelected == "top-bachelor-degrees") {
                var list = {};
                list = this.props.analytics.sort(this.compareValues(order, this.state.sortBy));
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
            top10BachelorsDegreeFlag: "hidden-xs-up",
            UndergradInstitutionsFlag: "hidden-xs-up",
            top10ElectivesFlag: "hidden-xs-up",
            coopStudentsFlag: "hidden-xs-up",
            genderRatioFlag: "hidden-xs-up",
            companyFlag: "hidden-xs-up",
            workingFlag: "hidden-xs-up",
            isApiCalled: false,
            campus:[]
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

    toggleTop10BachelorsDegree(){
        this.collapseAllQueires();
        if (this.state.top10BachelorsDegreeFlag == "hidden-xs-up")
            this.setState({top10BachelorsDegreeFlag: ""});
        else
            this.setState({top10BachelorsDegreeFlag: "hidden-xs-up"});
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

        if (this.state.campus.length == 0) {
            this.setState({validationError: true}, function () {
              alert('Please select a campus');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "gender-ratio",initialLoadChart: "",initialLoadTable: ""}, function () {
                const chartRequest = {url: "gender-ratio", body: {campus:this.state.campus}};
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getCompanyChart() {
        if (this.state.campus.length == 0 || this.state.company == "" || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "company",initialLoadChart: "hidden-xs-up", initialLoadTable: ""}, function () {
                const chartRequest = {
                    url: "company",
                    body: {campus: this.state.campus, year: this.state.year, company: this.state.company}
                };
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getWorkingChart(){
        if (this.state.campus.length == 0 || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "working",initialLoadChart: "hidden-xs-up", initialLoadTable: ""}, function () {
                const chartRequest = {
                    url: "working",
                    body: {campus: this.state.campus, year: this.state.year}
                };
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getCoopStudentChart() {
        if (this.state.campus.length == 0 || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "coop-students",initialLoadChart: "hidden-xs-up", initialLoadTable: ""}, function () {
                const chartRequest = {url: "coop-students", body: {campus: this.state.campus, year: this.state.year}};
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getTop10EmployersChart() {
        if (this.state.campus.length == 0 || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "top-employers",initialLoadChart: "", initialLoadTable: ""}, function () {
                const chartRequest = {url: "top-employers", body: {campus: this.state.campus, year: this.state.year}};
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getTop10BachelorsDegreeChart(){
        if (this.state.campus.length == 0 || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "top-bachelor-degrees",initialLoadChart: "", initialLoadTable: ""}, function () {
                const chartRequest = {url: "top-bachelor-degrees", body: {campus: this.state.campus, year: this.state.year}};
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getUndergradInstitutionsChart(){
        if (this.state.campus.length == 0 || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "undergrad-institutions",initialLoadChart: "", initialLoadTable: ""}, function () {
                const chartRequest = {url: "undergrad-institutions", body: {campus: this.state.campus, year: this.state.year}};
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    getTop10ElectivesChart(){
        if (this.state.campus.length == 0 || this.state.year == "") {
            this.setState({validationError: true}, function () {
              alert('Please select all the options');
            });
        }
        else {
            this.setState({validationError: false, isApiCalled: true, chartSelected: "top-electives",initialLoadChart: "", initialLoadTable: ""}, function () {
                const chartRequest = {url: "top-electives", body: {campus: this.state.campus, year: this.state.year}};
                this.props.sortAnalytics([]);
                this.props.getAnalytics(chartRequest,this.props.login.token);
            });

        }
    }

    onCampusChange(e) {
        const campus = this.state.campus;
        let index;
        if (e.target.checked) {
            campus.push(e.target.value);
        } else {
            index = campus.indexOf(e.target.value);
            campus.splice(index, 1);
        }
        this.setState({ campus: campus, isApiCalled: false})
    }

    getYears(years) {
        const list = years.map((year) => {
            return <option key={year.label} value={year.value}>{year.label}</option>
        });
        return list;
    }


    getCampusOptions(options) {
        const list = options.map((option) => {
            const isChecked=this.state.campus.includes(option.value);
            return <div key={option.label}>
                <input type="checkbox" checked={isChecked} value={option.value} onChange={(e) => this.onCampusChange(e)} /> &nbsp;
                <label> {option.label}</label>
            </div>
        });
        return list;
    }

    onCompanyChange(company) {
        this.setState({company});
    }

    onYearChange(year) {
        this.setState({year});
    }

    showChart(data) {
        if (data) {
          if(data.length!=0){
            if (this.state.chartSelected) {
                var ctxContainer = document.getElementById("myChartContainer");
                AnalyticsCharts({
                    ctxContainer,
                    chartSelected: this.state.chartSelected,
                    data,
                    initialLoadChart: this.state.initialLoadChart
                });
            }
        }
        else{
          var ctxContainer = document.getElementById("myChartContainer");
          ctxContainer.innerHTML='<h3> No data to visualize! </h3>';
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
        const campusOptions = [
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
            "top-bachelor-degrees":[{label: "Degree Name", value: "degree"},
                {label: "Students Count", value: "students"}]
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
                {label: "Students Count", value: "count"}],
            "top-bachelor-degrees":[{label: "Degree Name", value: "degree"},
                {label: "Students Count", value: "students"}]
        };

        if (this.props.analytics && this.state.isApiCalled) {
            this.showChart(this.props.analytics);
        }
        return (
            <div style={{'padding': '120px 0'}}>
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
                        top10BachelorsDegreeFlag={this.state.top10BachelorsDegreeFlag}
                        toggleTop10BachelorsDegree={this.toggleTop10BachelorsDegree}
                        getTop10BachelorsDegreeChart={this.getTop10BachelorsDegreeChart}

                    />
                    <div className="analytics-charts">
                        <div>
                            <div
                                className={this.state.initialLoadChart != "" && this.state.initialLoadTable != "" ? "initial-load text-align-center larger-font" : "hidden-xs-up"}>
                                <img className="pull-left" height='50px' src={left_arrow}/>
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
    }
}

function mapStateToProps(state) {
    return {analytics: state.analytics,login:state.login};
}


export default connect(mapStateToProps, {getAnalytics, sortAnalytics})(AdminAnalytics);
