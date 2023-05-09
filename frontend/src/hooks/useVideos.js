import { useState, useEffect } from "react";
import youtube from "../apis/youtube";
// import dotenv from "dotenv";
// dotenv.config();

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
                q: term?.videoId ? null : term,
                relatedToVideoId: term?.videoId ? term?.videoId : null,
                part: "snippet",
                maxResults: 10,
                type: "video",
                key: "AIzaSyDJ4HRCGqc4E3cBmT4VA3MlvQlqOMyazds",
                // key: process.env.REACT_APP_YOUTUBE_API_KEY,
            },
        });

        setVideos(response.data.items);
    };

    return videos;
};

export default useVideos;
