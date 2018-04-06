import React from 'react';
import {STUDENT_RETRIEVAL_STATUSES} from "../../../../reducers/align-students";
import NextPageButton from './NextPageButton';
import PaginationInput from './PaginationInput';
import PreviousPageButton from './PreviousPageButton';

class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: this.props.pagination.current,
            editing: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.isInputValid = this.isInputValid.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    isInputValid(){
        if (this.state.page !== ''){
            const cuurentInput = Number(this.state.page);
            return Number.isInteger(cuurentInput) && cuurentInput >= 1 && cuurentInput <= this.props.pagination.total;
        }
        return true;
    }

    handleInputChange(e){
        this.setState({
            page: e.target.value
        })
    };

    handleFocus(e){
        this.setState({
            editing: true
        })
    };

    handleBlur(e){
        this.setState({
            editing: false
        })
    };

    handlePageChange(p){
        this.props.applyFilters(this.props.studentFilters);
    }

    render(){
        return (
            this.props.studentRetrievalStatus === STUDENT_RETRIEVAL_STATUSES.SUCCESS &&
            <div className={"student-pagination-container"}>
                <div >

                    <PreviousPageButton currentPage={this.props.pagination.current}
                                        handlePageChange={this.handlePageChange}/>

                    <PaginationInput page={this.state.page}
                                     handleInputChange={this.handleInputChange}
                                     handlePageChange={this.handlePageChange}
                                     handleFocus={this.handleFocus}
                                     handleBlur={this.handleBlur}
                                     isEditing={this.state.editing}/>

                    <NextPageButton currentPage={this.props.pagination.current}
                                    totalPage={this.props.pagination.total}
                                    handlePageChange={this.handlePageChange}/>
                </div>
                <a className={'student-pagination-error' + ' ' + (
                    this.isInputValid() ? 'hide' : ''
                )}>
                    You should input a number between 1 and 20
                </a>
            </div>
        );
    }
}

export default Pagination;