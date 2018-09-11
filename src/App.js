import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/*Add To Do*/}
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
                        <div className="row">
                            {/*Search*/}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{position:'relative'}}>
                                            <input
                                                type="text" 
                                                className="form-control"
                                                placeholder="Enter your keyword..."
                                            />
                                            <span style={{position:'absolute',right:'0',bottom:'0'}}>
                                                <button type="button" className="btn btn-info">
                                                <i className="fa fa-search"></i>&nbsp;Search
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Sort*/}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="form-group">
                                    <div className="dropdown">
                                    <button className="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">
                                        <span className="fa fa-sort"></span>&nbsp;Sort
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a><i className="fa fa-sort-alpha-asc"></i>&nbsp;Name A-Z</a></li>
                                        <li><a><i className="fa fa-sort-alpha-desc"></i>&nbsp;Name Z-A</a></li>
                                        <hr/>
                                        <li><a><i className="fa fa-toggle-on"></i>&nbsp;Active Status</a></li>
                                        <li><a><i className="fa fa-toggle-off"></i>&nbsp;Hiden Status</a></li>
                                    </ul>
                                  </div>
                                </div>
                            </div>
                        </div>
                        {/*List*/}
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <table class="table table-hover">
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
                                        <tr>
                                            <td>1</td>
                                            <td>Learn Flutter</td>
                                            <td className="text-center">
                                                <span className="label label-danger">Active</span>
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
                                        <tr>
                                            <td>2</td>
                                            <td>Learn JavaFX</td>
                                            <td className="text-center">
                                                <span className="label label-info">Hiden</span>
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
                                        <tr>
                                            <td>3</td>
                                            <td>Learn Redux</td>
                                            <td className="text-center">
                                                <span className="label label-danger">Active</span>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
