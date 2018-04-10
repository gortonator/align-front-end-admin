import React, {Component} from 'react';
import {Row, Col, Grid, Button, Modal, FormGroup, FormControl} from 'react-bootstrap';
import location from '../../../images/location.jpeg';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Intro extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            summary: this.props.summary,
            show: false
        };
    }


    handleClose() {
        this.setState({show: false});
        this.setState({summary: this.props.summary});
    }

    handleShow() {
        this.setState({show: true});
    }


    render() {
        return (
            <Grid style={{'padding' : '0'}}>
                <Row className="show-grid" style={{'margin' : '0'}}>
                    <Col md={12}>
                        <p id="intro-name">{this.props.intro.firstName}, {this.props.intro.lastName}
                        &nbsp;&nbsp;&nbsp;
                            <div>
                                <img id="locationImage" src={location} alt="pic"/>&nbsp;
                                <span id="location"
                                      className="grayContent">{this.props.intro.city}, {this.props.intro.state}</span>
                            </div>
                        </p>
                    </Col>
                </Row>

                <br/>
                <Row className="show-grid" style={{'margin-right' : '0'}}>
                    <Col md={3} style={{'padding-right' : '0'}}><p>Gender:</p></Col>
                    <Col md={3} style={{'padding' : '0'}}><p className="grayContent">{this.props.intro.gender}</p></Col>
                    <Col md={3} style={{'padding-right' : '0'}}><p>Start Term:</p></Col>
                    <Col md={3} style={{'padding' : '0'}}><p className="grayContent">{this.props.intro.entryTerm + ' ' + this.props.intro.entryYear}</p></Col>
                </Row>

                <Row className="show-grid" style={{'margin-right' : '0'}}>
                    <Col md={3} style={{'padding-right' : '0'}}><p>Campus:</p></Col>
                    <Col md={3} style={{'padding' : '0'}}><p className="grayContent">{this.props.intro.campus}</p></Col>
                    <Col md={3} style={{'padding-right' : '0'}}><p>End Term:</p></Col>
                    <Col md={3} style={{'padding' : '0'}}><p className="grayContent">{this.props.intro.expectedLastTerm + ' ' + this.props.intro.expectedLastYear}</p></Col>

                </Row>

                <hr/>
                <Row className="show-grid">
                    <Col md={12}><p className="subtitle">Summary&nbsp;&nbsp;&nbsp;&nbsp;</p></Col>

                </Row>

                <Row className="show-grid">
                    <Col md={12}><p className="grayContent">{this.props.summary}</p></Col>
                </Row>

            </Grid>

        )
    }
}


const mapStateToProps = state => {
    return {
        // summary: state.profile.studentRecord.summary,
        // intro: state.profile.studentRecord,
    };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);





export default connect(mapStateToProps, mapDispatchToProps)(Intro)
