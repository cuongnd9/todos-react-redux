import React, { Component } from 'react';
import './App.css';
import TaskForm from  './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: false
        };
        this.onToggleForm = this.onToggleForm.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.findIndex = this.findIndex.bind(this);
    }

    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }
    
    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    generateId() {
        return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
    }

    onToggleForm() {
        var {isDisplayForm} = this.state;
        this.setState({
            isDisplayForm: !isDisplayForm
        });
    }

    onCloseForm() {
        this.setState({
            isDisplayForm: false
        });
    }

    onSubmit(data) {
        data.id = this.generateId();
        var {tasks} = this.state;
        tasks.push(data);
        this.setState({
            tasks: tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    onUpdateStatus(id) {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex(id) {
        var {tasks} = this.state;
        var result = -1;
        tasks.forEach( function(element, index) {
            if (element.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        var {tasks, isDisplayForm} = this.state; // var tasks = this.state.tasks;
        var elementTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';
        return (
            <div className="container">
                <div className="row">
                    {/*Add To Do*/}
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elementTaskForm}
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        {/*Button Add To Do*/}
                        <div className="form-group">
                            <button
                            type="button" 
                            className="btn btn-info"
                            onClick={this.onToggleForm}
                            >
                                <span className="fa fa-plus"></span>&nbsp;
                                Add To Do
                            </button>
                        </div>
                        {/*Search-Sort*/}
                        <Control/>
                        {/*List*/}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks} 
                                    onUpdateStatus={this.onUpdateStatus}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
