import React, { Component } from 'react';
import './App.css';
import TaskForm from  './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*Add To Do*/}
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <TaskForm/>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        {/*Button Add To Do*/}
                        <div className="form-group">
                            <button type="button" className="btn btn-info">
                                <span className="fa fa-plus"></span>&nbsp;
                                Add To Do
                            </button>
                        </div>
                        {/*Search-Sort*/}
                        <Control/>
                        {/*List*/}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
