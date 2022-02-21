import { useState, useEffect } from 'react';

const useFetch = (url) => {
    // Dummy blog data
    const [data, setData] = useState(null);
    //  Creating a loading page while data is being fetched
    const [isLoading, setIsLoading] = useState(true);
    // Show error message in the browser instead of the console
    const [error, setError] = useState(null);

    //  Fetching Blogs from json file in data folder
    useEffect(() => {
        const abortController = new AbortController();

        fetch(url, {signal: abortController.signal} )
            .then(res => {
                if(!res.ok) {
                    throw Error('Sorry, the data couldn\'t make it.');
                }
                return res.json();
            })
            .then(data => {
                setIsLoading(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsLoading(false);
                    setError(err.message);
                }
                
            })
        return () => abortController.abort();
    }, [url]);

    return {data, isLoading, error};
}

export default useFetch;