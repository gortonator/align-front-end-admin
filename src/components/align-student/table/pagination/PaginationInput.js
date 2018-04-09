import React from 'react';

class PaginationInput extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showingGoButton: false
        };

        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleGoToPageClick = this.handleGoToPageClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(e){
        if (this.elem && !this.elem.contains(e.target)){
            this.setState({
                showingGoButton: false
            });
        }
    }

    handleGoToPageClick(e){
        e.preventDefault();
        if (this.props.page !== ''){
            this.props.goToPage(Number(this.props.page));
        }
    }

    render(){
        return (
            <div className={'student-pagination-text'}>
                <div className={'student-pagination-input-container'}
                     ref={el => {this.elem = el;}}>
                    <input className={'form-control'}
                           value={this.props.page}
                           onChange={this.props.handleInputChange}
                           onFocus={e =>{
                               this.setState({
                                   showingGoButton: true
                               });
                           }}/>
                    <a className={'student-pagination-go-to-page-button' + ' ' +(this.state.showingGoButton ? '' : 'hide')}
                       onClick={this.handleGoToPageClick}
                       href={''}>
                        Go
                    </a>
                </div>

                <span style={{'display': 'inline-block', 'marginLeft':'10px'}}>/ {this.props.totalPage}</span>
            </div>
        );
    }
}

export default PaginationInput;