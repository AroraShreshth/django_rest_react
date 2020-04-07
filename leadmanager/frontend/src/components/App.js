import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import store from '../store';
import { Provider } from 'react-redux';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <div className="container">
                        <Dashboard />
                    </div>
                </Fragment>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));