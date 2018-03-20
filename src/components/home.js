import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import StudentList from './student_list';
import {searchStudent} from '../actions';


class AdminHome extends Component {

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

  onSubmit(values){
    this.props.searchStudent(values);
  }

  render () {
    const {handleSubmit} = this.props;
    const campusOptions=[{label:"Select campus",value:""},
                          {label:"All Campus",value:"all_campus"},
                          {label:"Boston",value:"boston"},
                          {label:"Charlotte",value:"charlotte"},
                          {label:"Silicon Valley",value:"silicon_valley"},
                          {label:"Seattle",value:"seattle"}];
    const studyOptions=[{label:"Select Study Options",value:""},
                        {label:"Full-Time",value:"full_time"},
                        {label:"Part-Time",value:"part_time"},
                        {label:"Online",value:"online"},
                        {label:"Hybrid",value:"hybrid"},
                        {label:"Classroom",value:"classroom"}];
    const degreeYearOptions=[{label:"Select Year",value:""},
                          {label:"2018",value:"2018"},
                          {label:"2017",value:"2017"},
                          {label:"2016",value:"2016"},
                          {label:"2015",value:"2015"},
                          {label:"2014",value:"2014"}];
    return (
      <div>
        <div className="col-sm-12 hidden-xs-down student-body" >
          <br />
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="col-sm-12">
              <Field
                label="Search Student by Name:"
                name="searchName"
                placeholder="Search Name"
                css="form-control-sm"
                component={this.renderField}
              />
            </div>
            <div className="col-sm-12">
              <Field
                label="Search Student by EmailId:"
                name="searchEmailId"
                placeholder="Search EmailId"
                css="form-control-sm"
                component={this.renderField}
              />
            </div>
            <div className="col-sm-12">
              <div className="col-sm-4">
                <Field
                  label="Search Campus:"
                  name="searchCampus"
                  css="form-control-sm"
                  options={this.createOptions(campusOptions)}
                  component={this.renderDropDownField}
                />
              </div>
              <div className="col-sm-4">
                <Field
                  label="Search Study Options:"
                  name="searchStudyOptions"
                  css="form-control-sm"
                  options={this.createOptions(studyOptions)}
                  component={this.renderDropDownField}
                />
              </div>
              <div className="col-sm-4">
                <Field
                  label="Search Degree Year:"
                  name="searchDegreeYear"
                  css="form-control-sm"
                  options={this.createOptions(degreeYearOptions)}
                  component={this.renderDropDownField}
                />
              </div>
            </div>
            <div className="col-sm-12 text-align-center">
              <div className="col-sm-4">
                <button type="submit" className="btn btn-danger">Submit</button>
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-primary">Clear</button>
              </div>
              <div className="col-sm-4">
                <a >Advanced Search</a>
              </div>
            </div>
          </form>
          <div className="col-sm-12 hidden-xs-down">
            <br />
            <StudentList list={this.props.students}/>
          </div>
        </div>



        <div className="col-xs-12 hidden-sm-up">
          <br />
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Search Student:"
              name="searchName"
              placeholder="Search Name"
              css="form-control-sm"
              component={this.renderField}
            />
            <Field
              label="Search Student by EmailId:"
              name="searchEmailId"
              placeholder="Search EmailId"
              css="form-control-sm"
              component={this.renderField}
            />
            <Field
              label="Search Campus:"
              name="searchCampus"
              css="form-control-sm"
              options={this.createOptions(campusOptions)}
              component={this.renderDropDownField}
            />
            <Field
              label="Search Study Options:"
              name="searchStudyOptions"
              css="form-control-sm"
              options={this.createOptions(studyOptions)}
              component={this.renderDropDownField}
            />
            <Field
              label="Search Degree Year:"
              name="searchDegreeYear"
              css="form-control-sm"
              options={this.createOptions(degreeYearOptions)}
              component={this.renderDropDownField}
            />
            <div className="col-xs-12 text-align-center">
              <div className="col-xs-4">
                <button type="submit" className="btn btn-sm btn-danger">Submit</button>
              </div>
              <div className="col-xs-4">
                <button type="button" className="btn btn-sm btn-primary">Clear</button>
              </div>
              <div className="col-xs-4 x-small-font">
                <a >Advanced Search</a>
              </div>
            </div>
          </form>
          <div className="col-xs-12 hidden-sm-up">
          <br />
          <StudentList list={this.props.students}/>
          </div>
        </div>
      </div>
    );
  };
}

function validate(values){
  const errors={};
  if(!values.searchName){
    errors.searchName="Select campus";
  }

  return errors;
}

function mapStateToProps(state){
  return {students:state.students};
}

export default reduxForm({
  form:'SearchStudentForm'
})(
  connect(mapStateToProps,{searchStudent})(AdminHome)
);
