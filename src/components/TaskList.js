import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {
    render() {
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
                            <input type="text" className="form-control"/>
                        </td>
                        <td>
                            <select className="form-control">
                                <option value={-1}>All</option>
                                <option value={0}>Active</option>
                                <option value={1}>Hiden</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                </tbody>
            </table>
        );
    }
}

export default TaskList;
