import React from 'react';

const Results = (props) => {
    const {repos} = props;
    console.log('Repos is: ', repos.data);

    const listRepos= repos.length !== 0 ? (repos.data.map((item) => <li>{item.name}</li>)) : ( <li></li>)

    return (
    <div>
       <ul>
         <li>{listRepos}</li>
       </ul>
    </div>
    )
};

export default Results;