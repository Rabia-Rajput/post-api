import React, { useEffect, useState } from "react";
import "./post.css";
import ReactPaginate from "react-paginate";

const Post = () => {
  const [posts, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=2`
      );
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [currentPage]);
  const handle=(page)=>{
    console.log(page.selected)
    setCurrentPage(page.selected)
  }



  return (
    <div>
      <ul className="post">
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.id}</p>
            <h3>{post.title}</h3>
            <p>{post.body} </p>
          </li>
        ))}
      </ul>
      <div>
        {/* <button onClick={() => setCurrentPage(currentPage-1)} disabled={currentPage === 1}>Previous</button> */}
        <ReactPaginate  
        onPageChange={handle}
        pageCount={10}      
         breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={2}
        previousLabel="< previous"
        
/>
        {/* <button onClick={() => setCurrentPage(currentPage+1)} disabled={currentPage === 10} >Next</button> */}
       
</div>
    </div>
  );
};

export default Post;
