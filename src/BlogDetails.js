import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            <Link to={'/'}>Back</Link>
            {/* <a href="/">Back</a> */}
            <br/><br/>
            
            {error && <div> {error} </div> }
            {isLoading && <div>Loading... don't worry, data is coming!</div>}
            { blog && (
                <article>
                    <h3> {blog.title} </h3>
                    <p> Written by {blog.author} </p>
                    <div> {blog.body} </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;