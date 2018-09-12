import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
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
        );
    }
}

export default Search;
