import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1// -1: all, 1: active, 0: hiden
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        var target = event.target;
        var value = target.value;
        var name = target.name;

        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );

        this.setState({
            [name] : value
        });
    }

    render() {
        var {tasks} = this.props;
        var {filterName, filterStatus} = this.state;
        var elementTasks = tasks.map((element, index) => {
            return <TaskItem
                        key={index}
                        index={index}
                        task={element}
                        onDelete={this.props.onDelete}
                        onUpdate={this.props.onUpdate}
                    />
        });

        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Handling</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input
                                type="text"
                                className="form-control"
                                name="filterName"
                                value={filterName}
                                onChange={this.onChange}
                            />
                        </td>
                        <td>
                            <select
                                className="form-control"
                                name="filterStatus"
                                value={filterStatus}
                                onChange={this.onChange}
                            >
                                <option value={-1}>All</option>
                                <option value={1}>Active</option>
                                <option value={0}>Hiden</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    {elementTasks}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps, null)(TaskList);
