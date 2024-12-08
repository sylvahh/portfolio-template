import React, { useState, useEffect } from 'react';
type DataType = {
  id: number;
  name: string;
  postId: null;
  user: {
    id: number;
    username: string;
  };
};

const InfiniteScroll = () => {
  const [comments, setComments] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const observerTarget = React.useRef<HTMLDivElement>(null);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
      const data = await response.json();
      setComments((prevComments) => [...prevComments, ...data.results]); // Append new comments to existing ones
      setOffset((prev) => prev + limit); // Increment page number for next fetch
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    const currentObs = observerTarget.current;
    return () => {
      if (currentObs) {
        observer.unobserve(currentObs);
      }
    };
  }, [observerTarget, fetchData]);

  return (
    <div className='flex flex-col items-center p-10'>
      <h1>Comments {comments.length}</h1>
      <ul className=''>
        {comments.map((comment, idx) => (
          <li key={idx}>{comment.name}</li>
        ))}
      </ul>
      <div ref={observerTarget}></div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
