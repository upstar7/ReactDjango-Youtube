import React from "react";
import "./VideoPlayer.css";
const VideoPlayer = ({ video }) => {
    if (!video) {
        return <div>Loading Videos...</div>;
    }
    const formatDescription = (description) => {
        return description.substring(0, 400) + "...";
    };
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div>
            <div className="video-player">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="video-description">
                <h5>{video.snippet.title}</h5>
                <p>{formatDescription(video.snippet.description)}</p>
            </div>
        </div>
    );
};

export default VideoPlayer;
