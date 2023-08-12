import React, { useState } from 'react';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const ContestantForm = ({ token }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      await axios.post(
        'https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/path/to/upload/folder/' + selectedFile.name,
        {
          message: 'Upload new image',
          content: btoa(selectedFile)
        },
        {
          headers: {
            Authorization: `token ${token}`,
            Accept: "image/*"
          }
        }
      );

      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }
  };

  return (
    <div>
      <h2 className="text-4xl font-extrabold dark:text-white">Contestant Submission</h2>
      <h3 className="text-3xl font-bold dark:text-white">lauren will fix this lol</h3>
      <Dropzone onDrop={handleFileDrop} >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '1px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            {selectedFile ? (
              <p>Selected: {selectedFile.name}</p>
            ) : (
              <p>Drag and drop an image file here, or click to select one.</p>
            )}
          </div>
        )}
      </Dropzone>
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default ContestantForm;
