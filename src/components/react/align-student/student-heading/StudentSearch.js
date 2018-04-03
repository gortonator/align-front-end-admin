import React from 'react';
import AutoSuggest from 'react-autosuggest';

function getSuggestionValue(suggestion){
    return suggestion.name;
}

function renderSuggestion(suggestion,{query}){
    return (
        <div>
            <HighlightMatch match={query} word={suggestion.nuid} stl={null}/>
            <HighlightMatch match={query} word={suggestion.name} stl={{float: 'right'}}/>
        </div>
    );
}

function HighlightMatch({match,word,stl}){
    const start = word.search(new RegExp(match,'i'));
    return (
        <span style={stl}>
            {start === -1 ?
                word :
                <React.Fragment>
                    <span>
                        {word.slice(0,start)}
                    </span>
                    <span style={{color: 'red'}}>
                        {word.slice(start,start+match.length)}
                    </span>
                    <span>
                        {word.slice(start+match.length)}
                    </span>
                </React.Fragment>}
        </span>);
}

class StudentSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };

        this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
        this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onSuggestionsFetchRequested({value}){

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        const updatedSuggestions = inputLength === 0 ?
            [] : this.props.students.filter(student =>
            Number.isInteger(parseInt(inputValue)) ?
                student.nuid.search(inputValue) >= 0 :
                student.name.search(new RegExp(inputValue,"i")) >= 0);

        this.setState(
            {
                suggestions: updatedSuggestions
            }
        );
    }

    onSuggestionsClearRequested(){
        this.setState(
            {
                suggestions: []
            }
        );
    }

    handleChange(event,{newValue}){
        this.setState({
            value: newValue
        });
    }

    handleClick(event){
        this.props.onSearchButtonClick(this.state.value);
    }

    render() {
        const inputProps = {
                value: this.state.value,
                onChange: this.handleChange,
                className: 'student-search-input',
                placeholder: 'Type Name or NUID'
            };
        const autoSuggestTheme = {
            container: "student-auto-suggest-container",
            suggestionsContainer: "al-student-suggestions-container",
            suggestionsList: "al-student-suggestions-list",
            suggestion: "al-student-suggestion"
        };
        return (
            <div className={"student-search"}>
                <AutoSuggest
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    theme={autoSuggestTheme}/>
                <button className={"student-search-button"} onClick={this.handleClick}>
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={"#BBBBBB"}>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                        </path>
                    </svg>
                </button>
            </div>
        );
    }
}

export default StudentSearch;