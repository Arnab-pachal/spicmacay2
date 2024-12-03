import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile)); // Show preview
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://backend-tne7.vercel.app/cloud', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('File uploaded successfully:', response.data);
      alert('File uploaded successfully!');

    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Please try again.');
    } finally {
      setLoading(false);
      setFile(null);
      setPreview(null);
    }
  };
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('https://backend-tne7.vercel.app/');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  });
  const deleteRoute = async (id) => {

    try {
      console.log(id);
      const response = await axios.delete(`https://backend-tne7.vercel.app/delete?id=${id}`);
    }
    catch (err) {
      console.log("file is not deleted");

    }

  }

  const style = {
    marginTop:'10px',
    backgroundColor:'red',
    opacity: isHovered ? 1 :0.8,
    borderRadius:'20px',
    color: isHovered ? 'white' : 'white',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width:'100px',
    height:'40x',
    textAllign:'top'
  };
  const photostyle ={
    height: '400px',
    width: '400px',

  
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-5 mx-auto">
        <div className="flex flex-col items-center justify-center w-full mb-10 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-500 mb-4 font-bold">
            Journey through some auspicious moments captured in lenses
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-blue-600 font-semibold text-base">
            Embark on a visual journey through our captivating photo gallery.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center mb-20" >
          <form onSubmit={handleUpload} encType="multipart/form-data">

            <input
              id="formFile"
              className="form-control mb-2"
              type="file"
              name="file"
              style={{ width: '250px' }}
              onChange={handleFileChange}
            />
            {preview && <img src={preview} alt="preview" style={{ maxWidth: '250px', marginBottom: '10px' }} />}
            <button type="submit" className="btn btn-primary w-[100px] h-[25px] flex flex-col justify-start items-center bg-green-500 text-white text-sm font-medium border-none cursor-pointer" disabled={loading}>
              {loading ? 'Uploading...' : 'Submit'}
            </button>
          </form>
        </div>

        <section className="gallery">
          <div className="container">

            <div className="grid" style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-evenly" }}>
              {photos.length > 0 ? (
                photos.map((photo) => (
                  <div key={photo._id} className="photo mb-20">
                    <img src={photo.url} alt={photo.name}  style={photostyle} />
                    <button type="button" class="btn btn-outline-danger" onClick={() => { deleteRoute(photo._id) }} 
                   style={style}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>Delete</button>
                  </div>
                ))
              ) : (
                <p>No photos available</p>
              )}

            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Gallery;
