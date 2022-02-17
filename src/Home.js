import { useState } from 'react';

const Home = () => {
    
    const [message, setMessage] = useState('');

    // Onclick functions
    const handleClick = () => {
        setMessage('Welcome visitor ! Hope you enjoy browsing through this site.');
    }
    const handleClickAgain = () => {
        setMessage('');
    }

    //  Returning the resulting page
    return ( 
        <div className="home">
            <h3>Homepage</h3>
            <button onClick={handleClick}>
                Click me! 
            </button>
            <button onClick={handleClickAgain}>
                See ya! 
            </button>
            <br /><br />
            <p> {message} </p>
        </div>
     );
}
 
export default Home;