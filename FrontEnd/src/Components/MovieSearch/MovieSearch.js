import React, { useState } from 'react';

const MovieSearch = props => {
    const [search, setSearch] = useState('');

    return (
        
        <div className="form-group">
            <input type="text" className="form-control"
              value={search}
              onChange={event => setSearch(event.target.value)} 
              placeholder="Search on the site"/>

        </div>
        
    );

}

export default MovieSearch;
//To do search suggestion and send axios request