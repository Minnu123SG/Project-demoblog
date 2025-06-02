import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Addblog = () => {
    const [title,setTitle]=useState("")
          const [content,setContent]=useState("")
           const [author,setAuthor]=useState("")
    const handleSubmit= async(e)=>{
         e.preventDefault();
         const formData = {
      title,
      content,
      author,
    };
          try {
      await axios.post('http://localhost:3000/', formData);
      alert('Blog added successfully!');

      // Clear the form
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      console.error('Error adding blog:', error);
      alert('Failed to add blog');
    }
    }
  return (
    <div style={{ textAlign: "center" }}>
         <h2>Add a Blog</h2>
      <form onSubmit={handleSubmit}>
        <div ><input name="title" placeholder="Title" value={title} required style={{ marginBottom: "10px", width: "70%", height: "50px", fontSize: "16px", padding: "8px"  }}  onChange={(e) => setTitle(e.target.value)}/></div>
        
        <div ><textarea name="content" placeholder="Content" value={content} required style={{ marginBottom: "10px",width: "100%", height: "100px", fontSize: "16px", padding: "8px"  }} onChange={(e) => setContent(e.target.value)}/></div>
        
       <div > <input name="author" placeholder="Author" value={author}  required style={{ marginBottom: "10px", width: "80%", height: "50px", fontSize: "16px", padding: "8px"  }} onChange={(e) => setAuthor(e.target.value)} /></div>
     
        
        <button type="submit" >Add Blog</button>
      </form>
    </div>
  )
}
export default Addblog