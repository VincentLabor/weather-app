import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchLocations(this.state.text);
    }

    render() {
        return (
            <div>
                <form onSubmit ={this.onSubmit}>
                    <input
                        type="text"
                        name="locationSearch"
                        placeholder="Please enter a location"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input type="Submit" value='Search' />
                </form>
            </div>
        )
    }
}

export default Search;