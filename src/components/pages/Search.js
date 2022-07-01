import React from 'react';
import './Search.css'

const Search = () => {
    return (
        <section className="search shadow-sm">
            <div className="grid grid-cols-4 gap-4 py-10 mx-20 mb-10">
            <select class="search-input">
                <option selected>Select Brand</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select class="search-input">
                <option selected>Select Make</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select class="search-input">
                <option selected>Select Location</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select class="search-input">
                <option selected>Select Year</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select class="search-input">
                <option selected>Select Type of Car</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <select class="search-input">
                <option selected>Transmission</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
            <input type="Number" className='search-input' placeholder='Type quantity'/>
            <input type="submit" value="Find" className='btn-1 btn-2' />
            </div>
        </section>
    );
};

export default Search;