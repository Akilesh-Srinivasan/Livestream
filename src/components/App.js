import React from 'react';
import { Router, Route} from 'react-router-dom';
import Header from '../components/header';
import StreamCreate from '../components/Streams/streamCreate';
import StreamEdit from '../components/Streams/streamEdit';
import StreamDelete from '../components/Streams/streamDelete';
import StreamShow from '../components/Streams/streamShow';
import StreamList from '../components/Streams/streamList';
import history from '../history';

class App extends React.Component {
    render() {
        return(
            <div className= 'ui container'>
                <Router history={history}> 
                    <div>
                        <Header/>
                        <Route path= '/' exact component={StreamList}/>
                        <Route path= '/streams/new' component={StreamCreate} /> 
                        <Route path= '/streams/edit/:id' component={StreamEdit} />
                        <Route path= '/streams/delete/:id' component={StreamDelete} />
                        <Route path= '/streams/show' component={StreamShow} />
                    </div>
                </Router>
            </div>
        );
    };
};

export default App;