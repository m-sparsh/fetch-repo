import React, {useState} from 'react';
import axios from 'axios';
import Results from './Results';

const SearchBar = () => {

  const [searchInput, setSearchInput] = useState('');
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  }
  const handleClick = async () => {
      console.log(searchInput);

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
         <div className="navbar">
         <div className="search">
      <input typr="text" placeholder="search" value={searchInput} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
      </div>
    </div>
    <Results repos={repos} />
    </>
    );
};

export default SearchBar;