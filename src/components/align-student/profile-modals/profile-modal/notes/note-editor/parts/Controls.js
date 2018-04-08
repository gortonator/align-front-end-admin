import React from 'react';


class Controls extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: false
        };
        this.handlePublishClick = this.handlePublishClick.bind(this);
    }

    handlePublishClick(e){
        e.preventDefault();
        if (this.props.noteState.title === '' && this.props.noteState.desc === ''){
            this.setState({
                error: true
            });
        } else {

        }
    }

    render(){
        return (
            <div>
                <div className={'note-editor-control-container'}>
                    <a className={'note-editor-control'}
                       href={''}
                       onClick={this.handlePublishClick}>
                        Publish
                    </a>
                </div>
                <div className={'note-editor-control-container'}
                     >
                    <a href={''}
                       onClick={e => {
                           e.preventDefault();
                           this.props.backToDisplay();
                       }}>
                        Cancel
                    </a>
                </div>

                {
                    this.state.error &&
                    <div style={{'color': 'red'}}>
                        Title or Description can't be blank.
                    </div>
                }

            </div>
        );
    }



}

export default Controls;