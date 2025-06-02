import { useEffect, useState } from 'react';
import axios from 'axios';

function Displayblog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await axios.get('http://localhost:3000/');
      setBlogs(res.data.data);

    };
    fetchBlogs();
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <h4>By {blog.author}</h4>
        </div>
      ))}
    </div>
  );
}

export default Displayblog;
