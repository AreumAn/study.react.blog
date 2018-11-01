import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    
    const { color } = query;

    return (
        <div>
            <h2 style={{color}}>About</h2>
            <p>Hello, I am { match.params.name }!!!!</p>
        </div>
    )
}

export default About;