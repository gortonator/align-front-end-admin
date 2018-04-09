import React from 'react';
import Note from './note/Note';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle';
import {ASYNC_ACTION_STATUSES, NOTE_CREATION_PLACE_HOLDER} from "../../../../../../constants";
import { CSSTransition } from 'react-transition-group';

// export default props => (
//     <div>
//         <a className={'add-note-button'}
//            href={''}
//            onClick={e => {
//                e.preventDefault();
//                props.startEditing(NOTE_CREATION_PLACE_HOLDER);
//            }}>
//             <FontAwesomeIcon icon={faPlusCircle}/>
//         </a>
//         {props.notes.map(n => (
//             <Note key={n.noteId}
//                   note={n}
//                   delete={() => props.delete(n.noteId)}
//                   startEditing={() => props.startEditing(n.noteId)}/>
//         ))}
//     </div>
// );

class NoteGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.deletionFailureCallback = this.deletionFailureCallback.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
    }

    deletionFailureCallback(){
        try{
            this.setState({
                deletionStatus: ASYNC_ACTION_STATUSES.FAILURE
            });
        } catch (e) {
            console.log('Note Deletion Failed!');
        }
    }

    handleOkClick(e){
        e.preventDefault();
        this.setState({
            deletionStatus: ASYNC_ACTION_STATUSES.SUCCESS
        });
    }

    render(){
        return (
            <div>
                <a className={'add-note-button'}
                   href={''}
                   onClick={e => {
                       e.preventDefault();
                       this.props.startEditing(NOTE_CREATION_PLACE_HOLDER);
                   }}>
                    <FontAwesomeIcon icon={faPlusCircle}/>
                </a>
                {this.props.notes.map(n => (
                    <Note key={n.noteId}
                          note={n}
                          delete={() => {
                              this.setState({
                                  deletionStatus: ASYNC_ACTION_STATUSES.ONGOING
                              });
                              this.props.delete(n.noteId,()=>{},this.deletionFailureCallback);
                          }}
                          startEditing={() => this.props.startEditing(n.noteId)}/>
                ))}

                <CSSTransition in={this.state.deletionStatus === ASYNC_ACTION_STATUSES.FAILURE}
                               timeout={300}
                               unmountOnExit
                               classNames={'note-gallery-failure-message'}>
                    <div className={'note-gallery-failure-message'}>
                        <div>
                            Note Deletion Failed!
                        </div>

                        <a onClick={this.handleOkClick}
                           href={''}>
                            OK
                        </a>
                    </div>
                </CSSTransition>
            </div>
        );
    }
}

export default NoteGallery;
