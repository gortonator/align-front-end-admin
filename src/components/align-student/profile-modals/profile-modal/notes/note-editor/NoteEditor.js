import React from 'react';
import TitleField from './parts/TitleField';
import DescField from './parts/DescField';
import Controls from './parts/Controls';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';
import { CSSTransition } from 'react-transition-group';
import {ASYNC_ACTION_STATUSES, NOTE_CREATION_PLACE_HOLDER} from "../../../../../../constants";


class NoteEditor extends React.Component{
    constructor(props){
        super(props);
        if (this.props.note === undefined) {
            this.state = {
                title: '',
                desc: '',
                creating: true,
                shading: false
            }
        }else{
            this.state = {
                title: this.props.note.title,
                desc: this.props.note.desc,
                creating: false,
                shading: false
            };
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
    }

    componentDidUpdate(){
        console.log(this.props.note);
        if (this.props.note !== undefined && this.props.note.operationStatus === ASYNC_ACTION_STATUSES.ONGOING && !this.state.shading){
            this.setState({
                shading: true
            });
        }
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

                <Controls isPublishable={this.state.title !== '' && this.state.desc !== ''}
                          backToDisplay={this.props.backToDisplay}
                          creating={this.state.creating}
                          publishButtonClick={() => {
                              if (this.state.creating){
                                  this.props.create({
                                      title: this.state.title,
                                      desc: this.state.desc
                                  });
                              } else{
                                  this.props.update({
                                      title: this.state.title,
                                      desc: this.state.desc,
                                      noteId: this.props.note.noteId
                                  })
                              }
                          }}/>

                <CSSTransition in={this.state.shading}
                               timeout={300}
                               unmountOnExit
                               className={'note-operation-message'}>
                    <a>123</a>
                </CSSTransition>

            </div>
        )
    }

}

export default NoteEditor;