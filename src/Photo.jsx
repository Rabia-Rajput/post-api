import React, { useEffect, useState } from "react";
import "./Photo.css";
import "./Paginate.css";
import ReactPaginate from "react-paginate";

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${currentPage}&_limit=10`
      );
      const data = await res.json();
      console.log(data);
      setPhotos(data);
    };

    fetchPhotos();
  }, [currentPage]);
  const handle = (page) => {
    setcurrentPage(page.selected + 1);
  };
  return (
    <div>
      <div className="photo">
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={Photo.id}>
            <h3>
              {photo.id}. {photo.title}
            </h3>
            <img src={photo.url} alt={photo.thumbnailUrl} />
          </li>
        ))}
      </ul>
      </div>
      <ReactPaginate
        containerClassName={"pagination"}
        activeClassName={"active"}
        onPageChange={handle}
        pageCount={10}
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={2}
        previousLabel="< previous"
        forcePage={currentPage - 1}
        disabledClassName={"disabled"}
      />
    </div>
  );
};

export default Photo;
