import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    // Onclick functions displaying a welcome message
    const [message, setMessage] = useState('');
    const handleClick = () => {
        setMessage('Welcome visitor ! Hope you enjoy browsing through this site.');
    }
    const handleClickAgain = () => {
        setMessage('');
    }

    // Fetching json data thanks to a reusable component (hook) 
    const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

    //  Returning the page and its content
    return ( 
        <div className="home">
            {/* Loading/error message */}
            {error && <div> {error} </div> }
            {isLoading && <div>Loading... don't worry, data is coming!</div> }
            {/* Fun message */}
            <h3>Homepage</h3>
            <button onClick={handleClick}>
                Click me! 
            </button>
            <button onClick={handleClickAgain}>
                See ya! 
            </button>
            <br/><br/>
            <p> {message} </p>
            <br />
            {/* Actual blog list */}
            <div className="blog-section">
                {blogs && <BlogList blogs={blogs} />}
            </div>

        </div>
    );
}
 
export default Home;