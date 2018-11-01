import React from 'react';


const Post = ({location, match}) => {
    console.log('Post', match);
    return(
        <p>
            Post ## {match.params.id}
        </p>
    )
}


export default Post;