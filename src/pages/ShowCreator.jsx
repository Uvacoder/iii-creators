import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatorCard from '../components/CreatorCard';
import { supabase } from '../client';

const ShowCreator = () => {
  const [creators, setCreators] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const { data, error } = await supabase.from('creators').select();
        if (error) {
          throw new Error(error.message);
        } else {
          setCreators(data);
        }
      } catch (error) {
        console.error('Error fetching creators:', error.message);
      }
    };

    fetchCreators();
  }, []);

  const handleCreatorClick = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className='outmost_container'>
      {creators && creators.length > 0 ? (
        creators.map((creator) => (
          <CreatorCard 
            key={creator.id}
            id={creator.id}
            name={creator.name}
            description={creator.description}
            url={creator.url}
            imageURL={creator.imageURL}
            sharer={creator.sharer}
            onClick={() => handleCreatorClick(creator.id)}
          />
        ))
      ) : (
        <h2>No creators Found 😞</h2>
      )}
    </div>
  );
};

export default ShowCreator;
