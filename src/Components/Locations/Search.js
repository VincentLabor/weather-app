import React, { useState } from 'react';
import Spinner from '../layout/Spinner';

const Search = ({ showClear, clearUsers, setAlert, searchLocations }) => { //Inside of the arguments are props
    const [text, setText] = useState(''); //Inside of the parenthesees is the value of the text currently. 

    const onChange = (e) => setText(e.target.value)

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            setAlert('Please enter a value', 'alert')
        } else {
            searchLocations(text);
            setText('')
        }
    }

    return (
        <div className="flex">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="locationSearch"
                    placeholder="Please enter a location"
                    value={text}
                    onChange={onChange}
                    className="pad"
                />
                <input type="submit" value="Search" className="searchBtn" />
            </form>
            {showClear && <div className='btn' onClick={clearUsers}>Clear</div>}
        </div>
    )

}

export default Search;