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
            isDisplayForm: false,
            taskEditing: null,
            filter: {
                name:'',
                status:-1
            },
            keyword: ''
        };
        this.onToggleForm = this.onToggleForm.bind(this);
        this.onShowForm = this.onShowForm.bind(this);
        this.onCloseForm = this.onCloseForm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateStatus = this.onUpdateStatus.bind(this);
        this.findIndex = this.findIndex.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.onSearch = this.onSearch.bind(this);
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
        var {taskEditing, isDisplayForm} = this.state;
        if (taskEditing !== null && isDisplayForm) {
            this.setState({
                isDisplayForm: true,
                taskEditing: null
            });     
        } else {
            this.setState({
                isDisplayForm: !isDisplayForm,
                taskEditing: null
            });
        }
    }

    onShowForm() {
        this.setState({
            isDisplayForm: true
        });
    }

    onCloseForm() {
        this.setState({
            isDisplayForm: false
        });
    }

    onSubmit(data) {
        var {tasks} = this.state;
        if (data.id === '') {
            data.id = this.generateId();
            tasks.push(data);
        } else { // Editing
            var index = this.findIndex(data.id);
            tasks[index] = data;
        }
        this.setState({
            tasks: tasks,
            taskEditing: null
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

    onDelete(id) {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1,);
            this.setState({
                tasks: tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    onUpdate(id) {
        var {tasks} = this.state;
        var index = this.findIndex(id);
        var taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing
        });
        this.onShowForm();
    }

    onFilter(filterName, filterStatus) {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName,
                status: filterStatus
            }
        });
    }

    onSearch(keyword) {
        this.setState({
            keyword: keyword
        });
    }

    render() {
        var {tasks, isDisplayForm, taskEditing, filter, keyword} = this.state; // var tasks = this.state.tasks;

        if (filter.name) {
            tasks = tasks.filter(task => {
                return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
            });
        }

        tasks = tasks.filter(task => {
            if (filter.status === -1) {
                return task;
            } 
            return task.status === (filter.status === 1 ? true : false) ;
        })

        if (keyword) {
            tasks = tasks.filter(tasks => {
                return tasks.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
            })
        }
        
        var elementTaskForm = isDisplayForm ? <TaskForm 
                                                onSubmit={this.onSubmit} 
                                                onCloseForm={this.onCloseForm}
                                                task={taskEditing}
                                              /> : '';
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
                        <Control onSearch={this.onSearch}/>
                        {/*List*/}
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <TaskList 
                                    tasks={tasks} 
                                    onUpdateStatus={this.onUpdateStatus}
                                    onDelete={this.onDelete}
                                    onUpdate={this.onUpdate}
                                    onFilter={this.onFilter}
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
