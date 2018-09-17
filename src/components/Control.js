import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <div className="row">
                {/*Search*/}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Search onSearch={this.props.onSearch}/>
                </div>
                {/*Sort*/}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Sort/>
                </div>
            </div>
        );
    }
}

export default Control;
