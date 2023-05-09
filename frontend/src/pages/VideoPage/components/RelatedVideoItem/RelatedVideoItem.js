import React from "react";
import { useNavigate } from "react-router-dom";
import "./RelatedVideoItem.css";

const RelatedVideoItem = ({ video, searchTerm }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/videos/${video.id.videoId}`, {
            state: { video, searchTerm },
        });
    };
    return (
        <div
            className="related-video px-2 cursor-pointer d-flex"
            onClick={handleClick}
        >
            <img
                className="mb-2 px-2"
                src={video.snippet.thumbnails.default.url}
                alt={video.snippet.title}
            />
            <div className="m-auto">
                <h6>{video.snippet.title}</h6>
            </div>
        </div>
    );
};

export default RelatedVideoItem;
