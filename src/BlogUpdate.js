import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogUpdate = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    
    const [title, setTitle] = useState(blog.title);
    const [author, setAuthor] = useState(blog.author);
    const [body, setBody] = useState(blog.body);
    // const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();

    const handleUpdate = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'PUT'
        }).then(() => {
            history('/');
            // return redirect('/');
        })
    }

    return ( 
        <div className="blog-details">
            <Link to={'/'}>Back</Link>
            <br/><br/>
            
            {error && <div> {error} </div> }
            {isLoading && <div>Loading... don't worry, data is coming!</div>}
            {/* { blog && (
                <article>
                    <h3> {blog.title} </h3>
                    <p> Written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )} */}

            <h3>Create a new blog</h3>
            <form onSubmit={handleUpdate}>
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

                {!isLoading && <button>Update blog</button>}
                {isLoading && <button diabled>Updating...</button>}
            </form>
        </div>
    );
}
 
export default BlogUpdate;