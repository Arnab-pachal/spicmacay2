import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PhotoGallery = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  // Function to get item with expiry from localStorage
  async function getItemWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    const item = await JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  const handleFileChange = async (e) => {
    let value = await getItemWithExpiry("s-id");
    if (value == null) {
      alert("You are logged out. Please log in.");
      navigate("/login");
    } else {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile)); // Show preview
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://spicmacayback.onrender.com/uploadphoto", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const res =await response.json()
        setPhotos((photo)=>[...photo,res.file])
        alert("File uploaded successfully!");
      } else {
        console.error(response);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file. Please try again.");
    } finally {
      setLoading(false);
      setFile(null);
      setPreview(null);
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("https://spicmacayback.onrender.com/getphoto");
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };
    fetchPhotos();
  }, []);

  const deleteRoute = async (id) => {
    let value = await getItemWithExpiry("s-id");
    if (value == null) {
      alert("You have no access to delete. Please log in.");
      navigate("/login");
    } else {
      try {
        await axios.delete(`https://spicmacayback.onrender.com/deletephoto?id=${id}`);
        setPhotos(photos.filter((photo) => photo._id !== id)); // Remove photo from state
      } catch (err) {
        console.error("Error deleting photo:", err);
      }
    }
  };

  const imgStyle = {
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    height: "300px",
    width: "300px",
    objectFit: "cover",
  };

  const galleryContainerStyle = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap: "20px",
  };

  const deleteButtonStyle = {
    marginTop: "10px",
    backgroundColor: "red",
    opacity: isHovered ? 1 : 0.8,
    borderRadius: "20px",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    width: "100px",
    height: "40px",
    textAlign: "center",
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-2 py-5 mx-auto">
        <div className="flex flex-col items-center justify-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-500 mb-4 font-bold">
            Journey through some auspicious moments captured in lenses
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-blue-600 font-semibold text-base">
            Embark on a visual journey through our captivating photo gallery.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mb-20">
          <form onSubmit={handleUpload} encType="multipart/form-data">
            <input
              id="formFile"
              className="form-control mb-2"
              type="file"
              name="image"
              style={{ width: "250px" }}
              onChange={handleFileChange}
            />
            {preview && <img src={preview} alt="preview" style={{ maxWidth: "250px", marginBottom: "10px" }} />}
            <button
              type="submit"
              className="btn btn-primary w-[100px] h-[25px] flex flex-col justify-start items-center bg-green-500 text-white text-sm font-medium border-none cursor-pointer"
              disabled={loading}
            >
              {loading ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>

        <section className="gallery">
          <div className="container">
            <div style={galleryContainerStyle}>
              {photos.length > 0 ? (
                photos.map((photo) => (
                  <div
                    key={photo._id}
                    className="relative rounded-lg cursor-pointer overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <img
                      src={photo.url}
                      alt={photo.name}
                      style={imgStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                      }}
                    />
                    <button
                      type="button"
                      style={deleteButtonStyle}
                      onClick={() => deleteRoute(photo._id)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Delete
                    </button>
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

export default PhotoGallery;
