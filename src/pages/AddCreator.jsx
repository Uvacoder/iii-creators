import React from 'react';
import './AddCreator.css'
import { supabase } from '../client'
import { useState } from 'react';

const AddCreator = () => {

    const [creator, setCreator] = useState({
        name: "", 
        description: "", 
        url: "", 
        imageURL: "", 
        instaURL: "", 
        tiktokURL: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const addCreator = async (event) => {
        event.preventDefault();
      
        await supabase
          .from('creators')
          .insert({
            name: creator.name, 
            description: creator.description, 
            url: creator.url, 
            imageURL: creator.imageURL, 
            instaURL: creator.instaURL, 
            tiktokURL: creator.tiktokURL
        })
          .select();
      
          window.location = "http://localhost:5173/";
        }

    return (
    <div className='create_post_container'>
        <h3>Add a New Creator</h3>
        <form>
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
            <input type="submit" value="Submit" onClick={addCreator} />
        </form>
    </div>
    )
}

export default AddCreator;