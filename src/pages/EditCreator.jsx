import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditCreator.css';
import { supabase } from '../client';

const EditCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({
        id: null, 
        name: "", 
        description: "", 
        url: "", 
        imageURL: "", 
        instaURL: "", 
        tiktokURL: ""
    });

    useEffect(() => {
        const fetchCreator = async () => {
            try {
                const { data, error } = await supabase
                    .from('creators')
                    .select()
                    .eq('id', id)
                    .single();
                
                if (error) {
                    throw new Error(error.message);
                } else {
                    setCreator(data);
                }
            } catch (error) {
                console.error('Error fetching creator:', error.message);
            }
        };

        fetchCreator();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updateCreator = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('creators')
          .update({
            name: creator.name, 
            description: creator.description, 
            url: creator.url, 
            imageURL: creator.imageURL, 
            instaURL: creator.instaURL, 
            tiktokURL: creator.tiktokURL
          })
          .eq('id', id); 
      
        window.location = "http://localhost:5173/";
    };

    // const deleteCreator = async (event) => {
    //     event.preventDefault();
      
    //     await supabase
    //       .from('creators')
    //       .delete()
    //       .eq('id', id); 
      
    //     window.location = "http://localhost:5173/";
    // };

    return (
        <div className='edit_post_container'>
            <h3>Edit a Creator Profile</h3>
            <form onSubmit={updateCreator}>
                <label htmlFor="name"><strong>Name:</strong></label> <br />
                <input type="text" id="name" name="name" placeholder='Koy Sun' maxLength={20}
                    onChange={handleChange} value={creator.name} />
                <label htmlFor="description"><strong>Description (350 chars):</strong></label> <br />
                <textarea className="description" name="description" placeholder='Koy Sun is an artist focusing on...' maxLength="350" onChange={handleChange} value={creator.description} />
                <label htmlFor="url"><strong>Link Sharing URL (i.e. Linktree):</strong></label> <br />
                <input type="text" id="url" name="url" placeholder="https://linktr.ee/koysun" onChange={handleChange} value={creator.url} />
                <label htmlFor="imageURL"><strong>Image URL</strong></label> <br />
                <input type="text" id="imageURL" name="imageURL" placeholder="https://media.creativemornings.com/uploads/user/avatar/900670/164686200_10219288245105411_6710631829117265120_n.jpeg" onChange={handleChange} value={creator.imageURL} />
                <label htmlFor="tiktokURL"><strong>Tiktok:</strong></label> <br />
                <input type="text" id="tiktokURL" name="tiktokURL" placeholder="https://www.tiktok.com/@koysun" onChange={handleChange} value={creator.tiktokURL} />
                <label htmlFor="instaURL"><strong>Instagram:</strong></label> <br />
                <input type="text" id="instaURL" name="instaURL" placeholder="https://www.instagram.com/koysun/" onChange={handleChange} value={creator.instaURL} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default EditCreator;
