import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Video = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [vid,setVid]=useState([]);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
    } else {
      alert("Please select a valid video file.");
    }
  };


  useEffect(()=>{
    const rendervideo =async()=>{
       try{
           const res = await axios.get("https://backend-tne7.vercel.app/getvideo")
           setVid(res.data)
       }
       catch(err){
           console.log(err);
           alert("an error occured");
       }
    }
    rendervideo();
   }
   )
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!videoFile) {
      alert("Please upload a video first.");
      return;
    }
    setLoading(true);
    const formData = new FormData();
    formData.append("video", videoFile);

    try {
      const response = await fetch("https://backend-tne7.vercel.app/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        alert("Video uploaded successfully!");
        setLoading(false);
      } else {
        alert("Failed to upload video.");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("An error occurred.");
    }
  };
const handleDelete=async(id)=>{
console.log("Delete is triggered");
let result = await axios.delete(`https://backend-tne7.vercel.app/deletevid?id=${id}`);
console.log(result.data);
}
const style = {
    marginTop:'10px',
    backgroundColor:'red',
    opacity:  1,
    borderRadius:'20px',
    color: 'white',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width:'100px',
    height:'40x',
    textAllign:'top'
  };
  return (
    <div>
    <form onSubmit={handleSubmit} style={{margin:'20px',display:"flex",justifyContent:"center"}}>
      <label>
        Upload Video
        <input type="file" accept="video/*" onChange={handleFileChange} style={{marginLeft:'10px',marginRight:'10px'}} />
      </label>
      <button type="submit" className="btn btn-primary w-[100px] h-[25px] flex flex-col justify-start items-center bg-green-500 text-white text-sm font-medium border-none cursor-pointer" disabled={loading}>
              {loading ? 'Uploading...' : 'Submit'}
            </button>
    </form>
    <section className="videos">
          <div className="container" style={{margin:'8px auto'}}>

            <div className="grid" style={{ display: "flex", flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-around" }}>
              {vid.length > 0 ? (
                vid.map((v) => (
                  <div key={v.public_id} className="video mb-20 mt-10"style={{height:"200px",width:"300px"}}>
                    <video src={v.url} alt={v.name} style={{height:"200px",width:"300px"}} controls />
                    <button type="button" class="btn btn-outline-danger" onClick={()=>{handleDelete(v.public_id)}} style={style}>Delete</button> 
                  </div>
                ))
              ) : (
                <p>No videos available</p>
              )}

            </div>
          </div>
        </section>
    </div>
  );
};

export default Video;
