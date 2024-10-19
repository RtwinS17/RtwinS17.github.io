import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Schedule_Location = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://nationsounds.online/wp-json/wp/v2/posts?categories=5');
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='h-full overflow-y-auto rounded-b-md schedule-container'>
      <h2 className='text-center p-8'>Horaires & Lieux de rencontres de vos artistes</h2>
      <ul className='flex flex-col gap-8 my-8 overflow-y-scroll'>
        {posts.map(post => (
          <div className='post text-center pb-4 mx-4' key={post.id}>
            <li className='p-4 w-[80%] md:w-[60%] m-auto rounded-3xl'>{post.title.rendered}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Schedule_Location;
