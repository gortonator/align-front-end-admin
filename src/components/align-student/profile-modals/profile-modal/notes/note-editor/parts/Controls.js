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
        if (!this.props.isPublishable){
            this.setState({
                error: true
            });
        } else {
            this.props.publishButtonClick();
        }
    }

    render(){
        return (
            <div>
                <div className={'note-editor-control-container'}>
                    <a className={'note-editor-control'}
                       href={''}
                       onClick={this.handlePublishClick}>
                        {this.props.creating ? 'Create' : "Update"}
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