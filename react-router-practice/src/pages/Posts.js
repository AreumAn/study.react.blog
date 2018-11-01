import React from 'react';
import { Post } from 'pages';
import { Link, Route } from 'react-router-dom';


const Posts = ({match}) => {
    return(
        <div>
            <h3>List</h3>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
            </ul>
            <Route exact path={match.url} render={() => (<p>Choose Post</p>)} />
            <Route exact path={`${match.url}/:id`} component={Post} />
        </div>
    )
}


export default Posts;