import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams, Link } from 'react-router-dom';

const CreatorDetails = () => {
  const { id } = useParams();
  const [creator, setCreators] = useState({ name: '', description: '', url: '', imageURL: '', instaURL: '', tiktokURL: ''});
  const [loading, setLoading] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const { data: creatorData, error: creatorError } = await supabase
          .from('creators')
          .select('*')
          .eq('id', id);

        if (creatorError) {
          throw new Error(creatorError.message);
        } else if (creatorData.length === 0) {
          console.error('No card found for this ID:', id);
        } else {
          const updatedcreatorData = { ...creatorData[0] || 0, comments: creatorData[0].comments || [] };
          setCreators(updatedcreatorData);
        }
      } catch (error) {
        console.error('Error fetching card details:', error.message);
      }
    };
    
    fetchCard();
  }, [id]);

  const handleImageError = () => {
    setImageError(true);
  };
  
  const deletePost = async (event) => {
    event.preventDefault();
  
    await supabase
      .from('creators')
      .delete()
      .eq('id', id); 
  
    window.location = "http://localhost:5173/";
  }
  
  return (
      <div className="card_details">
        <div className="card-img-content">
          <img src={creator.imageURL} alt={`${creator.name}'s avatar`} onError={handleImageError} />
          <div className="content">
            <h1>{creator.name}</h1>
            <p>{creator.description}</p>
            <hr />
            <div className="socials">
              <p>Links: <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a></p>
              <p>Tiktok: <a href={creator.tiktokURL} target="_blank" rel="noopener noreferrer">{creator.tiktokURL}</a></p>
              <p>Instagram: <a href={creator.instaURL} target="_blank" rel="noopener noreferrer">{creator.instaURL}</a></p>
            </div>
          </div>
        </div>
        <div className='buttons_container'>
          <Link to={`/${creator.id}/edit`}><button className="headerBtn">Edit this Post</button></Link>
          <button className="deleteButton" onClick={deletePost}>Delete</button>
        </div>
      </div>
  );
};

export default CreatorDetails;
