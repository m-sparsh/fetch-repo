import React, {useState} from 'react';
import axios from 'axios';
import Results from './Results';

const SearchBox = () => {

  const [searchInput, setSearchInput] = useState('');
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  const handleClick = async () => {

      try {
          const result = await axios(`https://api.github.com/users/${searchInput}/repos`
          );

          setRepos(result);
         
      } 
      catch (error) {
          console.log(error);
      }
      
  };

 
    return (
        <>
        <div className="search">
        <nav className="navbar navbar-light bg-light form-inline">
     <input className="form-control mr-sm-2" value={searchInput} onChange={handleChange} type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleClick} type="search">Search</button>
        </nav>
        </div>
        
         <Results repos={repos} />
         
    </>
    );
};

export default SearchBox;

