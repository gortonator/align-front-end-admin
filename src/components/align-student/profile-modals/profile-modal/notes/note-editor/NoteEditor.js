import React from 'react';
import TitleField from './parts/TitleField';
import DescField from './parts/DescField';
import Controls from './parts/Controls';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowAltCircleLeft from '@fortawesome/fontawesome-free-solid/faArrowAltCircleLeft';
import { CSSTransition } from 'react-transition-group';
import {ASYNC_ACTION_STATUSES} from "../../../../../../constants";


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

        this.creationSuccessCallback = this.creationSuccessCallback.bind(this);
        this.creationFailureCallback = this.creationFailureCallback.bind(this);

        this.updateSuccessCallback = this.updateSuccessCallback.bind(this);
        this.updateFailureCallback = this.updateFailureCallback.bind(this);

        this.publishChange = this.publishChange.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
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

    creationSuccessCallback(){
        try {
            this.props.backToDisplay();
        } catch (e) {
            console.log('Note created!')
        }
    }

    creationFailureCallback(){
        try{
            this.setState({
               operationStatus: ASYNC_ACTION_STATUSES.FAILURE
            });
        } catch (e) {
            console.log('Note creation failed!');
        }
    }

    updateSuccessCallback(){
        try {
            this.props.backToDisplay();
        } catch (e) {
            console.log('Note updated!');
        }
    }

    updateFailureCallback(){
        try{
            this.setState({
                operationStatus: ASYNC_ACTION_STATUSES.FAILURE
            });
        } catch (e) {
            console.log('Note update failed!');
        }
    }

    handleOkClick(e){
        e.preventDefault();
        this.setState({
            operationStatus: ASYNC_ACTION_STATUSES.SUCCESS
        });
    }

    publishChange(){
        if (this.state.title === '' || this.state.desc === ''){
            this.setState({
                error: true
            })
        } else{
            this.setState({
                operationStatus: ASYNC_ACTION_STATUSES.ONGOING
            });
            if (this.state.creating){
                this.props.create(
                    {
                        title: this.state.title,
                        desc: this.state.desc
                    },
                    this.creationSuccessCallback,
                    this.creationFailureCallback);
            } else{
                this.props.update(
                    {
                        title: this.state.title,
                        desc: this.state.desc,
                        nuid: this.props.note.nuid,
                        noteId: this.props.note.noteId
                    },
                    this.updateSuccessCallback,
                    this.updateFailureCallback)
            }
        }
    }

    render(){
        return (
            <div >
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

                <div className={'note-editor'}>
                    <TitleField title={this.state.title} handleTitleChange={this.handleTitleChange}/>

                    <DescField desc={this.state.desc} handleDescChange={this.handleDescChange}/>

                    <Controls isPublishable={this.state.title !== '' && this.state.desc !== ''}
                              backToDisplay={this.props.backToDisplay}
                              creating={this.state.creating}
                              publishChange={this.publishChange}/>

                    {
                        this.state.error &&
                        <div className={'note-editor-message'}>
                            Title or Description can't be blank.
                        </div>
                    }
                </div>

                <CSSTransition in={this.state.operationStatus === ASYNC_ACTION_STATUSES.FAILURE}
                               timeout={300}
                               unmountOnExit
                               classNames={'note-editor-failure-message'}>
                    <div className={'note-editor-failure-message'}>
                        <div>
                            {this.state.creating? 'Note creation failed!' : 'Note update failed!'}
                        </div>

                        <a onClick={this.handleOkClick}
                           href={''}>
                            OK
                        </a>
                    </div>
                </CSSTransition>

            </div>
        )
    }

}

export default NoteEditor;