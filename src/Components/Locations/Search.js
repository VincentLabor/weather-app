import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => this.setState({ text: e.target.value })


    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchLocations(this.state.text);
        this.setState({text: ''});
    }

    render() {
        return (
            <div className="flex">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="locationSearch"
                        placeholder="Please enter a location"
                        value={this.state.text}
                        onChange={this.onChange}
                        className="pad"
                    />
                    <input type="submit" value="Search" className="searchBtn" />
                </form>
                {this.props.showClear&& <div className='btn'onClick={this.props.clearUsers}>Clear</div>}
            </div>
        )
    }
}

export default Search;