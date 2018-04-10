import React, {Component} from 'react';
import ProjectContent from "./ProjectContent";
import {Modal, Button} from "react-bootstrap";

export default class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item.projectId,
            projectName: this.props.item.projectName,
            startDate: this.props.item.startDate,
            endDate: this.props.item.endDate,
            description: this.props.item.description
        }
    }

    changeTitle(title) {
        this.setState({
            projectName: title
        });
    }

    changeStartDate(startDate) {
        this.setState({
            startDate: startDate
        })
    }

    changeEndDate(endDate) {
        this.setState({
            endDate: endDate
        })
    }

    changeDesc(description) {
        this.setState({
            description: description
        });
    }

    editProject = () => {
        if(!this.state.projectName || this.state.projectName.trim().length === 0){
            alert("Project Name can't be blank!");
            return
        }

        if(!this.isValidDate(this.state.startDate)) {
            alert('Invalid start date. Date must be in mm/dd/yyyy format.');
            return
        }

        if(!this.isValidDate(this.state.endDate)) {
            alert('Invalid end date. Date must be in mm/dd/yyyy format.');
            return
        }

        let item = {
            projectId: this.state.id,
            projectName: this.state.projectName,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            description: this.state.description,
        };
        this.props.editFunc(item);

        // this.props.item.ProjectName = this.state.projectName;
        // this.props.item.Description = this.state.description;
        this.props.closePopup()
    };

    deleteProject = () => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            this.props.deleteFunc(this.props.item);
            this.props.closePopup()
        } else {
            // Do nothing!
        }
    };

    isValidDate(dateString)
    {
        // First check for the pattern
        if(!/^\d{1,2}\-\d{1,2}\-\d{4}$/.test(dateString))
            return false;

        // Parse the date parts to integers
        let parts = dateString.split("-");
        let day = parseInt(parts[1], 10);
        let month = parseInt(parts[0], 10);
        let year = parseInt(parts[2], 10);

        // Check the ranges of month and year
        if(year < 1000 || year > 3000 || month === 0 || month > 12)
            return false;

        let monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        // Adjust for leap years
        if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
            monthLength[1] = 29;

        // Check the range of the day
        return day > 0 && day <= monthLength[month - 1];
    }

    render() {
        return (
            <div>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.text}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <ProjectContent
                        changeTitle={this.changeTitle.bind(this)}
                        changeDesc={this.changeDesc.bind(this)}
                        changeStartDate={this.changeStartDate.bind(this)}
                        changeEndDate={this.changeEndDate.bind(this)}
                        item={this.state}/> <br/>
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.props.closePopup}>Cancel</Button>
                    <Button bsStyle="primary" onClick={this.editProject}>Save</Button>
                    <Button bsStyle="danger" onClick={this.deleteProject}>Delete</Button>
                </Modal.Footer>
            </div>
        )
    }
}