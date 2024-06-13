import React, { useEffect, useState } from "react";

const Photo = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await res.json();
      console.log(data);
      setPhotos(data);
    };

    fetchPhotos();
  }, []);

  return <div>
    <ul> {photos.slice(0, 10).map(photo=>(
   <li key={Photo.id}>
    <h3>{photo.title} </h3>
    <img src={photo.url} alt={photo.thumbnailUrl} />
   </li>
    ))}
 
    </ul>
  
  </div>;
};

export default Photo;
