import React, {Component} from 'react';
import {Modal, Button} from "react-bootstrap"
import styled from "styled-components";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNew: false,
            edit:false,
            editItem: null,
            index: 999999,
            projects: this.props.projects
        };
    }

    render() {
        return (
            <div className="wrapper">
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="90%">
                            <p className="tab-content-subtitle">MY PROJECTS</p>
                        </td>
                        <td width="10%">
                            <Button onClick={this.clickOnAdd}>
                                Add
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>

                {this.state.projects.map(item => (
                    <div key={item.projectId}>
                        <table width="100%">
                            <tbody>
                            <tr>
                                <td width="100%">
                                    <h2 className="companyName">{item.projectName}</h2>
                                </td>
                            </tr>
                            <tr><td><p className="grayContent">{item.startDate + " - " + item.endDate}</p></td></tr>
                            <tr><td><TextArea className="grayContent">{item.description}</TextArea></td></tr>
                            </tbody>
                        </table>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}

const TextArea = styled.p`
        white-space: pre-line;
    `;

const mapStateToProps = state => {
    return {
        projects: state.profile.Projects
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Projects)
