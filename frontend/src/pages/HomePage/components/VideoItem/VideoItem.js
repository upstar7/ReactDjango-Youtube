import React from "react";
import { useNavigate } from "react-router-dom";
import "./VideoItem.css";

const VideoItem = ({ video, searchTerm }) => {
    const navigate = useNavigate();

    const formatTitle = (description) => {
        return description.substring(0, 40) + "...";
    };
    const handleClick = () => {
        navigate(`/videos/${video.id.videoId}`, {
            state: { video, searchTerm },
        });
    };
    return (
        <div className="mb-4 px-2 cursor-pointer" onClick={handleClick}>
            <img
                className="mb-2 rounded-2"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="video-title mx-auto">
                <h5>{formatTitle(video.snippet.title)}</h5>
            </div>
        </div>
    );
};

export default VideoItem;
