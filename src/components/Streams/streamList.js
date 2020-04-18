import React from 'react';
import { Link } from 'react-router-dom';
import {fetchStreams} from '../../Actions';
import {connect} from 'react-redux';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    };

    renderedList() {
        return this.props.streams.map((stream)=>{
            return(
                <div className='item' key={stream.id}>
                {this.renderEditAndDeleteButton(stream)}
                    <i className='large middle aligned icon camera' />
                    <div className='content'>
                        {stream.title}
                        <div className='description'>{stream.description}</div>
                    </div>
                </div>
            );
        });
    };

    renderEditAndDeleteButton(stream) {
        //if user id in stream is equal to useid in auth object then we show the edit/del button
        if(stream.userId === this.props.currentUserId) {
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
                        Edit
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>
                        Delete
                    </Link>
                </div>
            );
        }
    };

    renderCreateButton() {
        if(this.props.isSignedIn) {
            return(
                <div style={{textAlign:'right'}}>
                    <Link to='/streams/new' className='ui button primary'>CreateStream</Link>
                </div>
            );

        }
    };
    render() {
        //console.log(this.props.streams);
        return(
            <div>
                <h2>Streams</h2>
                <div className='ui celled list'>{this.renderedList()}</div>
                {this.renderCreateButton()}
            </div>
        );
    };
};

const mapStateToPorps = (state) => {
    // object.values turns all the values of the object into an array
    return {
        streams: Object.values(state.streams), 
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToPorps, {fetchStreams})(StreamList);
