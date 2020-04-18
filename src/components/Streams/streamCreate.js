import React from 'react';
import {connect} from 'react-redux';
import {createStream} from '../../Actions';
import StreamForm from './streamForm';

class StreamCreate extends React.Component {
    
    onSubmit = (formValues) => {
        // createStream will make the api call in actions
        this.props.createStream(formValues);
    };

    render() {
        //console.log(this.props)
        //this.proips.handlesubmit(this.onsubmit) onsbumit is the prop that is passed to form.
        return(
            <div>
                <h3>Create a stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    };
};


export default connect(null, {createStream})(StreamCreate);
