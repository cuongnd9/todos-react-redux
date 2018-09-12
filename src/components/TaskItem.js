import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        return (
            <tr>
                <td>1</td>
                <td>Learn Flutter</td>
                <td className="text-center">
                    <span className="label label-danger">Active</span>{/*label label-info":Hiden*/}
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-success">
                        <i className="fa fa-edit"></i>&nbsp;Edit
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger">
                        <i className="fa fa-close"></i>&nbsp;Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
