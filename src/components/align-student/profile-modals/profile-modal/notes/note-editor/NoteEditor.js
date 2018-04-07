import React from 'react';
import TitleField from './TitleField';
import DescField from './DescField';
import Controls from './Controls';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';


class NoteEditor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            desc: props.desc,
            nuid: props.nuid,
            noteId: props.noteId
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    handleTitleChange(e){
        this.setState({
            title: e.target.value
        })
    };

    handleDescChange(e){
        this.setState({
            desc: e.target.value
        });
    }

    render(){
        return (
            <div>
                <div>
                    <a className={'note-editor-back-button'}
                       href={''}
                       onClick={e => {
                           e.preventDefault();
                           this.props.backToDisplay();
                       }}>
                        <FontAwesomeIcon icon={faArrowAltCircleLeft}/>
                    </a>
                </div>

                <TitleField title={this.state.title} handleTitleChange={this.handleTitleChange}/>

                <DescField desc={this.state.desc} handleDescChange={this.handleDescChange}/>

                <Controls noteState={this.state} backToDisplay={this.props.backToDisplay}/>

            </div>
        )
    }

}

export default NoteEditor;