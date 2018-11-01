import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            <h2>Home</h2>
            <button onClick={() => {
                history.push('/about/javascript')
            }}>Link with JS</button>
        </div>
    )
}

export default Home;