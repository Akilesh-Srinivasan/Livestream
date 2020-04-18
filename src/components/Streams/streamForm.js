import React from 'react';
//field is a component and reduxForm is a function similar to connect
import {Field, reduxForm} from 'redux-form';

class StreamForm extends React.Component {
    // renderInput(formProps) {
    //     // another syntax for input tag <input {...formprops.input}/>.  it basically takes the input object that is all the properties and add them as props to the input element
    //     return <input 
    //                 onChange={formProps.input.onChange} 
    //                 value={formProps.input.value}
    //             />
    // }
// another way of rendermethod where input is destructured.
    renderInput= ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        //console.log(meta);
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete='off'/> 
                {this.renderError(meta)}
            </div>
        );
    };
    
    renderError({ touched, error }) {
        if(touched && error) {
            return (
                <div className= 'ui error message'>
                    <div className='headers'>{error}</div>
                </div>
            );
            
        }
    };
    onSubmit = (formValues) => {
        // createStream will make the api call in actions
        this.props.onSubmit(formValues);
    };

    render() {
        //console.log(this.props)
        //this.proips.handlesubmit(this.onsubmit) onsbumit is the prop that is passed to form. handlesubmit is a call back function that handles event.preventdefault
        return(
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className= 'ui form error'>
                <Field name='title' component={this.renderInput} label='enter title'/>
                <Field name='description' component={this.renderInput} label='enter description'/>
                <button className='ui button primary'>Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    const errors = {};

    if(!formValues.title) {
        errors.title = 'enter a title';
    }
    if(!formValues.description) {
        errors.description= 'enter a description';
    }
    return errors;

};

export default reduxForm({
    //streamCreate stores all the values like title, description of the form
    form: 'streamForm',
    validate: validate
})(StreamForm);
