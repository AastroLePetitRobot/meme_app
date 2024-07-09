import React, { useState } from 'react';
import axios from 'axios';
import './MemeForm.css';

function MemeForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);

        axios.post('/api/memes/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log("Meme uploaded successfully!");
            setTitle('');
            setDescription('');
            setFile(null);
        })
        .catch(error => {
            console.error("There was an error uploading the meme!", error);
        });
    };

    return (
        <div className="form-container">
            <h2>Upload a Meme</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                ></textarea>
                <input
                    type="file"
                    onChange={handleFileChange}
                />
                <button type="submit">Upload Meme</button>
            </form>
        </div>
    );
}

export default MemeForm;
