import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({data,title}) => {
    
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
        {data.map((blog) => (
            <div className='blog-preview'  key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Writen by {blog.author}</p>
                </Link>
              
            </div>
        ))

   } 
   </div>
);
}
 
export default BlogList;