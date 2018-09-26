import React, {Component} from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
// import _ from 'lodash';
import {findIndex} from 'lodash';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sort: {
        by: 'name',
        value: 1
      }
    };
    this.onToggleForm = this.onToggleForm.bind(this);
    this.onShowForm = this.onShowForm.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onFilter = this.onFilter.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  onToggleForm() {
    // var {
    //   taskEditing,
    //   isDisplayForm
    // } = this.state;
    // if (taskEditing !== null && isDisplayForm) {
    //   this.setState({isDisplayForm: true, taskEditing: null});
    // } else {
    //   this.setState({
    //     isDisplayForm: !isDisplayForm,
    //     taskEditing: null
    //   });
    // }
    this.props.onToggleForm();
  }

  onShowForm() {
    this.setState({isDisplayForm: true});
  }

  findIndex(id) {
    var {
      tasks
    } = this.state;
    var result = -1;
    tasks.forEach(function(element, index) {
      if (element.id === id) {
        result = index;
      }
    });
    return result;
  }

  // onDelete(id) {
  //   var {
  //     tasks
  //   } = this.state;
  //   var index = this.findIndex(id);
  //   if (index !== -1) {
  //     tasks.splice(index, 1,);
  //     this.setState({tasks: tasks});
  //     localStorage.setItem('tasks', JSON.stringify(tasks));
  //   }
  //   this.onCloseForm();
  // }

  onUpdate(id) {
    var {
      tasks
    } = this.state;
    var index = findIndex(tasks, (task) => task.id === id);
    var taskEditing = tasks[index];
    this.setState({taskEditing: taskEditing});
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
    this.setState({keyword: keyword});
  }

  onSort(sort) {
    this.setState({
      sort: {
        by: sort.by,
        value: sort.value
      }
    });
  }

  render() {
    var {
      taskEditing,
      // filter,
      // keyword,
      // sort
    } = this.state; // var tasks = this.state.tasks;
    var {isDisplayForm} = this.props;

    // if (filter.name) {
    //     tasks = tasks.filter(task => {
    //         return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
    //     });
    // }
    //
    // tasks = tasks.filter(task => {
    //     if (filter.status === -1) {
    //         return task;
    //     }
    //     return task.status === (filter.status === 1 ? true : false) ;
    // })
    //
    // if (keyword) {
    //     tasks = tasks.filter(task => {
    //         return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    //     })
    // }
    //
    // if (sort.by === 'name') {
    //     if (sort.value === 1) {
    //         tasks = tasks.sort((a, b) => {
    //             return a.name.localeCompare(b.name);
    //         });
    //     } else {
    //         tasks = tasks.sort((a, b) => {
    //             return b.name.localeCompare(a.name);
    //         });
    //     }
    // } else {
    //     if (sort.value === 1) {
    //         tasks = tasks.sort((a, b) => {
    //             return b.status.toString().localeCompare(a.status.toString());
    //         });
    //     } else {
    //         tasks = tasks.sort((a, b) => {
    //             return a.status.toString().localeCompare(b.status.toString());
    //         });
    //     }
    // }

    var elementTaskForm = isDisplayForm
      ? <TaskForm task={taskEditing}/>
      : '';
    return (<div className="container">
      <div className="row">
        {/* Add To Do */}
        <div className={isDisplayForm
            ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4'
            : ''}>
          {elementTaskForm}
        </div>
        <div className={isDisplayForm
            ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8'
            : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
          {/* Button Add To Do */}
          <div className="form-group">
            <button type="button" className="btn btn-info" onClick={this.onToggleForm}>
              <span className="fa fa-plus"></span>&nbsp; Add To Do
            </button>
          </div>
          {/* Search-Sort */}
          <TaskControl onSearch={this.onSearch} onSort={this.onSort}/> {/* List */}
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskList onUpdate={this.onUpdate} onFilter={this.onFilter}/>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
