import React, { Component } from 'react';

class TaskForm extends Component {
    render() {
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        Add To Do
                        <p className="text-right" style={{float:'right'}}>
                            <i className="fa fa-times-circle"></i>
                        </p>
                    </h3>
                </div>
                <div className="panel-body">
                    {/*Form Add*/}
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label>Status:</label>
                            <select className="form-control">
                                <option value={true}>Active</option>
                                <option value={false}>Hiden</option>
                            </select>
                        </div>
                        <div style={{textAlign:'center'}}>
                            <button type="submit" className="btn btn-success" style={{marginRight:'30px'}}>
                                <span className="fa fa-plus"></span>&nbsp;
                                Save
                            </button>
                            <button type="button" className="btn btn-default">
                                <span className="fa fa-close"></span>&nbsp;
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
