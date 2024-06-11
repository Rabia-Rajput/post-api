import React, { useEffect, useState } from 'react';
import './post.css';

const Post = () => {
    const [posts, setPost]=useState([]);
   useEffect(() => {
     const fetchPost =async()=>{
         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
         const data = await response.json();
         setPost(data);
     }
     fetchPost();
   }, []);
   
   
  return (
    <div>
        <ul className='post'>{posts.map(post=>(
               <li key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body} </p>
                
               </li>
        ))}</ul>
    </div>
  )
}

export default Post;