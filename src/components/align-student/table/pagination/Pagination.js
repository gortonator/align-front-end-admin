import React from 'react';
import {ASYNC_ACTION_STATUSES} from "../../../../constants";
import NextPageButton from './NextPageButton';
import PaginationInput from './PaginationInput';
import PreviousPageButton from './PreviousPageButton';

class Pagination extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            page: this.props.pagination.current
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.isInputValid = this.isInputValid.bind(this);
    }

    componentDidUpdate(props){
        if (props.pagination.current !== this.props.pagination.current){
            this.setState({
                page: this.props.pagination.current
            });
        }
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


    render(){
        return (
            this.props.studentRetrievalStatus === ASYNC_ACTION_STATUSES.SUCCESS && this.props.pagination.total > 0 &&
            <div className={"student-pagination-container"}>
                <div >

                    <PreviousPageButton currentPage={this.props.pagination.current}
                                        goToPreviousPage={() => {
                                            this.props.goToPage(this.props.pagination.current-1)
                                        }}/>

                    <PaginationInput page={this.state.page}
                                     handleInputChange={this.handleInputChange}
                                     goToPage={p => {this.props.goToPage(p)}}
                                     isEditing={this.state.editing}
                                     totalPage={this.props.pagination.total}/>

                    <NextPageButton currentPage={this.props.pagination.current}
                                    totalPage={this.props.pagination.total}
                                    goToNextPage={() => {
                                        this.props.goToPage(this.props.pagination.current+1);
                                    }}/>
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