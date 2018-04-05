import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

class StudentSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInput: false,
            value: '',
            searchButtonHovering: false
        };
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.hideInput = this.hideInput.bind(this);
        this.addSearchButtonHoverEffect = this.addSearchButtonHoverEffect.bind(this);
        this.removeSearchButtonHoverEffect = this.removeSearchButtonHoverEffect.bind(this);
    }

    componentDidUpdate(){
        if (this.state.showingInput) {
            this.elem.focus();
        }
    }

    handleSearchButtonClick(e){
        if (!this.state.showingInput) {
            this.setState({
                buttonFocus: true,
                showingInput: true
            })
        } else{
            if (this.state.value === ''){
                console.log('no');
            }
        }

    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    hideInput(e){
        e.preventDefault();
        this.setState({
            showingInput: false
        });
    }

    addSearchButtonHoverEffect(){
        this.setState({
            searchButtonHovering: true
        });
    }

    removeSearchButtonHoverEffect(){
        this.setState({
            searchButtonHovering: false
        });
    }

    render(){
        return (
            <span className={'student-search'}>
                <span className={'student-search-input-container' + ' ' +
                (this.state.showingInput? 'opened' : 'closed')}>
                    <input className={'student-search-input'}
                           placeholder={'Type Name or ID'}
                           onChange={this.handleChange}
                           value={this.state.value}
                           ref={el => { this.elem = el}}/>
                </span>
                <button className={"student-search-button" + ' ' +
                (this.state.showingInput? 'input-opened' : 'input-closed')}
                        onClick={this.handleSearchButtonClick}
                        onMouseEnter={this.addSearchButtonHoverEffect}
                        onMouseLeave={this.removeSearchButtonHoverEffect}>

                    {/*
                        This SVG was created by Google.
                    */}

                    <svg focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path fill={this.state.searchButtonHovering ? 'rgba(255,0,0,.7)' : '#BBBBBB'}
                              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </button>
                {this.state.showingInput &&
                <a className={'student-search-input-close-button'}
                   href={''}
                   onClick={this.hideInput}>
                    <FontAwesomeIcon icon={faTimes}/>
                </a>}
            </span>
        );
    }
}

export default StudentSearch;