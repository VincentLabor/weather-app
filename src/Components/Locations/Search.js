import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => this.setState({ text: e.target.value })
    

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchLocations(this.state.text);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="locationSearch"
                        placeholder="Please enter a location"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Search"/>
                </form>
            </div>
        )
    }
}

export default Search;