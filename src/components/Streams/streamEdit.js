import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchStream, editStream} from '../../Actions';
import StreamForm from './streamForm';

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    };

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    };

    render() {
        if(!this.props.stream) {
            return <div>Loading</div>
        }
        return(
                <div>
                    <h3>Edit a Stream</h3>
                    <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit}/>
                </div>
        )
    };
    
};

const mapStateToProps = (state, ownProps) => {
    //console.log(ownProps);
    //console.log(state);
    //ownProps.match.params.id will return id from the strams object in redux store
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
