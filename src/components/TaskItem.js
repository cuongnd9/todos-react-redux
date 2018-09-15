import React, { Component } from 'react';

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    render() {
        var {task, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={task.status ? 'label label-danger' : 'label label-info'}
                        style={{cursor:'pointer'}}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status ? 'Active' : 'Hiden'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-success">
                        <i className="fa fa-edit"></i>&nbsp;Edit
                    </button>&nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <i className="fa fa-close"></i>&nbsp;Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
