import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes';

class StudentSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showingInput: false,
            value: this.props.nameOrId
        };
        this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleClearFilterButtonClick = this.handleClearFilterButtonClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleSearchButtonClick(e){
        e.preventDefault();
        if (!this.state.showingInput) {
            this.setState({
                showingInput: true
            });
        } else{
            if (this.state.value === ''){
                this.setState({
                    showingInput: false
                });
            } else{
                this.props.searchByNameOrId(this.state.value);
            }
        }

    }

    handleChange(e){
        this.setState({
            value: e.target.value
        });
    }

    handleClickOutside(e){
        if (this.elem && !this.elem.contains(e.target)){
            this.setState({
                showingInput: false
            });
        }
    }

    handleClearFilterButtonClick(e){
        e.preventDefault();
        this.props.searchByNameOrId('');
        this.setState({
            showingInput: false
        });
    }

    render(){
        return (
            <span className={'student-search'} ref={el => {this.elem = el;}}>
                <span className={'student-search-input-container' + ' ' +
                (this.state.showingInput? 'opened' : 'closed')}>
                    <input className={'student-search-input'}
                           placeholder={'Type Name or ID'}
                           onChange={this.handleChange}
                           value={this.state.value}
                           ref={el => { this.inputElem = el}}/>
                </span>
                <a href={''}
                   className={"student-search-button" + ' ' +
                (this.state.showingInput? 'input-opened' : 'input-closed')}
                   onClick={this.handleSearchButtonClick}>

                    {/*
                        This SVG was created by Google.
                    */}

                    <svg focusable="false"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </a>
                {this.state.showingInput && this.props.nameOrId !== '' &&
                <div className={'applied-name-filter'}>
                    Searching for: "<span style={{'color' : 'rgba(255,0,0,.7)'}}>{this.props.nameOrId}</span>"
                    <a href={''} onClick={this.handleClearFilterButtonClick}>
                        <FontAwesomeIcon icon={faTimes}/>
                    </a>
                </div>}
            </span>
        );
    }
}

export default StudentSearch;
