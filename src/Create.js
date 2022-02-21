import { useState } from "react";
import { useNavigate } from "react-router-dom";
// useHistory is replaced by useNavigate

const Create = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    // Handling the form to create a new blog
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, author, body };
        // console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log(blog);
            setIsLoading(false);
            history('/');
        })
    }

    return ( 
        <div className="create">
            <h3>Create a new blog</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input 
                    type="text" 
                    required
                    value = { title }
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Author</label>
                <input 
                    type="text" 
                    required
                    value = { author }
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <label>Content</label>
                <textarea 
                    type="text"
                    rows="4" cols="50"
                    required
                    value = { body }
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>

                {!isLoading && <button>Add blog</button>}
                {isLoading && <button diabled>Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;