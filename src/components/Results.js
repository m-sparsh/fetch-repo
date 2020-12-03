import React from 'react';

const Results = (props) => {
    const {repos} = props;
    //console.log('Repos is: ', repos.data);

    const listRepos= repos.length !== 0 ? (repos.data.map((item) =>
      <ul className="list-group">
          <li className="list-group-item">{item.name}</li>
      </ul>
     )) : ( <li></li>)

    return (
    <div>
       <ul className="list list-group">
         <li className="list-group-item">{listRepos}</li>
       </ul>
    </div>
    )
};

export default Results;