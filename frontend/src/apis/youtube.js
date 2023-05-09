import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 20,
        key: "AIzaSyDJ4HRCGqc4E3cBmT4VA3MlvQlqOMyazds",
        // key: process.env.REACT_APP_YOUTUBE_API_KEY,/
    },
});
