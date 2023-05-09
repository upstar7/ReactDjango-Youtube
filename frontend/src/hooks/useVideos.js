import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

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
                key: "AIzaSyACKB13e3Yf9rmhaTYJvuTq043GJMPYxEE",
            },
        });

        setVideos(response.data.items);
    };

    return videos;
};

export default useVideos;
