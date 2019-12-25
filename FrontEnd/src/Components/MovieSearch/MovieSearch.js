import React, { useState , useRef, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

const MovieSearch = React.memo(() => {
    const [enteredFilter, setEnteredFilter] = useState('');
    const [movies, setMovies] = useState([]);

    const inputRef = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
          if (enteredFilter === inputRef.current.value && enteredFilter) {
            axios.get('http://localhost:8888/api/movie/search/'+enteredFilter, null, {
                Accept : 'application/json'
            }).then(response => {
              setMovies(response.data);
            }).catch(error => {
              //TO DO:global error caching 
            });

          }
        }, 500);
        return () => {
          clearTimeout(timer);
        };
      }, [enteredFilter, inputRef]);

    return (
        
        <div className="form-group">
          <Autocomplete
            id="combo-box-demo"
            options={movies}
            getOptionLabel={option => option.movie}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
              value={enteredFilter}
              inputRef={inputRef}
              onChange={event => setEnteredFilter(event.target.value)}
               {...params} label="Movie search" variant="outlined" fullWidth />
            )}
          />
        </div>
    );
});

export default MovieSearch;
