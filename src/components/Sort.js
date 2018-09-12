import React, { Component } from 'react';

class Sort extends Component {
    render() {
        return (
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
        );
    }
}

export default Sort;
