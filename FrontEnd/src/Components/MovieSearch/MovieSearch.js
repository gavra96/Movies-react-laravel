import React, { useState , useRef, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const MovieSearch = React.memo(props => {
    const [enteredFilter, setEnteredFilter] = useState('');
    const inputRef = useRef();
    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
        { title: 'The Lord of the Rings: The Return of the King', year: 2003 }];
    // store useState http request TO:DO

    useEffect(() => {
        const timer = setTimeout(() => {
          if (enteredFilter === inputRef.current.value) {
            const query =
              enteredFilter.length === 0
                ? ''
                : `?orderBy="title"&equalTo="${enteredFilter}"`;
            //send request to backend

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
            options={top100Films}
            getOptionLabel={option => option.title}
            style={{ width: 300 }}
            ref={inputRef}
            onChange={event => setEnteredFilter(event.target.value)}
            renderInput={params => (
                <TextField {...params} label="Search movies" variant="outlined" fullWidth />
            )}
            />
            

        </div>
        
    );


});

export default MovieSearch;
