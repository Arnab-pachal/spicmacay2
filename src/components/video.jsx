import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VideoGallery = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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

  const handleFileChange = async (event) => {
    let value = await getItemWithExpiry("s-id");
    if (value == null) {
      alert("You are logged out. Please log in.");
      navigate("/login");
    } else {
      const file = event.target.files[0];
      if (file && file.type.startsWith("video/")) {
        setVideoFile(file);
        setPreview(URL.createObjectURL(file)); // Show preview
      } else {
        alert("Please select a valid video file.");
      }
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!videoFile) {
      alert("Please select a file first.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await fetch("https://spicmacayback.onrender.com/uploadvideo", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const res = await response.json();
        setVideos((prevVideos) => [...prevVideos, res.file]);
        alert("Video uploaded successfully!");
      } else {
        alert("Failed to upload video. Please reduce the file size and try again.");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Error uploading video. Please try again.");
    } finally {
      setLoading(false);
      setVideoFile(null);
      setPreview(null);
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get("https://spicmacayback.onrender.com/getvideo");
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    let value = await getItemWithExpiry("s-id");
    if (value == null) {
      alert("You have no access to delete. Please log in.");
      navigate("/login");
    } else {
      try {
        await axios.delete(`https://spicmacayback.onrender.com/deletevideo?id=${id}`);
        setVideos(videos.filter((video) => video._id !== id)); // Remove video from state
      } catch (err) {
        console.error("Error deleting video:", err);
      }
    }
  };

  const videoStyle = {
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    height: "200px",
    width: "300px",
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
            Relive Moments Through Our Video Gallery
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-blue-600 font-semibold text-base">
            Explore captivating videos showcasing our memorable events.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center mb-20">
          <form onSubmit={handleUpload} encType="multipart/form-data">
            <input
              id="videoFile"
              className="form-control mb-2"
              type="file"
              accept="video/*"
              style={{ width: "250px" }}
              onChange={handleFileChange}
            />
            {preview && (
              <video
                src={preview}
                style={{ maxWidth: "250px", marginBottom: "10px" }}
                controls
              ></video>
            )}
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
              {videos.length > 0 ? (
                videos.map((video) => (
                  <div
                    key={video._id}
                    className="relative rounded-lg cursor-pointer overflow-hidden transition duration-300 transform shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <video
                      src={video.url}
                      style={videoStyle}
                      controls
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.05)";
                        e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)";
                      }}
                    ></video>
                    <button
                      type="button"
                      style={deleteButtonStyle}
                      onClick={() => handleDelete(video._id)}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p>No videos available</p>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default VideoGallery;
