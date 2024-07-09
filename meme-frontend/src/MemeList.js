import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import _ from 'lodash';
import './MemeList.css';

function MemeList() {
    const [memes, setMemes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('/api/memes/')
            .then(response => {
                setMemes(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the memes!", error);
            });
    }, []);

    const debouncedSearch = useCallback(_.debounce((query) => {
        setSearchTerm(query);
    }, 300), []);

    const handleSearch = (event) => {
        debouncedSearch(event.target.value);
    };

    const filteredMemes = memes.filter(meme =>
        meme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meme.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="meme-container">
            <input
                type="text"
                className="search-bar"
                placeholder="Search memes..."
                onChange={handleSearch}
            />
            <div className="meme-grid">
                {filteredMemes.map(meme => (
                    <div key={meme.id} className="meme-item">
                        <h2>{meme.title}</h2>
                        <p>{meme.description}</p>
                        {meme.file && (
                            <div className="meme-media">
                                {meme.file.endsWith('.mp4') || meme.file.endsWith('.webm') ? (
                                    <video controls>
                                        <source src={meme.file} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={meme.file} alt={meme.title} />
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MemeList;
