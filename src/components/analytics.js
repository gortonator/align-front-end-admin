import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { openAnalytics } from '../actions';
import Chart from 'chart.js';


class AdminAnalytics extends Component {

    constructor(props) {
        super(props);
        this.toggleGenderRatio = this.toggleGenderRatio.bind(this);
        this.toggleTop10Employers = this.toggleTop10Employers.bind(this);
        this.state = { top10EmployersFlag:"hidden-xs-up",genderRatioFlag: "hidden-xs-up",campus:"" };
    }

    collapseAllQueires(){
        this.setState({top10EmployersFlag:"hidden-xs-up",genderRatioFlag:"hidden-xs-up"});
    }

    toggleGenderRatio(){
      this.collapseAllQueires();
      if(this.state.genderRatioFlag=="hidden-xs-up")
        this.setState({genderRatioFlag:""});
      else
        this.setState({genderRatioFlag:"hidden-xs-up"});
      console.log(this.state.genderRatioFlag);
    }

    toggleTop10Employers(){
      this.collapseAllQueires();
      if(this.state.top10EmployersFlag=="hidden-xs-up")
          this.setState({top10EmployersFlag:""});
      else
          this.setState({top10EmployersFlag:"hidden-xs-up"});
      // console.log(this.state.top10EmployersFlag);
    }

    onInputChange(campus){
        this.setState({campus:campus});
        console.log(campus);
        // this.props.onSearchTermChange(campus);
    }

    render () {
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
                                  <label><input type="radio" name="optradio"/>Seattle</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio"/>Silicon Valley</label>
                              </div>
                              <div className="radio">
                                  <label><input type="radio" name="optradio"/>Charlotte</label>
                              </div>
                          </div>
                      </div>
                      <div className="analytics-query col-sm-12" onClick={this.toggleTop10Employers}>Top 10 Employers</div>
                      <div className={"analytics-options col-sm-12 "+this.state.top10EmployersFlag}>
                          Best employers
                      </div>


                </div>
                <div className="analytics-charts">
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
